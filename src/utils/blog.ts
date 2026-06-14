import { getCollection, type CollectionEntry } from "astro:content";
import readingTime from "reading-time";
import { slugifyStr } from "./slugify";

export type BlogPost = CollectionEntry<"blog">;

export interface BlogTag {
  slug: string;
  label: string;
  postCount: number;
}

export interface PostsByYearGroup {
  year: number;
  posts: BlogPost[];
}

export interface TagsByLetterGroup {
  letter: string;
  tags: BlogTag[];
}

export const compareBlogPostsByDate = (a: BlogPost, b: BlogPost) =>
  b.data.date.getTime() - a.data.date.getTime();

export const sortBlogPosts = (posts: BlogPost[]) =>
  [...posts].sort(compareBlogPostsByDate);

export const getAllBlogPosts = async () =>
  sortBlogPosts(await getCollection("blog"));

export const getRecentBlogPosts = async (limit = 8) =>
  (await getAllBlogPosts()).slice(0, limit);

export const getPostHref = (post: BlogPost) => `/${post.id}/`;

export const getTagHref = (tag: string) => `/tags/${slugifyStr(tag)}/`;

export const getReadingTime = (post: BlogPost) =>
  readingTime(post.body ?? "").text;

export const getAllTags = (posts: BlogPost[]) => {
  const tags = new Map<string, BlogTag>();

  for (const post of posts) {
    for (const label of post.data.tags ?? []) {
      const slug = slugifyStr(label);
      const tag = tags.get(slug);

      if (tag) {
        tag.postCount += 1;
      } else {
        tags.set(slug, { slug, label, postCount: 1 });
      }
    }
  }

  return [...tags.values()].sort((a, b) => a.label.localeCompare(b.label));
};

export const getPostsForTag = (posts: BlogPost[], tagSlug: string) =>
  posts.filter((post) =>
    post.data.tags?.some((tag) => slugifyStr(tag) === tagSlug),
  );

export const groupTagsByFirstLetter = (tags: BlogTag[]) => {
  const grouped = tags.reduce<Record<string, BlogTag[]>>((acc, tag) => {
    const firstLetter = tag.label.at(0)?.toUpperCase() ?? "#";
    acc[firstLetter] ??= [];
    acc[firstLetter].push(tag);
    return acc;
  }, {});

  return Object.entries(grouped)
    .sort(([a], [b]) => a.localeCompare(b))
    .map<TagsByLetterGroup>(([letter, tags]) => ({
      letter,
      tags: tags.sort((a, b) => a.label.localeCompare(b.label)),
    }));
};

export const groupPostsByYear = (posts: BlogPost[]) => {
  const grouped = posts.reduce<Record<number, BlogPost[]>>((acc, post) => {
    const year = post.data.date.getFullYear();
    acc[year] ??= [];
    acc[year].push(post);
    return acc;
  }, {});

  return Object.entries(grouped)
    .sort(([a], [b]) => Number(b) - Number(a))
    .map<PostsByYearGroup>(([year, posts]) => ({
      year: Number(year),
      posts: sortBlogPosts(posts),
    }));
};
