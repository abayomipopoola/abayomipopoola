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
      name: "Atkinson Hyperlegible",
      // Dedicated var (NOT --font-sans, which Tailwind v4 already owns). global.css
      // bridges Tailwind's --font-sans -> var(--font-atkinson) so there's no collision.
      cssVariable: "--font-atkinson",
      provider: fontProviders.local(),
      fallbacks: ["Helvetica", "Arial", "sans-serif"],
      options: {
        variants: [
          {
            weight: 400,
            style: "normal",
            src: ["./src/assets/fonts/AtkinsonHyperlegible-Regular.woff2"],
          },
          {
            weight: 700,
            style: "normal",
            src: ["./src/assets/fonts/AtkinsonHyperlegible-Bold.woff2"],
          },
          {
            weight: 400,
            style: "italic",
            src: ["./src/assets/fonts/AtkinsonHyperlegible-Italic.woff2"],
          },
          {
            weight: 700,
            style: "italic",
            src: ["./src/assets/fonts/AtkinsonHyperlegible-BoldItalic.woff2"],
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
