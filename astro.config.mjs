import { defineConfig } from 'astro/config';

import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  site: 'https://orivvergara17.github.io',
  base: '/the-noctaris-archive/',

  build: {
    format: 'directory'
  },

  integrations: [mdx()]
});