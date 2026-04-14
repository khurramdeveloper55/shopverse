import { Search, User, Heart, ShoppingBag, X, Menu } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";
import useCategories from "../hooks/useCategories";
import useCart from "../hooks/useCart";
import useWishlist from "../hooks/useWishlist";

export default function Header({ setIsMobileCartOpen }) {
  const { categories } = useCategories();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const catLink = categories?.map((cat) => cat.slug)[3];
  const { cartCount } = useCart();
  const { wishlistCount } = useWishlist();

  const location = useLocation();

  const isActive = (path) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname.startsWith(path);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 150);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 
          transition-all duration-300 ease-out
          ${isScrolled ? "shadow-lg fixed w-full" : "py-2 shadow-sm"}`}
      >
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <button
            onClick={() => setIsMenuOpen(true)}
            className=" transition-colors lg:hidden flex"
          >
            <Menu className="w-4 h-4 lg:w-5 lg:h-5" strokeWidth={1.5} />
          </button>
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img src="/logo.png" alt="Shopverse Logo" />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8 text-[14px] font-bold tracking-[0.2em] uppercase">
            <Link
              to="/"
              className={`pb-1 transition-colors hover-text-[#a8741a] ${
                isActive("/")
                  ? "primary-yellow border-b-2 border-[#a8741a]"
                  : ""
              }`}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`pb-1 transition-colors hover-text-[#a8741a] ${
                isActive("/about")
                  ? "primary-yellow border-b-2 border-[#a8741a]"
                  : ""
              }`}
            >
              About
            </Link>
            <Link
              to="/collections"
              className={`pb-1 transition-colors hover-text-[#a8741a] ${
                location.pathname === "/collections"
                  ? "primary-yellow border-b-2 border-[#a8741a]"
                  : ""
              }`}
            >
              Collections
            </Link>

            <Link
              to={`/collections/${catLink}`}
              className={`pb-1 transition-colors hover-text-[#a8741a] ${
                location.pathname === `/collections/${catLink}`
                  ? "primary-yellow border-b-2 border-[#a8741a]"
                  : ""
              }`}
            >
              Smartwatches
            </Link>
            <Link
              to="/contact"
              className={`pb-1 transition-colors hover-text-[#a8741a] ${
                isActive("/contact")
                  ? "primary-yellow border-b-2 border-[#a8741a]"
                  : ""
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* Icons */}
          <div className="flex items-center gap-1">
            {/* <button className="hover-text-[#a8741a] transition-colors  lg:px-3.5 lg:py-2.5 py-2.5 px-2">
              <Search className="w-4 h-4 md:w-6 md:h-6" strokeWidth={1.5} />
            </button>
            <button className="hover-text-[#a8741a] transition-colors  lg:px-3.5 lg:py-2.5 py-2.5 px-2">
              <User className="w-4 h-4 md:w-6 md:h-6" strokeWidth={1.5} />
            </button> */}
            <Link to="/wishlist">
              <button className="hover-text-[#a8741a] transition-colors relative lg:px-3.5 lg:py-2.5 py-2.5 px-2">
                <Heart className="w-4 h-4 lg:w-6 md:h-6" strokeWidth={1.5} />
                <span className="absolute md:top-5 top-4 md:right-1 right-0 bg-primary-yellow text-white text-[10px] rounded-full md:w-5 md:h-5 w-4 h-4 flex items-center justify-center font-bold">
                  {wishlistCount}
                </span>
              </button>
            </Link>
            <button
              onClick={() => setIsMobileCartOpen(true)}
              className="hover-text-[#a8741a] transition-colors flex items-center gap-2  lg:px-3.5 lg:py-2.5 py-2.5 px-2"
            >
              <div className="relative">
                <ShoppingBag
                  className="w-4 h-4 md:w-6 md:h-6"
                  strokeWidth={1.5}
                />
              </div>
              <span className="text-[11px] font-bold tracking-widest">
                ({cartCount})
              </span>
            </button>
          </div>
        </div>
      </header>
      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
              className="fixed inset-0 bg-black/50 z-40 lg:hidden"
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed inset-y-0 top-0 left-0 bottom-0 h-dvh w-[85%] max-w-[320px] bg-white z-50 lg:hidden flex flex-col shadow-2xl overflow-hidden"
            >
              {/* Close Button */}
              <div className="absolute top-6 right-4 z-10">
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className=" hover-text-[#a8741a] transition-colors"
                >
                  <X className="w-5 h-5" strokeWidth={1.5} />
                </button>
              </div>

              {/* Menu Items */}
              <div className="flex-1 min-h-0 overflow-y-auto">
                <div className="flex flex-col pt-12">
                  <div>
                    <div className="flex items-center justify-between px-6 py-4 text-[15px] font-medium text-gray-800 hover-text-[#a8741a] transition-colors cursor-pointer">
                      <Link
                        to="/"
                        className={`pb-1 transition-colors hover-text-[#a8741a] ${
                          isActive("/")
                            ? "primary-yellow border-b-2 border-[#a8741a]"
                            : ""
                        }`}
                      >
                        <span className="flex items-center gap-2">Home</span>
                      </Link>
                    </div>

                    <div className="flex items-center justify-between px-6 py-4 text-[15px] font-medium text-gray-800 hover-text-[#a8741a] transition-colors cursor-pointer">
                      <Link
                        to="/about"
                        className={`pb-1 transition-colors hover-text-[#a8741a] ${
                          isActive("/about")
                            ? "primary-yellow border-b-2 border-[#a8741a]"
                            : ""
                        }`}
                      >
                        <span className="flex items-center gap-2">About</span>
                      </Link>
                    </div>
                    <div className="flex items-center justify-between px-6 py-4 text-[15px] font-medium text-gray-800 hover-text-[#a8741a] transition-colors cursor-pointer">
                      <Link
                        to="/collections"
                        className={`pb-1 transition-colors hover-text-[#a8741a] ${
                          location.pathname === "/collections"
                            ? "primary-yellow border-b-2 border-[#a8741a]"
                            : ""
                        }`}
                      >
                        <span className="flex items-center gap-2">
                          Collections
                        </span>
                      </Link>
                    </div>
                    <div className="flex items-center justify-between px-6 py-4 text-[15px] font-medium text-gray-800 hover-text-[#a8741a] transition-colors cursor-pointer">
                      <Link
                        to={`/collections/${catLink}`}
                        className={`pb-1 transition-colors hover-text-[#a8741a] ${
                          location.pathname === `/collections/${catLink}`
                            ? "primary-yellow border-b-2 border-[#a8741a]"
                            : ""
                        }`}
                      >
                        <span className="flex items-center gap-2">
                          Smartwatches
                        </span>
                      </Link>
                    </div>
                    <div className="flex items-center justify-between px-6 py-4 text-[15px] font-medium text-gray-800 hover-text-[#a8741a] transition-colors cursor-pointer">
                      <Link
                        to="/contact"
                        className={`pb-1 transition-colors hover-text-[#a8741a] ${
                          isActive("/contact")
                            ? "primary-yellow border-b-2 border-[#a8741a]"
                            : ""
                        }`}
                      >
                        <span className="flex items-center gap-2">Contact</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
