import { defineConfig } from "astro/config";
import { unified } from "@astrojs/markdown-remark";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import { autoNewTabExternalLinks } from "./src/autoNewTabExternalLinks";
import partytown from "@astrojs/partytown";
import tailwindcss from "@tailwindcss/vite";

const site = "https://abayomipo.com";

// https://astro.build/config
export default defineConfig({
  site,
  integrations: [mdx(), sitemap(), partytown()],

  markdown: {
    processor: unified({
      rehypePlugins: [
        [
          autoNewTabExternalLinks,
          {
            domain: new URL(site).hostname,
          },
        ],
      ],
    }),
  },

  vite: {
    plugins: [tailwindcss()],
  },
});
