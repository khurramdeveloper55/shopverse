import { RECOMMENDATIONS } from "../constants";
import { ShoppingCart, Eye, Heart } from "lucide-react";

export default function Recommendations() {
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="flex items-center justify-between mb-10">
        <h2 className="text-2xl font-semibold tracking-tight">
          You May Also Like
        </h2>
        <div className="flex gap-2">
          <button className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50">
            &larr;
          </button>
          <button className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50">
            &rarr;
          </button>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-10">
        {RECOMMENDATIONS.map((product) => (
          <div key={product.id} className="group cursor-pointer">
            <div className="relative aspect-4/5 bg-gray-100 overflow-hidden mb-4">
              {product.discount && (
                <span className="absolute top-3 left-3 bg-[#BFA07A] text-white text-[10px] font-bold px-2 py-1 rounded-sm z-10">
                  {product.discount}
                </span>
              )}
              <img
                src={product.image}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                alt={product.name}
              />
              {/* Overlay Actions */}
              <div className="absolute bottom-4 left-0 w-full px-4 flex gap-2 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                <button className="flex-1 bg-white h-10 text-[10px] font-bold uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-gray-900 hover:text-white transition-all shadow-lg">
                  Select Size
                </button>
                <button className="w-10 h-10 bg-white flex items-center justify-center hover:bg-gray-900 hover:text-white transition-all shadow-lg">
                  <Eye className="w-4 h-4" />
                </button>
              </div>
              <button className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-sm opacity-0 group-hover:opacity-100 transition-opacity hover:text-red-500">
                <Heart className="w-4 h-4" />
              </button>
            </div>

            <p className="text-sm text-gray-400 font-semibold uppercase tracking-widest mb-1">
              {product.brand}
            </p>
            <h3 className="text-xl! font-semibold! text-gray-800 mb-2 leading-snug group-hover:text-[#BFA07A] transition-colors line-clamp-2">
              {product.name}
            </h3>
            <div className="flex items-center justify-center gap-2  ">
              <span className="text-sm font-semibold text-gray-900 ">
                Rs. {product.price.toFixed(2)}
              </span>
              {product.originalPrice && (
                <span className="text-xs text-gray-400 line-through">
                  Rs. {product.originalPrice.toFixed(2)}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
