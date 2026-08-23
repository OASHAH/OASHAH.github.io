# Work record

Source for <https://oashah.github.io> — a one-page catalogue of systems, built with
[Astro](https://astro.build) and served as static files from GitHub Pages.

The repository is the CMS. There is no backend, no database and no analytics.

## Running it

```sh
npm install
npm run dev      # local server
npm run build    # static output in dist/
npm run og       # regenerate public/og.png
```

## Adding or editing an entry

Each entry is one Markdown file in `src/content/work/`. The filename sets the anchor
(`04-swoop-autos.md` → `#04-swoop-autos`) and the `number` sets the reading order.

```yaml
---
number: "04"
index: "Swoop Autos"          # label in the table of contents
title: "A car-parts operation with models in the loop"
name: "Swoop Autos"           # provenance, shown above the headline
provenance: "independent · in daily production use"
period: "2026—"
location: "Dubai"
tags: ["WhatsApp Cloud API", "Python", "PostgreSQL"]

plate: "swoop"                # a drawn diagram, from src/components/plates/
caption: "Inquiry pipeline: bounded stages, escalation, gated send"
plateWidth: "full"            # "column" sits beside the prose, "full" spans the sheet

figures:                      # optional mono table of scale annotations
  - value: "~90%"
    label: "of inquiries completing without a human handoff"

note:                         # optional expandable architecture note
  label: "Architecture note — a deliberately bounded pipeline"
  body: |
    First paragraph.

    Second paragraph.
---

Editorial prose. Two or three paragraphs. Historical and technical, not résumé bullets.
```

The schema lives in `src/content.config.ts`; the build fails loudly if an entry breaks it.

### Using a photograph or screenshot instead of a drawn plate

Drop the file in `public/work/` and swap `plate:` for `image:`. It takes precedence over
`plate`, so both keys can coexist while a real artifact is being prepared.

```yaml
image: "/work/swoop-console.webp"
imageAlt: "Inquiry operations console, showing a queue of open inquiries"
caption: "Inquiry operations console, August 2026"
```

Redact customer-identifying information before committing anything to `public/work/`.

### Adding a new diagram

Diagrams are hand-drawn SVG in `src/components/plates/`, all in one drafting language:
hairline strokes, no fills, monospace labels. Add the component, register it in
`src/components/plates/index.ts`, then reference its key from an entry's `plate:` field.

## Editorial rules

Kept here because they are easier to break than to notice:

- Write what the system did before writing what technology it used.
- Numbers establish scale. They are not decoration.
- `I` is for ownership, judgment and independent work.
- Company names are provenance, not trophies.
- One or two mundane details per entry. They are what makes the rest credible.
- If a claim cannot be supported cleanly, soften it or cut it.

## Deployment

`.github/workflows/deploy.yml` builds and publishes to GitHub Pages on every push to
`main`. Pages must be set to **Build and deployment → Source: GitHub Actions**.
