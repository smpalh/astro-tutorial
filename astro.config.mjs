import { defineConfig } from 'astro/config';
import prefetch from "@astrojs/prefetch";
import mdx from "@astrojs/mdx";

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  integrations: [prefetch({
    throttle: 3
  }), mdx(), preact()]
});