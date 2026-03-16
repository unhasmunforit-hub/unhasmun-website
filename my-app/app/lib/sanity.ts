import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
// No explicit SanityImageSource type needed here to avoid import errors

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

export function urlFor(source: any) {
    return builder.image(source);
}

export interface SanityArticle {
    _id: string;
    title: string;
    slug: { current: string };
    excerpt: string;
    mainImage: any;
    publishedAt: string;
}

export interface SanityArticleDetail extends SanityArticle {
    author: { name: string };
    secImage?: any;
    thirdImage?: any;
    bodySections?: any[];
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

const ARTICLE_BY_SLUG_QUERY = `*[_type == "article" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    excerpt,
    "mainImage": {
        "asset": mainImage.asset,
        "caption": mainImage.caption,
        "imageDescription": mainImage.imageDescription
    },
    "secImage": {
        "asset": secImage.asset,
        "caption": secImage.caption,
        "imageDescription": secImage.imageDescription
    },
    "thirdImage": {
        "asset": thirdImage.asset,
        "caption": thirdImage.caption,
        "imageDescription": thirdImage.imageDescription
    },
    publishedAt,
    author->{name},
    "bodySections": bodySections[][]
}`;

export async function getArticleBySlug(slug: string): Promise<SanityArticleDetail | null> {
    return sanityClient.fetch(ARTICLE_BY_SLUG_QUERY, { slug });
}
