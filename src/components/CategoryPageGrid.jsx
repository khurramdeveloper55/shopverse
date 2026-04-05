import { Eye, Heart, Repeat } from "lucide-react";
import useCategoryDetail from "../hooks/useCategoryDetail";
import { useParams } from "react-router-dom";
import { useState } from "react";

export default function ProductGrid({ availability, brandFilter, typeFilter }) {
  const { categoryName } = useParams();
  const { category = [], isLoading } = useCategoryDetail(categoryName);
  const products = category?.Products || [];
  const [sortBy, setSortBy] = useState("title-ascending");

  const filteredProducts = products.filter((product) => {
    const matchAvailabilityFilter =
      availability.length === 0 ||
      (availability.includes("inStock") &&
        product.availability === true &&
        product.stock > 0) ||
      (availability.includes("outOfStock") &&
        (product.availability === false || product.stock === 0));

    const matchBrandFilter =
      brandFilter.length === 0 || brandFilter.includes(product.vendor);

    const matchTypeFilter =
      typeFilter.length === 0 || typeFilter.includes(product.type);

    return matchAvailabilityFilter && matchBrandFilter && matchTypeFilter;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case "title-ascending":
        return a.name.localeCompare(b.name);
      case "title-descending":
        return b.name.localeCompare(a.name);
      case "price-ascending":
        return a.price - b.price;
      case "price-descending":
        return b.price - a.price;
      default:
        return 0;
    }
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <section className="pb-20 pt-0 bg-white relative group/slider">
      <div className="flex justify-end items-center mb-8 ">
        <div className="flex items-center mt-4">
          {/* Sort Filter */}
          <div className="flex items-center grow space-x-4 pl-10">
            <div className="flex items-center">
              <label
                htmlFor="SortBy-sidebar"
                className="text-base font-medium mr-2"
              >
                Sort by:
              </label>
              <div className="relative">
                <select
                  id="SortBy-sidebar"
                  name="sort_by"
                  className="appearance-none border border-gray-300 rounded px-3 py-2 pr-8 text-base"
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                >
                  <option value="title-ascending">Alphabetically, A-Z</option>
                  <option value="title-descending">Alphabetically, Z-A</option>
                  <option value="price-ascending">Price, low to high</option>
                  <option value="price-descending">Price, high to low</option>
                </select>
                {/* Caret Icon */}
                <svg
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 w-3 h-3 pointer-events-none"
                  viewBox="0 0 10 6"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M9.354.646a.5.5 0 00-.708 0L5 4.293 1.354.646a.5.5 0 00-.708.708l4 4a.5.5 0 00.708 0l4-4a.5.5 0 000-.708z"
                  />
                </svg>
              </div>
            </div>

            {/* Product count */}
            <div className="ml-14 relative">
              <h2 className="text-base opacity-80 open-sans">
                {sortedProducts.length} products
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4">
        {/* Slider Rows */}
        <div className="flex flex-col gap-y-12 max-w-7xl mx-auto px-4">
          {/* First Row */}
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {sortedProducts.map((product, i) => (
              <ProductCard
                key={`r1-${product.id}`}
                product={product}
                categoryName={categoryName}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const ProductCard = ({ product, categoryName }) => (
  <div className="group flex flex-col items-center animate-fade-in relative">
    {/* Image Area */}
    <div className="relative w-full aspect-[1/1.2] cursor-pointer bg-[#fffbf3] overflow-hidden mb-8 flex items-center justify-center ">
      {/* Primary Image */}
      <img
        src={product.images[0].main}
        alt={product.name}
        className="w-full h-full object-contain transition-all duration-700 group-hover:opacity-0 group-hover:scale-105"
      />

      {/* Hover Image */}
      <img
        src={product.images[1].main || product.images[0].main}
        alt={product.name}
        className="absolute w-full h-full object-contain p-3 opacity-0 transition-all duration-700 group-hover:opacity-100 group-hover:scale-105"
      />

      {/* Badges */}
      {product.tag && (
        <div
          className={`absolute top-4 left-4 z-20 ${
            product.tag === "Sold Out"
              ? "text-red-500 bg-white border border-red-500"
              : "bg-[#40C9AF] text-white"
          } text-[9px] px-2 py-1 font-bold uppercase tracking-[0.2em]`}
        >
          {product.tag}
        </div>
      )}

      {/* Hover Action Icons */}
      <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-3 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0 z-9999">
        <button
          className="bg-white p-3 rounded-full shadow-lg text-gray-700 hover:bg-[#C5A059] hover:text-white transition-colors"
          title="Add to Wishlist"
        >
          <Heart size={18} />
        </button>
        <button
          className="bg-white p-3 rounded-full shadow-lg text-gray-700 hover:bg-[#C5A059] hover:text-white transition-colors"
          title="Quick View"
        >
          <Eye size={18} />
        </button>
        <button
          className="bg-white p-3 rounded-full shadow-lg text-gray-700 hover:bg-[#C5A059] hover:text-white transition-colors"
          title="Compare"
        >
          <Repeat size={18} />
        </button>
      </div>
    </div>

    {/* Product Info */}
    <div className="text-center w-full px-4 flex flex-col items-center pb-2">
      <p className="text-[11px] text-gray-500 font-semibold tracking-[0.25em] uppercase mb-1">
        {product.vendor}
      </p>
      <a href={`/collections/${categoryName}/product/${product.slug}`}>
        <h3 className=" hover:text-[#C5A059] cursor-pointer mb-1 leading-snug text-[#111111] rajdhani-medium text-[22px]! tracking-normal normal-case transition-all duration-300">
          {product.name}
        </h3>
      </a>
      <div className="text-[#C5A059] text-lg flex justify-center mb-2 tracking-[3px]">
        {"★".repeat(product.rating)}
      </div>

      {/* Container for Price / Add to Cart Toggle */}
      <div className="relative w-full h-[18px] overflow-hidden flex flex-col items-center">
        {/* Price State */}
        <div
          className={`flex items-center justify-center gap-2 transition-all duration-300 ${
            product.tag !== "Sold Out"
              ? "group-hover:-translate-y-full opacity-100 group-hover:opacity-0"
              : "opacity-100"
          }`}
        >
          <span className="font-medium text-[#333] text-[16px]">
            Rs. {product.price}
          </span>
          {product.oldPrice && (
            <span className="text-[13px] text-gray-400 line-through">
              Rs. {product.price}
            </span>
          )}
        </div>

        {/* Add to Cart State (Absolute so it occupies the same space) */}
        {product.tag !== "Sold Out" && (
          <div className="absolute inset-0 flex items-center justify-center translate-y-full group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
            <button className="text-[13px] font-bold text-black uppercase tracking-[0.2em] border-b-2 border-black pb-0.5 hover:text-[#C5A059] hover:border-[#C5A059] transition-all whitespace-nowrap cursor-pointer z-30">
              ADD TO CART
            </button>
          </div>
        )}
      </div>
    </div>
  </div>
);
