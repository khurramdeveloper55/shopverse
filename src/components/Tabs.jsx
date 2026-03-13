import { useState } from "react";
import { RELATED_PRODUCTS } from "../constants";
import { ShoppingCart, Eye } from "lucide-react";

export default function Tabs() {
  const [activeTab, setActiveTab] = useState("Description");

  return (
    <div className="container mx-auto px-4 py-12 flex flex-col lg:flex-row gap-16 border-t border-gray-100">
      {/* Left: Tabbed Content */}
      <div className="lg:w-2/3">
        <div className="flex border-b border-gray-100 gap-8 mb-8 overflow-x-auto no-scrollbar">
          {["Description", "Material", "Reviews"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-4 text-sm font-bold uppercase tracking-widest relative whitespace-nowrap transition-colors ${
                activeTab === tab
                  ? "text-gray-900"
                  : "text-gray-400 hover:text-gray-600"
              }`}
            >
              {tab}
              {activeTab === tab && (
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gray-900"></div>
              )}
            </button>
          ))}
        </div>

        <div className="text-lg text-gray-500 leading-relaxed space-y-6 text-left">
          {activeTab === "Description" && (
            <div className="animate-in fade-in duration-500">
              <p>
                The Orolo Skeleton Automatic is a testament to the art of
                mechanical watchmaking. Featuring an intricately designed dial
                that reveals the beating heart of the movement, this timepiece
                blends classic elegance with modern industrial aesthetics.
              </p>
              <ul className="list-disc pl-5 space-y-2 mt-4">
                <li>Automatic Self-Winding Movement (No battery required)</li>
                <li>Scratch-Resistant Sapphire Coated Mineral Glass</li>
                <li>42mm Case Diameter with Brushed Finish</li>
                <li>Water Resistant up to 5 ATM</li>
                <li>Premium Genuine Leather Strap with Contrast Stitching</li>
              </ul>
            </div>
          )}
          {activeTab === "Material" && (
            <div className="animate-in fade-in duration-500">
              <p>
                Crafted from the finest materials to ensure longevity and style.
              </p>
              <div className="grid grid-cols-2 gap-4 mt-4">
                <div className="border border-gray-100 p-4 rounded bg-gray-50/50">
                  <h4 className="font-bold text-gray-800 mb-1">Case</h4>
                  <p>316L Surgical Grade Stainless Steel</p>
                </div>
                <div className="border border-gray-100 p-4 rounded bg-gray-50/50">
                  <h4 className="font-bold text-gray-800 mb-1">Crystal</h4>
                  <p>Hardened Mineral Crystal</p>
                </div>
              </div>
            </div>
          )}
          {activeTab === "Reviews" && (
            <div className="animate-in fade-in duration-500 py-4 text-center">
              <p className="text-gray-400 italic">
                No reviews yet. Be the first to review this product!
              </p>
              <button className="mt-4 px-8 py-3 border-2 border-gray-900 text-[11px] font-bold uppercase tracking-widest hover:bg-gray-900 hover:text-white transition-all">
                Write a review
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Right: Related Products Sidebar */}
      <div className="lg:w-1/3">
        <h3 className="text-2xl! font-semibold! text-left  mb-8 text-gray-800">
          Related Products
        </h3>
        <div className="space-y-8">
          {RELATED_PRODUCTS.map((product) => (
            <div key={product.id} className="group flex gap-4 text-left">
              <div className="relative w-24 h-28 shrink-0 bg-gray-100 rounded overflow-hidden">
                <img
                  src={product.image}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  alt={product.name}
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                  <button className="bg-white p-2 rounded-full hover:bg-black hover:text-white transition-colors">
                    <ShoppingCart className="w-3 h-3" />
                  </button>
                  <button className="bg-white p-2 rounded-full hover:bg-black hover:text-white transition-colors">
                    <Eye className="w-3 h-3" />
                  </button>
                </div>
              </div>
              <div className="flex flex-col justify-center">
                <p className="text-sm text-gray-400 font-bold uppercase tracking-wider mb-1">
                  {product.brand}
                </p>
                <h4 className="text-sm font-semibold text-gray-800 mb-2 leading-snug hover:text-[#BFA07A] cursor-pointer">
                  {product.name}
                </h4>
                <p className="text-sm font-semibold text-gray-900">
                  Rs. {product.price.toFixed(2)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
