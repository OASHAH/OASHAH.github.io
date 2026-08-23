/**
 * Renders public/og.png — the share card, drawn in the same hairline language
 * as the plates. Run with `npm run og`.
 *
 * Note: this rasterises through librsvg, which resolves fonts from the system,
 * not from node_modules. The stacks below fall back to a system serif/mono.
 */
import sharp from "sharp";
import { writeFileSync } from "node:fs";

const PAPER = "#191A18";
const INK = "#E9E5DA";
const MUTED = "#948F84";
const RULE = "#33342F";
const OXBLOOD = "#C69182";

const SERIF = "Spectral, Palatino, 'Iowan Old Style', Georgia, serif";
const MONO = "'IBM Plex Mono', Menlo, 'DejaVu Sans Mono', monospace";

const index = [
  ["01", "ENERGY SYSTEMS"],
  ["02", "LABORATORY AUTOMATION"],
  ["03", "MARKETPLACE OPERATIONS"],
  ["04", "SWOOP AUTOS"],
  ["05", "SOASTRA"],
  ["06", "SOASKIT"],
];

const rows = index
  .map(([n, label], i) => {
    const y = 384 + i * 26;
    return `
      <text x="96" y="${y}" font-family="${MONO}" font-size="15" letter-spacing="1.6" fill="${MUTED}">${n}</text>
      <text x="148" y="${y}" font-family="${MONO}" font-size="15" letter-spacing="1.6" fill="${INK}">${label}</text>`;
  })
  .join("");

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <rect width="1200" height="630" fill="${PAPER}"/>

  <line x1="0" y1="72" x2="1200" y2="72" stroke="${RULE}" stroke-width="1"/>
  <text x="96" y="46" font-family="${MONO}" font-size="15" letter-spacing="2.2" fill="${MUTED}">OSAID SHAH</text>
  <text x="600" y="46" text-anchor="middle" font-family="${MONO}" font-size="15" letter-spacing="2.2" fill="${MUTED}">WORK RECORD</text>
  <text x="1104" y="46" text-anchor="end" font-family="${MONO}" font-size="15" letter-spacing="2.2" fill="${MUTED}">2021—2026</text>

  <text x="96" y="212" font-family="${SERIF}" font-size="104" fill="${INK}">Osaid Shah</text>
  <text x="96" y="264" font-family="${SERIF}" font-size="30" font-style="italic" fill="${INK}">Software engineer, now AI-enabled.</text>

  <line x1="96" y1="324" x2="1104" y2="324" stroke="${RULE}" stroke-width="1"/>
  <text x="96" y="354" font-family="${MONO}" font-size="14" letter-spacing="2.2" fill="${OXBLOOD}">INDEX</text>
  ${rows}

  <line x1="96" y1="572" x2="1104" y2="572" stroke="${RULE}" stroke-width="1"/>
  <text x="96" y="602" font-family="${MONO}" font-size="15" letter-spacing="1.8" fill="${MUTED}">ENERGY · LABORATORY AUTOMATION · MARKETPLACES · APPLIED AI</text>
  <text x="1104" y="602" text-anchor="end" font-family="${MONO}" font-size="15" letter-spacing="1.8" fill="${MUTED}">OASHAH.GITHUB.IO</text>
</svg>`;

writeFileSync("scripts/og.svg", svg);
await sharp(Buffer.from(svg)).png({ compressionLevel: 9 }).toFile("public/og.png");
console.log("wrote public/og.png");
