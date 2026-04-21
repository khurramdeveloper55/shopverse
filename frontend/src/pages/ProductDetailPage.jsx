import ProductSection from "../components/ProductSection";
import Tabs from "../components/Tabs";
import { useParams } from "react-router-dom";
import useProductDetail from "../hooks/useProductDetail";
import useCategoryDetail from "../hooks/useCategoryDetail";

export default function ProductDetailPage() {
  const { categoryName, productName } = useParams();
  const { category, isPending } = useCategoryDetail(categoryName);
  const { product } = useProductDetail(productName);

  const filteredProducts =
    category?.Products?.filter((item) => item.slug !== productName) || [];
  return (
    <div>
      <ProductSection product={product} isPending={isPending} />
      <Tabs
        product={product}
        products={filteredProducts}
        isPending={isPending}
      />
    </div>
  );
}
