import rss from "@astrojs/rss";
import type { APIRoute } from "astro";
import { SITE_DESCRIPTION, SITE_TITLE } from "@src/consts";
import { getAllBlogPosts, getPostHref } from "@src/utils/blog";

export const GET: APIRoute = async (context) => {
  const posts = await getAllBlogPosts();

  return rss({
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    site: context.site ?? "https://abayomipo.com",
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.date,
      link: getPostHref(post),
    })),
  });
};
