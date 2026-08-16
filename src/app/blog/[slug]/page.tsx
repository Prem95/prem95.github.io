import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { config } from "@/lib/data";
import { formatDate, getNeighbours, getPost, getPosts } from "@/lib/posts";

export const dynamicParams = false;

export function generateStaticParams() {
  const posts = getPosts();
  // `output: export` refuses to build a dynamic route with zero params, so an
  // empty notes folder needs one throwaway path. It 404s and nothing links it.
  return posts.length
    ? posts.map((post) => ({ slug: post.slug }))
    : [{ slug: "none-yet" }];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};

  const description = post.summary || `A note by ${config.name}.`;
  return {
    title: `${post.title} — ${config.name}`,
    description,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description,
      url: `${config.siteUrl}/blog/${post.slug}`,
      type: "article",
      publishedTime: post.date,
      authors: [config.name],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description,
      creator: "@defichemist95",
    },
  };
}

export default async function NotePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const { newer, older } = getNeighbours(post.slug);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    datePublished: post.date,
    description: post.summary || undefined,
    url: `${config.siteUrl}/blog/${post.slug}`,
    author: { "@type": "Person", name: config.name, url: config.siteUrl },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article>
        <header className="mb-9 border-b border-border pb-8">
          <Link
            href="/blog"
            className="eyebrow transition-colors hover:text-foreground"
          >
            ← All notes
          </Link>
          <h1 className="section-title mt-6 text-[clamp(2rem,6vw,3rem)]">
            {post.title}
          </h1>
          <p className="mt-5 font-mono text-xs text-muted-foreground">
            <time dateTime={post.date}>{formatDate(post.date)}</time>
            <span className="mx-2 opacity-40">/</span>
            {post.minutes} min read
          </p>
        </header>

        <div
          className="prose"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
      </article>

      {(newer || older) && (
        <nav className="mt-14 grid gap-px border-t border-border pt-8 sm:grid-cols-2">
          {older && (
            <Link href={`/blog/${older.slug}`} className="group py-3">
              <span className="eyebrow">← Older</span>
              <span className="mt-2 block font-medium leading-snug group-hover:underline">
                {older.title}
              </span>
            </Link>
          )}
          {newer && (
            <Link
              href={`/blog/${newer.slug}`}
              className="group py-3 sm:col-start-2 sm:text-right"
            >
              <span className="eyebrow">Newer →</span>
              <span className="mt-2 block font-medium leading-snug group-hover:underline">
                {newer.title}
              </span>
            </Link>
          )}
        </nav>
      )}
    </>
  );
}
