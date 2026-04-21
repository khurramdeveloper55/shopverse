import { motion } from "framer-motion";
import useCategories from "../hooks/useCategories";
import { Link } from "react-router-dom";
export default function Collections() {
  const { categories, isPending } = useCategories();

  return (
    <div>
      <div className="max-w-350 mx-auto px-4 md:px-12 py-6">
        <nav className="text-[14px] leading-5 font-medium">
          <ul className="flex items-center">
            <li className="inline-block px-0.75 text-gray-900 hover:underline cursor-pointer open-sans">
              <Link to="/">Home</Link>
            </li>

            <li className="inline-block px-0.75 text-gray-400">/</li>

            <li className="inline-block px-0.75 text-gray-900 open-sans">
              Collections
            </li>
          </ul>
        </nav>
      </div>
      {/* Category Grid */}
      <section className="pb-20 pt-12 max-w-300 mx-auto md:px-0 px-6">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
            {isPending
              ? // Show Skeletons while loading
                Array.from({ length: 6 }).map((_, idx) => (
                  <CollectionCardSkeleton key={idx} />
                ))
              : categories?.map((cat, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ y: -5 }}
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      ease: "easeOut",
                    }}
                    className="group cursor-pointer"
                  >
                    <Link to={`/collections/${cat.slug}`}>
                      <div className="aspect-4/5 overflow-hidden bg-neutral-100 mb-6">
                        <img
                          src={cat.bgImage}
                          alt={cat.name}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                          referrerPolicy="no-referrer"
                        />
                      </div>

                      <div className="text-center">
                        <h3 className="text-3xl! font-semibold! mb-1 group-hover:text-accent transition-colors">
                          {cat.name}
                        </h3>
                        <p className="text-neutral-500 open-sans text-md ">
                          {cat.Products.length} products
                        </p>
                      </div>
                    </Link>
                  </motion.div>
                ))}
          </div>
        </div>
      </section>
    </div>
  );
}

const CollectionCardSkeleton = () => {
  return (
    <div className="group cursor-pointer">
      {/* Image Skeleton with Shimmer */}
      <div className="aspect-4/5 bg-neutral-100 mb-6 rounded-xl relative overflow-hidden">
        <div className="w-full h-full bg-linear-to-r from-gray-200 via-gray-100 to-gray-200 bg-size-[200%_100%] animate-shimmer" />
      </div>

      {/* Text Content Skeleton */}
      <div className="text-center">
        <div className="h-9 w-48 bg-gray-200 rounded mx-auto mb-3" />
        <div className="h-5 w-32 bg-gray-200 rounded mx-auto" />
      </div>
    </div>
  );
};
