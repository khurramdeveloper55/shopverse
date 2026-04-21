import { useState, useEffect } from "react";
import { X, MoveRight, ArrowLeft } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useParams } from "react-router-dom";
import useCategoryDetail from "../hooks/useCategoryDetail";

export default function MobileFilterSidebar({
  isOpen,
  onClose,
  currentSortBy,
  availability,
  brandFilter,
  typeFilter,
  onApply,
}) {
  const [view, setView] = useState("main");
  const [tempAvailability, setTempAvailability] = useState([]);
  const [tempBrandFilter, setTempBrandFilter] = useState([]);
  const [tempTypeFilter, setTempTypeFilter] = useState([]);
  const [tempSortBy, setTempSortBy] = useState(
    currentSortBy || "title-ascending",
  );

  const { categoryName } = useParams();
  const { category = [] } = useCategoryDetail(categoryName);
  const products = category?.Products || [];

  // Sync temporary state when sidebar opens
  useEffect(() => {
    if (isOpen) {
      setTempAvailability([...(availability || [])]);
      setTempBrandFilter([...(brandFilter || [])]);
      setTempTypeFilter([...(typeFilter || [])]);
      setTempSortBy(currentSortBy || "title-ascending");
      setView("main");
    }
  }, [isOpen, availability, brandFilter, typeFilter, currentSortBy]);

  const filterOptions = [
    { id: "availability", label: "Availability" },
    { id: "brand", label: "Brands" },
    { id: "type", label: "Types" },
  ];

  const uniqueAvailability = ["In Stock", "Out of Stock"];
  const uniqueBrands = [
    ...new Set(products.map((p) => p.vendor).filter(Boolean)),
  ];
  const uniqueTypes = [...new Set(products.map((p) => p.type).filter(Boolean))];

  const getFilterItems = (filterId) => {
    if (filterId === "availability") {
      return uniqueAvailability.map((status) => ({
        value: status === "In Stock" ? "inStock" : "outOfStock",
        label: status,
        count: products.filter((p) => {
          const isInStock =
            p.stock > 0 || p.available === true || p.availability === true;
          return status === "In Stock" ? isInStock : !isInStock;
        }).length,
      }));
    }

    if (filterId === "brand") {
      return uniqueBrands.map((brand) => ({
        value: brand,
        label: brand,
        count: products.filter((p) => p.vendor === brand).length,
      }));
    }

    if (filterId === "type") {
      return uniqueTypes.map((type) => ({
        value: type,
        label: type,
        count: products.filter((p) => p.type === type).length,
      }));
    }
    return [];
  };

  const handleCheckboxChange = (filterId, value) => {
    if (filterId === "availability") {
      setTempAvailability((prev) =>
        prev.includes(value)
          ? prev.filter((v) => v !== value)
          : [...prev, value],
      );
    } else if (filterId === "brand") {
      setTempBrandFilter((prev) =>
        prev.includes(value)
          ? prev.filter((v) => v !== value)
          : [...prev, value],
      );
    } else if (filterId === "type") {
      setTempTypeFilter((prev) =>
        prev.includes(value)
          ? prev.filter((v) => v !== value)
          : [...prev, value],
      );
    }
  };

  const handleApply = () => {
    onApply({
      availability: tempAvailability,
      brand: tempBrandFilter,
      type: tempTypeFilter,
      sortBy: tempSortBy,
    });
  };

  const handleClearAll = () => {
    setTempAvailability([]);
    setTempBrandFilter([]);
    setTempTypeFilter([]);
    setTempSortBy("title-ascending");
  };

  // Render Main View (Filters + Sort)
  const renderMainView = () => (
    <motion.div
      key="main"
      initial={{ x: 0 }}
      animate={{ x: 0 }}
      exit={{ x: "-100%" }}
      transition={{ type: "tween", duration: 0.3 }}
      className="flex flex-col h-full"
    >
      <div className="flex-1 overflow-y-auto py-2">
        {filterOptions.map((option) => (
          <button
            key={option.id}
            onClick={() => setView(option.id)}
            className="w-full flex items-center justify-between px-6 py-4.5 border-b border-gray-100 hover:bg-gray-50 active:bg-gray-100 transition-colors open-sans"
          >
            <span className="text-[16px] text-gray-800 font-normal">
              {option.label}
            </span>
            <MoveRight size={18} strokeWidth={1} className="text-gray-800" />
          </button>
        ))}

        {/* Temporary Sort */}
        <div className="w-full flex items-center justify-between px-6 py-4.5 border-b border-gray-100">
          <span className="text-[16px] text-neutral-800 font-normal open-sans">
            Sort by:
          </span>
          <div className="relative">
            <select
              value={tempSortBy}
              onChange={(e) => setTempSortBy(e.target.value)}
              className="appearance-none cursor-pointer border-none focus:outline-none rounded px-3 py-2 pr-8 text-base open-sans bg-transparent"
            >
              <option value="title-ascending">Alphabetically, A-Z</option>
              <option value="title-descending">Alphabetically, Z-A</option>
              <option value="price-ascending">Price, low to high</option>
              <option value="price-descending">Price, high to low</option>
            </select>
            <svg
              className="absolute right-2 top-1/2 -translate-y-1/2 w-3 h-3 pointer-events-none text-gray-500"
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
      </div>
    </motion.div>
  );

  // Render Sub View (Availability / Brands / Types)
  const renderSubView = (filterId, title) => {
    const items = getFilterItems(filterId);

    let currentValues = [];
    if (filterId === "availability") currentValues = tempAvailability;
    else if (filterId === "brand") currentValues = tempBrandFilter;
    else if (filterId === "type") currentValues = tempTypeFilter;

    return (
      <motion.div
        key={filterId}
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ type: "tween", duration: 0.3 }}
        className="absolute inset-0 bg-white flex flex-col"
      >
        <button
          onClick={() => setView("main")}
          className="flex items-center gap-4 px-6 py-6 border-b border-gray-100 shrink-0"
        >
          <ArrowLeft size={20} strokeWidth={1.5} className="text-neutral-800" />
          <span className="text-[17px] font-medium text-neutral-800">
            {title}
          </span>
        </button>

        <div className="flex-1 overflow-y-auto py-2 open-sans">
          {items.map((item) => (
            <label
              key={item.value}
              className="flex items-center gap-4 px-6 py-4.5 hover:bg-gray-50 active:bg-gray-100 cursor-pointer transition-colors border-b border-gray-100 last:border-b-0"
            >
              <div className="relative flex items-center">
                <input
                  type="checkbox"
                  checked={currentValues.includes(item.value)}
                  onChange={() => handleCheckboxChange(filterId, item.value)}
                  className="peer appearance-none w-5 h-5 border border-gray-300 rounded-sm checked:bg-gray-900 checked:border-gray-900 transition-all cursor-pointer"
                />
                <svg
                  className="absolute w-3 h-3 text-white opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <span className="text-[16px] text-neutral-800 font-normal grow text-left">
                {item.label} ({item.count})
              </span>
            </label>
          ))}

          {items.length === 0 && (
            <div className="flex items-center justify-center h-full text-gray-500 py-10">
              No options available
            </div>
          )}
        </div>
      </motion.div>
    );
  };
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 z-80 backdrop-blur-sm"
          />

          {/* Sidebar */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="fixed top-0 right-0 h-full w-full max-w-[320px] bg-white z-90 shadow-2xl flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="shrink-0 pt-8 pb-6 border-b border-gray-100 px-6 relative open-sans">
              <h2 className="text-[20px] font-semibold text-black tracking-tight text-center">
                Filter and sort
              </h2>
              <p className="text-[14px] text-[#888888] mt-1 font-normal text-center">
                {products.length} products
              </p>
              <button
                onClick={onClose}
                className="absolute right-6 top-8 p-1 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X size={26} strokeWidth={1} className="text-[#888888]" />
              </button>
            </div>

            {/* Content Area */}
            <div className="relative flex-1 overflow-hidden">
              <AnimatePresence mode="wait">
                {view === "main" && renderMainView()}

                {filterOptions.map((option) =>
                  view === option.id
                    ? renderSubView(option.id, option.label)
                    : null,
                )}

                {/* Fallback */}
                {view !== "main" &&
                  !filterOptions.some((opt) => opt.id === view) && (
                    <motion.div
                      key="other"
                      initial={{ x: "100%" }}
                      animate={{ x: 0 }}
                      exit={{ x: "100%" }}
                      transition={{ type: "tween", duration: 0.3 }}
                      className="absolute inset-0 bg-white flex flex-col"
                    >
                      <button
                        onClick={() => setView("main")}
                        className="flex items-center gap-4 px-6 py-6 border-b border-gray-100 shrink-0"
                      >
                        <ArrowLeft
                          size={20}
                          strokeWidth={1.5}
                          className="text-gray-800"
                        />
                        <span className="text-[17px] font-medium text-gray-800 capitalize">
                          {view}
                        </span>
                      </button>
                      <div className="flex-1 flex items-center justify-center p-10 text-center text-gray-500">
                        Options for {view} will appear here.
                      </div>
                    </motion.div>
                  )}
              </AnimatePresence>
            </div>

            {/* Footer */}
            <div className="shrink-0 p-6 border-t border-gray-100 bg-white grid grid-cols-2 gap-4 open-sans">
              <button
                onClick={handleClearAll}
                className="py-3.5 text-[13px] font-bold uppercase tracking-widest border border-gray-200 text-neutral-800 hover:bg-gray-50 active:bg-gray-100 transition-colors"
              >
                Clear all
              </button>
              <button
                onClick={handleApply}
                className="py-3.5 text-[13px] font-bold uppercase tracking-widest bg-primary-yellow text-white hover:bg-black active:bg-gray-900 transition-colors"
              >
                Apply
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
