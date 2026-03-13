import CategorySlider from "./CategorySlider";
import ProductPageGrid from "./ProductPageGrid";
import ProductHero from "./ProductHero";
import SidebarFilter from "./SidebarFilter";

export default function ProductPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <main className="grow">
        <ProductHero />
        <CategorySlider />

        <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row px-4">
          <SidebarFilter />
          <ProductPageGrid />
        </div>
      </main>

      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 py-3 px-4 flex justify-between items-center z-40 shadow-[0_-2px_10px_rgba(0,0,0,0.05)]">
        <button className="flex-1 text-center font-bold text-sm uppercase tracking-wider py-2">
          Filters
        </button>
        <div className="w-px h-6 bg-gray-200 mx-2" />
        <button className="flex-1 text-center font-bold text-sm uppercase tracking-wider py-2">
          Sort
        </button>
      </div>
    </div>
  );
}
