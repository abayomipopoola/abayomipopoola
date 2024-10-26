/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: {
        xl: "46rem",
      },
    },
    extend: {
      typography: {
        DEFAULT: {
          css: {
            maxWidth: "100%", // add required value here
            blockquote: {
              quotes: "none",
            },
          },
        },
      },
      colors: {
        "link-color": "var(--link-color)", // Define your link color variable here
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
