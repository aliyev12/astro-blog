// @ts-check
import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

import vercel from "@astrojs/vercel";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],

  // Below configuration is for SSR site
  // Remove it if you want the site to be static
  // start of SSR configuration
  // end of SSR configuration.
  output: "server",

  adapter: vercel()
});