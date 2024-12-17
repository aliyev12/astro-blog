// @ts-check
import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  // Below configuration is for SSR site
  // Remove it if you want the site to be static
  // start of SSR configuration
  output: "server",
  // end of SSR configuration.
});
