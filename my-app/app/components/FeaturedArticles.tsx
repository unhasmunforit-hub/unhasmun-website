"use client";
import { useState, useEffect } from "react";
import Image from 'next/image';

const articles = [
  {
    id: 1,
    title: "UNHAS MUN 2026 Theme Announced",
    excerpt: "Discover this year's theme and what it means for global diplomacy and international cooperation.",
    category: "News",
    date: "January 15, 2026",
    image: "/home/download (8).jpg"
  },
  {
    id: 2,
    title: "Registration Now Open",
    excerpt: "Secure your spot at the most prestigious Model UN event in the region. Early bird pricing available.",
    category: "Event",
    date: "January 10, 2026",
    image: "/home/download (11).jpg"
  },
  {
    id: 3,
    title: "Meet Our Secretariat",
    excerpt: "Get to know the dedicated team behind UNHAS MUN 2026 and their vision for this year's conference.",
    category: "Team",
    date: "January 5, 2026",
    image: "/home/download (10).jpg"
  },
  {
    id: 4,
    title: "Committee Announcements",
    excerpt: "Explore the diverse range of committees available at UNHAS MUN 2026.",
    category: "Committee",
    date: "January 3, 2026",
    image: "/home/download (9).jpg"
  }
];

export default function FeaturedArticles() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3);

  useEffect(() => {
    const updateItemsPerPage = () => {
      if (window.innerWidth < 640) {
        setItemsPerPage(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerPage(2);
      } else {
        setItemsPerPage(3);
      }
    };
    updateItemsPerPage();
    window.addEventListener("resize", updateItemsPerPage);
    return () => window.removeEventListener("resize", updateItemsPerPage);
  }, []);

  const nextSlide = () => {
    if (currentIndex < articles.length - itemsPerPage) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const canGoNext = currentIndex < articles.length - itemsPerPage;
  const canGoPrev = currentIndex > 0;

  return (
    <section className="py-12 md:py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-mun-dark">
            Featured Articles
          </h2>
          <button className="text-xs sm:text-sm font-medium underline text-mun-dark hover:text-mun-red transition-colors">
            View All Articles
          </button>
        </div>

        <div className="relative">
          {/* Prev button */}
          <button
            onClick={prevSlide}
            disabled={!canGoPrev}
            aria-label="Previous slide"
            className={`absolute left-0 md:-left-14 top-1/2 -translate-y-1/2 z-30 w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center transition-all shadow-lg ${canGoPrev
              ? "bg-mun-red text-white hover:bg-mun-red/80"
              : "bg-gray-200 text-gray-400 cursor-not-allowed"
              }`}
          >
            <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <div className="overflow-hidden mx-12 md:mx-0">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * (100 / itemsPerPage)}%)` }}
            >
              {articles.map((article) => (
                <div
                  key={article.id}
                  className="min-w-[calc(100%)] sm:min-w-[calc(100%/2)] lg:min-w-[calc(100%/3)] px-2 md:px-4"
                >
                  <article className="group cursor-pointer h-full">
                    <div className="overflow-hidden rounded-xl relative h-48 sm:h-56 md:h-64">
                      <Image
                        src={article.image}
                        alt={article.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
                      <div className="absolute inset-0 flex flex-col p-3 sm:p-4 md:p-6 text-white">
                        <h3 className="text-sm sm:text-base md:text-xl font-bold mb-2 md:mb-3 line-clamp-2">
                          {article.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-gray-200 mb-auto line-clamp-2 md:line-clamp-3">
                          {article.excerpt}
                        </p>
                        <div className="flex items-end justify-between mt-2 md:mt-4">
                          <button className="bg-white/10 backdrop-blur-md text-white text-xs sm:text-sm font-medium px-3 py-1.5 sm:px-4 sm:py-2 rounded">
                            {article.date}
                          </button>
                          <button className="bg-mun-red text-white text-xs sm:text-sm font-medium px-3 py-1.5 sm:px-4 sm:py-2 rounded hover:bg-mun-red/80 transition-colors flex items-center gap-1">
                            View Article
                            <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                  </article>
                </div>
              ))}
            </div>
          </div>

          {/* Next button */}
          <button
            onClick={nextSlide}
            disabled={!canGoNext}
            aria-label="Next slide"
            className={`absolute right-0 md:-right-14 top-1/2 -translate-y-1/2 z-30 w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center transition-all shadow-lg ${canGoNext
              ? "bg-mun-red text-white hover:bg-mun-red/80"
              : "bg-gray-200 text-gray-400 cursor-not-allowed"
              }`}
          >
            <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Dot Indicators */}
        <div className="flex justify-center gap-2 mt-6 md:mt-8">
          {Array.from({ length: articles.length - itemsPerPage + 1 }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Go to slide ${index + 1}`}
              className={`transition-all rounded-full ${index === currentIndex
                ? "w-6 h-2 md:w-8 md:h-3 bg-mun-red"
                : "w-2 h-2 md:w-3 md:h-3 bg-gray-300 hover:bg-gray-400"
                }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}