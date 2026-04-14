import { X, Minus, Plus, ShoppingBag, Truck } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
} from "../redux/slices/cartSlice";

export default function CartSidebar({ isOpen, onClose }) {
  const { items } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const subtotal = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );
  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);

  const freeShippingThreshold = 950.0;
  const progress = Math.min((subtotal / freeShippingThreshold) * 100, 100);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop - Full Screen & Clickable */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-60"
          />

          {/* Sidebar */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="fixed top-0 right-0 h-full w-full max-w-[320px] bg-white z-70 shadow-2xl flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-100">
              <h2 className="text-xl font-semibold flex items-center gap-2">
                Your Cart
                <span className="text-gray-500 font-normal text-base">
                  ({totalItems})
                </span>
              </h2>
              <button
                onClick={onClose}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X size={26} strokeWidth={1.5} />
              </button>
            </div>

            {/* Free Shipping Progress */}
            <div className="px-6 py-5 bg-gray-50 border-b border-gray-100">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-white rounded-lg shadow-sm">
                  <Truck size={20} className="text-gray-700" />
                </div>
                <p className="text-sm text-gray-600 leading-tight open-sans text-left">
                  {subtotal >= freeShippingThreshold
                    ? "🎉 You've unlocked Free Shipping!"
                    : `Add Rs. ${(freeShippingThreshold - subtotal).toFixed(0)} more for Free Shipping`}
                </p>
              </div>

              <div className="h-1.5 w-full bg-gray-200 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.4 }}
                  className="h-full bg-black rounded-full"
                />
              </div>
            </div>

            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto p-6 custom-scrollbar open-sans">
              {items.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center text-gray-400 py-12 open-sans">
                  <ShoppingBag size={64} strokeWidth={1} className="mb-4" />
                  <p className="text-lg font-medium text-gray-500">
                    Your cart is empty
                  </p>
                  <p className="text-sm mt-2">Start adding some products!</p>
                </div>
              ) : (
                <div className="space-y-8">
                  {items.map((item) => (
                    <div
                      key={item.id}
                      className="flex gap-4 border-b border-neutral-200 pb-6"
                    >
                      {/* Image */}
                      <div className="w-24 h-24 bg-gray-100 rounded-xl overflow-hidden shrink-0">
                        <img
                          src={item.images[0].main}
                          alt={item.name}
                          className="w-full h-full object-cover"
                          referrerPolicy="no-referrer"
                        />
                      </div>

                      {/* Details */}
                      <div className="flex-1 min-w-0 text-left">
                        <h4 className="font-medium text-gray-900 leading-tight line-clamp-2 mb-1 rajdhani-semibold">
                          {item.name}
                        </h4>
                        <p className="text-sm text-gray-500 mb-3">
                          Rs. {item.price}
                        </p>

                        {/* Quantity Controls */}
                        <div className="flex items-start gap-2 flex-col justify-between">
                          <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
                            <button
                              onClick={() =>
                                dispatch(decreaseQuantity(item.id))
                              }
                              className="px-3 py-2 hover:bg-gray-100 active:bg-gray-200 transition-colors"
                            >
                              <Minus size={16} />
                            </button>
                            <span className="px-4 py-2 font-medium text-sm border-x border-gray-300">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() =>
                                dispatch(increaseQuantity(item.id))
                              }
                              className="px-3 py-2 hover:bg-gray-100 active:bg-gray-200 transition-colors"
                            >
                              <Plus size={16} />
                            </button>
                          </div>

                          <button
                            onClick={() => dispatch(removeFromCart(item.id))}
                            className="primary-yellow text-sm font-medium hover:underline"
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="p-6 border-t border-gray-100 bg-white open-sans">
              <div className="flex justify-between items-center mb-1">
                <span className="text-lg font-semibold">Subtotal</span>
                <span className="text-2xl font-bold">
                  Rs. {subtotal.toFixed(2)}
                </span>
              </div>
              <p className="text-md text-gray-500 mb-6 text-left">
                Taxes and shipping calculated at checkout
              </p>

              <div className="grid grid-cols-2 gap-4">
                <Link to="/cart">
                  <button
                    onClick={onClose}
                    className="py-4 px-6 border border-primary-yellow text-gray-800 font-semibold text-sm  hover:bg-[#a8741a] hover:text-white transition-all"
                  >
                    VIEW CART
                  </button>
                </Link>
                <button className="py-4 bg-black text-white font-semibold text-sm  hover:bg-[#a8741a] transition-all">
                  CHECKOUT
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
