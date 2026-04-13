import { useEffect, useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Ruler,
  Share2,
  Twitter,
  Facebook,
  ExternalLink,
  ShieldCheck,
  Lock,
  Truck,
  Minus,
  Plus,
} from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { decreaseQuantity, increaseQuantity } from "../redux/slices/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import useCartSelector from "../hooks/useCartSelector";

export default function ProductSection({ product }) {
  const { categoryName } = useParams();
  const [activeImage, setActiveImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState(product?.sizes || "S");
  const dispatch = useDispatch();
  const { isInCart, handleAddToCart } = useCartSelector(product);
  const cart = useSelector((state) => state?.cart?.items || []);
  const cartItem = cart.find((item) => item?.id === product.id);
  const [localQuantity, setLocalQuantity] = useState(1);

  useEffect(() => {
    if (cartItem) {
      setLocalQuantity(cartItem.quantity);
    } else {
      setLocalQuantity(1);
    }
  }, [cartItem]);

  const currentQuantity = cartItem ? cartItem.quantity : localQuantity;

  const handleIncrease = () => {
    if (cartItem) {
      dispatch(increaseQuantity(product.id));
    } else {
      setLocalQuantity((prev) => prev + 1);
    }
  };

  const handleDecrease = () => {
    if (cartItem) {
      dispatch(decreaseQuantity(product.id));
    } else {
      setLocalQuantity((prev) => Math.max(1, prev - 1));
    }
  };

  if (!product) {
    return null;
  }

  return (
    <section className="container mx-auto px-4">
      {/* Breadcrumbs */}
      <nav className="text-[14px] leading-5 font-medium py-6">
        <ul className="flex items-center">
          <li className="inline-block px-[3px] text-gray-900 hover:underline cursor-pointer open-sans">
            <Link to="/">Home</Link>
          </li>

          <li className="inline-block px-[3px] text-gray-400">/</li>

          <li className="inline-block px-[3px] text-gray-900 hover:underline cursor-pointer open-sans">
            <Link to={`/collections/${categoryName}`}>
              {categoryName
                .replace(/-/g, " ")
                .split(" ")
                .map(
                  (word) =>
                    word.charAt(0).toUpperCase() + word.slice(1).toLowerCase(),
                )
                .join(" ")}
            </Link>
          </li>
          <li className="inline-block px-[3px] text-gray-400">/</li>
          <li className="inline-block px-[3px] text-gray-900 open-sans">
            {product.name}
          </li>
        </ul>
      </nav>

      <div className="flex flex-col lg:flex-row gap-0 max-w-[1200px]">
        {/* Left: Gallery */}
        <div className="lg:w-7/12 md:mb-0 mb-12">
          <div className="relative  rounded overflow-hidden aspect-square mb-4">
            <img
              src={product.images[activeImage].main}
              alt="Main watch"
              className="w-full h-full object-contain"
            />
            <button
              onClick={() =>
                setActiveImage((prev) =>
                  prev > 0 ? prev - 1 : product.images.length - 1,
                )
              }
              className="absolute left-10 md:left-24 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-sm hover:bg-white"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() =>
                setActiveImage((prev) =>
                  prev < product.images.length - 1 ? prev + 1 : 0,
                )
              }
              className="absolute right-10 md:right-24 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-sm hover:bg-white"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
          <div className="flex gap-4">
            {product.images.map((imgObj, idx) => (
              <button
                key={idx}
                onClick={() => setActiveImage(idx)}
                className={`border-2 w-18 h-22 rounded overflow-hidden aspect-square ${
                  activeImage === idx ? "border-gray-800" : "border-transparent"
                }`}
              >
                <img
                  src={imgObj.thumb}
                  alt={`Thumb ${idx}`}
                  className="w-18 h-22 object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Right: Details */}
        <div className="lg:w-5/12 text-left">
          <h1 className="md:text-4xl! text-3xl! font-semibold text-gray-900 mb-2 leading-tight">
            {product.name}
          </h1>
          <div className="flex mb-2 md:text-2xl text-lg gap-0.5">
            {[1, 2, 3, 4, 5].map((star) => (
              <span key={star} className="transition-colors primary-yellow">
                {star <= Math.floor(product.rating) ? "★" : "☆"}
              </span>
            ))}
          </div>
          <div className="flex gap-4 items-center mb-6 pb-6 open-sans border-b border-gray-100">
            <span className="text-2xl text-stone-500 font-semibold ">
              Rs. {product.price}
            </span>
            <span className="primary-yellow font-semibold">
              {product.availability ? `${product.stock} Available` : ""}
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-4 mb-8">
            {/* Quantity Selector */}
            <div className="flex items-center border border-gray-200 rounded-sm">
              <button
                onClick={() => handleDecrease(product.id)}
                className="p-3 hover:text-gold transition-colors"
              >
                <Minus size={16} />
              </button>
              <span className="w-12 text-center font-medium">
                {currentQuantity}
              </span>
              <button
                onClick={() => handleIncrease(product.id)}
                className="p-3 hover:text-gold transition-colors"
              >
                <Plus size={16} />
              </button>
            </div>

            {/* Add to Cart Button */}
            <button
              onClick={handleAddToCart}
              disabled={isInCart}
              className={`relative isolate overflow-hidden inline-block px-[35px] py-3 border border-yellow-700 
    uppercase tracking-wide font-semibold rounded-md transition duration-300

    ${
      isInCart
        ? "bg-[#a8741a] text-white cursor-not-allowed"
        : "text-yellow-700 hover:text-white"
    }

    before:content-[''] before:absolute before:block before:-z-10
    before:bg-yellow-700
    before:w-[120%] before:h-[110%]
    before:top-0 before:left-0
    before:origin-bottom-left
    before:rotate-[4deg]
    before:translate-y-[108%] before:-translate-x-4
    before:transition-transform before:duration-200

    ${
      isInCart
        ? "before:translate-y-0 before:rotate-0 before:translate-x-0"
        : "hover:before:rotate-0 hover:before:translate-y-0 hover:before:translate-x-0"
    }
  `}
            >
              {isInCart ? "ADDED ✓" : "ADD TO CART"}
            </button>
          </div>

          {/* Size Picker */}
          <div className="mb-6 open-sans">
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
              <span className="text-gray-700 font-medium">
                {product.vendor}
              </span>
            </div>
            <div className="flex text-sm gap-8">
              <span className="text-gray-400 w-24">Type:</span>
              <span className="text-gray-700 font-medium">{product.type}</span>
            </div>
            <div className="flex text-sm gap-8">
              <span className="text-gray-400 w-24">Sku:</span>
              <span className="text-gray-400 font-medium">null</span>
            </div>
            <div className="flex text-sm gap-8">
              <span className="text-gray-400 w-24">Available:</span>
              <span className="text-green-600 font-medium">
                {product.availability ? "Available" : "Not Available"}
              </span>
            </div>
          </div>

          <div className="mt-8 space-y-4">
            <details className="border-t border-gray-100 group open-sans">
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
            <details className="border-y border-gray-100 group open-sans">
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

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-2 open-sans">
            <div className="flex items-center gap-3 text-[12px] font-semibold text-gray-700">
              <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
                🌿
              </div>
              55% Linen, 45% Rayon
            </div>
            <div className="flex items-center gap-3 text-[12px] font-semibold text-gray-700">
              <Lock className="w-4 h-4 text-gray-400" />
              Secure payment
            </div>
            <div className="flex items-center gap-3 text-[12px] font-semibold text-gray-700">
              <ShieldCheck className="w-4 h-4 text-gray-400" />2 Year Warranty
            </div>
          </div>

          <div className="mt-10 p-4 border border-gray-100 rounded bg-white shadow-sm open-sans">
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
            {
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
            }
          </div>
        </div>
      </div>
    </section>
  );
}
