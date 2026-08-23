/**
 * Turns the raw logo captures into transparent PNGs for the work entries.
 *
 * Each capture comes off a company's own site, so its background is whatever
 * that site uses (white, or a pale tint). We sample the corner, run a
 * colour-to-alpha against it, trim, and normalise the height.
 */
import sharp from "sharp";
import { readdirSync, mkdirSync } from "node:fs";
import path from "node:path";

const SRC = process.argv[2];
const OUT = process.argv[3];
const TARGET_H = 96;

mkdirSync(OUT, { recursive: true });

/** GIMP-style colour-to-alpha: dissolve `bg` out of every pixel. */
function colourToAlpha(data, w, h, bg) {
  for (let i = 0; i < w * h * 4; i += 4) {
    let alpha = 0;
    for (let c = 0; c < 3; c++) {
      const p = data[i + c], b = bg[c];
      const a = p > b ? (p - b) / (255 - b || 1) : p < b ? (b - p) / (b || 1) : 0;
      if (a > alpha) alpha = a;
    }
    if (alpha <= 0.02) { data[i + 3] = 0; continue; }
    for (let c = 0; c < 3; c++) {
      const v = bg[c] + (data[i + c] - bg[c]) / alpha;
      data[i + c] = Math.max(0, Math.min(255, Math.round(v)));
    }
    data[i + 3] = Math.round(Math.min(1, alpha) * 255);
  }
}

for (const file of readdirSync(SRC).filter((f) => /\.(png|jpg|jpeg)$/i.test(f))) {
  const name = path.basename(file, path.extname(file));
  const img = sharp(path.join(SRC, file)).ensureAlpha();
  const { data, info } = await img.raw().toBuffer({ resolveWithObject: true });

  // Sample the corner. If it is already transparent the asset needs no knockout.
  const corner = [data[0], data[1], data[2]];
  const cornerAlpha = data[3];
  if (cornerAlpha > 8) colourToAlpha(data, info.width, info.height, corner);

  const out = path.join(OUT, `${name}.png`);
  await sharp(data, { raw: { width: info.width, height: info.height, channels: 4 } })
    .trim({ threshold: 6 })
    .resize({ height: TARGET_H, fit: "inside", withoutEnlargement: false })
    .png({ compressionLevel: 9, palette: true })
    .toFile(out);

  const m = await sharp(out).metadata();
  console.log(`${name.padEnd(14)} ${info.width}x${info.height} -> ${m.width}x${m.height}  bg=[${corner}]`);
}

/* ---------------------------------------------------------------------------
 * Dark-sheet variants.
 *
 * Several of these wordmarks are set in near-black, which disappears on the
 * dark sheet. Recolour only the desaturated pixels — the brand colours
 * (Bayut green, OLX blue, the dubizzle flame) are left alone.
 * ------------------------------------------------------------------------- */
const INK = [233, 229, 218];

function forDarkSheet(data, w, h) {
  for (let i = 0; i < w * h * 4; i += 4) {
    if (data[i + 3] === 0) continue;
    const r = data[i], g = data[i + 1], b = data[i + 2];
    const max = Math.max(r, g, b), min = Math.min(r, g, b);

    // Absolute chroma, not HSL saturation: a near-black pixel like rgb(0,1,0)
    // has an HSL saturation of 1.0, which would read as a brand colour.
    const chroma = max - min;

    if (chroma < 40) {
      // neutral ink — restate it in the sheet's ink colour, and firm up the
      // alpha that the background knockout softened
      data[i] = INK[0]; data[i + 1] = INK[1]; data[i + 2] = INK[2];
      data[i + 3] = Math.min(255, Math.round(data[i + 3] * 1.35));
    } else if (max < 150) {
      // a genuinely dark brand colour: lift it without washing out the hue
      for (let c = 0; c < 3; c++) data[i + c] = Math.round(data[i + c] + (255 - data[i + c]) * 0.4);
    }
  }
}

for (const file of readdirSync(OUT).filter((f) => f.endsWith(".png") && !f.endsWith("-dark.png"))) {
  const name = path.basename(file, ".png");
  const { data, info } = await sharp(path.join(OUT, file)).ensureAlpha().raw()
    .toBuffer({ resolveWithObject: true });
  forDarkSheet(data, info.width, info.height);
  await sharp(data, { raw: { width: info.width, height: info.height, channels: 4 } })
    .png({ compressionLevel: 9 })
    .toFile(path.join(OUT, `${name}-dark.png`));
  console.log(`  ${name} -> ${name}-dark.png`);
}
