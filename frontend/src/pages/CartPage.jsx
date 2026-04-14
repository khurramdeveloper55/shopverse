import { ChevronDown, Minus, Plus, Truck } from "lucide-react";
import { motion } from "motion/react";
import { useDispatch, useSelector } from "react-redux";
import Button from "../components/Button";
import {
  decreaseQuantity,
  increaseQuantity,
  removeFromCart,
} from "../redux/slices/cartSlice";
import { Link } from "react-router-dom";

export default function CartPage() {
  const items = useSelector((state) => state?.cart?.items || []);
  const dispatch = useDispatch();

  const handleIncrease = (id) => {
    dispatch(increaseQuantity(id));
  };
  const handleDecrease = (id) => {
    dispatch(decreaseQuantity(id));
  };
  const handleRemove = (id) => {
    dispatch(removeFromCart(id));
  };

  const subtotal = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  const freeShippingThreshold = 950.0;
  const progress = Math.min((subtotal / freeShippingThreshold) * 100, 100);

  if (items?.length === 0) {
    return (
      <>
        <div className="max-w-[1400px] mx-auto px-4 md:px-12 py-6">
          <nav className="text-[14px] leading-5 font-medium">
            <ul className="flex items-center">
              <li className="inline-block px-[3px] text-gray-900 hover:underline cursor-pointer open-sans">
                <Link to="/">Home</Link>
              </li>

              <li className="inline-block px-[3px] text-gray-400">/</li>

              <li className="inline-block px-[3px] text-gray-900 open-sans">
                Cart
              </li>
            </ul>
          </nav>
        </div>
        <main className="grow max-w-7xl mx-auto px-6 pb-18">
          <div className="text-center pt-12 pb-6 mb-6 border-b border-neutral-100">
            <h1 className="text-4xl! font-display font-medium mb-2 tracking-tight">
              Your Cart
            </h1>
            <p className="text-zinc-500 open-sans">No products in the cart.</p>
          </div>
          <Link to="/collections">
            <Button>Continue Shopping</Button>
          </Link>
        </main>
      </>
    );
  }
  return (
    <>
      <div className="max-w-[1400px] mx-auto px-4 md:px-12 py-6">
        <nav className="text-[14px] leading-5 font-medium">
          <ul className="flex items-center">
            <li className="inline-block px-[3px] text-gray-900 hover:underline cursor-pointer open-sans">
              <Link to="/">Home</Link>
            </li>

            <li className="inline-block px-[3px] text-gray-400">/</li>

            <li className="inline-block px-[3px] text-gray-900 open-sans">
              Cart
            </li>
          </ul>
        </nav>
      </div>
      <main className="grow max-w-7xl mx-auto px-6 pb-12 w-full">
        <h1 className="text-4xl! font-display font-medium text-left mb-14 tracking-tight">
          Your Cart
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 open-sans">
          {/* Cart Items Section */}
          <div className="lg:col-span-8 space-y-16">
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead className="hidden md:table-header-group">
                  <tr className="text-left border-b border-zinc-100 text-md text-neutral-500 ">
                    <th className="pb-6 open-sans font-semibold">Product</th>
                    <th className="pb-6 text-center font-semibold">Quantity</th>
                    <th className="pb-6 text-right font-semibold">Total</th>
                  </tr>
                </thead>
                <tbody>
                  {items?.map((item) => {
                    const itemTotal = item.price * item.quantity;
                    return (
                      <tr
                        key={item.id}
                        className="block md:table-row border-b border-zinc-100 group"
                      >
                        <td className="block md:table-cell py-4 md:py-10">
                          <div className="flex  gap-8">
                            <div className="w-28 h-28 bg-zinc-50 rounded-xl overflow-hidden shrink-0 border border-zinc-100">
                              <img
                                src={`${item.images[0].main}`}
                                alt="Smartwatch"
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                referrerPolicy="no-referrer"
                              />
                            </div>
                            <div className="flex flex-col justify-center max-w-xs">
                              <h4 className="font-semibold text-neutral-500 leading-snug mb-2 text-xl hover:text-[#a8741a] cursor-pointer transition-colors text-left rajdhani-semibold">
                                {item.name}
                              </h4>
                              <button
                                onClick={() => dispatch(handleRemove(item.id))}
                                className="text-[14px] font-medium  tracking-widest text-zinc-400 hover:text-red-500 transition-colors text-left underline underline-offset-8 decoration-zinc-200 hover:decoration-red-200"
                              >
                                Remove
                              </button>
                            </div>
                          </div>
                        </td>
                        <td className="block md:table-cell py-4 md:py-10">
                          <div className="flex md:justify-center">
                            <div className="flex items-center border-2 border-zinc-200 px-3 py-2 bg-white ">
                              <button
                                onClick={() =>
                                  dispatch(handleDecrease(item.id))
                                }
                                className="p-1.5 hover:text-[#a8741a] transition-colors"
                              >
                                <Minus className="w-3.5 h-3.5" />
                              </button>
                              <span className="w-12 text-center text-sm font-bold">
                                {item.quantity}
                              </span>
                              <button
                                onClick={() =>
                                  dispatch(handleIncrease(item.id))
                                }
                                className="p-1.5 hover:text-[#a8741a] transition-colors"
                              >
                                <Plus className="w-3.5 h-3.5" />
                              </button>
                            </div>
                          </div>
                        </td>
                        <td className="block md:table-cell py-4 md:py-10 text-left md:text-right">
                          <span className="text-lg font-normal text-neutral-500">
                            Rs. {itemTotal.toFixed(2)}
                          </span>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            {/* Shipping Estimates */}
            <div className="border border-zinc-100 rounded-2xl p-10 bg-white shadow-sm text-left">
              <h2 className="text-xl font-display font-bold mb-8  rajdhani-semibold">
                Get shipping estimates
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
                <div className="space-y-3">
                  <label className="text-[14px] font-semibold text-neutral-500 ">
                    Country
                  </label>
                  <div className="relative">
                    <select className="w-full border border-zinc-200 rounded-lg px-5 py-3.5 text-sm appearance-none bg-white focus:outline-none focus:border-[#a8741a] focus:ring-1 focus:ring-[#a8741a]/20 transition-all cursor-pointer">
                      <option>United States</option>
                      <option>Pakistan</option>
                      <option>United Kingdom</option>
                    </select>
                    <ChevronDown className="absolute right-5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400 pointer-events-none" />
                  </div>
                </div>
                <div className="space-y-3">
                  <label className="text-[14px] font-semibold text-neutral-500">
                    Province
                  </label>
                  <div className="relative">
                    <select className="w-full border border-zinc-200 rounded-lg px-5 py-3.5 text-sm appearance-none bg-white focus:outline-none focus:border-[#a8741a] focus:ring-1 focus:ring-[#a8741a]/20 transition-all cursor-pointer">
                      <option>Alabama</option>
                      <option>California</option>
                      <option>New York</option>
                    </select>
                    <ChevronDown className="absolute right-5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400 pointer-events-none" />
                  </div>
                </div>
                <div className="space-y-3">
                  <label className="text-[14px] font-semibold text-neutral-500">
                    Zip/Postal Code
                  </label>
                  <input
                    type="text"
                    className="w-full border border-zinc-200 rounded-lg px-5 py-3.5 text-sm focus:outline-none focus:border-[#a8741a] focus:ring-1 focus:ring-[#a8741a]/20 transition-all"
                  />
                </div>
              </div>
              <button className="border-2 uppercase tracking-widest border-[#a8741a] text-[#a8741a] px-10 py-4 text-xs font-semibold hover:bg-[#a8741a] hover:text-white transition-all duration-300 rounded-md">
                Calculate Shipping
              </button>
            </div>
          </div>

          {/* Sidebar Section */}
          <div className="lg:col-span-4 space-y-8">
            <div className="bg-zinc-50 p-10 rounded-2xl space-y-10 border border-zinc-100 text-left">
              {/* Free Shipping Progress */}
              <div className="space-y-4">
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
                <div className="h-2 w-full bg-zinc-200 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 0.4 }}
                    className="h-full bg-zinc-900"
                  />
                </div>
              </div>

              {/* Special Instructions */}
              <div className="space-y-4">
                <label className="text-[16px] font-medium open-sans text-neutral-500">
                  Special instructions for seller
                </label>
                <textarea className="w-full border border-zinc-200 rounded-xl p-5 text-sm min-h-[120px] focus:outline-none focus:border-[#a8741a] bg-white shadow-inner resize-none" />
              </div>

              {/* Coupon Section */}
              <div className="space-y-4">
                <h4 className="text-[16px] font-semibold  text-zinc-800">
                  List Coupon
                </h4>
                <div className="space-y-3 text-[14px] text-zinc-500 leading-relaxed">
                  <p>
                    <span className="font-bold text-zinc-800">december</span> →
                    20% off 14 collections
                  </p>
                  <p>
                    <span className="font-bold text-zinc-800">lotita</span> →
                    10% off No usage limits
                  </p>
                  <p className="italic text-zinc-400 mt-4">
                    Coupon code will work on checkout page
                  </p>
                </div>
                <div className="flex md:flex-row flex-col gap-3">
                  <input
                    type="text"
                    placeholder="Coupon"
                    className="grow border border-zinc-200 rounded-lg px-5 py-3.5 text-sm focus:outline-none focus:border-[#a8741a] bg-white shadow-sm"
                  />
                  <button className="border-2 border-primary-yellow primary-yellow px-8 py-3.5 text-xs font-semibold tracking-widest hover:bg-[#a8741a] hover:text-white! transition-all uppercase rounded-md">
                    Save
                  </button>
                </div>
              </div>

              {/* Total */}
              <div className="pt-10 border-t border-zinc-200 space-y-6">
                <div className="flex items-end justify-between">
                  <span className="text-[16px] font-semibold  text-neutral-500">
                    Total
                  </span>
                  <span className="text-3xl font-display text-neutral-500 font-semibold tracking-tight">
                    Rs. {subtotal.toFixed(2)}
                  </span>
                </div>
                <p className="text-[16px] text-neutral-500 text-left">
                  Taxes and shipping calculated at checkout
                </p>
                <button className="w-full bg-white border-2 border-primary-yellow primary-yellow py-5 text-xs font-semibold tracking-[0.2em] hover:bg-[#a8741a] hover:text-white! transition-all uppercase rounded-md shadow-sm">
                  Check Out
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
