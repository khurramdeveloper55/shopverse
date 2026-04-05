import { useState } from "react";
import { ChevronDown, Plus, Minus } from "lucide-react";
import useCategoryDetail from "../hooks/useCategoryDetail";
import { useParams } from "react-router-dom";

export default function SidebarFilter({
  availability,
  setAvailability,
  brandFilter,
  setBrandFilter,
  typeFilter,
  setTypeFilter,
}) {
  const { categoryName } = useParams();
  const { category = [], isLoading } = useCategoryDetail(categoryName);
  const products = category?.Products || [];

  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(50);
  const minLimit = 0;
  const maxLimit = 50;

  // Convert values to percentages for the range track
  const minPercent = ((minPrice - minLimit) / (maxLimit - minLimit)) * 100;
  const maxPercent = ((maxPrice - minLimit) / (maxLimit - minLimit)) * 100;
  const [openSections, setOpenSections] = useState({
    Availability: true,
    Price: true,
    Brand: true,
    Type: true,
    Size: true,
  });

  const toggleSection = (title) => {
    setOpenSections((prev) => ({
      ...prev,
      [title]: !prev[title],
    }));
  };

  const filterSections = [
    {
      title: "Availability",
      options: [
        { label: "In stock", count: 8 },
        { label: "Out of stock", count: 5 },
      ],
    },
    {
      title: "Brand",
      options: [
        { label: "CarbonEdge", count: 1 },
        { label: "ChicHour", count: 1 },
        { label: "FitPulse", count: 1 },
        { label: "GearGuard", count: 1 },
        { label: "Jetset Watches", count: 1 },
        { label: "MechMasters", count: 1 },
        { label: "TechChrono", count: 1 },
        { label: "TinyTime", count: 1 },
      ],
    },
    {
      title: "Category",
      options: [
        { label: "Classic", count: 12 },
        { label: "Luxury", count: 8 },
        { label: "Smartwatch", count: 15 },
        { label: "Vintage", count: 6 },
      ],
    },
    {
      title: "Material",
      options: [
        { label: "Leather", count: 4 },
        { label: "Stainless Steel", count: 12 },
        { label: "Carbon Fiber", count: 2 },
        { label: "Silicone", count: 8 },
      ],
    },
  ];

  const categoriess = [
    { label: "Rolex", count: 12 },
    { label: "Casio", count: 8 },
    { label: "Omega", count: 5 },
  ];

  const brands = [
    { label: "Rolex", count: 12 },
    { label: "Casio", count: 8 },
    { label: "Omega", count: 5 },
  ];

  const inStock = products.filter(
    (product) => product.availability === true && product.stock > 0,
  ).length;

  const outOfStock = products.filter(
    (product) => product.availability === false || product.stock === 0,
  ).length;

  const availableOpt = [
    { label: "In stock", count: inStock, value: "inStock" },
    { label: "Out of stock", count: outOfStock, value: "outOfStock" },
  ];

  const uniqueVendor = [...new Set(products.map((product) => product.vendor))];
  const uniqueTypes = [...new Set(products.map((product) => product.type))];

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <aside className="w-full md:w-64 shrink-0 px-4 py-8 open-sans">
      <h2 className="text-[1.8rem] text-left font-semibold text-neutral-500 mb-6">
        Filter:
      </h2>

      <div className="mb-6 pb-6 border-b border-t border-gray-100">
        <div
          className="flex items-center justify-between mb-4 cursor-pointer hover:text-black group"
          onClick={() => toggleSection("Availability")}
        >
          <h5 className="text-[16px]! mt-4  font-semibold no-underline text-neutral-950 mb-0">
            Availability
          </h5>
          <ChevronDown
            size={16}
            className={`transition-transform duration-300 mt-2 ${
              openSections["Availability"] ? "rotate-180" : ""
            }`}
          />
        </div>
        {openSections["Availability"] && (
          <div className="space-y-2 animate-in fade-in slide-in-from-top-1 duration-200">
            {availableOpt.map((opt) => (
              <label
                key={opt.label}
                className="flex items-center gap-2 text-gray-600 cursor-pointer hover:text-black transition-colors"
              >
                <input
                  type="checkbox"
                  checked={availability.includes(opt.value)}
                  onChange={() => {
                    setAvailability((prev) =>
                      prev.includes(opt.value)
                        ? prev.filter((item) => item != opt.value)
                        : [...prev, opt.value],
                    );
                  }}
                  className="w-4 h-4 rounded border-gray-300 accent-black"
                />
                <span>
                  {opt.label} ({opt.count})
                </span>
              </label>
            ))}
          </div>
        )}
      </div>

      <div className="mb-6 pb-6 border-b border-gray-100">
        <div
          className="flex items-center justify-between mb-4 cursor-pointer hover:text-black group"
          onClick={() => toggleSection("Price")}
        >
          <h5 className="text-[16px] font-semibold">Price</h5>
          <ChevronDown
            size={16}
            className={`transition-transform duration-300 ${
              openSections["Price"] ? "rotate-180" : ""
            }`}
          />
        </div>
        {openSections["Price"] && (
          <div className="px-2 pt-2 pb-3">
            {/* Slider */}
            <div className="relative mb-5 h-6">
              {/* Full Track */}
              <div className="absolute top-2 left-0 right-0 h-1 bg-gray-200 rounded-full" />

              {/* Selected Range */}
              <div
                className="absolute top-2 h-1 bg-black rounded-full"
                style={{
                  left: `${minPercent}%`,
                  right: `${100 - maxPercent}%`,
                }}
              />

              {/* Left Thumb */}
              <input
                type="range"
                min={minLimit}
                max={maxLimit}
                value={minPrice}
                onChange={(e) =>
                  setMinPrice(Math.min(Number(e.target.value), maxPrice - 1))
                }
                className="absolute w-full h-6 appearance-none bg-transparent pointer-events-none
                       [&::-webkit-slider-thumb]:pointer-events-auto
                       [&::-webkit-slider-thumb]:appearance-none
                       [&::-webkit-slider-thumb]:h-4
                       [&::-webkit-slider-thumb]:w-4
                       [&::-webkit-slider-thumb]:rounded-full
                       [&::-webkit-slider-thumb]:bg-black
                       [&::-webkit-slider-thumb]:cursor-pointer"
              />

              {/* Right Thumb */}
              <input
                type="range"
                min={minLimit}
                max={maxLimit}
                value={maxPrice}
                onChange={(e) =>
                  setMaxPrice(Math.max(Number(e.target.value), minPrice + 1))
                }
                className="absolute w-full h-6 appearance-none bg-transparent pointer-events-none
                       [&::-webkit-slider-thumb]:pointer-events-auto
                       [&::-webkit-slider-thumb]:appearance-none
                       [&::-webkit-slider-thumb]:h-4
                       [&::-webkit-slider-thumb]:w-4
                       [&::-webkit-slider-thumb]:rounded-full
                       [&::-webkit-slider-thumb]:bg-black
                       [&::-webkit-slider-thumb]:cursor-pointer"
              />
            </div>

            {/* Inputs */}
            <div className="flex items-center gap-3">
              {/* Min Input */}
              <div className="flex items-center w-1/2">
                <span className="mr-2 text-sm text-gray-500 relative -top-1">
                  Rs.
                </span>
                <input
                  type="number"
                  min={minLimit}
                  max={maxPrice - 1}
                  value={minPrice}
                  onChange={(e) =>
                    setMinPrice(Math.min(Number(e.target.value), maxPrice - 1))
                  }
                  className="w-full h-11 px-4 border border-gray-300 text-sm outline-none"
                />
              </div>

              {/* Max Input */}
              <div className="flex items-center w-1/2">
                <span className="mr-2 text-sm text-gray-500 relative -top-1">
                  Rs.
                </span>
                <input
                  type="number"
                  min={minPrice + 1}
                  max={maxLimit}
                  value={maxPrice}
                  onChange={(e) =>
                    setMaxPrice(Math.max(Number(e.target.value), minPrice + 1))
                  }
                  className="w-full h-11 px-4 border border-gray-300 text-sm outline-none"
                />
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="mb-6 pb-6 border-b border-gray-100">
        <div
          className="flex items-center justify-between mb-4 cursor-pointer hover:text-black group"
          onClick={() => toggleSection("Brand")}
        >
          <h5 className="text-[16px] font-semibold tracking-wider">Brand</h5>
          <ChevronDown
            size={16}
            className={`transition-transform duration-300 ${
              openSections.Brand ? "rotate-180" : ""
            }`}
          />
        </div>

        {openSections.Brand && (
          <div className="space-y-2">
            {uniqueVendor.map((opt) => (
              <label
                key={opt}
                className="flex items-center gap-2 text-gray-600"
              >
                <input
                  type="checkbox"
                  checked={brandFilter.includes(opt)}
                  onChange={() =>
                    setBrandFilter((prev) =>
                      prev.includes(opt)
                        ? prev.filter((item) => item != opt)
                        : [...prev, opt],
                    )
                  }
                />
                <span>{opt}</span>
              </label>
            ))}
          </div>
        )}
      </div>

      <div className="mb-6 pb-6 border-b border-gray-100">
        <div
          className="flex items-center justify-between mb-4 cursor-pointer"
          onClick={() => toggleSection("Type")}
        >
          <h5 className="text-[16px] font-semibold tracking-wider">Types</h5>
          <ChevronDown
            size={16}
            className={`transition-transform duration-300 ${
              openSections.Type ? "rotate-180" : ""
            }`}
          />
        </div>

        {openSections.Type && (
          <div className="space-y-2">
            {uniqueTypes.map((opt) => (
              <label
                key={opt}
                className="flex items-center gap-2 text-gray-600"
              >
                <input
                  type="checkbox"
                  checked={typeFilter.includes(opt)}
                  onChange={() =>
                    setTypeFilter((prev) =>
                      prev.includes(opt)
                        ? prev.filter((item) => item != opt)
                        : [...prev, opt],
                    )
                  }
                />
                <span>{opt}</span>
              </label>
            ))}
          </div>
        )}
      </div>
    </aside>
  );
}
