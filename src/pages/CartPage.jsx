import { useState } from "react";
import {
  Search,
  User,
  Heart,
  ShoppingBag,
  ChevronDown,
  Minus,
  Plus,
  Facebook,
  Twitter,
  Instagram,
  Diamond,
} from "lucide-react";
import { motion } from "motion/react";

export default function CartPage() {
  const [quantity, setQuantity] = useState(2);
  return (
    <main className="grow max-w-7xl mx-auto px-6 py-16 w-full">
      <h1 className="text-4xl font-display font-bold mb-14 tracking-tight">
        Your Cart
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
        {/* Cart Items Section */}
        <div className="lg:col-span-8 space-y-16">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="text-left border-b border-zinc-100 text-[11px] font-bold tracking-[0.2em] text-zinc-400 uppercase">
                  <th className="pb-6">Product</th>
                  <th className="pb-6 text-center">Quantity</th>
                  <th className="pb-6 text-right">Total</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-zinc-100 group">
                  <td className="py-10">
                    <div className="flex gap-8">
                      <div className="w-28 h-28 bg-zinc-50 rounded-xl overflow-hidden shrink-0 border border-zinc-100">
                        <img
                          src="https://picsum.photos/seed/watch/400/400"
                          alt="Smartwatch"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                      <div className="flex flex-col justify-center max-w-xs">
                        <h4 className="font-semibold text-zinc-800 leading-snug mb-2 text-lg hover:text-[#c19a6b] cursor-pointer transition-colors text-left">
                          Smartwatch with Call & Message Notifications S
                        </h4>
                        <button className="text-[11px] font-bold tracking-widest text-zinc-400 hover:text-red-500 transition-colors text-left uppercase underline underline-offset-8 decoration-zinc-200 hover:decoration-red-200">
                          Remove
                        </button>
                      </div>
                    </div>
                  </td>
                  <td className="py-10">
                    <div className="flex justify-center">
                      <div className="flex items-center border border-zinc-200 rounded-md px-3 py-2 bg-white shadow-sm">
                        <button
                          onClick={() => setQuantity(Math.max(1, quantity - 1))}
                          className="p-1.5 hover:text-[#c19a6b] transition-colors"
                        >
                          <Minus className="w-3.5 h-3.5" />
                        </button>
                        <span className="w-12 text-center text-sm font-bold">
                          {quantity}
                        </span>
                        <button
                          onClick={() => setQuantity(quantity + 1)}
                          className="p-1.5 hover:text-[#c19a6b] transition-colors"
                        >
                          <Plus className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  </td>
                  <td className="py-10 text-right">
                    <span className="text-base font-semibold text-zinc-500">
                      Rs. 50.00
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Shipping Estimates */}
          <div className="border border-zinc-100 rounded-2xl p-10 bg-white shadow-sm">
            <h2 className="text-xl font-display font-bold mb-8 tracking-tight">
              Get shipping estimates
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
              <div className="space-y-3">
                <label className="text-[11px] font-bold tracking-widest text-zinc-400 uppercase">
                  Country
                </label>
                <div className="relative">
                  <select className="w-full border border-zinc-200 rounded-lg px-5 py-3.5 text-sm appearance-none bg-white focus:outline-none focus:border-[#c19a6b] focus:ring-1 focus:ring-[#c19a6b]/20 transition-all cursor-pointer">
                    <option>United States</option>
                    <option>Pakistan</option>
                    <option>United Kingdom</option>
                  </select>
                  <ChevronDown className="absolute right-5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400 pointer-events-none" />
                </div>
              </div>
              <div className="space-y-3">
                <label className="text-[11px] font-bold tracking-widest text-zinc-400 uppercase">
                  Province
                </label>
                <div className="relative">
                  <select className="w-full border border-zinc-200 rounded-lg px-5 py-3.5 text-sm appearance-none bg-white focus:outline-none focus:border-[#c19a6b] focus:ring-1 focus:ring-[#c19a6b]/20 transition-all cursor-pointer">
                    <option>Alabama</option>
                    <option>California</option>
                    <option>New York</option>
                  </select>
                  <ChevronDown className="absolute right-5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400 pointer-events-none" />
                </div>
              </div>
              <div className="space-y-3">
                <label className="text-[11px] font-bold tracking-widest text-zinc-400 uppercase">
                  Zip/Postal Code
                </label>
                <input
                  type="text"
                  className="w-full border border-zinc-200 rounded-lg px-5 py-3.5 text-sm focus:outline-none focus:border-[#c19a6b] focus:ring-1 focus:ring-[#c19a6b]/20 transition-all"
                />
              </div>
            </div>
            <button className="border-2 border-[#c19a6b] text-[#c19a6b] px-10 py-4 text-xs font-bold tracking-[0.2em] hover:bg-[#c19a6b] hover:text-white transition-all duration-300 uppercase rounded-md">
              Calculate Shipping
            </button>
          </div>
        </div>

        {/* Sidebar Section */}
        <div className="lg:col-span-4 space-y-8">
          <div className="bg-zinc-50 p-10 rounded-2xl space-y-10 border border-zinc-100">
            {/* Free Shipping Progress */}
            <div className="space-y-4">
              <div className="flex items-center gap-4 text-zinc-600">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm">
                  <ShoppingBag className="w-5 h-5 text-[#c19a6b]" />
                </div>
                <p className="text-xs font-semibold tracking-wide">
                  Spend Rs. 950.00 for Free Shipping
                </p>
              </div>
              <div className="h-2 w-full bg-zinc-200 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "5%" }}
                  className="h-full bg-zinc-900"
                />
              </div>
            </div>

            {/* Special Instructions */}
            <div className="space-y-4">
              <label className="text-[11px] font-bold tracking-widest text-zinc-400 uppercase">
                Special instructions for seller
              </label>
              <textarea className="w-full border border-zinc-200 rounded-xl p-5 text-sm min-h-[120px] focus:outline-none focus:border-[#c19a6b] bg-white shadow-inner resize-none" />
            </div>

            {/* Coupon Section */}
            <div className="space-y-6">
              <h4 className="text-[11px] font-bold tracking-[0.2em] uppercase text-zinc-800">
                List Coupon
              </h4>
              <div className="space-y-3 text-[13px] text-zinc-500 leading-relaxed">
                <p>
                  <span className="font-bold text-zinc-800">december</span> →
                  20% off 14 collections
                </p>
                <p>
                  <span className="font-bold text-zinc-800">lotita</span> → 10%
                  off No usage limits
                </p>
                <p className="italic text-zinc-400 mt-4">
                  Coupon code will work on checkout page
                </p>
              </div>
              <div className="flex gap-3">
                <input
                  type="text"
                  placeholder="Coupon"
                  className="grow border border-zinc-200 rounded-lg px-5 py-3.5 text-sm focus:outline-none focus:border-[#c19a6b] bg-white shadow-sm"
                />
                <button className="border-2 border-[#c19a6b] text-[#c19a6b] px-8 py-3.5 text-xs font-bold tracking-widest hover:bg-[#c19a6b] hover:text-white transition-all uppercase rounded-md">
                  Save
                </button>
              </div>
            </div>

            {/* Total */}
            <div className="pt-10 border-t border-zinc-200 space-y-6">
              <div className="flex items-end justify-between">
                <span className="text-sm font-bold tracking-widest text-zinc-400 uppercase">
                  Total
                </span>
                <span className="text-2xl font-display font-bold tracking-tight">
                  Rs. 50.00
                </span>
              </div>
              <p className="text-[13px] text-zinc-400 italic text-center">
                Taxes and shipping calculated at checkout
              </p>
              <button className="w-full bg-white border-2 border-[#c19a6b] text-[#c19a6b] py-5 text-xs font-bold tracking-[0.2em] hover:bg-[#c19a6b] hover:text-white transition-all uppercase rounded-md shadow-sm">
                Check Out
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Recommendations Section */}
      <div className="mt-32 space-y-12">
        <div className="space-y-2">
          <span className="text-[11px] font-bold tracking-[0.4em] text-[#c19a6b] uppercase">
            Recomment
          </span>
          <h2 className="text-4xl font-display font-bold tracking-tight">
            You May Also Like
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="group cursor-pointer">
              <div className="aspect-4/5 bg-zinc-100 rounded-2xl overflow-hidden mb-6 relative shadow-sm">
                <img
                  src={`https://picsum.photos/seed/product-${i}/600/800`}
                  alt="Product"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-zinc-900/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-4 left-4 right-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <button className="w-full bg-white/90 backdrop-blur py-3 text-[10px] font-bold tracking-widest uppercase rounded-lg shadow-lg">
                    Quick View
                  </button>
                </div>
              </div>
              <h4 className="text-base font-semibold text-zinc-800 mb-2 group-hover:text-[#c19a6b] transition-colors">
                Example Product Title
              </h4>
              <p className="text-sm font-bold text-zinc-400 tracking-wide">
                $19.99
              </p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
