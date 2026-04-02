"use client";
import { useState, useEffect } from "react";
import Image from 'next/image';
import Link from 'next/link';

interface Article {
  _id: string;
  title: string;
  excerpt: string;
  slug: { current: string };
  mainImage?: any;
  publishedAt: string;
  imageUrl?: string;
}

interface FeaturedArticlesProps {
  articles: Article[];
}

export default function FeaturedArticles({ articles }: FeaturedArticlesProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(1);

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

  // Clamp currentIndex when itemsPerPage changes
  useEffect(() => {
    const maxIndex = Math.max(0, articles.length - itemsPerPage);
    if (currentIndex > maxIndex) {
      setCurrentIndex(maxIndex);
    }
  }, [itemsPerPage, articles.length, currentIndex]);

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

  // Only the visible articles
  const visibleArticles = articles.slice(currentIndex, currentIndex + itemsPerPage);

  // Format date helper
  const formatDate = (dateString: string) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  if (!articles || articles.length === 0) {
    return (
      <section className="py-12 md:py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-mun-dark mb-6">
            Featured Articles
          </h2>
          <p className="text-mun-dark/60 text-center py-12">Coming Soon</p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-12 md:py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-mun-dark">
            Featured Articles
          </h2>
          <Link
            href="/world-review"
            className="text-xs sm:text-sm font-medium underline text-mun-dark hover:text-mun-red transition-colors"
          >
            View All Articles
          </Link>
        </div>

        <div className="relative">
          {/* Desktop: side buttons */}
          <button
            onClick={prevSlide}
            disabled={!canGoPrev}
            aria-label="Previous slide"
            className={`hidden md:flex absolute -left-14 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full items-center justify-center transition-all shadow-lg ${canGoPrev
              ? "bg-mun-red text-white hover:bg-mun-red/80"
              : "bg-gray-200 text-gray-400 cursor-not-allowed"
              }`}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Cards grid — only renders visible cards, never overflows */}
          <div
            className="grid gap-4 md:gap-8"
            style={{ gridTemplateColumns: `repeat(${itemsPerPage}, 1fr)` }}
          >
            {visibleArticles.map((article) => (
              <div key={article._id}>
                <Link href={`/world-review/${article.slug.current}`}>
                  <article className="group cursor-pointer h-full">
                    <div className="overflow-hidden rounded-xl relative h-48 sm:h-56 md:h-64">
                      {article.imageUrl ? (
                        <Image
                          src={article.imageUrl}
                          alt={article.title}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      ) : (
                        <div className="w-full h-full bg-mun-dark/20" />
                      )}
                      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
                      <div className="absolute inset-0 flex flex-col p-3 sm:p-4 md:p-6 text-white">
                        <h3 className="text-sm sm:text-base md:text-xl font-bold mb-2 md:mb-3 line-clamp-2">
                          {article.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-gray-200 mb-auto line-clamp-2 md:line-clamp-3">
                          {article.excerpt}
                        </p>
                        <div className="flex items-end justify-between mt-2 md:mt-4">
                          <span className="bg-white/10 backdrop-blur-md text-white text-xs sm:text-sm font-medium px-3 py-1.5 sm:px-4 sm:py-2 rounded">
                            {formatDate(article.publishedAt)}
                          </span>
                          <span className="bg-mun-red text-white text-xs sm:text-sm font-medium px-3 py-1.5 sm:px-4 sm:py-2 rounded hover:bg-mun-red/80 transition-colors flex items-center gap-1">
                            View Article
                            <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </span>
                        </div>
                      </div>
                    </div>
                  </article>
                </Link>
              </div>
            ))}
          </div>

          {/* Desktop: side button */}
          <button
            onClick={nextSlide}
            disabled={!canGoNext}
            aria-label="Next slide"
            className={`hidden md:flex absolute -right-14 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full items-center justify-center transition-all shadow-lg ${canGoNext
              ? "bg-mun-red text-white hover:bg-mun-red/80"
              : "bg-gray-200 text-gray-400 cursor-not-allowed"
              }`}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Mobile: bottom nav buttons */}
        <div className="flex md:hidden justify-center gap-4 mt-4">
          <button
            onClick={prevSlide}
            disabled={!canGoPrev}
            aria-label="Previous slide"
            className={`w-10 h-10 rounded-full flex items-center justify-center transition-all shadow-lg ${canGoPrev
              ? "bg-mun-red text-white hover:bg-mun-red/80"
              : "bg-gray-200 text-gray-400 cursor-not-allowed"
              }`}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            disabled={!canGoNext}
            aria-label="Next slide"
            className={`w-10 h-10 rounded-full flex items-center justify-center transition-all shadow-lg ${canGoNext
              ? "bg-mun-red text-white hover:bg-mun-red/80"
              : "bg-gray-200 text-gray-400 cursor-not-allowed"
              }`}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Dot Indicators */}
        {articles.length > itemsPerPage && (
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
        )}
      </div>
    </section>
  );
}