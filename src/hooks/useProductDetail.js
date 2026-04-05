import { useQuery } from "@tanstack/react-query";
import { productDetailApi } from "../api/productDetailApi";

export default function useProductDetail(productName) {
  const { data, isLoading } = useQuery({
    queryKey: ["product-detail", productName],
    queryFn: () => productDetailApi(productName),
  });
  return { product: data, isLoading };
}
