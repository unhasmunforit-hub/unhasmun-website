import Hero from '@/app/components/Hero';
import FeaturedArticles from '@/app/components/FeaturedArticles';
import WelcomingRemarks from '@/app/components/WelcomingRemarks';
import AboutSection from '@/app/components/AboutSection';
import Image from 'next/image';
import { getArticles, urlFor } from '@/app/lib/sanity';

export const revalidate = 60; // revalidate Sanity data every 60 seconds

export default async function Home() {
  const sanityArticles = await getArticles();

  // Map Sanity articles to the shape FeaturedArticles expects
  const articles = sanityArticles.map((article) => ({
    ...article,
    imageUrl: article.mainImage ? urlFor(article.mainImage).width(800).height(600).url() : "",
  }));

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
          <FeaturedArticles articles={articles} />
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
