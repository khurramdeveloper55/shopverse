export default function BannerAds() {
  return (
    <section className="container mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Left Banner */}
      <div className="relative h-[400px] overflow-hidden group">
        <img
          src="/featured-image-1.webp"
          alt="Smartwatches"
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors"></div>
        <div className="absolute inset-0 flex flex-col justify-center px-12 text-white">
          <span className="primary-yellow text-xs uppercase tracking-[0.3em] mb-4 font-semibold text-left">
            Smart & Connected
          </span>
          <h2 className="text-3xl text-left font-semibold mb-6 ">
            Stay ahead with smartwatches built for modern life
          </h2>
          <a
            href="#"
            className="text-xs font-bold uppercase tracking-widest border-b border-white/50 w-fit pb-1 hover:border-gold hover:text-gold transition-all"
          >
            View Products
          </a>
        </div>
      </div>

      {/* Right Banner */}
      <div className="relative h-[400px] overflow-hidden group">
        <img
          src="/featured-image-2.webp"
          alt="Sport Watches"
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors"></div>
        <div className="absolute inset-0 flex flex-col justify-center items-end px-12 text-white text-right">
          <span className="primary-yellow text-xs uppercase tracking-[0.3em] mb-4 font-semibold ">
            Sport & Adventure
          </span>
          <h2 className="text-3xl font-semibold mb-6 ">
            Rugged timepieces ready for your next challenge
          </h2>
          <a
            href="#"
            className="text-xs font-bold uppercase tracking-widest border-b border-white/50 w-fit pb-1 hover:border-gold hover:text-gold transition-all"
          >
            Shop Now
          </a>
        </div>
      </div>
    </section>
  );
}
