import { useQuery } from "@tanstack/react-query";
import { categoryDetailApi } from "../api/categoryDetailApi";

export default function useCategoryDetail(categoryName) {
  const { data, isPending } = useQuery({
    queryKey: ["category-details", categoryName],
    queryFn: () => categoryDetailApi(categoryName),
  });
  return { category: data || null, isPending };
}
