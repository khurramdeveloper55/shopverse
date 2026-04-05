import Hero from "../components/Hero";
import Categories from "../components/Categories";
import BannerAds from "../components/BannerAds";
import ProductGrid from "../components/ProductGrid";
import FeaturedSection from "../components/FeaturedSection";
import ElegantSlider from "../components/ElegantSlider";
import Craftsmanship from "../components/Craftsmanship";
import ServiceFeatures from "../components/ServiceFeatures";
import Testimonials from "../components/Testimonials";
import BlogSection from "../components/BlogSection";

export default function Home() {
  return (
    <>
      <Hero />
      <Categories />
      <BannerAds />
      <ProductGrid />
      <FeaturedSection />
      <ElegantSlider />
      <Craftsmanship />
      <ServiceFeatures />

      {/* Promo Offer Banner */}
      <section className="relative py-12">
        <div
          className="absolute inset-0 bg-cover bg-fixed bg-center z-0"
          style={{ backgroundImage: "url('/wristwatch.webp')" }}
        ></div>

        {/* Gradient overlay (like ::before) */}
        <div className="absolute inset-0 z-10 opacity-75 bg-linear-to-r from-[#111111] to-transparent"></div>
        <div className="relative container z-30 mx-auto px-4 flex flex-col md:flex-row items-center justify-start gap-8 text-center md:text-left">
          <div className="text-5xl text-white md:text-6xl font-serif text-gold font-bold">
            30%
          </div>
          <div className=" text-white text-left max-w-lg">
            <h5 className="text-2xl font-semibold mb-3">
              Limited Time Offer – 20% Off All Watches
            </h5>
            <p className="text-white open-sans leading-relaxed">
              Upgrade your wrist game today! Enjoy 20% off our entire collection
              — from classic analog to modern smartwatches. No code needed.
              Offer valid while supplies last.
            </p>
          </div>
        </div>
      </section>

      <Testimonials />
      <BlogSection />
    </>
  );
}
