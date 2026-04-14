import { Link } from "react-router-dom";
import useCategories from "../hooks/useCategories";
import { motion } from "framer-motion";

export default function BannerAds() {
  const { categories } = useCategories();
  const smartwatches = categories?.map((cat) => cat.slug)[3];
  const timepieces = categories?.map((cat) => cat.slug)[1];

  return (
    <section className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Left Banner */}
      <div className="relative h-[400px] overflow-hidden group">
        <motion.img
          initial={{ scale: 1.1 }}
          whileInView={{ scale: 1 }}
          transition={{
            duration: 0.4,
            ease: "easeOut",
          }}
          src="/featured-image-1.webp"
          alt="Smartwatches"
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors"></div>
        <div className="absolute inset-0 flex flex-col justify-center px-12 text-white">
          <span className="primary-yellow text-[14px] uppercase tracking-[0.3em] mb-4 font-semibold text-left">
            Smart & Connected
          </span>
          <h2 className="text-3xl text-left font-semibold mb-6 ">
            Stay ahead with smartwatches built for modern life
          </h2>
          <Link
            to={`/collections/${smartwatches}`}
            className="text-[14px] hover:text-gray-200 font-bold uppercase tracking-widest border-b border-white w-fit pb-1 hover:border-gray-200  transition-all"
          >
            View Products
          </Link>
        </div>
      </div>

      {/* Right Banner */}
      <div className="relative h-[400px] overflow-hidden group">
        <motion.img
          initial={{ scale: 1.2 }}
          whileInView={{ scale: 1 }}
          transition={{
            duration: 0.6,
            ease: "easeOut",
          }}
          src="/featured-image-2.webp"
          alt="Sport Watches"
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors"></div>
        <div className="absolute inset-0 flex flex-col justify-center items-end px-12 text-white text-right">
          <span className="primary-yellow text-[14px] uppercase tracking-[0.3em] mb-4 font-semibold ">
            Sport & Adventure
          </span>
          <h2 className="text-3xl font-semibold mb-6 ">
            Rugged timepieces ready for your next challenge
          </h2>
          <Link
            to={`/collections/${timepieces}`}
            className="text-[14px] hover:text-gray-200 font-bold uppercase tracking-widest border-b border-white w-fit pb-1 hover:border-gray-200  transition-all"
          >
            Shop Now
          </Link>
        </div>
      </div>
    </section>
  );
}
