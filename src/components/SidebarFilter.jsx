import { useState } from "react";
import { ChevronDown } from "lucide-react";
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
  const { category = [] } = useCategoryDetail(categoryName);
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

  return (
    <aside className="w-full md:w-72 md:block hidden shrink-0 px-4 py-8 open-sans">
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
          onClick={() => toggleSection("Brand")}
        >
          <h5 className="text-[16px] font-semibold tracking-wider">Brands</h5>
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
                className="flex items-center gap-2 text-gray-600 cursor-pointer hover:text-black"
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
                className="flex items-center gap-2 text-gray-600  cursor-pointer hover:text-black"
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
