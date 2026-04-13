import { X, Minus, Plus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { decreaseQuantity, increaseQuantity } from "../redux/slices/cartSlice";
import useCartSelector from "../hooks/useCartSelector";
import { useEffect, useState } from "react";

export default function QuickViewModal({ product, isOpen, onClose }) {
  if (!product) return null;
  const dispatch = useDispatch();
  const { isInCart, handleAddToCart } = useCartSelector(product);
  const cart = useSelector((state) => state?.cart?.items || []);
  const cartItem = cart.find((item) => item?.id === product.id);
  const [localQuantity, setLocalQuantity] = useState(1);

  useEffect(() => {
    if (cartItem) {
      setLocalQuantity(cartItem.quantity);
    } else {
      setLocalQuantity(1);
    }
  }, [cartItem]);

  const currentQuantity = cartItem ? cartItem.quantity : localQuantity;

  const handleIncrease = () => {
    if (cartItem) {
      dispatch(increaseQuantity(product.id));
    } else {
      setLocalQuantity((prev) => prev + 1);
    }
  };

  const handleDecrease = () => {
    if (cartItem) {
      dispatch(decreaseQuantity(product.id));
    } else {
      setLocalQuantity((prev) => Math.max(1, prev - 1));
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-100 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative bg-white w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-sm shadow-2xl flex flex-col md:flex-row"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 p-2 text-gray-400 hover:text-black transition-colors"
            >
              <X size={24} />
            </button>

            {/* Left: Product Images */}
            <div className="w-full md:w-1/2 bg-[#FAF9F6] p-8 flex flex-col items-center justify-center min-h-[400px]">
              <div className="relative w-full h-full flex items-center justify-center">
                <img
                  src={product.images[0].main}
                  alt={product.name}
                  className="max-w-full max-h-full object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

            {/* Right: Product Details */}
            <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col">
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-gray-900 mb-4 rajdhani-semibold text-left">
                {product.name}
              </h2>

              <div className="flex items-center gap-4 mb-6">
                <span className="text-2xl font-semibold text-gray-900">
                  Rs. {product.price}
                </span>
              </div>

              <p className="text-gray-500 text-sm text-left open-sans leading-relaxed mb-8">
                {product.description.split(" ").slice(0, 20).join(" ")}
                {product.description.split(" ").length > 20 && "..."}
              </p>

              {/* Actions */}
              <div className="flex flex-wrap items-center gap-4 mb-8">
                {/* Quantity Selector */}
                <div className="flex items-center border border-gray-200 rounded-sm">
                  <button
                    onClick={() => handleDecrease(product.id)}
                    className="p-3 hover:text-gold transition-colors"
                  >
                    <Minus size={16} />
                  </button>
                  <span className="w-12 text-center font-medium">
                    {currentQuantity}
                  </span>
                  <button
                    onClick={() => handleIncrease(product.id)}
                    className="p-3 hover:text-gold transition-colors"
                  >
                    <Plus size={16} />
                  </button>
                </div>

                {/* Add to Cart Button */}
                <button
                  onClick={handleAddToCart}
                  disabled={isInCart}
                  className={`relative isolate overflow-hidden inline-block px-[35px] py-3 border border-yellow-700 
    uppercase tracking-wide font-semibold rounded-md transition duration-300

    ${
      isInCart
        ? "bg-[#a8741a] text-white cursor-not-allowed"
        : "text-yellow-700 hover:text-white"
    }

    before:content-[''] before:absolute before:block before:-z-10
    before:bg-yellow-700
    before:w-[120%] before:h-[110%]
    before:top-0 before:left-0
    before:origin-bottom-left
    before:rotate-[4deg]
    before:translate-y-[108%] before:-translate-x-4
    before:transition-transform before:duration-200

    ${
      isInCart
        ? "before:translate-y-0 before:rotate-0 before:translate-x-0"
        : "hover:before:rotate-0 hover:before:translate-y-0 hover:before:translate-x-0"
    }
  `}
                >
                  {isInCart ? "ADDED ✓" : "ADD TO CART"}
                </button>
              </div>

              {/* Meta Info */}
              <div className="space-y-2 text-[13px] text-left open-sans uppercase tracking-wider text-gray-400">
                <div className="flex gap-2">
                  <span className="text-gray-900 w-20">SKU:</span>
                  <span className="text-neutral-500">N/A</span>
                </div>
                <div className="flex gap-2">
                  <span className="text-gray-900 w-20">TYPE:</span>
                  <span className="text-neutral-500">
                    {product.brand || "KIDS WATCH"}
                  </span>
                </div>
                <div className="flex gap-2">
                  <span className="text-gray-900 w-20">VENDOR:</span>
                  <span className="text-neutral-500">TINYTIME</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
