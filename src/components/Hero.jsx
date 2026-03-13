import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=1920",
    tag: "Timeless Style",
    title: "Discover Watches That Define Elegance",
    description:
      "From classic leather to modern smart designs, explore our curated collection for every wrist.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1547996160-81dfa63595dd?auto=format&fit=crop&q=80&w=1920",
    tag: "Modern Precision",
    title: "The Future of Timekeeping is Here",
    description:
      "Experience the perfect blend of technology and craftsmanship with our latest smartwatch arrivals.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1508057198894-247b23fe5ade?auto=format&fit=crop&q=80&w=1920",
    tag: "Limited Edition",
    title: "Exclusive Designs For Rare Moments",
    description:
      "Each piece in our luxury collection is a masterpiece of precision and aesthetic perfection.",
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prevSlide = () =>
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  useEffect(() => {
    const timer = setInterval(nextSlide, 8000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-[85vh] bg-black overflow-hidden flex items-center">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === current ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          {/* Background with overlay */}
          <div className="absolute inset-0">
            <img
              src={slide.image}
              alt={slide.title}
              className={`w-full h-full object-cover transition-transform duration-10000 ease-linear ${
                index === current ? "scale-110" : "scale-100"
              }`}
            />
            <div className="absolute inset-0 bg-black/50"></div>
          </div>

          <div className="container mx-auto px-4 relative h-full flex items-center">
            <div className="max-w-2xl text-left text-white">
              <span className=" uppercase tracking-[0.3em] text-xs font-semibold mb-6 block animate-fade-in-down">
                {slide.tag}
              </span>
              <h1 className="text-5xl md:text-7xl lg:text-8xl leading-tight mb-8 font-semibold animate-fade-in-up">
                {slide.title}
              </h1>
              <p className=" text-lg mb-10 font-light max-w-lg leading-relaxed animate-fade-in-up delay-200">
                {slide.description}
              </p>
              <button className="group border border-gold hover:bg-gold transition-all duration-300 px-8 py-4 flex items-center gap-3 uppercase tracking-widest text-xs font-bold animate-fade-in-up delay-300">
                Shop Now
                <ChevronRight
                  size={16}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </button>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors z-20"
      >
        <ChevronLeft size={40} strokeWidth={1} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors z-20"
      >
        <ChevronRight size={40} strokeWidth={1} />
      </button>

      {/* Pagination Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-3 z-20">
        {slides.map((_, i) => (
          <div
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-2 h-2 rounded-full cursor-pointer transition-all ${
              i === current ? "bg-gold w-6" : "bg-white/30 hover:bg-white"
            }`}
          ></div>
        ))}
      </div>
    </section>
  );
}
