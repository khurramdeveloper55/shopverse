import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const slides = [
  {
    image: "/slider-image-1.webp",
    tag: "Timeless Style",
    title: "Discover Watches That Define Elegance",
    description:
      "From classic leather to modern smart designs, explore our curated collection for every wrist.",
    link: "/collections/luxury-timepieces",
  },
  {
    image: "/slider-image-2.webp",
    tag: "Engineered for Precision",
    title: "Performance Meets Craftsmanship",
    description:
      "Stay ahead of time with durable, high-performance watches, crafted to match your pace and personality.",
    link: "/collections/minimalist-modern-designs",
  },
  {
    image: "/slider-image-3.webp",
    tag: "New Arrivals 2026",
    title: "Fresh Styles Just Landed",
    description:
      "Unbox the latest trends in men's and women's timepieces. Designed to turn heads and keep you on time.",
    link: "/collections/classic-leather-strap-watches",
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

          <div className="container mx-auto px-8 relative h-full flex items-center">
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
              <Link
                to={slide.link}
                className="
    relative isolate overflow-hidden inline-block px-[35px] py-3 border border-yellow-700 
    text-left text-yellow-700 uppercase tracking-wide font-semibold
    bg-transparent rounded-md transition duration-300
    hover:text-white

    before:content-[''] before:absolute before:block before:z-0
    before:bg-yellow-700
    before:w-[120%] before:h-[110%]
    before:top-0 before:left-0
    before:origin-bottom-left
    before:rotate-[4deg]
    before:translate-y-[108%] before:-translate-x-4
    before:transition-transform before:duration-200
    hover:before:rotate-0 hover:before:translate-y-0 hover:before:translate-x-0
  "
              >
                <span className="relative z-10">Shop Now</span>
              </Link>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 text-white/50 hover:text-[#a8741a] transition-colors z-20"
      >
        <ChevronLeft size={40} strokeWidth={1} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 text-white/50 hover:text-[#a8741a] transition-colors z-20"
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
              i === current
                ? "bg-primary-yellow w-6"
                : "bg-white/30 hover:bg-white"
            }`}
          ></div>
        ))}
      </div>
    </section>
  );
}
