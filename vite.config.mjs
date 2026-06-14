// Vite+ toolchain config — read ONLY by the `vp` CLI (vp fmt / vp lint / vp staged / vp config).
// Astro never reads this file; it keeps using astro.config.mjs. The two are independent:
// `vp` resolves vite.config.*, Astro loads astro.config.* — neither sees the other.
//
// NOTE: oxfmt (vp fmt) cannot format .astro files yet (tracked in
// https://github.com/oxc-project/oxc/issues/19715 — the plan is to bundle
// prettier-plugin-astro). Until then, .astro stays on Prettier + prettier-plugin-astro
// (see .prettierrc.mjs and the `fmt` / `fmt:check` scripts in package.json).
import { defineConfig } from "vite-plus";

export default defineConfig({
  // Oxfmt — the Prettier replacement. Formats .ts/.js/.json/.css/.md/.mdx/.yaml, etc.
  fmt: {
    printWidth: 80, // match the project's previous Prettier default (avoids reflow churn)
    // oxfmt cannot parse .astro — never hand it those (Prettier owns them instead).
    ignorePatterns: [
      "dist",
      ".astro",
      "node_modules",
      "public",
      "pnpm-lock.yaml",
      "**/*.astro",
    ],
  },

  // Pre-commit staged-file checks (installed by `vp config`, run by `vp staged`).
  // Each glob runs its command against the matching staged files only:
  //   oxfmt-supported types -> vp fmt;  .astro -> Prettier.
  staged: {
    "*.{ts,js,mjs,cjs,json,css,md,mdx,yml,yaml}": "vp fmt",
    "*.astro": "prettier --write",
  },
});
