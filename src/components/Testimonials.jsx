import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Testimonials() {
  const [startIndex, setStartIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3);

  const updateItemsPerPage = () => {
    const width = window.innerWidth;
    if (width >= 1024) setItemsPerPage(3);
    else if (width >= 768) setItemsPerPage(2);
    else setItemsPerPage(1);
  };

  useEffect(() => {
    updateItemsPerPage();
    window.addEventListener("resize", updateItemsPerPage);
    return () => window.removeEventListener("resize", updateItemsPerPage);
  }, []);

  const testimonials = [
    {
      id: "1",
      name: "Daniel Reyes",
      role: "CORPORATE EXECUTIVE",
      content:
        "The craftsmanship is truly outstanding. It's elegant enough for boardroom meetings and durable enough for everyday wear.",
      rating: 5,
    },
    {
      id: "2",
      name: "Maya Thompson",
      role: "FASHION BLOGGER",
      content:
        "This watch elevated my entire look. It's the perfect blend of minimalism and luxury — I get compliments every time I wear it.",
      rating: 5,
    },
    {
      id: "3",
      name: "Ryan Patel",
      role: "FITNESS COACH",
      content:
        "I needed something stylish but functional. Their smart fitness watch keeps up with my workouts and still looks sharp all day.",
      rating: 5,
    },
    {
      id: "4",
      name: "Sarah Jenkins",
      role: "DESIGNER",
      content:
        "Absolute perfection. The attention to detail in the movement is something you'd expect from watches triple the price.",
      rating: 5,
    },
  ];

  const next = () => {
    setStartIndex((prev) => (prev + itemsPerPage) % testimonials.length);
  };

  const prev = () => {
    setStartIndex(
      (prev) =>
        (prev - itemsPerPage + testimonials.length) % testimonials.length,
    );
  };

  const getDisplayedItems = () => {
    const items = [];
    for (let i = 0; i < itemsPerPage; i++) {
      items.push(testimonials[(startIndex + i) % testimonials.length]);
    }
    return items;
  };

  return (
    <section className="pt-24 pb-16 bg-white relative">
      <div className="absolute top-1/2 left-0 w-full h-1/2 bg-[#EEF2F5] z-0"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-8">
          <span className="primary-yellow text-[14px] uppercase tracking-[0.3em] font-semibold mb-2">
            Customers Choose Us
          </span>
          <h3>Trusted by Watch Lovers Worldwide</h3>
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={prev}
            className="hidden md:block bg-white p-3 rounded-full shadow-lg text-gray-400 transition-colors z-20"
          >
            <ChevronLeft size={24} />
          </button>

          <div
            className={`flex-1 grid gap-8 overflow-hidden ${
              itemsPerPage === 3
                ? "grid-cols-1 md:grid-cols-3"
                : itemsPerPage === 2
                  ? "grid-cols-1 md:grid-cols-2"
                  : "grid-cols-1"
            }`}
          >
            {getDisplayedItems().map((t) => (
              <div
                key={t.id}
                className="bg-white p-8 border border-gray-100 shadow-sm relative group hover:border-gold/30 transition-all animate-fade-in"
              >
                <div className="flex justify-between items-start ">
                  <div>
                    <h4 className="font-semibold text-xl text-left text-neutral-950">
                      {t.name}
                    </h4>
                    <p className="text-neutral-500/60 text-left text-sm mb-2 uppercase open-sans">
                      {t.role}
                    </p>

                    <div className="flex gap-1 mb-4 primary-yellow text-xl">
                      <span>{"★".repeat(t.rating)}</span>
                    </div>
                  </div>
                </div>

                <p className="text-neutral-500 open-sans text-left">
                  {t.content}
                </p>
              </div>
            ))}
          </div>

          <button
            onClick={next}
            className="hidden md:block bg-white p-3 rounded-full shadow-lg text-gray-400  transition-colors z-20"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Mobile controls */}
        <div className="flex md:hidden justify-center gap-4 mt-8">
          <button
            onClick={prev}
            className="bg-white p-3 rounded-full shadow-lg text-gray-400"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={next}
            className="bg-white p-3 rounded-full shadow-lg text-gray-400"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}
