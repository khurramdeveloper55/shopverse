import { useState } from "react";

export default function useQuickView() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const openQuickView = (product) => {
    setSelectedProduct(product);
  };

  const closeQuickView = () => {
    setSelectedProduct(null);
  };

  const isOpen = !!selectedProduct;

  return {
    selectedProduct,
    isOpen,
    openQuickView,
    closeQuickView,
  };
}
