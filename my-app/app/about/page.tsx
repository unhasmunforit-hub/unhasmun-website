import Image from "next/image";

export default function AboutPage() {
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
                    About UNHAS MUN
                </h1>

                <div className="space-y-6">
                    <p
                        className="text-mun-dark leading-relaxed"
                        style={{ textAlign: "justify", fontSize: "clamp(16px, 2vw, 20px)" }}
                    >
                        Unhas MUN Student Activity, established in November 2010, is a non-profit MUN based
                        Student Activity for Hasanuddin University Student. With the aim to strive as an
                        organization that is substantial, comprehensive, and actively partaking in nonacademic
                        development in Hasanuddin University.
                    </p>

                    <p
                        className="text-mun-dark leading-relaxed"
                        style={{ textAlign: "justify", fontSize: "clamp(16px, 2vw, 20px)" }}
                    >
                        We argue, we debate, we negotiate, just like what diplomats do! We practice and
                        advance our primary diplomatic skills to prepare ourselves for the upcoming global
                        disruptions. Sharpening our technical skills to put together a better future world
                        is our priority!
                    </p>
                </div>

                {/* About Image */}
                <div className="mt-10 rounded-xl overflow-hidden">
                    <Image
                        src="/home/aboutmun-foto.png"
                        alt="About UNHAS MUN"
                        width={1000}
                        height={600}
                        className="w-full h-auto object-cover rounded-xl"
                    />
                </div>
            </div>
        </section>
    );
}
