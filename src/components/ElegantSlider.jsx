import React, { useState, useEffect, useCallback } from "react";
import {
  ShoppingBag,
  Eye,
  Heart,
  BarChart2,
  ChevronLeft,
  ChevronRight,
  Repeat,
} from "lucide-react";

const ELEGANT_PRODUCTS = [
  {
    id: "e1",
    brand: "TECHCHRONO",
    name: "Smartwatch with Call & Message Notifications",
    price: 25.0,
    rating: 5,
    image: "/watches/watch-1.webp",
    hoverImage: "/watches/watch-1-alt.webp",
  },
  {
    id: "e2",
    brand: "FITPULSE",
    name: "Smart Fitness Tracker Watch",
    price: 25.0,
    rating: 5,
    image: "/watches/watch-2.webp",
    hoverImage: "/watches/watch-2-alt.png",
  },
  {
    id: "e3",
    brand: "GEARGUARD",
    name: "Military Tactical Digital Watch",
    price: 25.0,
    rating: 5,
    image: "/watches/watch-3.webp",
    hoverImage: "/watches/watch-3-alt.webp",
    hasTimer: true,
  },
  {
    id: "e4",
    brand: "TIMECRAFT",
    name: "Classic Vintage Leather",
    price: 22.0,
    rating: 4,
    image: "/watches/watch-4.webp",
    hoverImage: "/watches/watch-4-alt.webp",
  },
];

export default function ElegantSlider() {
  const [startIndex, setStartIndex] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(3);

  const updateLayout = useCallback(() => {
    const width = window.innerWidth;
    if (width >= 1024) setItemsToShow(3);
    else if (width >= 640) setItemsToShow(2);
    else setItemsToShow(1);
  }, []);

  useEffect(() => {
    updateLayout();
    window.addEventListener("resize", updateLayout);
    return () => window.removeEventListener("resize", updateLayout);
  }, [updateLayout]);

  const next = () =>
    setStartIndex((prev) => (prev + 1) % ELEGANT_PRODUCTS.length);
  const prev = () =>
    setStartIndex(
      (prev) => (prev - 1 + ELEGANT_PRODUCTS.length) % ELEGANT_PRODUCTS.length
    );

  const displayedItems = [];
  for (let i = 0; i < itemsToShow; i++) {
    displayedItems.push(
      ELEGANT_PRODUCTS[(startIndex + i) % ELEGANT_PRODUCTS.length]
    );
  }

  return (
    <section className="py-24 bg-white relative group/elegant overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="primary-yellow text-xs uppercase tracking-[0.4em] font-bold block mb-4">
            CLASSIC COLLECTION
          </span>
          <h2 className="text-3xl md:text-[42px] font-bold text-gray-900 tracking-tight">
            Elegant designs that never go out of style
          </h2>
        </div>

        {/* Slider Container */}
        <div className="relative px-4 md:px-12">
          {/* Arrows */}
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-white w-10 h-10 rounded-full shadow-md flex items-center justify-center text-gray-400 hover:primary-yellow transition-all"
            aria-label="Previous slide"
          >
            <ChevronLeft size={20} />
          </button>

          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-white w-10 h-10 rounded-full shadow-md flex items-center justify-center text-gray-400 hover:primary-yellow transition-all"
            aria-label="Next slide"
          >
            <ChevronRight size={20} />
          </button>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayedItems.map((item, i) => (
              <div
                key={`${item.id}-${i}`}
                className="group/card flex flex-col items-center animate-fade-in"
              >
                {/* Image Area */}
                <div className="relative w-full aspect-[1/1.2] bg-[#fffbf3] flex items-center justify-center p-8 mb-8 overflow-hidden ">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-contain transition-all duration-700 group/card-hover:opacity-0 group-hover:scale-105"
                  />

                  {/* Hover Image */}
                  <img
                    src={item.hoverImage || item.image}
                    alt={item.name}
                    className="absolute w-full h-full object-contain p-3 opacity-0 transition-all duration-700 group-hover/card:opacity-100 group-hover:scale-105"
                  />

                  {/* Countdown Timer for Military Watch */}
                  {item.hasTimer && (
                    <div className="absolute bottom-6 left-6 right-6 flex justify-between bg-white py-3 px-4 shadow-sm border border-gray-100/50">
                      <div className="text-center flex-1 border-r border-gray-100">
                        <div className="text-[14px] font-bold leading-none">
                          1687
                        </div>
                        <div className="text-[8px] uppercase text-gray-400 font-bold mt-1">
                          Days
                        </div>
                      </div>
                      <div className="text-center flex-1 border-r border-gray-100">
                        <div className="text-[14px] font-bold leading-none">
                          21
                        </div>
                        <div className="text-[8px] uppercase text-gray-400 font-bold mt-1">
                          Hours
                        </div>
                      </div>
                      <div className="text-center flex-1 border-r border-gray-100">
                        <div className="text-[14px] font-bold leading-none">
                          12
                        </div>
                        <div className="text-[8px] uppercase text-gray-400 font-bold mt-1">
                          Mins
                        </div>
                      </div>
                      <div className="text-center flex-1">
                        <div className="text-[14px] font-bold leading-none">
                          08
                        </div>
                        <div className="text-[8px] uppercase text-gray-400 font-bold mt-1">
                          Secs
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Hover Tools */}
                  <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-3 opacity-0 group-hover/card:opacity-100 transition-all duration-500 translate-y-4 group-hover/card:translate-y-0 z-9999">
                    <button
                      className="bg-white p-3 rounded-full shadow-lg text-gray-700 hover:bg-[#C5A059] hover:text-white transition-colors"
                      title="Add to Wishlist"
                    >
                      <Heart size={18} />
                    </button>
                    <button
                      className="bg-white p-3 rounded-full shadow-lg text-gray-700 hover:bg-[#C5A059] hover:text-white transition-colors"
                      title="Quick View"
                    >
                      <Eye size={18} />
                    </button>
                    <button
                      className="bg-white p-3 rounded-full shadow-lg text-gray-700 hover:bg-[#C5A059] hover:text-white transition-colors"
                      title="Compare"
                    >
                      <Repeat size={18} />
                    </button>
                  </div>
                </div>

                {/* Text Content */}
                <div className="text-center w-full px-4 flex flex-col items-center pb-2">
                  <p className="text-[11px] text-gray-500 font-semibold tracking-[0.25em] uppercase mb-1">
                    {item.brand}
                  </p>
                  <h3 className=" hover:text-[#C5A059] cursor-pointer mb-1 leading-snug text-[#111111] rajdhani-medium text-[22px]! tracking-normal normal-case transition-all duration-300">
                    {item.name}
                  </h3>
                  <div className="text-[#C5A059] text-lg flex justify-center mb-2 tracking-[3px]">
                    {"★".repeat(item.rating)}
                  </div>

                  {/* Container for Price / Add to Cart Toggle */}
                  <div className="relative w-full h-[18px] overflow-hidden flex flex-col items-center">
                    {/* Price State */}
                    <div
                      className={`flex items-center justify-center gap-2 transition-all duration-300 ${
                        item.tag !== "Sold Out"
                          ? "group-hover/card:-translate-y-full opacity-100 group-hover/card:opacity-0"
                          : "opacity-100"
                      }`}
                    >
                      <span className="font-medium text-[#333] text-[16px]">
                        Rs. {item.price.toFixed(2)}
                      </span>
                      {item.oldPrice && (
                        <span className="text-[13px] text-gray-400 line-through">
                          Rs. {item.oldPrice.toFixed(2)}
                        </span>
                      )}
                    </div>

                    {/* Add to Cart State (Absolute so it occupies the same space) */}

                    <div className="absolute inset-0 flex items-center justify-center translate-y-full group-hover/card:translate-y-0 opacity-0 group-hover/card:opacity-100 transition-all duration-300">
                      <button className="text-[13px] font-bold text-black uppercase tracking-[0.2em] border-b-2 border-black pb-0.5 hover:text-[#C5A059] hover:border-[#C5A059] transition-all whitespace-nowrap cursor-pointer z-30">
                        ADD TO CART
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
