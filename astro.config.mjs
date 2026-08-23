// @ts-check
import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://oashah.github.io",
  trailingSlash: "never",
  build: { format: "file" },
  compressHTML: true,
});
