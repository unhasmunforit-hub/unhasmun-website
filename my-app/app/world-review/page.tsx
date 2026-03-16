import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getArticles, urlFor } from "@/app/lib/sanity";

export const metadata: Metadata = {
    title: "World Review | UNHAS MUN 2026",
    description:
        "Explore in-depth articles on global affairs, international diplomacy, and pressing world issues — curated by UNHAS MUN delegates and contributors.",
    openGraph: {
        title: "World Review | UNHAS MUN 2026",
        description:
            "Explore in-depth articles on global affairs, international diplomacy, and pressing world issues.",
    },
};

export const revalidate = 60; // revalidate every 60 seconds

import { draftMode } from "next/headers";

export default async function WorldReviewPage() {
    const { isEnabled } = await draftMode();
    const articles = await getArticles(isEnabled);

    return (
        <section className="relative bg-mun-cream min-h-screen">
            {/* Background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <Image
                    src="/background-page.svg"
                    alt=""
                    fill
                    className="object-cover"
                />
            </div>

            <div className="relative max-w-5xl mx-auto px-4 pt-28 md:pt-40 pb-20 md:pb-32">
                {/* Articles List */}
                {articles.length > 0 ? (
                    <div className="space-y-10 md:space-y-14">
                        {articles.map((article) => (
                            <article
                                key={article._id}
                                className="flex flex-col md:flex-row gap-6 md:gap-10 md:items-stretch"
                            >
                                {/* Article Image */}
                                <div className="w-full md:w-[45%] shrink-0 overflow-hidden rounded-2xl shadow-lg">
                                    <div className="relative aspect-[4/3]">
                                        <Image
                                            src={urlFor(article.mainImage).width(800).height(600).url()}
                                            alt={article.title}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                </div>

                                {/* Article Content */}
                                <div className="flex-1 flex flex-col overflow-hidden">
                                    <h2
                                        className="font-bold text-mun-dark mb-3 md:mb-4 leading-tight shrink-0"
                                        style={{ fontSize: "clamp(20px, 3vw, 28px)" }}
                                    >
                                        {article.title}
                                    </h2>
                                    <p
                                        className="text-mun-dark/80 leading-relaxed mb-5 md:mb-6 line-clamp-3 md:line-clamp-4"
                                        style={{
                                            fontSize: "clamp(13px, 1.5vw, 15px)",
                                            textAlign: "justify",
                                        }}
                                    >
                                        {article.excerpt}
                                    </p>
                                    <div className="mt-auto shrink-0">
                                        <Link
                                            href={`/world-review/${article.slug.current}`}
                                            className="inline-block bg-mun-red text-white text-sm font-semibold px-6 py-2.5 rounded-md hover:bg-mun-red/85 transition-colors shadow-sm"
                                        >
                                            Read Article &gt;
                                        </Link>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                ) : (
                    /* Fallback when no articles exist */
                    <div className="text-center py-20">
                        <h2 className="text-2xl md:text-3xl font-bold text-mun-dark mb-4">
                            Coming Soon
                        </h2>
                        <p className="text-mun-dark/70 max-w-md mx-auto">
                            Articles and reviews will be published here as we approach UNHAS MUN 2026.
                            Stay tuned for insights on global affairs and international diplomacy.
                        </p>
                    </div>
                )}
            </div>

            {/* Tongkonan decoration - directly above footer */}
            <div className="relative w-full">
                <Image
                    src="/tongkonan-footer.webp"
                    alt="Tongkonan decoration"
                    width={1920}
                    height={400}
                    className="w-full h-auto block"
                />
            </div>
        </section>
    );
}
