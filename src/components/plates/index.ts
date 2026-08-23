import PlateSiv from "./PlateSiv.astro";
import PlateFormulatrix from "./PlateFormulatrix.astro";
import PlateDubizzle from "./PlateDubizzle.astro";
import PlateSwoop from "./PlateSwoop.astro";
import PlateSoastra from "./PlateSoastra.astro";
import PlateSoaskit from "./PlateSoaskit.astro";
import PlateSwoopCart from "./PlateSwoopCart.astro";

/** Frontmatter `plate:` keys resolve here. */
export const plates = {
  siv: PlateSiv,
  formulatrix: PlateFormulatrix,
  dubizzle: PlateDubizzle,
  swoop: PlateSwoop,
  soastra: PlateSoastra,
  soaskit: PlateSoaskit,
  swoopcart: PlateSwoopCart,
} as const;

export type PlateKey = keyof typeof plates;
