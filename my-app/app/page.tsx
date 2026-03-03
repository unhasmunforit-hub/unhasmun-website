import Hero from '@/app/components/Hero';
import FeaturedArticles from '@/app/components/FeaturedArticles';
import WelcomingRemarks from '@/app/components/WelcomingRemarks';
import AboutSection from '@/app/components/AboutSection';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <Hero />
      {/* World Review Background - wraps all sections after Hero */}
      <section className="relative bg-mun-cream">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <Image
            src="/background-page.svg"
            alt=""
            fill
            className="object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 space-y-20 md:space-y-24 pt-8 pb-20">
          <FeaturedArticles />
          <WelcomingRemarks />
          <AboutSection />
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
