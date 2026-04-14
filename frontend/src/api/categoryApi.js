const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL || "http://localhost:3000";
export const categoryApi = async () => {
  const category = await fetch(`${API_BASE_URL}/api/v1/categories`);
  if (!category.ok) {
    throw new Error("Failed to fetch categories");
  }
  const json = await category.json();
  return json.data;
};
