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
import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(true);
  const [openSubMenu, setOpenSubMenu] = useState();
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
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 py-4 shadow-sm">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <button className="hover:text-gold transition-colors lg:hidden flex">
            <Menu size={20} strokeWidth={1.5} />
          </button>
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 border-2 border-black flex items-center justify-center font-bold text-xl relative overflow-hidden">
              <div className="absolute inset-0 border-t-2 border-l-2 border-transparent hover:border-gold transition-colors duration-300"></div>
              O
            </div>
            <span className="text-2xl font-black tracking-widest uppercase">
              Orolo
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8 text-[14px] font-bold tracking-[0.2em] uppercase">
            <a href="#" className="text-gold border-b-2 border-gold pb-1">
              Home
            </a>
            <a
              href="#"
              className="flex items-center gap-1 hover:text-gold transition-colors"
            >
              Shop <ChevronDown size={14} />
            </a>
            <a
              href="#"
              className="flex items-center gap-1 hover:text-gold transition-colors"
            >
              Product <ChevronDown size={14} />
            </a>
            <a
              href="#"
              className="flex items-center gap-1 hover:text-gold transition-colors"
            >
              Blog <ChevronDown size={14} />
            </a>
            <a
              href="#"
              className="flex items-center gap-1 hover:text-gold transition-colors"
            >
              Pages <ChevronDown size={14} />
            </a>
            <a href="#" className="relative group text-black font-bold">
              Buy Now
              <span className="absolute -top-4 -right-2 bg-green-500 text-white text-[8px] px-1 rounded-sm py-0.5 font-normal tracking-normal uppercase">
                Sale
              </span>
            </a>
          </nav>

          {/* Icons */}
          <div className="flex items-center gap-2">
            <button className="hover:text-gold transition-colors">
              <Search size={20} strokeWidth={1.5} />
            </button>
            {/* <button className="hover:text-gold transition-colors">
              <User size={20} strokeWidth={1.5} />
            </button> */}
            <button className="hover:text-gold transition-colors relative">
              <Heart size={20} strokeWidth={1.5} />
              <span className="absolute -top-2 -right-2 bg-gold text-white text-[9px] rounded-full w-4 h-4 flex items-center justify-center font-bold">
                0
              </span>
            </button>
            <button className="hover:text-gold transition-colors flex items-center gap-2">
              <div className="relative">
                <ShoppingBag size={20} strokeWidth={1.5} />
                <span className="absolute -top-2 -right-2 bg-gold text-white text-[9px] rounded-full w-4 h-4 flex items-center justify-center font-bold">
                  0
                </span>
              </div>
              <span className="text-[11px] font-bold tracking-widest hidden sm:block">
                (0)
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
                  <X size={24} strokeWidth={1.5} />
                </button>
              </div>

              {/* Menu Items */}
              <div className="flex-1 min-h-0 overflow-y-auto">
                <div className="flex flex-col pt-12">
                  {menuItems.map((item) => (
                    <div key={item.name} className="border-b border-gray-100">
                      <div
                        className="flex items-center justify-between px-6 py-4 text-[15px] font-medium text-gray-800 hover:text-gold transition-colors cursor-pointer"
                        onClick={() => item.hasSub && toggleSubMenu(item.name)}
                      >
                        <span className="flex items-center gap-2">
                          {item.name}
                          {item.badge && (
                            <span className="bg-[#2ecc71] text-white text-[10px] px-2 py-0.5 rounded-full font-normal">
                              {item.badge}
                            </span>
                          )}
                        </span>
                        {item.hasSub && (
                          <motion.div
                            animate={{
                              rotate: openSubMenu === item.name ? 45 : 0,
                            }}
                            transition={{ duration: 0.2 }}
                          >
                            <Plus
                              size={16}
                              className={
                                openSubMenu === item.name
                                  ? "text-gold"
                                  : "text-gray-400"
                              }
                            />
                          </motion.div>
                        )}
                      </div>

                      {/* Sub Items */}
                      <AnimatePresence>
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
                                  <a
                                    href="#"
                                    className="text-[14px] text-gray-600 hover:text-gold transition-colors block"
                                  >
                                    {sub}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ))}
                </div>

                {/* Login / Register */}
                <div className="px-6 py-6 border-b border-gray-100">
                  <div className="flex items-center gap-2 text-[14px] text-gray-500">
                    <a href="#" className="hover:text-gold transition-colors">
                      Login
                    </a>
                    <span>/</span>
                    <a href="#" className="hover:text-gold transition-colors">
                      Register
                    </a>
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
