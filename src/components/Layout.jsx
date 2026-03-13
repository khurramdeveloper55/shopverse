import Header from "./Header";
import Footer from "./Footer";
import { ChevronUp } from "lucide-react";
import { Outlet } from "react-router-dom";

export default function Layout({ scrollToTop, showBackToTop }) {
  return (
    <div className="min-h-screen flex flex-col relative">
      {/* Promo Bar */}
      <div className="bg-black text-white text-[10px] md:text-xs py-2 px-4 flex justify-between items-center tracking-wider overflow-x-auto whitespace-nowrap">
        <span>
          UNLOCK RADIANT BEAUTY: ENJOY A FREE GIFT WITH EVERY PURCHASE!
        </span>
        <span className="mx-4">
          FLASH SALE ALERT: SAVE UP TO 40% - LIMITED STOCK, ACT FAST!
        </span>
        <span>FREE SHIPPING ON ALL U.S. ORDERS $50+</span>
      </div>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />

      {/* Side Compare Button */}
      <div className="fixed right-0 top-1/2 -translate-y-1/2 z-60 flex flex-col items-center">
        <div className="bg-[#1a1a1a] text-white py-6 px-2 cursor-pointer flex flex-col items-center gap-4 rounded-l-md shadow-2xl hover:bg-black transition-all duration-300 group/compare active:scale-95">
          <span className="[writing-mode:vertical-lr] font-bold text-[10px] tracking-[0.2em] uppercase py-2">
            Compare
          </span>
          <div className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center font-bold text-sm shadow-inner group-hover/compare:scale-110 transition-transform">
            0
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-6 right-6 z-50 bg-white w-10 h-10 rounded-full shadow-lg flex items-center justify-center border border-gray-200 text-gray-400 hover:text-gold hover:border-gold transition-all duration-300 ${
          showBackToTop
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10 pointer-events-none"
        }`}
      >
        <ChevronUp size={20} />
      </button>
    </div>
  );
}
