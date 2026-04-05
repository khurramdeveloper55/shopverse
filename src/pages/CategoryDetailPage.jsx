import CategorySlider from "../components/CategorySlider";
import CategoryPageGrid from "../components/CategoryPageGrid";
import CategoryPageHero from "../components/CategoryPageHero";
import SidebarFilter from "../components/SidebarFilter";
import { useParams } from "react-router-dom";
import useCategoryDetail from "../hooks/useCategoryDetail";
import { useState } from "react";

export default function CategoryDetailPage() {
  const { categoryName } = useParams();
  const { category, isLoading } = useCategoryDetail(categoryName);
  const [availability, setAvailability] = useState([]);
  const [brandFilter, setBrandFilter] = useState([]);
  const [typeFilter, setTypeFilter] = useState([]);
  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <main className="grow">
        <CategoryPageHero category={category} />
        <CategorySlider />

        <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row px-4">
          <SidebarFilter
            availability={availability}
            setAvailability={setAvailability}
            brandFilter={brandFilter}
            setBrandFilter={setBrandFilter}
            typeFilter={typeFilter}
            setTypeFilter={setTypeFilter}
          />
          <CategoryPageGrid
            availability={availability}
            setAvailability={setAvailability}
            brandFilter={brandFilter}
            setBrandFilter={setBrandFilter}
            typeFilter={typeFilter}
            setTypeFilter={setTypeFilter}
          />
        </div>
      </main>
    </div>
  );
}
