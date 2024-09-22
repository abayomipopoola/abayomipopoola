import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from "@astrojs/tailwind";
import { remarkReadingTime } from './src/utils/remark-reading-time.mjs';
import { autoNewTabExternalLinks } from './src/autoNewTabExternalLinks';

import partytown from "@astrojs/partytown";

// https://astro.build/config
export default defineConfig({
  site: 'https://abayomipo.com',
  integrations: [mdx(), sitemap(), tailwind(), partytown()],
  markdown: {
    extendDefaultPlugins: true,
    remarkPlugins: [remarkReadingTime],
    rehypePlugins: [[autoNewTabExternalLinks, {
      domain: 'localhost:4321'
    }]]
  }
});