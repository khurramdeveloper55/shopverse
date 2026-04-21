import { useQuery } from "@tanstack/react-query";
import { productApi } from "../api/productApi";

export default function useProducts() {
  const { data, isPending } = useQuery({
    queryKey: ["products"],
    queryFn: productApi,
  });
  return { products: data || null, isPending };
}
