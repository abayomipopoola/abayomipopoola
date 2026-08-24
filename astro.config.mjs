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
      name: "Mona Sans VF",
      cssVariable: "--font-mona",
      provider: fontProviders.local(),
      fallbacks: ["Helvetica", "Arial", "sans-serif"],
      options: {
        variants: [
          {
            weight: "200 900",
            style: "normal",
            src: ["./src/assets/fonts/MonaSansVF.woff2"],
          },
          {
            weight: "200 900",
            style: "italic",
            src: ["./src/assets/fonts/MonaSansVF-Italic.woff2"],
          },
          {
            weight: 700,
            style: "italic",
            src: ["./src/assets/fonts/MonaSans-BoldItalic.woff2"],
          },
        ],
      },
    },
    {
      name: "Adelle Sans",
      cssVariable: "--font-adelle",
      provider: fontProviders.local(),
      fallbacks: ["Helvetica", "Arial", "sans-serif"],
      options: {
        variants: [
          {
            weight: 400,
            style: "normal",
            src: ["./src/assets/fonts/AdelleSans-Regular.woff2"],
          },
          {
            weight: 700,
            style: "normal",
            src: ["./src/assets/fonts/AdelleSans-Bold.woff2"],
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
