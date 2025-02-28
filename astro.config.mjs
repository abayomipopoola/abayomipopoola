import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import { remarkReadingTime } from "./src/utils/remark-reading-time.mjs";
import { autoNewTabExternalLinks } from "./src/autoNewTabExternalLinks";

import partytown from "@astrojs/partytown";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://abayomipo.com",
  integrations: [mdx(), sitemap(), partytown()],

  markdown: {
    extendDefaultPlugins: true,
    remarkPlugins: [remarkReadingTime],
    rehypePlugins: [
      [
        autoNewTabExternalLinks,
        {
          domain: "localhost:4321",
        },
      ],
    ],
  },

  vite: {
    plugins: [tailwindcss()],
  },
});