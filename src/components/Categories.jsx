import { useState, useEffect, useCallback } from "react";
import useCategories from "../hooks/useCategories";
import { Link } from "react-router-dom";

export default function Categories() {
  const { categories = [], isLoading } = useCategories();

  const [startIndex, setStartIndex] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(6);

  const updateItemsToShow = useCallback(() => {
    const width = window.innerWidth;
    let newItemsToShow = 6;
    if (width >= 1200) newItemsToShow = 6;
    else if (width >= 768) newItemsToShow = 3;
    else if (width >= 400) newItemsToShow = 2;
    else newItemsToShow = 1;

    setItemsToShow((prev) => {
      if (prev !== newItemsToShow) {
        setStartIndex(0);
      }
      return newItemsToShow;
    });
  }, []);

  useEffect(() => {
    updateItemsToShow();
    window.addEventListener("resize", updateItemsToShow);
    return () => window.removeEventListener("resize", updateItemsToShow);
  }, [updateItemsToShow]);

  const totalPages = Math.ceil(categories.length / itemsToShow);
  const currentPage = Math.floor(startIndex / itemsToShow);
  const shouldShowNavigation = totalPages > 1;

  const goToPage = (pageIndex) => {
    setStartIndex(pageIndex * itemsToShow);
  };

  const visibleCategories = categories.slice(
    startIndex,
    startIndex + itemsToShow,
  );

  if (isLoading) return <div>Loading...</div>;

  return (
    <section className="py-20 bg-white relative overflow-hidden group/section">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-8">
          <span className="primary-yellow text-[14px] font-semibold uppercase tracking-[0.3em]  block">
            SHOP BY STYLE
          </span>
          <h3>Timeless favorites loved by watch</h3>
        </div>

        {/* Carousel Container */}
        <div className="relative flex items-center px-4 md:px-10">
          {/* Categories Row */}
          <div className="flex-1 flex gap-x-6 overflow-hidden">
            {visibleCategories.map((cat, i) => (
              <div
                key={`${cat.name}-${startIndex}-${i}`}
                className="flex-1 min-w-[calc(50%-12px)] md:min-w-[calc(25%-18px)] lg:min-w-[calc(16.666%-20px)] transition-all duration-500 transform animate-fade-in"
              >
                <Link to={`/collections/${cat.slug}`}>
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
                        <span
                          href={`/collections/${cat.slug}`}
                          className="relative block w-full aspect-square"
                        >
                          <div className="absolute inset-0 m-2.5 rounded-full opacity-25 z-10 pointer-events-none transition duration-300">
                            <img
                              src="/categories/icon-watch-dial.webp"
                              alt=""
                              className="w-full h-full object-cover rounded-full  group-hover:scale-95 transition-transform duration-500"
                            />
                          </div>

                          {/* Main Image */}
                          <img
                            src={cat.image}
                            alt={cat.name}
                            loading="lazy"
                            className="absolute inset-0  object-cover 
             transition-transform duration-500 group-hover:scale-105 
             w-[calc(100%-20px)] h-[calc(100%-20px)] 
             mx-auto bottom-0 right-0 top-2.5
             rounded-full shadow-[0_0_10px_#00000026]"
                          />
                        </span>
                      </div>
                    </div>

                    {/* Category Info */}
                    <div className="text-center mt-6">
                      <h4 className="text-2xl capitalize group-hover:text-stone-500 pt-3 font-semibold text-neutral-950">
                        {cat.name}
                      </h4>
                      <p className="text-neutral-500/60 text-lg font-medium">
                        {cat.Products.length} products
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Dots Pagination */}
        {shouldShowNavigation && (
          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: totalPages }).map((_, i) => (
              <div
                key={i}
                onClick={() => goToPage(i)}
                className={`h-2 rounded-full cursor-pointer transition-all ${
                  currentPage === i
                    ? "bg-primary-yellow w-2"
                    : "bg-gray-200 w-2"
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
