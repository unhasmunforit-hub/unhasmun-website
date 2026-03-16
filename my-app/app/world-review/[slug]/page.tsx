import { notFound } from "next/navigation";
import Image from "next/image";
import { PortableText } from "@portabletext/react";
import { getArticleBySlug, urlFor } from "@/app/lib/sanity";
import ShareButtons from "@/app/components/ShareButtons";

export const dynamic = "force-dynamic"; // skip cache for debugging

export default async function ArticleDetailPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const article = await getArticleBySlug(slug);

    if (!article) {
        notFound();
    }

    // Format the published date
    const formattedDate = article.publishedAt
        ? new Date(article.publishedAt).toLocaleDateString("id-ID", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
        })
        : "";

    // Custom portable text components for consistent styling
    const components = {
        block: {
            normal: ({ children }: any) => (
                <p className="text-left not-italic leading-relaxed mb-6 md:mb-10 text-[15px] md:text-[16px]" style={{ textAlign: "left", fontStyle: "normal" }}>
                    {children}
                </p>
            ),
            h2: ({ children }: any) => (
                <h2 className="font-bold text-2xl md:text-3xl mb-4 md:mb-6 mt-8 md:mt-12 leading-tight text-mun-dark text-left" style={{ textAlign: "left" }}>
                    {children}
                </h2>
            ),
            h3: ({ children }: any) => (
                <h3 className="font-bold text-xl md:text-2xl mb-4 mt-8 text-mun-dark text-left" style={{ textAlign: "left" }}>
                    {children}
                </h3>
            ),
            blockquote: ({ children }: any) => (
                <blockquote className="border-l-4 border-mun-red pl-4 my-6 opacity-90 text-[15px] md:text-[16px] text-mun-dark/80 text-left not-italic" style={{ textAlign: "left", fontStyle: "normal" }}>
                    {children}
                </blockquote>
            ),
        },
        marks: {
            em: ({ children }: any) => (
                <span className="not-italic text-mun-dark" style={{ fontStyle: "normal" }}>
                    {children}
                </span>
            ),
            strong: ({ children }: any) => (
                <strong className="font-bold text-mun-dark">
                    {children}
                </strong>
            )
        },
        types: {
            image: ({ value }: any) => (
                <div className="w-full relative aspect-[14/9] md:aspect-[16/9] rounded-2xl md:rounded-3xl overflow-hidden my-8 md:my-12 shadow-sm">
                    <Image
                        src={urlFor(value).url()}
                        alt={value.caption || "Article Image"}
                        fill
                        className="object-cover"
                    />
                    {value.caption && (
                        <div className="absolute bottom-0 inset-x-0 bg-black/60 text-white text-xs md:text-sm p-3 text-center backdrop-blur-sm">
                            {value.caption}
                        </div>
                    )}
                </div>
            )
        }
    };

    return (
        <section className="relative bg-mun-cream min-h-screen text-mun-dark font-sans">
            {/* Background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <Image
                    src="/background-page.svg"
                    alt=""
                    fill
                    className="object-cover"
                />
            </div>
            
            <div className="relative max-w-4xl mx-auto px-4 pt-32 md:pt-40 pb-20 md:pb-32">
                {/* Article Header */}
                <header className="mb-8 md:mb-12">
                    <h1 className="font-extrabold text-3xl md:text-4xl lg:text-5xl mb-3 leading-tight">
                        {article.title}
                    </h1>
                    {formattedDate && (
                        <p className="text-sm text-mun-dark/60 mb-4">
                            {formattedDate}
                        </p>
                    )}
                    <div className="flex items-center justify-between flex-wrap gap-3 pt-3 border-t border-mun-dark/10">
                        <p className="text-base font-medium opacity-90">
                            By {article.author?.name || "UNHAS MUN Contributor"}
                        </p>
                        <ShareButtons title={article.title} slug={article.slug.current} />
                    </div>
                </header>

                {/* Main Hero Image */}
                {article.mainImage && (
                    <div className="mb-10 md:mb-12">
                        <div className="w-full relative aspect-[14/9] md:aspect-[16/9] rounded-2xl md:rounded-3xl overflow-hidden shadow-md">
                            <Image
                                src={urlFor(article.mainImage).url()}
                                alt={article.mainImage.caption || article.title}
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                )}

                {/* Article Content */}
                <article className="max-w-none">
                    {/* Main image body text */}
                    {article.mainImage?.imageDescription && (
                        <div className="mb-10 md:mb-14">
                            {article.mainImage.imageDescription.split("\n\n").map((paragraph: string, i: number) => (
                                paragraph.trim() && (
                                    <p key={`main-${i}`} className="text-left leading-relaxed mb-6 text-[15px] md:text-[16px]" style={{ textAlign: "left", fontStyle: "normal" }}>
                                        {paragraph.trim()}
                                    </p>
                                )
                            ))}
                        </div>
                    )}

                    {/* Secondary Image */}
                    {article.secImage?.asset && (
                        <div className="my-10 md:my-12">
                            <div className="w-full relative aspect-[16/9] md:aspect-[21/9] rounded-2xl overflow-hidden shadow-sm">
                                <Image
                                    src={urlFor(article.secImage).url()}
                                    alt={article.secImage.caption || "Secondary article image"}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>
                    )}

                    {/* Secondary image body text */}
                    {article.secImage?.imageDescription && (
                        <div className="mb-10 md:mb-14">
                            {article.secImage.imageDescription.split("\n\n").map((paragraph: string, i: number) => (
                                paragraph.trim() && (
                                    <p key={`sec-${i}`} className="text-left leading-relaxed mb-6 text-[15px] md:text-[16px]" style={{ textAlign: "left", fontStyle: "normal" }}>
                                        {paragraph.trim()}
                                    </p>
                                )
                            ))}
                        </div>
                    )}

                    {/* Third Image */}
                    {article.thirdImage?.asset && (
                        <div className="my-10 md:my-12">
                            <div className="w-full relative aspect-[16/9] md:aspect-[21/9] rounded-2xl overflow-hidden shadow-sm">
                                <Image
                                    src={urlFor(article.thirdImage).url()}
                                    alt={article.thirdImage.caption || "Third article image"}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>
                    )}

                    {/* Third image body text */}
                    {article.thirdImage?.imageDescription && (
                        <div className="mb-10 md:mb-14">
                            {article.thirdImage.imageDescription.split("\n\n").map((paragraph: string, i: number) => (
                                paragraph.trim() && (
                                    <p key={`third-${i}`} className="text-left leading-relaxed mb-6 text-[15px] md:text-[16px]" style={{ textAlign: "left", fontStyle: "normal" }}>
                                        {paragraph.trim()}
                                    </p>
                                )
                            ))}
                        </div>
                    )}

                    {/* PortableText body sections (if available) */}
                    {article.bodySections && (
                        <PortableText value={article.bodySections} components={components} />
                    )}
                </article>
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
