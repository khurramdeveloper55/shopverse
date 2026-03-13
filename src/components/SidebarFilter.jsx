import { useState } from "react";
import { ChevronDown, Plus, Minus } from "lucide-react";

export default function SidebarFilter() {
  const [maxPrice, setMaxPrice] = useState(100);
  const [openSections, setOpenSections] = useState({
    Availability: true,
    Price: true,
    Brand: true,
    Category: false,
    Material: false,
    Size: false,
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

  return (
    <aside className="w-full md:w-64 shrink-0 px-4 py-8 open-sans">
      <h2 className="text-3xl text-left font-semibold text-neutral-500 mb-8">
        Filter:
      </h2>

      <div className="mb-8 pb-4 border-b border-t border-gray-100">
        <div
          className="flex items-center justify-between mb-4 cursor-pointer hover:text-black group"
          onClick={() => toggleSection("Availability")}
        >
          <h5 className="text-[18px]! mt-4  font-semibold no-underline text-neutral-950 mb-0">
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
            {filterSections[0].options.map((opt) => (
              <label
                key={opt.label}
                className="flex items-center gap-2 text-gray-600 cursor-pointer hover:text-black transition-colors"
              >
                <input
                  type="checkbox"
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

      <div className="mb-8 pb-4 border-b border-gray-100">
        <div
          className="flex items-center justify-between mb-4 cursor-pointer hover:text-black group"
          onClick={() => toggleSection("Price")}
        >
          <h5 className="text-[18px] font-semibold">Price</h5>
          <ChevronDown
            size={16}
            className={`transition-transform duration-300 ${
              openSections["Price"] ? "rotate-180" : ""
            }`}
          />
        </div>
        {openSections["Price"] && (
          <div className="px-2 animate-in fade-in slide-in-from-top-1 duration-200">
            <div className="relative mb-6">
              <input
                type="range"
                min="0"
                max="500"
                value={maxPrice}
                onChange={(e) => setMaxPrice(parseInt(e.target.value))}
                className="w-full h-1 bg-gray-200 rounded-full appearance-none cursor-pointer accent-black"
              />
              <div className="flex justify-between mt-2 text-[10px] text-gray-400 font-semibold uppercase tracking-wider">
                <span>Min: Rs. 0</span>
                <span>Max: Rs. 500</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex-1 flex items-center border border-gray-300 rounded p-1 text-xs bg-gray-50">
                <span className="mr-1 text-gray-400">Rs.</span>
                <input
                  type="text"
                  value="0"
                  className="w-full bg-transparent outline-none cursor-default"
                  readOnly
                />
              </div>
              <div className="flex-1 flex items-center border border-gray-300 rounded p-1 text-xs">
                <span className="mr-1 text-gray-400">Rs.</span>
                <input
                  type="text"
                  value={maxPrice.toFixed(2)}
                  onChange={(e) => setMaxPrice(parseFloat(e.target.value) || 0)}
                  className="w-full outline-none"
                />
              </div>
            </div>
          </div>
        )}
      </div>

      {filterSections.slice(1).map((section) => (
        <div key={section.title} className="mb-8 pb-4 border-b border-gray-100">
          <div
            className="flex items-center justify-between mb-4 cursor-pointer hover:text-black group"
            onClick={() => toggleSection(section.title)}
          >
            <h5 className="text-[18px] font-semibold tracking-wider">
              {section.title}
            </h5>
            <ChevronDown
              size={16}
              className={`transition-transform duration-300 ${
                openSections[section.title] ? "rotate-180" : ""
              }`}
            />
          </div>
          {openSections[section.title] && (
            <div className="space-y-2 animate-in fade-in slide-in-from-top-1 duration-200">
              {section.options.map((opt) => (
                <label
                  key={opt.label}
                  className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer hover:text-black transition-colors"
                >
                  <input
                    type="checkbox"
                    className="w-4 h-4 rounded border-gray-300 accent-black"
                  />
                  <span>
                    {opt.label} ({opt.count})
                  </span>
                </label>
              ))}
              <button className="text-xs! text-gray-400 hover:text-black flex items-center gap-1 mt-2">
                <Plus size={12} /> Show more
              </button>
            </div>
          )}
        </div>
      ))}

      <div className="mb-8">
        <div
          className="flex items-center justify-between mb-4 cursor-pointer hover:text-black group"
          onClick={() => toggleSection("Size")}
        >
          <h5 className="text-[18px]! font-semibold">Size</h5>
          <ChevronDown
            size={16}
            className={`transition-transform duration-300 ${
              openSections["Size"] ? "rotate-180" : ""
            }`}
          />
        </div>
        {openSections["Size"] && (
          <div className="flex flex-wrap gap-2 animate-in fade-in slide-in-from-top-1 duration-200">
            {["S", "M", "L", "XL"].map((size) => (
              <label key={size} className="cursor-pointer">
                <input type="checkbox" className="sr-only peer" />
                <div className="w-10 h-10 border border-gray-200 rounded flex items-center justify-center text-xs font-semibold peer-checked:bg-black peer-checked:text-white transition-all">
                  {size}
                </div>
              </label>
            ))}
          </div>
        )}
      </div>
    </aside>
  );
}
