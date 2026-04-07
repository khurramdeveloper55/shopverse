import { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import useCategories from "../hooks/useCategories";

export default function () {
  const { categories, isLoading } = useCategories();
  const scrollRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      const progress = (scrollLeft / (scrollWidth - clientWidth)) * 100;
      setScrollProgress(progress);
    }
  };

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { clientWidth } = scrollRef.current;
      const scrollAmount = clientWidth * 0.8;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (el) {
      el.addEventListener("scroll", handleScroll);
      return () => el.removeEventListener("scroll", handleScroll);
    }
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="relative py-12 px-4 md:px-12 lg:pl-32 bg-white group/container">
      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto pb-8 no-scrollbar scroll-smooth"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {categories.map((cat) => (
          <a href={`/collections/${cat.slug}`}>
            <div
              key={cat.id}
              className="min-w-52 max-h-52 shrink-0 cursor-pointer transition-all duration-300 group overflow-hidden"
            >
              <div className="relative aspect-4/5 bg-[#e1e1de] overflow-hidden">
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-full h-full object-cover  object-[50%_-20px] mix-blend-multiply opacity-90 transition-transform duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />

                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 text-white pointer-events-none">
                  <h3 className="text-xl! font-semibold! leading-tight drop-shadow-lg  tracking-tight transform transition-transform duration-300 group-hover:-translate-y-1">
                    {cat.name}
                  </h3>
                  {cat.Products && (
                    <p className="mt-2 text-sm md:text-base font-medium drop-shadow-md opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                      {cat.Products.length} products
                    </p>
                  )}
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>

      <button
        onClick={() => scroll("left")}
        className={`absolute left-8 top-1/2 -translate-y-1/2 bg-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 z-10 ${
          scrollProgress <= 5
            ? "opacity-0 pointer-events-none"
            : "opacity-100 hover:bg-gray-100 active:scale-95"
        }`}
      >
        <ChevronLeft className="w-6 h-6 text-black" />
      </button>
      <button
        onClick={() => scroll("right")}
        className={`absolute right-8 top-1/2 -translate-y-1/2 bg-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 z-10 ${
          scrollProgress >= 95
            ? "opacity-0 pointer-events-none"
            : "opacity-100 hover:bg-gray-100 active:scale-95"
        }`}
      >
        <ChevronRight className="w-6 h-6 text-black" />
      </button>

      <div className="max-w-[1200px] mx-auto h-0.5 bg-gray-200 relative mt-4 overflow-hidden rounded-full">
        <div
          className="absolute top-0 left-0 h-full bg-black transition-all duration-300 ease-out"
          style={{
            width: "25%",
            transform: `translateX(${(scrollProgress / 100) * 300}%)`,
          }}
        />
      </div>
    </div>
  );
}
