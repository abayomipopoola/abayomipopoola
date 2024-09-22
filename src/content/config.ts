import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      seoTitle: z.string().optional(),
      description: z.string(),
      date: z.coerce.date(),
      updatedDate: z.coerce.date().optional(),
      minutesRead: z.string().optional(),
      tags: z.array(z.string()).optional(),
      coverImage: image().optional(),
    }),
});

export const collections = { blog };
