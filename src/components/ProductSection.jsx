import { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Star,
  Ruler,
  Share2,
  Twitter,
  Facebook,
  ExternalLink,
  ShieldCheck,
  Lock,
  Truck,
} from "lucide-react";
import { WATCH_IMAGES, RELATED_PRODUCTS } from "../constants";

export default function ProductSection() {
  const [activeImage, setActiveImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState("S");

  return (
    <section className="container mx-auto px-4 py-8">
      {/* Breadcrumbs */}
      <nav aria-label="Breadcrumb" className="mb-6">
        <ol className="flex items-center text-[15px] text-gray-600">
          <li>
            <a href="/" className="hover:text-gray-900 hover:underline">
              Home
            </a>
          </li>
          <li className="mx-2 text-gray-400">/</li>
          <li>
            <a
              href="/category/smartwatches"
              className="hover:text-gray-900 hover:underline"
            >
              Smartwatches & Fitness Trackers
            </a>
          </li>
          <li className="mx-2 text-gray-400">/</li>
          <li className="text-gray-900 font-medium" aria-current="page">
            Men's Skeleton Automatic Mechanical Watch
          </li>
        </ol>
      </nav>

      <div className="flex flex-col lg:flex-row gap-12">
        {/* Left: Gallery */}
        <div className="lg:w-7/12">
          <div className="relative bg-[#fffbf3] rounded overflow-hidden aspect-square mb-4">
            <img
              src={WATCH_IMAGES[activeImage]}
              alt="Main watch"
              className="w-full h-full object-contain"
            />
            <button
              onClick={() =>
                setActiveImage((prev) =>
                  prev > 0 ? prev - 1 : WATCH_IMAGES.length - 1,
                )
              }
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-sm hover:bg-white"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() =>
                setActiveImage((prev) =>
                  prev < WATCH_IMAGES.length - 1 ? prev + 1 : 0,
                )
              }
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-sm hover:bg-white"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
          <div className="grid grid-cols-5 gap-4">
            {WATCH_IMAGES.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setActiveImage(idx)}
                className={`border-2 rounded overflow-hidden aspect-square ${
                  activeImage === idx ? "border-gray-800" : "border-transparent"
                }`}
              >
                <img
                  src={img}
                  alt={`Thumb ${idx}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Right: Details */}
        <div className="lg:w-5/12 text-left">
          <h1 className="text-4xl! font-semibold text-gray-900 mb-2 leading-tight">
            Smart Fitness Tracker Watch
          </h1>
          <div className="flex items-center gap-1 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 text-gray-200 fill-current" />
            ))}
          </div>
          <div className="text-2xl text-neutral-500 font-medium mb-8">
            Rs. 25.00
          </div>

          {/* Size Picker */}
          <div className="mb-6">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm font-semibold text-gray-500 tracking-widest">
                Size : {selectedSize}
              </span>
              <button className="flex items-center gap-1 text-[11px] text-gray-400 uppercase font-medium hover:text-gray-800">
                <Ruler className="w-3 h-3" /> Size Guide
              </button>
            </div>
            <div className="flex gap-2">
              {["S", "M", "L"].map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`w-12 h-10 flex items-center justify-center border text-sm font-medium transition-all ${
                    selectedSize === size
                      ? "border-gray-800 bg-gray-50"
                      : "border-gray-200 hover:border-gray-400"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <div className="border-t border-gray-100 pt-6 space-y-3 open-sans">
            <div className="flex text-sm gap-8">
              <span className="text-gray-400 w-24">Vendor:</span>
              <span className="text-gray-700 font-medium">MechMasters</span>
            </div>
            <div className="flex text-sm gap-8">
              <span className="text-gray-400 w-24">Type:</span>
              <span className="text-gray-700 font-medium">
                Mechanical Watch
              </span>
            </div>
            <div className="flex text-sm gap-8">
              <span className="text-gray-400 w-24">Sku:</span>
              <span className="text-gray-400 font-medium">null</span>
            </div>
            <div className="flex text-sm gap-8">
              <span className="text-gray-400 w-24">Available:</span>
              <span className="text-green-600 font-medium">Available</span>
            </div>
          </div>

          <div className="mt-8 space-y-4">
            <details className="border-t border-gray-100 group">
              <summary className="flex items-center justify-between py-4 cursor-pointer text-sm font-bold uppercase tracking-widest text-gray-800 list-none">
                <span className="flex items-center gap-2">
                  <Truck className="w-4 h-4" /> Shipping information
                </span>
                <span className="text-xl font-light group-open:hidden">+</span>
                <span className="text-xl font-light hidden group-open:block">
                  -
                </span>
              </summary>
              <div className="pb-4 text-sm text-gray-500 leading-relaxed">
                Standard shipping: 3-5 business days. International shipping
                available.
              </div>
            </details>
            <details className="border-y border-gray-100 group">
              <summary className="flex items-center justify-between py-4 cursor-pointer text-sm font-bold uppercase tracking-widest text-gray-800 list-none">
                <span className="flex items-center gap-2">
                  <ExternalLink className="w-4 h-4" /> Care Guide
                </span>
                <span className="text-xl font-light group-open:hidden">+</span>
                <span className="text-xl font-light hidden group-open:block">
                  -
                </span>
              </summary>
              <div className="pb-4 text-sm text-gray-500 leading-relaxed">
                Keep away from strong magnetic fields. Clean with a soft cloth.
              </div>
            </details>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex items-center gap-3 text-[11px] font-semibold text-gray-700">
              <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
                🌿
              </div>
              55% Linen, 45% Rayon
            </div>
            <div className="flex items-center gap-3 text-[11px] font-semibold text-gray-700">
              <Lock className="w-4 h-4 text-gray-400" />
              Secure payment
            </div>
            <div className="flex items-center gap-3 text-[11px] font-semibold text-gray-700">
              <ShieldCheck className="w-4 h-4 text-gray-400" />2 Year Warranty
            </div>
          </div>

          <div className="mt-10 p-4 border border-gray-100 rounded bg-white shadow-sm">
            <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
              <span className="text-lg">👥</span> <strong>24</strong> customers
              are viewing this product
            </div>
            <div className="flex items-center gap-2 text-sm text-orange-500 mb-4">
              <span className="text-lg">🔥</span>{" "}
              <strong>30 SOLD IN LAST 18 HOURS</strong>
            </div>
            <div className="mb-4">
              <div className="flex justify-between text-sm text-gray-500 mb-1">
                <span>Spend Rs. 1,000.00 for Free Shipping</span>
              </div>
              <div className="w-full h-1 bg-gray-100 rounded-full overflow-hidden">
                <div className="bg-[#BFA07A] w-1/12 h-full"></div>
              </div>
            </div>
            <div className="flex gap-4 border-t border-gray-50 pt-4">
              <button className="flex items-center gap-1 text-[11px] text-gray-500 hover:text-blue-600">
                <Facebook className="w-3 h-3" /> Share
              </button>
              <button className="flex items-center gap-1 text-[11px] text-gray-500 hover:text-sky-400">
                <Twitter className="w-3 h-3" /> Tweet
              </button>
              <button className="flex items-center gap-1 text-[11px] text-gray-500 hover:text-red-500">
                <Share2 className="w-3 h-3" /> Pin it
              </button>
            </div>
          </div>

          <div className="mt-6 flex flex-col items-center gap-3">
            <p className="text-[12px] uppercase tracking-widest font-bold text-gray-400">
              Guarantee safe checkout
            </p>
            <div className="flex gap-2 grayscale opacity-60">
              <img
                src="https://img.icons8.com/color/48/visa.png"
                className="w-8"
                alt="visa"
              />
              <img
                src="https://img.icons8.com/color/48/mastercard.png"
                className="w-8"
                alt="mastercard"
              />
              <img
                src="https://img.icons8.com/color/48/paypal.png"
                className="w-8"
                alt="paypal"
              />
              <img
                src="https://img.icons8.com/color/48/apple-pay.png"
                className="w-8"
                alt="applepay"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
