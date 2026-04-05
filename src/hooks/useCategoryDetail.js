import { useQuery } from "@tanstack/react-query";
import { categoryDetailApi } from "../api/categoryDetailApi";

export default function useCategoryDetail(categoryName) {
  const { data, isLoading } = useQuery({
    queryKey: ["category-details", categoryName],
    queryFn: () => categoryDetailApi(categoryName),
  });
  return { category: data, isLoading };
}
