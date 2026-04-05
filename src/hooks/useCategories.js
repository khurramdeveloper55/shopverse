import { useQuery } from "@tanstack/react-query";
import { categoryApi } from "../api/categoryApi";

export default function useCategories() {
  const { data, isLoading } = useQuery({
    queryKey: ["categories"],
    queryFn: categoryApi,
  });
  return { categories: data, isLoading };
}
