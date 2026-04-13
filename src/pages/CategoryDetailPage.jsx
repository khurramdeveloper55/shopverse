import { useState } from "react";
import { useParams } from "react-router-dom";
import useCategoryDetail from "../hooks/useCategoryDetail";

import SidebarFilter from "../components/SidebarFilter";
import CategoryPageHero from "../components/CategoryPageHero";
import CategorySlider from "../components/CategorySlider";
import CategoryPageGrid from "../components/CategoryPageGrid";
import MobileFilterSidebar from "../components/MobileFilterSidebar";

export default function CategoryDetailPage() {
  const { categoryName } = useParams();
  const { category } = useCategoryDetail(categoryName);
  const products = category?.Products || [];

  // Main filters (used by Desktop + final result)
  const [sortBy, setSortBy] = useState("title-ascending");
  const [availability, setAvailability] = useState([]);
  const [brandFilter, setBrandFilter] = useState([]);
  const [typeFilter, setTypeFilter] = useState([]);

  // Mobile only
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  // Filtered & Sorted Products
  const filteredProducts = products.filter((product) => {
    const matchAvailability =
      availability.length === 0 ||
      (availability.includes("inStock") &&
        product.availability === true &&
        product.stock > 0) ||
      (availability.includes("outOfStock") &&
        (product.availability === false || product.stock === 0));

    const matchBrand =
      brandFilter.length === 0 || brandFilter.includes(product.vendor);
    const matchType =
      typeFilter.length === 0 || typeFilter.includes(product.type);

    return matchAvailability && matchBrand && matchType;
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

  const handleApplyMobileFilters = (newFilters) => {
    setAvailability(newFilters.availability || []);
    setBrandFilter(newFilters.brand || []);
    setTypeFilter(newFilters.type || []);
    setIsMobileFilterOpen(false);
    setSortBy(newFilters.sortBy || sortBy);
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <main className="grow">
        <CategoryPageHero category={category} />
        <CategorySlider />

        <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row px-4">
          {/* Desktop Sidebar - Instant filtering */}
          <div className="hidden md:block w-72 shrink-0 pt-6">
            <SidebarFilter
              availability={availability}
              setAvailability={setAvailability}
              brandFilter={brandFilter}
              setBrandFilter={setBrandFilter}
              typeFilter={typeFilter}
              setTypeFilter={setTypeFilter}
            />
          </div>

          {/* Product Grid */}
          <CategoryPageGrid
            sortBy={sortBy}
            setSortBy={setSortBy}
            sortedProducts={sortedProducts}
            onOpenMobileFilter={() => setIsMobileFilterOpen(true)}
          />

          {/* Mobile Filter Sidebar */}
          <MobileFilterSidebar
            isOpen={isMobileFilterOpen}
            onClose={() => setIsMobileFilterOpen(false)}
            currentSortBy={sortBy}
            setSortBy={setSortBy}
            availability={availability}
            brandFilter={brandFilter}
            typeFilter={typeFilter}
            onApply={handleApplyMobileFilters}
          />
        </div>
      </main>
    </div>
  );
}
