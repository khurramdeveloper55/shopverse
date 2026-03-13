import React, { useState, useEffect, useCallback } from "react";
import { PRODUCTS } from "../constants";
import { Eye, Heart, ChevronLeft, ChevronRight, Repeat } from "lucide-react";

export default function ProductGrid() {
  const [activeTab, setActiveTab] = useState("Classic");
  const [startIndex, setStartIndex] = useState(0);
  const [itemsPerRow, setItemsPerRow] = useState(3);
  const tabs = ["Classic", "Modern", "Top Rated"];
  const totalVisible = itemsPerRow * 2;
  const shouldShowNavigation = totalVisible < PRODUCTS.length;

  const updateLayout = useCallback(() => {
    const width = window.innerWidth;
    if (width >= 1200) {
      setItemsPerRow(4);
    } else if (width >= 768) {
      setItemsPerRow(2);
    } else {
      setItemsPerRow(2);
    }
  }, []);

  useEffect(() => {
    updateLayout();
    window.addEventListener("resize", updateLayout);
    return () => window.removeEventListener("resize", updateLayout);
  }, [updateLayout]);

  const next = () => {
    if (!shouldShowNavigation) return;
    setStartIndex((prev) => (prev + 1) % PRODUCTS.length);
  };

  const prev = () => {
    if (!shouldShowNavigation) return;
    setStartIndex((prev) => (prev - 1 + PRODUCTS.length) % PRODUCTS.length);
  };

  const getDisplayedProducts = () => {
    const displayed = [];
    for (let i = 0; i < totalVisible; i++) {
      displayed.push(PRODUCTS[(startIndex + i) % PRODUCTS.length]);
    }
    return displayed;
  };

  const displayedItems = getDisplayedProducts();
  const firstRow = displayedItems.slice(0, itemsPerRow);
  const secondRow = displayedItems.slice(itemsPerRow, totalVisible);

  return (
    <section className="py-20 bg-white relative group/slider">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-12">
          <span className="primary-yellow text-xs uppercase tracking-[0.3em] font-semibold">
            BEST SELLERS
          </span>
          <h3>Latest styles & innovations in timekeeping</h3>

          <div className="flex justify-center items-center gap-0 mt-4 text-2xl font-semibold tracking-widest uppercase">
            {tabs.map((tab, idx) => (
              <React.Fragment key={tab}>
                <button
                  onClick={() => setActiveTab(tab)}
                  className={`transition-colors px-2 ${
                    activeTab === tab
                      ? "primary-yellow"
                      : "text-gray-400 hover:text-black"
                  }`}
                >
                  {tab}
                </button>
                {idx < tabs.length - 1 && (
                  <span className="text-gray-300">/</span>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Navigation Arrows */}
        {shouldShowNavigation && (
          <button
            onClick={prev}
            className="absolute left-4 top-[60%] -translate-y-1/2 z-20 bg-white p-3 rounded-full shadow-md text-gray-400 hover:primary-yellow transition-all opacity-0 group-hover/slider:opacity-100 -translate-x-4 group-hover/slider:translate-x-0"
            aria-label="Previous products"
          >
            <ChevronLeft size={24} />
          </button>
        )}

        {shouldShowNavigation && (
          <button
            onClick={next}
            className="absolute right-4 top-[60%] -translate-y-1/2 z-20 bg-white p-3 rounded-full shadow-md text-gray-400 hover:primary-yellow transition-all opacity-0 group-hover/slider:opacity-100 translate-x-4 group-hover/slider:translate-x-0"
            aria-label="Next products"
          >
            <ChevronRight size={24} />
          </button>
        )}

        {/* Slider Rows */}
        <div className="flex flex-col gap-y-12 max-w-7xl mx-auto px-4">
          {/* First Row */}
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {firstRow.map((product, i) => (
              <ProductCard
                key={`r1-${product.id}-${startIndex}-${i}`}
                product={product}
              />
            ))}
          </div>
          {/* Second Row */}
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {secondRow.map((product, i) => (
              <ProductCard
                key={`r2-${product.id}-${startIndex}-${i}`}
                product={product}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const ProductCard = ({ product }) => (
  <div className="group flex flex-col items-center animate-fade-in relative">
    {/* Image Area */}
    <div className="relative w-full aspect-[1/1.2] bg-[#fffbf3] overflow-hidden mb-8 flex items-center justify-center ">
      {/* Primary Image */}
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-full object-contain transition-all duration-700 group-hover:opacity-0 group-hover:scale-105"
      />

      {/* Hover Image */}
      <img
        src={product.hoverImage || product.image}
        alt={product.name}
        className="absolute w-full h-full object-contain p-3 opacity-0 transition-all duration-700 group-hover:opacity-100 group-hover:scale-105"
      />

      {/* Badges */}
      {product.tag && (
        <div
          className={`absolute top-4 left-4 z-20 ${
            product.tag === "Sold Out"
              ? "text-red-500 bg-white border border-red-500"
              : "bg-[#40C9AF] text-white"
          } text-[9px] px-2 py-1 font-bold uppercase tracking-[0.2em]`}
        >
          {product.tag}
        </div>
      )}

      {/* Timer Logic */}
      {product.hasTimer && (
        <div className="absolute bottom-4 left-4 right-4 flex justify-between bg-white py-2 px-3 rounded-sm shadow-sm border border-gray-100 opacity-95 z-10 transition-opacity group-hover:opacity-0 pointer-events-none">
          <div className="text-center flex-1 border-r border-gray-100">
            <div className="text-[12px] font-bold">1447</div>
            <div className="text-[7px] uppercase text-gray-400 font-bold tracking-tighter">
              Days
            </div>
          </div>
          <div className="text-center flex-1 border-r border-gray-100">
            <div className="text-[12px] font-bold">21</div>
            <div className="text-[7px] uppercase text-gray-400 font-bold tracking-tighter">
              Hours
            </div>
          </div>
          <div className="text-center flex-1 border-r border-gray-100">
            <div className="text-[12px] font-bold">14</div>
            <div className="text-[7px] uppercase text-gray-400 font-bold tracking-tighter">
              Mins
            </div>
          </div>
          <div className="text-center flex-1">
            <div className="text-[12px] font-bold">55</div>
            <div className="text-[7px] uppercase text-gray-400 font-bold tracking-tighter">
              Secs
            </div>
          </div>
        </div>
      )}

      {/* Hover Action Icons */}
      <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-3 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0 z-9999">
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

    {/* Product Info */}
    <div className="text-center w-full px-4 flex flex-col items-center pb-2">
      <p className="text-[11px] text-gray-500 font-semibold tracking-[0.25em] uppercase mb-1">
        {product.brand}
      </p>
      <h3 className=" hover:text-[#C5A059] cursor-pointer mb-1 leading-snug text-[#111111] rajdhani-medium text-[22px]! tracking-normal normal-case transition-all duration-300">
        {product.name}
      </h3>
      <div className="text-[#C5A059] text-lg flex justify-center mb-2 tracking-[3px]">
        {"★".repeat(product.rating)}
      </div>

      {/* Container for Price / Add to Cart Toggle */}
      <div className="relative w-full h-[18px] overflow-hidden flex flex-col items-center">
        {/* Price State */}
        <div
          className={`flex items-center justify-center gap-2 transition-all duration-300 ${
            product.tag !== "Sold Out"
              ? "group-hover:-translate-y-full opacity-100 group-hover:opacity-0"
              : "opacity-100"
          }`}
        >
          <span className="font-medium text-[#333] text-[16px]">
            Rs. {product.price.toFixed(2)}
          </span>
          {product.oldPrice && (
            <span className="text-[13px] text-gray-400 line-through">
              Rs. {product.oldPrice.toFixed(2)}
            </span>
          )}
        </div>

        {/* Add to Cart State (Absolute so it occupies the same space) */}
        {product.tag !== "Sold Out" && (
          <div className="absolute inset-0 flex items-center justify-center translate-y-full group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
            <button className="text-[13px] font-bold text-black uppercase tracking-[0.2em] border-b-2 border-black pb-0.5 hover:text-[#C5A059] hover:border-[#C5A059] transition-all whitespace-nowrap cursor-pointer z-30">
              ADD TO CART
            </button>
          </div>
        )}
      </div>
    </div>
  </div>
);
