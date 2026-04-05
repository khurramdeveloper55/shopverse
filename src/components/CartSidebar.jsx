import {
  X,
  Minus,
  Plus,
  ShoppingBag,
  FileText,
  Tag,
  Truck,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useDispatch, useSelector } from "react-redux";

const CartSidebar = ({ isOpen, onClose }) => {
  const { items } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  // const items = [
  //   {
  //     id: "1",
  //     name: "Smartwatch with Call & Message Notifications - S",
  //     price: 25.0,
  //     quantity: 2,
  //     image: "https://picsum.photos/seed/watch1/200/200",
  //   },
  //   {
  //     id: "2",
  //     name: "Smartwatch with Call & Message Notifications - S",
  //     price: 25.0,
  //     quantity: 2,
  //     image: "https://picsum.photos/seed/watch1/200/200",
  //   },
  // ];

  const subtotal = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);

  const freeShippingThreshold = 950.0;
  const progress = Math.min((subtotal / freeShippingThreshold) * 100, 100);

  const recommendedProducts = [
    {
      id: "rec1",
      name: "Smart Fitness Tracker Watch",
      price: 25.0,
      image: "https://picsum.photos/seed/watch2/200/200",
    },
    {
      id: "rec2",
      name: "Minimalist Watch",
      price: 25.0,
      image: "https://picsum.photos/seed/watch3/200/200",
    },
  ];

  return (
    <AnimatePresence>
      <>
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/40 z-60 backdrop-blur-[2px]"
        />

        {/* Sidebar */}
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ type: "spring", damping: 25, stiffness: 200 }}
          className="fixed top-0 right-0 h-full w-full max-w-[420px] bg-white z-70 shadow-2xl flex flex-col"
        >
          {/* Header */}
          <div className="flex items-center justify-between p-5 border-b border-gray-100">
            <h2 className="text-lg font-medium flex items-center gap-2">
              Cart{" "}
              <span className="text-gray-500 font-normal">({totalItems})</span>
            </h2>
            <button
              onClick={onClose}
              className="p-1 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X size={24} />
            </button>
          </div>

          {/* Free Shipping Progress */}
          <div className="px-6 py-4 bg-gray-50/50">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 bg-white rounded-md shadow-sm">
                <Truck size={18} className="text-gray-600" />
              </div>
              <p className="text-sm text-gray-600">
                {subtotal >= freeShippingThreshold
                  ? "You've unlocked Free Shipping!"
                  : `Spend Rs. ${(freeShippingThreshold - subtotal).toFixed(
                      2,
                    )} for Free Shipping`}
              </p>
            </div>

            <div className="h-1.5 w-full bg-gray-200 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                className="h-full bg-gray-800"
              />
            </div>
          </div>

          {/* Cart Items */}
          <div className="grow overflow-y-auto px-6 py-4 custom-scrollbar">
            {items.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-gray-400 gap-4">
                <ShoppingBag size={48} strokeWidth={1} />
                <p>Your cart is empty</p>
              </div>
            ) : (
              <div className="space-y-6">
                {items.map((item) => (
                  <div key={item.id} className="flex gap-4">
                    <div className="w-20 h-20 bg-gray-100 rounded-md overflow-hidden shrink-0">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </div>

                    <div className="grow">
                      <h4 className="text-sm font-medium text-gray-900 leading-tight mb-1">
                        {item.name}
                      </h4>
                      <p className="text-xs text-gray-500 mb-2">
                        Rs. {item.price} x {item.quantity}
                      </p>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center border border-gray-200 rounded overflow-hidden">
                          <button className="p-1.5 hover:bg-gray-50 transition-colors">
                            <Minus size={14} />
                          </button>

                          <span className="px-3 text-sm font-medium">
                            {item.quantity}
                          </span>

                          <button className="p-1.5 hover:bg-gray-50 transition-colors">
                            <Plus size={14} />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Recommended */}
            <div className="mt-10 pt-8 border-t border-gray-100">
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-lg font-bold">You may also like</h4>

                <div className="flex gap-1">
                  <button className="p-1 border border-gray-200 rounded-full hover:bg-gray-50 transition-colors">
                    <ChevronLeft size={16} />
                  </button>

                  <button className="p-1 border border-gray-200 rounded-full hover:bg-gray-50 transition-colors">
                    <ChevronRight size={16} />
                  </button>
                </div>
              </div>

              <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
                {recommendedProducts.map((product) => (
                  <div key={product.id} className="min-w-40 flex gap-3">
                    <div className="w-16 h-16 bg-gray-100 rounded-md overflow-hidden shrink-0">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </div>

                    <div className="flex flex-col justify-center">
                      <h4 className="text-xs font-medium text-gray-900 line-clamp-2">
                        {product.name}
                      </h4>

                      <p className="text-xs text-gray-500 mt-1">
                        Rs. {product.price.toFixed(2)}
                      </p>

                      <button className="text-[10px] font-bold underline text-gray-400 hover:text-gray-900 mt-1 text-left">
                        + Add to Cart
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="p-6 border-t border-gray-100 bg-white">
            <div className="grid grid-cols-3 gap-4 mb-6">
              <button className="flex flex-col items-center gap-1 text-gray-500 hover:text-gray-900 transition-colors">
                <FileText size={20} />
                <span className="text-[10px] font-medium uppercase tracking-wider">
                  Order Note
                </span>
              </button>

              <button className="flex flex-col items-center gap-1 text-gray-500 hover:text-gray-900 transition-colors">
                <Tag size={20} />
                <span className="text-[10px] font-medium uppercase tracking-wider">
                  Coupon
                </span>
              </button>

              <button className="flex flex-col items-center gap-1 text-gray-500 hover:text-gray-900 transition-colors">
                <Truck size={20} />
                <span className="text-[10px] font-medium uppercase tracking-wider">
                  Shipping
                </span>
              </button>
            </div>

            <div className="flex items-center justify-between mb-2">
              <span className="text-base font-bold">Total:</span>
              <span className="text-base font-bold">
                Rs. {subtotal.toFixed(2)}
              </span>
            </div>

            <p className="text-xs text-gray-400 mb-6">
              Taxes and shipping calculated at checkout
            </p>

            <div className="grid grid-cols-2 gap-4">
              <button className="py-3 px-4 border border-gray-800 text-gray-800 text-xs font-bold uppercase tracking-widest hover:bg-gray-800 hover:text-white transition-all duration-300">
                View Cart
              </button>

              <button className="py-3 px-4 border border-gray-800 text-gray-800 text-xs font-bold uppercase tracking-widest hover:bg-gray-800 hover:text-white transition-all duration-300">
                Check Out
              </button>
            </div>
          </div>
        </motion.div>
      </>
    </AnimatePresence>
  );
};

export default CartSidebar;
