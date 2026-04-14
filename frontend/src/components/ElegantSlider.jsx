import { useState, useEffect, useCallback } from "react";
import { Eye, Heart, ChevronLeft, ChevronRight } from "lucide-react";
import useProducts from "../hooks/useProducts";
import { Link } from "react-router-dom";
import useQuickView from "../hooks/useQuickView";
import useCartSelector from "../hooks/useCartSelector";
import useWishlistSelector from "../hooks/useWishlistSelector";
import QuickViewModal from "./QuickViewModal";
import { motion } from "motion/react";

export default function ElegantSlider() {
  const { products: rawProducts = [] } = useProducts();
  const [startIndex, setStartIndex] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(3);
  const { selectedProduct, openQuickView, closeQuickView } = useQuickView();
  const products = Array.isArray(rawProducts) ? rawProducts : [];

  const topExpensiveProducts = [...products]
    .sort((a, b) => b.price - a.price)
    .slice(0, 6);

  const updateLayout = useCallback(() => {
    const width = window.innerWidth;
    if (width >= 1024) setItemsToShow(3);
    else if (width >= 640) setItemsToShow(2);
    else setItemsToShow(1);
  }, []);

  useEffect(() => {
    updateLayout();
    window.addEventListener("resize", updateLayout);
    return () => window.removeEventListener("resize", updateLayout);
  }, [updateLayout]);

  const next = () =>
    setStartIndex((prev) => (prev + 1) % topExpensiveProducts.length);
  const prev = () =>
    setStartIndex(
      (prev) =>
        (prev - 1 + topExpensiveProducts.length) % topExpensiveProducts.length,
    );

  const displayedItems = [];
  for (let i = 0; i < itemsToShow; i++) {
    displayedItems.push(
      topExpensiveProducts[(startIndex + i) % topExpensiveProducts.length],
    );
  }

  return (
    <section className="py-20 bg-white relative group/elegant overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <span className="primary-yellow text-[14px] uppercase tracking-[0.3em] font-semibold block mb-2">
            CLASSIC COLLECTION
          </span>
          <h3>Elegant designs that never go out of style</h3>
        </div>

        {/* Slider Container */}
        <div className="relative px-4 md:px-12">
          {/* Arrows */}
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-white w-10 h-10 rounded-full shadow-md flex items-center justify-center text-gray-400 hover:primary-yellow transition-all"
            aria-label="Previous slide"
          >
            <ChevronLeft size={20} />
          </button>

          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-white w-10 h-10 rounded-full shadow-md flex items-center justify-center text-gray-400 hover:primary-yellow transition-all"
            aria-label="Next slide"
          >
            <ChevronRight size={20} />
          </button>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayedItems.map((product, index) => {
              if (!product) return null;
              return (
                <ProductCard
                  key={index}
                  product={product}
                  openQuickView={openQuickView}
                  index={index}
                />
              );
            })}
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

const ProductCard = ({ product, index, openQuickView }) => {
  const { isInCart, handleAddToCart } = useCartSelector(product);
  const { isInWishlist, handleToggleWishlist } = useWishlistSelector(product);
  const imageUrl = product?.images?.[0]?.main || product?.image || "";

  return (
    <div
      key={`${product.id}-${index}`}
      className="group/card flex flex-col items-center animate-fade-in cursor-pointer"
    >
      {/* Image Area */}
      <div className="relative w-full aspect-[1/1.2] bg-[#fffbf3] flex items-center justify-center p-8 mb-8 overflow-hidden ">
        <img
          src={imageUrl}
          alt={product.name}
          className="w-full h-full object-contain transition-all duration-700 group/card-hover:opacity-0 group-hover:scale-105"
        />

        {/* Hover Image */}
        <img
          src={product.images[1].main || product.images[0].main}
          alt={product.name}
          className="absolute w-full h-full object-contain p-3 opacity-0 transition-all duration-700 group-hover/card:opacity-100 group-hover/card:scale-105"
        />

        {/* Hover Tools */}
        <div className="absolute top-6 left-0 right-0 flex flex-col items-end mr-4 gap-3 opacity-0 group-hover/card:opacity-100 transition-all duration-500 translate-y-4 group-hover/card:translate-y-0 z-40">
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

      {/* Text Content */}
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
                ? "group-hover/card:-translate-y-full opacity-100 group-hover/card:opacity-0"
                : "opacity-100"
            }`}
          >
            <span className="font-medium text-neutral-500 md:text-lg text-[16px]">
              Rs. {product.price}
            </span>
          </div>

          <div className="absolute inset-0 flex items-center justify-center translate-y-8 group-hover/card:translate-y-0 opacity-0 group-hover/card:opacity-100 transition-all duration-300">
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
