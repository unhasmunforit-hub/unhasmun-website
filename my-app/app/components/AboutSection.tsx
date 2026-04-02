import Image from 'next/image';
import Link from 'next/link';

export default function AboutSection() {
  return (
    <section className="py-12 md:py-16 px-4 md:px-8 max-w-7xl mx-auto">
      {/* 2-column layout */}
      <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 items-center">

        {/* ── Left: Photo grid placeholder ── */}
        <div className="rounded-xl overflow-hidden w-full mx-auto">
          <Image src="/home/aboutmun-foto.webp" alt="About UNHAS MUN" width={600} height={400} className="w-full h-full object-cover" />
        </div>

        {/* ── MUN Logo watermark (between columns) ── */}
        <div
          className="absolute pointer-events-none select-none hidden lg:block"
          style={{
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
            width: "700px",
            opacity: 0.08,
            zIndex: 0,
          }}
        >
          <Image src="/home/mun-logo-bg.webp" alt="" width={440} height={440} className="w-full h-full object-contain" />
        </div>

        {/* ── Right: Title + Text + Button ── */}
        <div className="relative z-10 flex flex-col justify-center h-full gap-3 md:gap-4 translate-y-4 md:translate-y-6">
          <h2
            className="font-black uppercase text-mun-dark mb-2 md:mb-3 mt-4 md:mt-0"
            style={{ fontSize: "clamp(28px, 5vw, 56px)", letterSpacing: "-1px" }}
          >
            ABOUT UNHAS MUN
          </h2>
          <p
            className="text-mun-dark leading-relaxed"
            style={{ textAlign: "justify", fontSize: "clamp(13.5px, 2vw, 21px)" }}
          >
            Unhas MUN Student Activity, established in November 2010, is a non-profit MUN based
            Student Activity for Hasanuddin University Student. With the aim to strive as an
            organization that is substantial, comprehensive, and actively partaking in nonacademic
            development in Hasanuddin University.
          </p>

          <p
            className="text-mun-dark leading-relaxed"
            style={{ textAlign: "justify", fontSize: "clamp(13.5px, 2vw, 21px)" }}
          >
            We argue, we debate, we negotiate, just like what diplomats do! We practice and
            advance our primary diplomatic skills to prepare ourselves for the upcoming global
            disruptions. Sharpening our technical skills to put together a better future world
            is our priority!
          </p>

          <div className="mt-2">
            <Link
              href="/about#committee"
              className="inline-flex items-center gap-2 md:gap-3 text-white font-semibold px-5 py-2.5 md:px-6 md:py-3 rounded-lg transition-all hover:opacity-90 active:scale-95 text-sm md:text-base"
              style={{ background: "linear-gradient(135deg, #8b1616 0%, #6b0f0f 100%)" }}
            >
              Our Committee
              <span className="flex items-center justify-center w-5 h-5 md:w-6 md:h-6 rounded bg-white/20">
                <svg className="w-3 h-3 md:w-3.5 md:h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
