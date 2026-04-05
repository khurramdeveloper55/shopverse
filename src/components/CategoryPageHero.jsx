export default function CategoryPageHero({ category }) {
  return (
    <section className="w-full bg-white">
      <div className="max-w-[1400px] mx-auto px-4 md:px-12 py-6">
        <nav className="text-[16px] leading-5 font-medium">
          <ul className="flex items-center">
            <li className="inline-block px-[3px] text-gray-900 hover:underline cursor-pointer">
              <a href="/">Home</a>
            </li>

            <li className="inline-block px-[3px] text-gray-400">/</li>

            <li className="inline-block px-[3px] text-gray-900">
              {category.name}
            </li>
          </ul>
        </nav>
      </div>

      <div className="relative h-[300px] w-full overflow-hidden">
        <img
          src={`${category.bgImage}`}
          alt="Close up watch background"
          className="w-full h-full object-cover brightness-[0.6] object-center"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-white text-4xl!  font-semibold text-center tracking-tight px-4 drop-shadow-2xl">
            {category.name}
          </h1>
        </div>
      </div>
    </section>
  );
}
