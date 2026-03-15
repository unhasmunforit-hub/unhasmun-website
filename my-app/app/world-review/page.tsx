import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
    title: "World Review | UNHAS MUN 2026",
    description:
        "Explore in-depth articles on global affairs, international diplomacy, and pressing world issues — curated by UNHAS MUN delegates and contributors.",
    openGraph: {
        title: "World Review | UNHAS MUN 2026",
        description:
            "Explore in-depth articles on global affairs, international diplomacy, and pressing world issues.",
        images: [{ url: "/home/download (8).jpg", width: 1200, height: 630, alt: "World Review" }],
    },
};

const articles = [
    {
        id: 1,
        title: "Education in Malaysia: Stateless Children's Struggle for Schooling in Sabah",
        excerpt:
            "Sabah, a Malaysian state in Borneo, faces a longstanding challenge of statelessness among children born to migrant or undocumented families. Over a quarter of Sabah's population is non-citizens, including approximately 250,000 children under 18 (Loganathan et al, 2022). Without legal documentation, these children are systematically excluded from public schools, leaving them vulnerable to exploitation and poverty cycles.",
        image: "/home/download (8).jpg",
        date: "March 10, 2026",
    },
    {
        id: 2,
        title: "Climate Displacement in the Pacific: Rising Tides and Vanishing Homelands",
        excerpt:
            "Small island developing states in the Pacific face an existential threat from rising sea levels. Nations like Tuvalu, Kiribati, and the Marshall Islands are experiencing saltwater intrusion into freshwater supplies, coastal erosion, and the deterioration of coral reef ecosystems. The Intergovernmental Panel on Climate Change projects that by 2100, sea levels could rise by up to one meter, rendering many Pacific atolls uninhabitable.",
        image: "/home/download (11).jpg",
        date: "March 5, 2026",
    },
    {
        id: 3,
        title: "Digital Authoritarianism: How Governments Weaponize Technology Against Citizens",
        excerpt:
            "Across the globe, authoritarian regimes are increasingly leveraging digital surveillance tools to monitor, suppress, and control their populations. From facial recognition technology deployed in public spaces to sophisticated spyware targeting journalists and activists, the digital rights landscape is shifting rapidly. Freedom House reports that internet freedom has declined for the thirteenth consecutive year, with governments in over 50 countries engaging in some form of digital repression.",
        image: "/home/download (10).jpg",
        date: "February 28, 2026",
    },
];

export default function WorldReviewPage() {
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
                <div className="space-y-10 md:space-y-14">
                    {articles.map((article) => (
                        <article
                            key={article.id}
                            className="flex flex-col md:flex-row gap-6 md:gap-10 md:items-stretch"
                        >
                            {/* Article Image */}
                            <div className="w-full md:w-[45%] shrink-0 overflow-hidden rounded-2xl shadow-lg">
                                <div className="relative aspect-[4/3]">
                                    <Image
                                        src={article.image}
                                        alt={article.title}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </div>

                            {/* Article Content — stretches to match image height */}
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
                                        href="#"
                                        className="inline-block bg-mun-red text-white text-sm font-semibold px-6 py-2.5 rounded-md hover:bg-mun-red/85 transition-colors shadow-sm"
                                    >
                                        Read Article &gt;
                                    </Link>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
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
