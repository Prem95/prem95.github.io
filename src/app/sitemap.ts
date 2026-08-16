import type { MetadataRoute } from "next";
import { config } from "@/lib/data";
import { getPosts } from "@/lib/posts";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getPosts();

  return [
    {
      url: config.siteUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${config.siteUrl}/blog/`,
      lastModified: posts[0] ? new Date(`${posts[0].date}T00:00:00Z`) : new Date(),
      changeFrequency: "daily",
      priority: 0.8,
    },
    ...posts.map((post) => ({
      url: `${config.siteUrl}/blog/${post.slug}/`,
      lastModified: new Date(`${post.date}T00:00:00Z`),
      changeFrequency: "yearly" as const,
      priority: 0.6,
    })),
  ];
}
