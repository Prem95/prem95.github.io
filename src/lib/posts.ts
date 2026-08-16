import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { Marked } from "marked";

/**
 * Notes are plain markdown files in `content/posts/`, read at build time.
 * Filename convention: `YYYY-MM-DD-some-slug.md` — the date prefix orders the
 * folder and doubles as the fallback date, the rest becomes the URL.
 */
const POSTS_DIR = path.join(process.cwd(), "content/posts");

export type Post = {
  slug: string;
  title: string;
  /** ISO date, `YYYY-MM-DD` */
  date: string;
  summary: string;
  draft: boolean;
  minutes: number;
  html: string;
};

// breaks: true — a single newline becomes a <br>, which is how you actually
// type a daily note. gfm gives tables, strikethrough and task lists.
const md = new Marked({ gfm: true, breaks: true });

const FILENAME = /^(\d{4}-\d{2}-\d{2})[-_]?(.*)\.md$/;

/** gray-matter hands back a Date for unquoted YAML dates; normalise to ISO. */
function toISODate(value: unknown, fallback: string): string {
  if (value instanceof Date && !Number.isNaN(value.getTime())) {
    return value.toISOString().slice(0, 10);
  }
  if (typeof value === "string") {
    const d = new Date(value);
    if (!Number.isNaN(d.getTime())) return d.toISOString().slice(0, 10);
  }
  return fallback;
}

function parseFile(file: string): Post {
  const raw = fs.readFileSync(path.join(POSTS_DIR, file), "utf8");
  const { data, content } = matter(raw);

  const match = FILENAME.exec(file);
  const filenameDate = match?.[1] ?? "1970-01-01";
  const filenameSlug = match?.[2] || file.replace(/\.md$/, "");

  const words = content.trim().split(/\s+/).filter(Boolean).length;

  return {
    slug: String(data.slug ?? filenameSlug),
    title: String(data.title ?? filenameSlug.replace(/-/g, " ")),
    date: toISODate(data.date, filenameDate),
    summary: String(data.summary ?? ""),
    draft: data.draft === true,
    minutes: Math.max(1, Math.round(words / 220)),
    html: md.parse(content, { async: false }),
  };
}

let cache: Post[] | null = null;

/** Newest first. Drafts show up in `next dev` and are dropped from builds. */
export function getPosts(): Post[] {
  if (cache) return cache;
  if (!fs.existsSync(POSTS_DIR)) return (cache = []);

  const posts = fs
    .readdirSync(POSTS_DIR)
    .filter((f) => f.endsWith(".md"))
    .map(parseFile)
    .sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : 0));

  const seen = new Set<string>();
  for (const post of posts) {
    if (seen.has(post.slug)) {
      throw new Error(
        `Two notes share the slug "${post.slug}". Rename one file, or set a different \`slug:\` in its frontmatter.`,
      );
    }
    seen.add(post.slug);
  }

  const isDev = process.env.NODE_ENV === "development";
  return (cache = isDev ? posts : posts.filter((p) => !p.draft));
}

export function getPost(slug: string): Post | undefined {
  return getPosts().find((p) => p.slug === slug);
}

/** Older / newer neighbours for the footer links on a note. */
export function getNeighbours(slug: string) {
  const posts = getPosts();
  const i = posts.findIndex((p) => p.slug === slug);
  return { newer: posts[i - 1], older: posts[i + 1] };
}

// Dates are formatted in UTC so a build machine in another timezone can't
// shift a note by a day.
export function formatDate(iso: string): string {
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
}

export function formatMonth(iso: string): string {
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-GB", {
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
}

export function dayOfMonth(iso: string): string {
  return iso.slice(8, 10);
}

/** Notes grouped into `[month label, posts]` pairs, newest month first. */
export function getPostsByMonth(): [string, Post[]][] {
  const groups = new Map<string, Post[]>();
  for (const post of getPosts()) {
    const key = formatMonth(post.date);
    const bucket = groups.get(key);
    if (bucket) bucket.push(post);
    else groups.set(key, [post]);
  }
  return [...groups];
}
