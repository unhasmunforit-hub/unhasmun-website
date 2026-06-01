import type { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://unhasmun.org";

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/makassar-mun`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/world-review`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
  ];

  // Dynamic article pages from Sanity (gracefully handle missing env vars)
  let articlePages: MetadataRoute.Sitemap = [];
  try {
    const { getArticles } = await import("./lib/sanity");
    const articles = await getArticles();
    articlePages = articles.map((article) => ({
      url: `${baseUrl}/world-review/${article.slug.current}`,
      lastModified: new Date(article.publishedAt),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    }));
  } catch (error) {
    // Sanity env vars may not be available during local builds;
    // articles will still be included in production on Vercel
    console.warn("Sitemap: Could not fetch articles from Sanity:", error);
  }

  return [...staticPages, ...articlePages];
}

