export default function FeaturedSection() {
  return (
    <section className="relative w-full min-h-[500px] md:h-[650px] flex items-center bg-[#f4f4f4] overflow-hidden">
      {/* Background Image - Top down watch on light texture */}
      <div className="absolute inset-0 z-0">
        <img
          src="/smart-watch-bg.webp"
          alt="Smartwatch Background"
          className="w-full h-full object-cover object-left md:object-center"
        />
      </div>

      <div className="container mx-auto px-4 md:px-20 relative z-10 flex justify-end">
        {/* Content Box */}
        <div className="max-w-xl text-left">
          <span className="primary-yellow text-xs font-semibold uppercase tracking-[0.3em] mb-4 block">
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
          <a
            href="#"
            className="
    relative overflow-hidden inline-block px-[35px] py-3 border border-yellow-700 
    text-left text-yellow-700 uppercase tracking-wide font-semibold
    bg-transparent rounded-md transition duration-300
    hover:text-white

    before:content-[''] before:absolute before:block before:-z-10
    before:bg-yellow-700
    before:w-[120%] before:h-[110%]
    before:top-0 before:left-0 before:right-0 before:bottom-0
    before:origin-bottom-left
    before:rotate-[4deg]
    before:translate-y-[108%] before:-translate-x-4
    before:transition-transform before:duration-200
    before:[transition-timing-function:cubic-bezier(.17,.67,.83,.67)]

    hover:before:rotate-0 hover:before:translate-y-0 hover:before:translate-x-0
  "
          >
            Discover Now
          </a>
        </div>
      </div>
    </section>
  );
}
