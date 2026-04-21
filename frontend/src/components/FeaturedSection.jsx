import { Link } from "react-router-dom";
import Button from "./Button";
import useCategories from "../hooks/useCategories";

export default function FeaturedSection() {
  const { categories } = useCategories();
  const catLink = categories?.map((cat) => cat.slug)[3];

  return (
    <section className="relative w-full min-h-125 md:h-137.5 flex items-center bg-[#f4f4f4] overflow-hidden">
      {/* Background Image - Top down watch on light texture */}
      <div className="absolute inset-0 z-0">
        <img
          src="/smart-watch-bg.webp"
          alt="Smartwatch Background"
          className="w-full h-full object-cover object-left md:object-center"
        />
      </div>

      <div
        className="container mx-auto px-4 py-6 md:px-20 relative z-10 flex justify-end 
  before:content-[''] before:absolute before:inset-0 
  before:bg-white before:opacity-30 before:-z-10 
  before:transition-all before:duration-300
  md:before:hidden"
      >
        {/* Content Box */}
        <div className="max-w-xl text-left">
          <span className="primary-yellow text-[14px] font-semibold uppercase tracking-[0.3em] mb-4 block">
            PRECISION MEETS TIMELESS DESIGN
          </span>
          <h2 className="text-4xl font-semibold text-neutral-950 leading-tight mb-8 font-sans">
            Crafted for Every Moment
          </h2>
          <p className=" text-[15px] md:text-[16px] mb-10 leading-relaxed open-sans text-neutral-950">
            Explore our curated selection of watches built to elevate your
            everyday style. From classic analog to cutting-edge smartwatches —
            time has never looked this good.
          </p>
          <Link to={`/collections/${catLink}`}>
            <Button>Discover Now</Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
