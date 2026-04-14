const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL || "http://localhost:3000";
export const categoryDetailApi = async (categoryName) => {
  const res = await fetch(`${API_BASE_URL}/api/v1/categories/${categoryName}`);
  const json = await res.json();
  return json.data;
};
