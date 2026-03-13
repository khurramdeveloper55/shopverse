import React, { useState } from "react";
import { TESTIMONIALS } from "../constants";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
export default function Testimonials() {
  const [startIndex, setStartIndex] = useState(0);
  const itemsPerPage = 3;

  const next = () => {
    setStartIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prev = () => {
    setStartIndex(
      (prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length
    );
  };

  // Circular slicing for display
  const getDisplayedItems = () => {
    const items = [];
    for (let i = 0; i < itemsPerPage; i++) {
      items.push(TESTIMONIALS[(startIndex + i) % TESTIMONIALS.length]);
    }
    return items;
  };

  return (
    <section className="py-24 bg-white relative">
      {/* Background Graphic */}
      <div className="absolute top-1/2 left-0 w-full h-1/2 bg-[#EEF2F5] z-0"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="primary-yellow text-xs uppercase tracking-[0.3em] font-semibold">
            Customers Choose Us
          </span>
          <h3>Trusted by Watch Lovers Worldwide</h3>
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={prev}
            className="hidden md:block bg-white p-3 rounded-full shadow-lg text-gray-400 hover:text-gold transition-colors z-20"
          >
            <ChevronLeft size={24} />
          </button>

          <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-8 overflow-hidden">
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
            className="hidden md:block bg-white p-3 rounded-full shadow-lg text-gray-400 hover:text-gold transition-colors z-20"
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
