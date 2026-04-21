import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function CategoryPageHero({ category, isPending }) {
  if (isPending || !category) {
    return <CategoryPageHeroSkeleton />;
  }
  return (
    <section className="w-full bg-white">
      <div className="max-w-350 mx-auto px-4 md:px-12 py-6">
        <nav className="text-[14px] leading-5 font-medium">
          <ul className="flex items-center">
            <li className="inline-block px-0.75 text-gray-900 hover:underline cursor-pointer open-sans">
              <Link to="/">Home</Link>
            </li>

            <li className="inline-block px-0.75 text-gray-400">/</li>

            <li className="inline-block px-0.75 text-gray-900 open-sans">
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

function CategoryPageHeroSkeleton() {
  return (
    <section className="w-full bg-white">
      {/* Breadcrumb Skeleton */}
      <div className="max-w-350 mx-auto px-4 md:px-12 py-6">
        <nav className="text-[14px] leading-5 font-medium">
          <ul className="flex items-center">
            <li className="inline-block px-0.75 text-gray-900 open-sans">
              <Link to="/">Home</Link>
            </li>
            <li className="inline-block px-0.75 text-gray-400">/</li>
            <li className="inline-block px-0.75">
              <div className="h-5 w-32 bg-gray-200 rounded animate-pulse" />
            </li>
          </ul>
        </nav>
      </div>

      {/* Hero Image + Overlay Skeleton */}
      <div className="relative h-84 w-full bg-gray-200 overflow-hidden">
        {/* Shimmer Effect on Background */}
        <div className="absolute inset-0 bg-linear-to-r from-gray-200 via-gray-100 to-gray-200 bg-size-[200%_100%] animate-shimmer object-cover" />

        {/* Title Skeleton */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="h-12 w-80 bg-white/30 backdrop-blur-sm rounded-lg animate-pulse" />
        </div>
      </div>
    </section>
  );
}
