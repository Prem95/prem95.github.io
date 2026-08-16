import type { Metadata } from "next";
import Link from "next/link";
import { config } from "@/lib/data";
import { dayOfMonth, getPostsByMonth } from "@/lib/posts";

export const metadata: Metadata = {
  title: `Mind Notes — ${config.name}`,
  description:
    "A running log: what I'm building, what broke, and what I read that week.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: `Mind Notes — ${config.name}`,
    description: "A running log of what I'm building.",
    url: `${config.siteUrl}/blog`,
    type: "website",
  },
};

export default function NotesIndex() {
  const months = getPostsByMonth();

  return (
    <>
      <header className="mb-12 sm:mb-16">
        <h1 className="section-title text-[clamp(2.2rem,7vw,3.4rem)]">
          Mind Notes
        </h1>
      </header>

      {months.length === 0 ? (
        <p className="text-muted-foreground">Nothing here yet. Soon.</p>
      ) : (
        months.map(([month, posts]) => (
          <section key={month} className="mb-10 sm:mb-14">
            <h2 className="eyebrow mb-2 border-b border-border pb-3">
              {month}
            </h2>
            <ul>
              {posts.map((post) => (
                <li key={post.slug}>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="hover-indent group flex items-baseline gap-4 border-b border-border py-4 sm:gap-6"
                  >
                    <span className="w-6 shrink-0 font-mono text-xs tabular-nums text-muted-foreground transition-colors group-hover:text-foreground">
                      {dayOfMonth(post.date)}
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block font-medium leading-snug">
                        {post.title}
                      </span>
                      {post.summary && (
                        <span className="mt-1 block truncate text-sm text-muted-foreground">
                          {post.summary}
                        </span>
                      )}
                    </span>
                    <span className="shrink-0 font-mono text-[0.65rem] tabular-nums text-muted-foreground">
                      {post.minutes} min
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        ))
      )}
    </>
  );
}
