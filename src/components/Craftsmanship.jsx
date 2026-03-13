export default function Craftsmanship() {
  return (
    <section>
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-12">
        <div className="relative w-full md:w-1/2">
          <div className="relative pr-[15%]">
            <div className="relative pt-[120%] overflow-hidden">
              <img
                src="/about-image-1.webp"
                alt=""
                className="absolute inset-0 w-full h-full object-cover transition-all"
              />
            </div>
          </div>

          <div className="absolute top-1/2 right-0 w-[40%] -translate-y-1/2 z-10">
            <div className="relative pt-[120%] overflow-hidden">
              <img
                src="/about-image-2.webp"
                alt=""
                className="absolute inset-0 w-full h-full object-cover transition-all"
              />
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/2">
          <div className="bg-white p-0 md:pl-12 text-left">
            <span className="block mb-3 primary-yellow text-xs font-semibold tracking-[3px] uppercase">
              The Art of Timekeeping
            </span>

            <h4 className="text-4xl font-semibold mb-5 leading-tight text-neutral-950">
              Experience Craftsmanship <br /> in Motion
            </h4>

            <p className="text-neutral-500 open-sans leading-relaxed">
              <br />
              Watch how precision engineering meets timeless design. <br />
              Our collection is more than just watches — it’s a statement of
              style and purpose.
              <br />
              <br />
            </p>

            <div className="mt-5">
              <a
                href="#"
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
    before:[transition-timing-function:cubic-bezier(.17,.67,.83,.67)]

    hover:before:rotate-0 hover:before:translate-y-0 hover:before:translate-x-0
  "
              >
                <span className="relative z-10">Shop Now</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
