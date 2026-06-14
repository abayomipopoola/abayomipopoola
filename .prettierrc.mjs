// Prettier is now scoped to .astro files ONLY. Everything else is formatted by
// Vite+ / oxfmt (`vp fmt`, configured in vite.config.mjs). This shim exists solely
// because oxfmt cannot format .astro yet — see vite.config.mjs for the tracking issue.
/** @type {import("prettier").Config} */
export default {
  plugins: ["prettier-plugin-astro", "prettier-plugin-tailwindcss"],
  tailwindStylesheet: "./src/styles/global.css",
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro",
      },
    },
  ],
};
