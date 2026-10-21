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

export const getRecentBlogPosts = async (limit = 15) =>
  (await getAllBlogPosts()).slice(0, limit);

export const getPostHref = (post: BlogPost) => `/${post.id}/`;

export const getTagHref = (tag: string) => `/tags/${slugifyStr(tag)}/`;

const stripMdxNoiseForReadingTime = (body: string) =>
  body
    // Strip ESM import/export lines in MDX
    .replace(/^(?:import|export)\s+.*$/gm, " ")
    // Strip hidden alternate toggle views so dual prose/code slots aren't double-counted
    .replace(/<div[^>]*\bhidden\b[^>]*>[\s\S]*?<\/div>/g, " ")
    .replace(/<Fragment\s+slot="code"[^>]*>[\s\S]*?<\/Fragment>/g, " ")
    // Strip figure captions and reference footers
    .replace(/<Fragment\s+slot="caption"[^>]*>[\s\S]*?<\/Fragment>/g, " ")
    .replace(/<small>[\s\S]*?<\/small>/g, " ")
    // Strip display math blocks and fenced code blocks (skimmed rather than read verbatim)
    .replace(/\$\$[\s\S]*?\$\$/g, " ")
    .replace(/```[\s\S]*?```/g, " ")
    // Strip JSX/HTML opening and closing tags (including multiline attributes like aria-label)
    .replace(/<\/?[A-Za-z][\s\S]*?>/g, " ")
    // Replace markdown links [label](url) with just the visible label
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
    // Strip markdown table alignment/separator rows
    .replace(/^\|[\s:|-]+\|$/gm, " ")
    // Strip LaTeX macro commands
    .replace(/\\[a-zA-Z]+/g, " ");

export const getReadingTime = (post: BlogPost) =>
  readingTime(stripMdxNoiseForReadingTime(post.body ?? ""), {
    wordsPerMinute: 238,
    wordBound: (c) => !/[A-Za-z0-9\u00C0-\u024F'-]/.test(c),
  }).text;

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
