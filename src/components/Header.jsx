import { Search, User, Heart, ShoppingBag, ChevronDown } from "lucide-react";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 py-4 shadow-sm">
      <div className="container mx-auto px-4 flex items-center justify-between">
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
          <button className="hover:text-gold transition-colors">
            <User size={20} strokeWidth={1.5} />
          </button>
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
  );
}
