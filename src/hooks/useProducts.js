import { useQuery } from "@tanstack/react-query";
import { productApi } from "../api/productApi";

export default function useProducts() {
  const { data, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: productApi,
  });
  return { products: data, isLoading };
}
