import ProductSection from "../components/ProductSection";
import Tabs from "../components/Tabs";
import Recommendations from "../components/Recommendations";
import { useParams } from "react-router-dom";
import useProductDetail from "../hooks/useProductDetail";

export default function ProductDetailPage() {
  const { productName } = useParams();
  const { product, isLoading } = useProductDetail(productName);
  if (isLoading) {
    return <div>Loading...</div>;
  }
  console.log(product);
  return (
    <div>
      <ProductSection product={product} />
      <Tabs product={product} />
      <Recommendations product={product} />
    </div>
  );
}
