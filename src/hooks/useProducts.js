import { useQuery } from "@tanstack/react-query";
import { productApi } from "../api/productApi";

export default function useProducts() {
  const { data } = useQuery({
    queryKey: ["products"],
    queryFn: productApi,
  });
  return { products: data || null };
}
