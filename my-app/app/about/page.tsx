import type { Metadata } from "next";
import Image from "next/image";
import CommitteeSection from "@/app/components/CommitteeSection";
import CountUp from "@/app/components/CountUp";

export const metadata: Metadata = {
    title: "About | UNHAS MUN 2026",
    description:
        "Learn about Universitas Hasanuddin Model United Nations (UNHAS MUN), a student-led activity established since 2010, fostering critical thinking, diplomacy, and global engagement.",
    openGraph: {
        title: "About | UNHAS MUN 2026",
        description:
            "Learn about Universitas Hasanuddin Model United Nations (UNHAS MUN), a student-led activity established since 2010.",
        images: [{ url: "/about/about-bg.webp", width: 1920, height: 800, alt: "UNHAS MUN Group Photo" }],
    },
};

export default function AboutPage() {
    return (
        <>
            {/* ── Hero Section ── */}
            <section className="relative w-full overflow-hidden">
                <Image
                    src="/about/about-bg.webp"
                    alt="UNHAS MUN Group Photo"
                    width={1920}
                    height={800}
                    priority
                    className="w-full h-[60vh] object-cover object-[center_30%] md:h-auto md:object-contain"
                />
            </section>

            {/* ── Content Section ── */}
            <section className="relative bg-mun-cream">
                {/* Background pattern */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <Image
                        src="/background-page.svg"
                        alt=""
                        fill
                        className="object-cover"
                    />
                </div>

                <div className="relative max-w-5xl mx-auto px-4 md:px-8 pt-12 md:pt-20 pb-20">

                    {/* About Text */}
                    <div className="space-y-6 mb-16">
                        <p
                            className="text-mun-dark leading-relaxed"
                            style={{ textAlign: "justify", fontSize: "clamp(15px, 2vw, 18px)" }}
                        >
                            Universitas Hasanuddin Model United Nations (UNHAS MUN) is a student led activity under Universitas Hasanuddin that
                            has been established since 2010 and continues to grow as a dynamic platform for academic and diplomatic
                            engagement. As one of the prominent student organizations within the university, UNHAS MUN is committed to fostering
                            critical thinking, public speaking, negotiation, and policy analysis skills through active participation in Model United
                            Nations conferences. We serve as a structured space for students of Hasanuddin University to practice diplomacy in
                            competitive MUN settings, where they simulate international forums and address global issues using formal diplomatic
                            procedures.
                        </p>

                        <p
                            className="text-mun-dark leading-relaxed"
                            style={{ textAlign: "justify", fontSize: "clamp(15px, 2vw, 18px)" }}
                        >
                            Beyond serving students within Hasanuddin University, UNHAS MUN extends its reach to a broader community,
                            welcoming participants from across Indonesia and various parts of the world, with a particular emphasis on
                            empowering youth in Eastern Indonesia. By building inclusive networks and promoting international exposure, UNHAS
                            MUN aims to bridge regional gaps in access to global discourse platforms, ensuring that students from diverse
                            backgrounds have the opportunity to develop their capacity as future diplomats, leaders, and global citizens.
                        </p>
                    </div>

                    {/* Stats Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
                        {/* Card 1 */}
                        <div className="rounded-2xl p-8 text-center border border-mun-dark/5 shadow-sm hover:shadow-md transition-shadow" style={{ backgroundColor: "#FCF0D6" }}>
                            <div className="w-14 h-14 mx-auto mb-4 bg-mun-red/10 rounded-xl flex items-center justify-center">
                                <svg className="w-7 h-7 text-mun-red" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21" />
                                </svg>
                            </div>
                            <p className="text-3xl md:text-4xl font-black text-mun-dark mb-1"><CountUp from={0} to={2010} duration={2} /></p>
                            <p className="text-sm font-semibold text-mun-red mb-2">Established</p>
                            <p className="text-xs text-mun-dark/60 leading-relaxed">
                                Founded in 2010, Unhas MUN grew into a dynamic platform for academic and diplomatic excellence.
                            </p>
                        </div>

                        {/* Card 2 */}
                        <div className="rounded-2xl p-8 text-center border border-mun-dark/5 shadow-sm hover:shadow-md transition-shadow" style={{ backgroundColor: "#FCF0D6" }}>
                            <div className="w-14 h-14 mx-auto mb-4 bg-mun-red/10 rounded-xl flex items-center justify-center">
                                <svg className="w-7 h-7 text-mun-red" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                                </svg>
                            </div>
                            <p className="text-3xl md:text-4xl font-black text-mun-dark mb-1"><CountUp from={0} to={100} duration={1.5} suffix="+" /></p>
                            <p className="text-sm font-semibold text-mun-red mb-2">Delegates Engaged</p>
                            <p className="text-xs text-mun-dark/60 leading-relaxed">
                                Engaging over 100 delegates through active participation in national and international MUN conferences.
                            </p>
                        </div>

                        {/* Card 3 */}
                        <div className="rounded-2xl p-8 text-center border border-mun-dark/5 shadow-sm hover:shadow-md transition-shadow" style={{ backgroundColor: "#FCF0D6" }}>
                            <div className="w-14 h-14 mx-auto mb-4 bg-mun-red/10 rounded-xl flex items-center justify-center">
                                <svg className="w-7 h-7 text-mun-red" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                                </svg>
                            </div>
                            <p className="text-lg md:text-xl font-black text-mun-dark mb-1">National &<br />International</p>
                            <p className="text-sm font-semibold text-mun-red mb-2">Extensive Reach</p>
                            <p className="text-xs text-mun-dark/60 leading-relaxed">
                                Building global diplomacy networks connecting domestic and international MUN communities to humanity.
                            </p>
                        </div>
                    </div>

                    {/* Committee Section */}
                    <CommitteeSection />
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
        </>
    );
}
