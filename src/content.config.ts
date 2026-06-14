import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const blog = defineCollection({
  loader: glob({
    base: "./src/content/blog",
    pattern: "**/[^_]*.{md,mdx}",
    generateId: ({ entry }) =>
      entry.replace(/\/index\.(md|mdx)$/, "").replace(/\.(md|mdx)$/, ""),
  }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      seoTitle: z.string().optional(),
      description: z.string(),
      date: z.coerce.date(),
      updatedDate: z.coerce.date().optional(),
      tags: z.array(z.string()).optional(),
      coverImage: image().optional(),
    }),
});

export const collections = { blog };
