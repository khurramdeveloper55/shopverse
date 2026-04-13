import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function CategoryPageHero({ category }) {
  if (!category) {
    return (
      <section className="w-full bg-white">
        <div className="max-w-[1400px] mx-auto px-4 md:px-12 py-6">
          <nav className="text-[14px] leading-5 font-medium">
            <ul className="flex items-center">
              <li className="inline-block px-[3px] text-gray-900 hover:underline cursor-pointer open-sans">
                <Link to="/">Home</Link>
              </li>
              <li className="inline-block px-[3px] text-gray-400">/</li>
              <li className="inline-block px-[3px] text-gray-900 open-sans">
                Loading...
              </li>
            </ul>
          </nav>
        </div>

        {/* Skeleton for hero image */}
        <div className="relative h-84 w-full bg-gray-200 animate-pulse" />
      </section>
    );
  }
  return (
    <section className="w-full bg-white">
      <div className="max-w-[1400px] mx-auto px-4 md:px-12 py-6">
        <nav className="text-[14px] leading-5 font-medium">
          <ul className="flex items-center">
            <li className="inline-block px-[3px] text-gray-900 hover:underline cursor-pointer open-sans">
              <Link to="/">Home</Link>
            </li>

            <li className="inline-block px-[3px] text-gray-400">/</li>

            <li className="inline-block px-[3px] text-gray-900 open-sans">
              {category.name}
            </li>
          </ul>
        </nav>
      </div>

      <div className="relative h-84 w-full overflow-hidden">
        <motion.img
          src={category.bgImage}
          alt={category.name}
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{
            duration: 0.4,
            ease: "easeOut",
          }}
          className="w-full h-full object-cover brightness-[0.6] object-center"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-white text-[40px]!  font-semibold text-center tracking-tight px-4 drop-shadow-2xl">
            {category.name}
          </h1>
        </div>
      </div>
    </section>
  );
}
