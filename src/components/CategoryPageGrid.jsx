import { Eye, Heart, Repeat, SlidersHorizontal } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import useQuickView from "../hooks/useQuickView";
import QuickViewModal from "./QuickViewModal";
import useCartSelector from "../hooks/useCartSelector";
import useWishlistSelector from "../hooks/useWishlistSelector";
import { motion } from "motion/react";

export default function ProductGrid({
  sortBy,
  setSortBy,
  sortedProducts,
  onOpenMobileFilter,
}) {
  const { categoryName } = useParams();
  const { selectedProduct, openQuickView, closeQuickView } = useQuickView();

  return (
    <section className="pb-20 pt-0 bg-white relative group/slider">
      <div className="flex md:justify-end justify-between items-center mb-8 mt-4 ">
        <div className="flex items-center justify-between ">
          <div
            className="flex md:hidden gap-2 cursor-pointer"
            onClick={onOpenMobileFilter}
          >
            <SlidersHorizontal className="text-neutral-500" />
            <span className="open-sans text-neutral-500">Filter and sort</span>
          </div>
          {/* Sort Filter */}
          <div className="items-center justify-between grow space-x-4 pl-10 md:flex hidden">
            <label
              htmlFor="SortBy-sidebar"
              className="text-base open-sans opacity-70 font-semibold mr-2"
            >
              Sort by:
            </label>
            <div className="relative">
              <select
                id="SortBy-sidebar"
                name="sort_by"
                className="appearance-none cursor-pointer border border-none focus:outline-none rounded px-3 py-2 pr-8 text-base open-sans"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option value="title-ascending ">Alphabetically, A-Z</option>
                <option value="title-descending ">Alphabetically, Z-A</option>
                <option value="price-ascending ">Price, low to high</option>
                <option value="price-descending ">Price, high to low</option>
              </select>
              {/* Caret Icon */}
              <svg
                className="absolute right-2 top-1/2 transform -translate-y-1/2 w-3 h-3 pointer-events-none"
                viewBox="0 0 10 6"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M9.354.646a.5.5 0 00-.708 0L5 4.293 1.354.646a.5.5 0 00-.708.708l4 4a.5.5 0 00.708 0l4-4a.5.5 0 000-.708z"
                />
              </svg>
            </div>
          </div>
        </div>
        {/* Product count */}
        <div className="md:ml-20 ml-auto relative">
          <h2 className="text-base font-semibold opacity-60 open-sans">
            {sortedProducts.length} products
          </h2>
        </div>
      </div>
      <div className="container mx-auto md:px-4">
        {/* Slider Rows */}
        <div className="flex flex-col gap-y-12 max-w-7xl mx-auto px-4">
          {/* First Row */}
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sortedProducts.map((product, i) => (
              <ProductCard
                key={`r1-${product.id}`}
                product={product}
                categoryName={categoryName}
                openQuickView={openQuickView}
              />
            ))}
          </div>
        </div>
      </div>
      <QuickViewModal
        product={selectedProduct}
        isOpen={!!selectedProduct}
        onClose={closeQuickView}
      />
    </section>
  );
}

const ProductCard = ({ product, categoryName, openQuickView }) => {
  const { isInCart, handleAddToCart } = useCartSelector(product);
  const { isInWishlist, handleToggleWishlist } = useWishlistSelector(product);

  return (
    <div className="group flex flex-col items-center animate-fade-in relative">
      {/* Image Area */}
      <div className="relative w-full aspect-[1/1.2] cursor-pointer bg-[#fffbf3] overflow-hidden mb-8 flex items-center justify-center ">
        {/* Primary Image */}
        <img
          src={product.images[0].main}
          alt={product.name}
          className="w-full h-full object-contain transition-all duration-700 group-hover:opacity-0 group-hover:scale-105"
        />

        {/* Hover Image */}
        <img
          src={product.images[1].main || product.images[0].main}
          alt={product.name}
          className="absolute w-full h-full object-contain p-3 opacity-0 transition-all duration-700 group-hover:opacity-100 group-hover:scale-105"
        />

        {/* Badges */}
        {product.tag && (
          <div
            className={`absolute top-4 left-4 z-20 ${
              product.tag === "Sold Out"
                ? "text-red-500 bg-white border border-red-500"
                : "bg-[#40C9AF] text-white"
            } text-[9px] px-2 py-1 font-bold uppercase tracking-[0.2em]`}
          >
            {product.tag}
          </div>
        )}

        {/* Hover Action Icons */}
        <div className="absolute top-6 left-0 right-4 flex flex-col items-end gap-3 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0 z-40">
          <motion.button
            onClick={handleToggleWishlist}
            whileTap={{ scale: 0.85 }}
            animate={{
              scale: isInWishlist ? [1, 1.2, 1] : [1, 0.9, 1],
            }}
            transition={{
              duration: 0.35,
              ease: "easeInOut",
            }}
            className={`w-10 h-10 flex items-center justify-center rounded-full shadow-sm transition-all duration-200 ${
              isInWishlist
                ? "bg-primary-yellow text-white"
                : "bg-white text-gray-700 hover:bg-[#a8741a] hover:text-white"
            }`}
            title="Add to Wishlist"
          >
            <motion.div
              animate={{
                scale: isInWishlist ? [1, 1.25, 1] : [1, 0.9, 1],
                rotate: isInWishlist ? [0, -8, 8, 0] : 0,
              }}
              transition={{ duration: 0.35 }}
            >
              <Heart size={18} fill={isInWishlist ? "currentColor" : "none"} />
            </motion.div>
          </motion.button>
          <button
            onClick={() => openQuickView(product)}
            className="w-10 h-10 flex items-center justify-center bg-white rounded-full 
             shadow-sm text-gray-700 hover:bg-[#a8741a] hover:text-white 
             transition-all duration-200 hover:scale-110"
            title="Quick View"
          >
            <Eye size={18} />
          </button>
        </div>
      </div>

      {/* Product Info */}
      <div className="text-center w-full px-4 flex flex-col items-center pb-2">
        <p className="text-[14px] text-gray-500 font-semibold tracking-[0.3em] uppercase mb-1">
          {product.vendor}
        </p>
        <Link to={`/collections/${categoryName}/product/${product.slug}`}>
          <h3 className=" hover:text-[#a8741a] cursor-pointer mb-1 md:leading-snug! text-neutral-950 rajdhani-medium md:text-[22px]! text-[16px]! leading-5! tracking-normal normal-case transition-all duration-300">
            {product.name}
          </h3>
        </Link>
        <div className="flex justify-center mb-2 md:text-2xl text-lg gap-0.5">
          {[1, 2, 3, 4, 5].map((star) => (
            <span key={star} className="transition-colors primary-yellow">
              {star <= Math.floor(product.rating) ? "★" : "☆"}
            </span>
          ))}
        </div>

        {/* Container for Price / Add to Cart Toggle */}
        <div className="relative w-full h-10 overflow-hidden flex flex-col items-center">
          {/* Price State */}
          <div
            className={`flex items-center justify-center gap-2 transition-all duration-300 ${
              product.tag !== "Add To Cart"
                ? "group-hover:-translate-y-8 opacity-100 group-hover:opacity-0"
                : "opacity-100"
            }`}
          >
            <span className="font-medium text-neutral-500 md:text-lg text-[16px]">
              Rs. {product.price}
            </span>
          </div>

          {/* Add to Cart State (Absolute so it occupies the same space) */}
          {product.tag !== "Add To Cart" && (
            <div className="absolute inset-0 flex items-center justify-center translate-y-8 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
              <button
                onClick={handleAddToCart}
                className={`font-semibold uppercase tracking-[0.2em] pb-2 relative transition-all duration-300
    ${
      isInCart
        ? "text-[#a8741a] after:bg-[#a8741a]"
        : "text-black after:bg-black hover:text-[#a8741a] hover:after:bg-[#a8741a]"
    }
    after:absolute after:left-0 after:bottom-1 after:h-0.5 after:w-full
  `}
              >
                {isInCart ? "ADDED ✓" : "ADD TO CART"}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
