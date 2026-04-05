import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import useCategories from "../hooks/useCategories";

export default function Categories() {
  const { categories = [], isLoading } = useCategories();

  const [startIndex, setStartIndex] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(6);
  const shouldShowNavigation = itemsToShow < categories.length;
  const totalPages = Math.ceil(categories.length / itemsToShow);
  const currentPage = Math.floor(startIndex / itemsToShow);

  const updateItemsToShow = useCallback(() => {
    const width = window.innerWidth;
    if (width >= 1200) {
      setItemsToShow(6);
    } else if (width >= 768) {
      setItemsToShow(4);
    } else {
      setItemsToShow(2);
    }
  }, []);

  useEffect(() => {
    updateItemsToShow();
    window.addEventListener("resize", updateItemsToShow);
    return () => window.removeEventListener("resize", updateItemsToShow);
  }, [updateItemsToShow]);

  const next = () => {
    if (!shouldShowNavigation) return;

    setStartIndex((prev) => {
      const nextIndex = prev + itemsToShow;
      return nextIndex >= categories.length ? 0 : nextIndex;
    });
  };

  const prev = () => {
    if (!shouldShowNavigation) return;

    setStartIndex((prev) => {
      const prevIndex = prev - itemsToShow;
      return prevIndex < 0 ? (totalPages - 1) * itemsToShow : prevIndex;
    });
  };

  if (isLoading) return <div>Loading...</div>;

  return (
    <section className="py-20 bg-white relative overflow-hidden group/section">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="primary-yellow text-xs font-semibold uppercase tracking-[0.3em] mb-4 block">
            SHOP BY STYLE
          </span>
          <h3>Timeless favorites loved by watch</h3>
        </div>

        {/* Carousel Container */}
        <div className="relative flex items-center px-4 md:px-10">
          {/* Navigation Arrows */}
          {shouldShowNavigation && (
            <button
              onClick={prev}
              className="absolute left-0 md:left-2 z-20 bg-white p-2 rounded-full shadow-lg text-gray-400 hover:primary-yellow transition-all opacity-0 group-hover/section:opacity-100 -translate-x-4 group-hover/section:translate-x-0"
              aria-label="Previous Category"
            >
              <ChevronLeft size={24} />
            </button>
          )}

          {/* Categories Row */}
          <div className="flex-1 flex gap-x-6 overflow-hidden">
            {categories.map((cat, i) => (
              <div
                key={`${cat.name}-${startIndex}-${i}`}
                className="flex-1 min-w-[calc(50%-12px)] md:min-w-[calc(25%-18px)] lg:min-w-[calc(16.666%-20px)] transition-all duration-500 transform animate-fade-in"
              >
                <div className="group cursor-pointer flex flex-col items-center">
                  <div className="relative w-full aspect-square flex items-center justify-center">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <svg
                        viewBox="0 0 100 100"
                        className="w-full h-full transform -rotate-90 text-gray-200"
                      >
                        <circle
                          cx="50"
                          cy="50"
                          r="46"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeDasharray="0.4 4.417"
                        />
                        <circle
                          cx="50"
                          cy="50"
                          r="42"
                          fill="none"
                          stroke="#f5f5f5"
                          strokeWidth="0.5"
                        />
                      </svg>
                    </div>

                    <div className="relative w-full overflow-hidden group">
                      <a
                        href={`/collections/${cat.slug}`}
                        className="relative block w-full aspect-square"
                      >
                        <div className="absolute inset-0 m-2.5 rounded-full opacity-25 z-10 pointer-events-none transition duration-300">
                          <img
                            src="/categories/icon-watch-dial.webp"
                            alt=""
                            className="w-full h-full object-cover rounded-full"
                          />
                        </div>

                        {/* Main Image */}
                        <img
                          src={cat.image}
                          alt={cat.name}
                          loading="lazy"
                          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                      </a>
                    </div>
                  </div>

                  {/* Category Info */}
                  <div className="text-center mt-6">
                    <a href={`/collections/${cat.slug}`}>
                      <h4 className="text-2xl capitalize group-hover:text-stone-500 pt-3 font-semibold text-neutral-950">
                        {cat.name}
                      </h4>
                    </a>
                    <p className="text-neutral-500/60 text-lg font-medium">
                      {cat.Products.length} products
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {shouldShowNavigation && (
            <button
              onClick={next}
              className="absolute right-0 md:right-2 z-20 bg-white p-2 rounded-full shadow-lg text-gray-400 hover:primary-yellow transition-all opacity-0 group-hover/section:opacity-100 translate-x-4 group-hover/section:translate-x-0"
              aria-label="Next Category"
            >
              <ChevronRight size={24} />
            </button>
          )}
        </div>

        {/* Dots Pagination */}
        {shouldShowNavigation && (
          <div className="flex justify-center gap-2 mt-12">
            {Array.from({ length: totalPages }).map((_, i) => (
              <div
                key={i}
                onClick={() => setStartIndex(i * itemsToShow)}
                className={`h-1.5 rounded-full cursor-pointer transition-all ${
                  currentPage === i ? "bg-[#C5A059] w-4" : "bg-gray-200 w-1.5"
                }`}
              ></div>
            ))}
          </div>
        )}
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateX(10px); }
          to { opacity: 1; transform: translateX(0); }
        }
        .animate-fade-in {
          animation: fadeIn 0.4s ease-out forwards;
        }
      `}</style>
    </section>
  );
}
