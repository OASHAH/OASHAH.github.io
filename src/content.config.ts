import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const work = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/work" }),
  schema: z.object({
    /** Catalogue number. The sequence is continuous across employed and independent work. */
    number: z.string(),
    /** Short index label, used in the table of contents. */
    index: z.string(),
    /** Editorial headline for the entry. */
    title: z.string(),
    /** Provenance: employer, client or project name. */
    name: z.string(),
    /** Secondary provenance, shown small. */
    provenance: z.string().optional(),
    period: z.string(),
    location: z.string(),
    tags: z.array(z.string()),
    /** Key into the plate registry (src/components/plates/index.ts). */
    plate: z.string().optional(),
    /** Path under /public for a photographic or screenshot figure. Takes precedence over `plate`. */
    image: z.string().optional(),
    imageAlt: z.string().optional(),
    /** Plate caption, minus the FIG. number, which is derived. */
    caption: z.string().optional(),
    /** Plate width: 'column' sits beside the prose, 'full' spans the sheet. */
    plateWidth: z.enum(["column", "full"]).default("column"),
    /** Optional expandable technical note. */
    note: z.object({ label: z.string(), body: z.string() }).optional(),
    /** Small mono figure table, rendered under the prose. */
    figures: z.array(z.object({ value: z.string(), label: z.string() })).optional(),
  }),
});

export const collections = { work };
