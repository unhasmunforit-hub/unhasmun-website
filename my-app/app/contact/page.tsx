import Image from "next/image";

export default function ContactPage() {
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

            <div className="relative max-w-5xl mx-auto px-4 pt-32 pb-20">
                <h1
                    className="font-black uppercase text-mun-dark mb-6"
                    style={{ fontSize: "clamp(32px, 5vw, 56px)", letterSpacing: "-1px" }}
                >
                    Contact Us
                </h1>

                <p
                    className="text-mun-dark leading-relaxed mb-10"
                    style={{ fontSize: "clamp(16px, 2vw, 20px)" }}
                >
                    Have questions about UNHAS MUN 2026? Reach out to us through the channels below.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Instagram */}
                    <a
                        href="https://instagram.com/unhasmun"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-4 bg-white/50 backdrop-blur-sm rounded-xl p-6 border border-mun-dark/10 hover:bg-white/70 transition-colors"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-mun-red" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                            <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                            <circle cx="12" cy="12" r="4.5" />
                            <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" stroke="none" />
                        </svg>
                        <div>
                            <h3 className="font-bold text-mun-dark">Instagram</h3>
                            <p className="text-mun-dark/60 text-sm">@unhasmun</p>
                        </div>
                    </a>

                    {/* LinkedIn */}
                    <a
                        href="https://linkedin.com/company/unhasmun"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-4 bg-white/50 backdrop-blur-sm rounded-xl p-6 border border-mun-dark/10 hover:bg-white/70 transition-colors"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-mun-red" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                            <rect x="2" y="9" width="4" height="12" />
                            <circle cx="4" cy="4" r="2" />
                        </svg>
                        <div>
                            <h3 className="font-bold text-mun-dark">LinkedIn</h3>
                            <p className="text-mun-dark/60 text-sm">UNHAS MUN</p>
                        </div>
                    </a>

                    {/* Email */}
                    <a
                        href="mailto:unhasmun@gmail.com"
                        className="flex items-center gap-4 bg-white/50 backdrop-blur-sm rounded-xl p-6 border border-mun-dark/10 hover:bg-white/70 transition-colors"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-mun-red" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                            <rect x="2" y="4" width="20" height="16" rx="3" />
                            <path d="M2 7l10 7 10-7" />
                        </svg>
                        <div>
                            <h3 className="font-bold text-mun-dark">Email</h3>
                            <p className="text-mun-dark/60 text-sm">unhasmun@gmail.com</p>
                        </div>
                    </a>
                </div>
            </div>
        </section>
    );
}
