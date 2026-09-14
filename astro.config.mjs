import { defineConfig, fontProviders } from "astro/config";
import { satteri } from "@astrojs/markdown-satteri";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import { autoNewTabExternalLinks } from "./src/autoNewTabExternalLinks";
import partytown from "@astrojs/partytown";
import tailwindcss from "@tailwindcss/vite";

const site = "https://abayomipo.com";

// https://astro.build/config
export default defineConfig({
  site,

  // v7 changed the default to 'jsx' (drops newline whitespace between inline
  // elements). Our Prettier-formatted templates assume HTML semantics; keep them.
  compressHTML: true,

  // Fonts API (astro:fonts) — generates @font-face, metric-matched fallback
  // fonts (less CLS), and preload links. Replaces the manual @font-face block
  // that used to live in src/styles/global.css.
  fonts: [
    {
      name: "STK Bureau Serif",
      cssVariable: "--font-stk-bureau",
      provider: fontProviders.local(),
      fallbacks: ["Georgia", "Times New Roman", "serif"],
      options: {
        variants: [
          {
            // "Book" is the family's text face. The file's usWeightClass is
            // 300, but the prose is weight 400, so register it as the regular
            // face for exact matching.
            weight: 400,
            style: "normal",
            src: ["./src/assets/fonts/STKBureauSerif_Book.woff2"],
          },
          {
            weight: 500,
            style: "normal",
            src: ["./src/assets/fonts/STKBureauSerif_Medium.woff2"],
          },
        ],
      },
    },
    {
      name: "NB International Pro",
      cssVariable: "--font-nb-international",
      provider: fontProviders.local(),
      fallbacks: ["Helvetica", "Arial", "sans-serif"],
      options: {
        variants: [
          {
            weight: 400,
            style: "normal",
            src: ["./src/assets/fonts/NBInternationalPro_Regular.woff2"],
          },
          {
            weight: 500,
            style: "normal",
            src: ["./src/assets/fonts/NBInternationalPro_Medium.woff2"],
          },
          {
            weight: 700,
            style: "normal",
            src: ["./src/assets/fonts/NBInternationalPro_Bold.woff2"],
          },
        ],
      },
    },
  ],

  integrations: [mdx(), sitemap(), partytown()],

  markdown: {
    processor: satteri({
      hastPlugins: [
        autoNewTabExternalLinks({ domain: new URL(site).hostname }),
      ],
    }),
  },

  vite: {
    plugins: [tailwindcss()],
  },
});
