export default function ProductHero() {
  return (
    <section className="w-full bg-white">
      <div className="max-w-[1400px] mx-auto px-4 md:px-12 py-6">
        <nav className="text-[16px] leading-5 font-medium">
          <ul className="flex items-center">
            <li className="inline-block px-[3px] text-gray-900 hover:underline cursor-pointer">
              Home
            </li>

            <li className="inline-block px-[3px] text-gray-400">/</li>

            <li className="inline-block px-[3px] text-gray-900">
              Smartwatches & Fitness Trackers
            </li>
          </ul>
        </nav>
      </div>

      <div className="relative h-[300px] w-full overflow-hidden">
        <img
          src="/col-2.webp"
          alt="Close up watch background"
          className="w-full h-full object-cover brightness-[0.6] object-center"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-white text-4xl!  font-semibold text-center tracking-tight px-4 drop-shadow-2xl">
            Smartwatches & Fitness Trackers
          </h1>
        </div>
      </div>
    </section>
  );
}
