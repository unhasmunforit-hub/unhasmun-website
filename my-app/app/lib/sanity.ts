import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";

export const sanityClient = createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "5ydkc73p",
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
    apiVersion: "2024-01-01",
    useCdn: false, // Turn off CDN for real-time draft updates
    stega: {
        enabled: true,
        studioUrl: "http://localhost:3333",
    },
});

const builder = imageUrlBuilder(sanityClient);

export function urlFor(source: SanityImageSource) {
    return builder.image(source);
}

export interface SanityArticle {
    _id: string;
    title: string;
    slug: { current: string };
    excerpt: string;
    mainImage: SanityImageSource;
    publishedAt: string;
}

const ARTICLES_QUERY = `*[_type == "article"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    excerpt,
    mainImage,
    publishedAt
}`;

export async function getArticles(): Promise<SanityArticle[]> {
    return sanityClient.fetch(ARTICLES_QUERY);
}
