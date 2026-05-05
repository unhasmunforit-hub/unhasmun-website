import { createClient } from "@sanity/client";
import { createImageUrlBuilder } from "@sanity/image-url";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;

if (!projectId || !dataset) {
    throw new Error(
        "Missing required Sanity environment variables. " +
        "Set NEXT_PUBLIC_SANITY_PROJECT_ID and NEXT_PUBLIC_SANITY_DATASET in .env.local"
    );
}

export const sanityClient = createClient({
    projectId,
    dataset,
    apiVersion: "2024-01-01",
    useCdn: false,
    token: process.env.SANITY_API_READ_TOKEN, // Needed for draft fetching
    stega: {
        enabled: process.env.NEXT_PUBLIC_VERCEL_ENV === "preview",
        studioUrl: "/studio",
    },
});

const builder = createImageUrlBuilder(sanityClient);

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

export async function getArticles(isDraftMode = false): Promise<SanityArticle[]> {
    return sanityClient.fetch(ARTICLES_QUERY, {}, {
        perspective: isDraftMode ? 'drafts' : 'published',
    });
}

const ARTICLE_BY_SLUG_QUERY = `*[_type == "article" && slug.current == $slug][0] {
    _id,
    publishedAt,
    title,
    slug,
    author->{name},
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
    "bodySections": bodySections[]
}`;

export async function getArticleBySlug(slug: string, isDraftMode = false): Promise<SanityArticleDetail | null> {
    return sanityClient.fetch(ARTICLE_BY_SLUG_QUERY, { slug }, {
        perspective: isDraftMode ? 'drafts' : 'published',
    });
}
