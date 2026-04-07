import {
  Search,
  User,
  Heart,
  ShoppingBag,
  X,
  Plus,
  ChevronDown,
  Menu,
} from "lucide-react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState(null);
  const menuItems = [
    {
      name: "Home",
      hasSub: true,
      subItems: [
        "Home Default",
        "Home Modern",
        "Home Classic",
        "Home Minimal",
        "Home Luxury",
      ],
    },
    {
      name: "Shop",
      hasSub: true,
      subItems: [
        "Shop Grid",
        "Shop List",
        "Shop Left Sidebar",
        "Shop Right Sidebar",
        "Collection Page",
        "New Arrivals",
        "Best Sellers",
      ],
    },
    {
      name: "Product",
      hasSub: true,
      subItems: [
        "Standard Product",
        "Variable Product",
        "Grouped Product",
        "External Product",
        "Product with Video",
        "Product with 360 View",
      ],
    },
    {
      name: "Pages",
      hasSub: true,
      subItems: [
        "About Us",
        "Contact Us",
        "FAQ",
        "Store Locator",
        "Coming Soon",
        "404 Page",
        "Typography",
        "Terms & Conditions",
        "Privacy Policy",
        "Wishlist",
        "My Account",
      ],
    },
    { name: "Buy Now", hasSub: false, badge: "Sale" },
  ];
  const toggleSubMenu = (name) => {
    setOpenSubMenu((prev) => (prev === name ? null : name));
  };
  return (
    <>
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm transition-all duration-300 ">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <button
            onClick={() => setIsMenuOpen(true)}
            className="hover:text-gold transition-colors lg:hidden flex"
          >
            <Menu className="w-4 h-4 lg:w-5 lg:h-5" strokeWidth={1.5} />
          </button>
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img src="/logo.png" alt="Shopverse Logo" />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8 text-[14px] font-bold tracking-[0.2em] uppercase">
            <Link to="/" className="text-gold border-b-2 border-gold pb-1">
              Home
            </Link>
            <Link
              to="#"
              className="flex items-center gap-1 hover:text-gold transition-colors"
            >
              About
            </Link>
            <Link
              href="#"
              className="flex items-center gap-1 hover:text-gold transition-colors"
            >
              Collections <ChevronDown size={14} />
            </Link>
            <Link
              href="#"
              className="flex items-center gap-1 hover:text-gold transition-colors"
            >
              Smartwatches
            </Link>
            <Link
              href="#"
              className="flex items-center gap-1 hover:text-gold transition-colors"
            >
              Contact
            </Link>
          </nav>

          {/* Icons */}
          <div className="flex items-center gap-1">
            <button className="hover:text-gold transition-colors  lg:px-3.5 lg:py-2.5 py-2.5 px-2">
              <Search className="w-4 h-4 lg:w-5 lg:h-5" strokeWidth={1.5} />
            </button>
            <button className="hover:text-gold transition-colors  lg:px-3.5 lg:py-2.5 py-2.5 px-2">
              <User className="w-4 h-4 lg:w-5 lg:h-5" strokeWidth={1.5} />
            </button>
            <button className="hover:text-gold transition-colors relative lg:px-3.5 lg:py-2.5 py-2.5 px-2">
              <Heart className="w-4 h-4 lg:w-5 lg:h-5" strokeWidth={1.5} />
              <span className="absolute top-4 right-1 bg-primary-yellow text-white text-[10px] rounded-full w-4 h-4 flex items-center justify-center font-bold">
                12
              </span>
            </button>
            <button className="hover:text-gold transition-colors flex items-center gap-2  lg:px-3.5 lg:py-2.5 py-2.5 px-2">
              <div className="relative">
                <ShoppingBag
                  className="w-4 h-4 lg:w-5 lg:h-5"
                  strokeWidth={1.5}
                />
              </div>
              <span className="text-[11px] font-bold tracking-widest hidden sm:block">
                (12)
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
              <div className="absolute top-1 right-1 z-10">
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className=" hover:text-gold transition-colors"
                >
                  <X className="w-4 h-4 lg:w-5 lg:h-5" strokeWidth={1.5} />
                </button>
              </div>

              {/* Menu Items */}
              <div className="flex-1 min-h-0 overflow-y-auto">
                <div className="flex flex-col pt-12">
                  <div>
                    <div className="flex items-center justify-between px-6 py-4 text-[15px] font-medium text-gray-800 hover:text-gold transition-colors cursor-pointer">
                      <Link to="/">
                        <span className="flex items-center gap-2">Home</span>
                      </Link>
                    </div>

                    <div className="flex items-center justify-between px-6 py-4 text-[15px] font-medium text-gray-800 hover:text-gold transition-colors cursor-pointer">
                      <Link to="#">
                        <span className="flex items-center gap-2">About</span>
                      </Link>
                    </div>
                    <div
                      className="flex items-center justify-between px-6 py-4 text-[15px] font-medium text-gray-800 hover:text-gold transition-colors cursor-pointer"
                      // onClick={() => item.hasSub && toggleSubMenu(item.name)}
                    >
                      <Link to="#">
                        <span className="flex items-center gap-2">
                          Collections
                        </span>
                      </Link>
                      <motion.div
                        animate={{
                          rotate: 0,
                        }}
                        transition={{ duration: 0.2 }}
                      >
                        <Plus size={16} className="text-gray-400" />
                      </motion.div>
                    </div>
                    <div className="flex items-center justify-between px-6 py-4 text-[15px] font-medium text-gray-800 hover:text-gold transition-colors cursor-pointer">
                      <Link to="#">
                        <span className="flex items-center gap-2">
                          Smartwatches
                        </span>
                      </Link>
                    </div>
                    <div className="flex items-center justify-between px-6 py-4 text-[15px] font-medium text-gray-800 hover:text-gold transition-colors cursor-pointer">
                      <Link to="#">
                        <span className="flex items-center gap-2">Contact</span>
                      </Link>
                    </div>

                    {/* Sub Items */}
                    {/* <AnimatePresence>
                        {item.hasSub && openSubMenu === item.name && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className="overflow-hidden bg-gray-50"
                          >
                            <ul className="px-8 py-2">
                              {item.subItems?.map((sub) => (
                                <li key={sub} className="py-2.5">
                                  <Link
                                    to="#"
                                    className="text-[14px] text-gray-600 hover:text-gold transition-colors block"
                                  >
                                    {sub}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </motion.div>
                        )}
                      </AnimatePresence> */}
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
