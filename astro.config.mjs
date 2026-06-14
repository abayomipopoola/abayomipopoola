import { defineConfig, fontProviders } from "astro/config";
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

  // Fonts API (astro:fonts) — generates @font-face, metric-matched fallback
  // fonts (less CLS), and preload links. Replaces the manual @font-face block
  // that used to live in src/styles/global.css.
  fonts: [
    {
      name: "AdelleSans",
      // Dedicated var (NOT --font-sans, which Tailwind v4 already owns). global.css
      // bridges Tailwind's --font-sans -> var(--font-adelle) so there's no collision.
      cssVariable: "--font-adelle",
      provider: fontProviders.local(),
      fallbacks: ["Helvetica", "Arial", "sans-serif"],
      options: {
        // NOTE: no bold-italic (700/italic) variant yet — add one here once
        // AdelleSans-BoldItalic.woff2 exists, otherwise **_bold italic_** text
        // renders as real italic + synthesized (faux) bold.
        variants: [
          {
            weight: 400,
            style: "normal",
            src: ["./src/assets/fonts/AdelleSans.woff2"],
          },
          {
            weight: 700,
            style: "normal",
            src: ["./src/assets/fonts/AdelleSans-bold.woff2"],
          },
          {
            weight: 400,
            style: "italic",
            src: ["./src/assets/fonts/AdelleSans-Italic.woff2"],
          },
        ],
      },
    },
  ],

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
