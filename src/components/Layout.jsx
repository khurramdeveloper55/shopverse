import Header from "./Header";
import Footer from "./Footer";
import { ChevronUp } from "lucide-react";
import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import CartSidebar from "./CartSidebar";

export default function Layout() {
  const [isMobileCartOpen, setIsMobileCartOpen] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen flex flex-col relative">
      <Header setIsMobileCartOpen={setIsMobileCartOpen} />
      <CartSidebar
        isOpen={isMobileCartOpen}
        onClose={() => setIsMobileCartOpen(false)}
      />
      <main>
        <Outlet />
      </main>
      <Footer />

      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-6 right-6 z-50 bg-white w-10 h-10 rounded-full shadow-lg flex items-center justify-center border border-gray-200 text-gray-400 hover:primary-yellow hover:border-gold transition-all duration-300 ${
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
