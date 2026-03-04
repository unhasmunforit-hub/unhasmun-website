import Image from "next/image";

export default function MakassarMunPage() {
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
                    Makassar MUN
                </h1>

                <p
                    className="text-mun-dark leading-relaxed"
                    style={{ textAlign: "justify", fontSize: "clamp(16px, 2vw, 20px)" }}
                >
                    Makassar MUN is an annual Model United Nations conference organized by UNHAS MUN,
                    bringing together delegates from various universities to simulate United Nations
                    proceedings. Join us for an unforgettable experience of diplomacy, debate, and
                    international cooperation.
                </p>

                {/* Placeholder for future content */}
                <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-white/50 backdrop-blur-sm rounded-xl p-8 border border-mun-dark/10">
                        <h3 className="text-xl font-bold text-mun-dark mb-3">Coming Soon</h3>
                        <p className="text-mun-dark/70 text-sm">
                            Conference details, committee information, and registration will be available here.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
