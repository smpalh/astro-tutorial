import { defineConfig } from 'astro/config';
import prefetch from "@astrojs/prefetch";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  integrations: [prefetch({
    throttle: 3
  }), mdx()]
});