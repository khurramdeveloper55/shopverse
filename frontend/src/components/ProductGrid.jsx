import { useState, useEffect, useCallback } from "react";
import { Eye, Heart, ChevronLeft, ChevronRight } from "lucide-react";
import useProducts from "../hooks/useProducts";
import useCartSelector from "../hooks/useCartSelector";
import useWishlistSelector from "../hooks/useWishlistSelector";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import QuickViewModal from "./QuickViewModal";
import useQuickView from "../hooks/useQuickView";

export default function ProductGrid() {
  const { products = [] } = useProducts();
  const limitedProducts = Array.isArray(products) ? products.slice(0, 8) : [];

  const [startIndex, setStartIndex] = useState(0);
  const [itemsPerRow, setItemsPerRow] = useState(3);
  const { selectedProduct, openQuickView, closeQuickView } = useQuickView();

  const isDesktop = itemsPerRow === 4;
  const totalVisible = isDesktop ? 8 : 4;

  const shouldShowNavigation = !isDesktop;

  const updateLayout = useCallback(() => {
    const width = window.innerWidth;
    if (width >= 767) {
      setItemsPerRow(4);
    } else {
      setItemsPerRow(2);
    }
  }, []);

  useEffect(() => {
    updateLayout();
    window.addEventListener("resize", updateLayout);
    return () => window.removeEventListener("resize", updateLayout);
  }, [updateLayout]);

  const next = () => {
    if (startIndex + 4 < limitedProducts.length) {
      setStartIndex(startIndex + 4);
    } else {
      setStartIndex(0);
    }
  };

  const prev = () => {
    if (startIndex - 4 >= 0) {
      setStartIndex(startIndex - 4);
    } else {
      setStartIndex(0);
    }
  };

  const displayedItems = isDesktop
    ? limitedProducts
    : limitedProducts.slice(startIndex, startIndex + totalVisible);

  const firstRow = displayedItems.slice(0, itemsPerRow);
  const secondRow = displayedItems.slice(itemsPerRow, totalVisible);

  return (
    <section className="py-20 bg-white relative group/slider">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-8">
          <span className="primary-yellow text-[14px] uppercase tracking-[0.3em] font-semibold">
            BEST SELLERS
          </span>
          <h3>Latest styles & innovations in timekeeping</h3>
        </div>

        {/* Navigation Arrows */}
        {shouldShowNavigation && (
          <button
            onClick={prev}
            className="absolute left-4 top-[60%] -translate-y-1/2 z-20 bg-white p-3 rounded-full shadow-md text-gray-400 hover:primary-yellow transition-all opacity-0 group-hover/slider:opacity-100 -translate-x-4 group-hover/slider:translate-x-0"
            aria-label="Previous products"
          >
            <ChevronLeft size={24} />
          </button>
        )}

        {shouldShowNavigation && (
          <button
            onClick={next}
            className="absolute right-4 top-[60%] -translate-y-1/2 z-20 bg-white p-3 rounded-full shadow-md text-gray-400 hover:primary-yellow transition-all opacity-0 group-hover/slider:opacity-100 translate-x-4 group-hover/slider:translate-x-0"
            aria-label="Next products"
          >
            <ChevronRight size={24} />
          </button>
        )}

        {/* Slider Rows */}
        <div className="flex flex-col gap-y-8 max-w-7xl mx-auto px-4">
          {/* First Row */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {firstRow.map((product, i) => (
              <ProductCard
                key={`r1-${product.id}-${startIndex}-${i}`}
                product={product}
                openQuickView={openQuickView}
              />
            ))}
          </div>
          {/* Second Row */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {secondRow.map((product, i) => (
              <ProductCard
                key={`r2-${product.id}-${startIndex}-${i}`}
                product={product}
                openQuickView={openQuickView}
              />
            ))}
          </div>
        </div>
        {/* Dots Pagination */}
        {shouldShowNavigation && (
          <div className="flex justify-center gap-2 mt-8">
            {[0, 1].map((page) => (
              <button
                key={page}
                onClick={() => setStartIndex(page * 4)}
                className={`h-2 w-2 rounded-full cursor-pointer transition-all ${
                  startIndex === page * 4 ? "bg-primary-yellow" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        )}
      </div>
      <QuickViewModal
        product={selectedProduct}
        isOpen={!!selectedProduct}
        onClose={closeQuickView}
      />
    </section>
  );
}

const ProductCard = ({ product, openQuickView }) => {
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
        <Link
          to={`/collections/${product.Category?.slug}/product/${product.slug}`}
        >
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
        </div>
      </div>
    </div>
  );
};
