export const categoryApi = async () => {
  const category = await fetch("http://localhost:3000/api/v1/categories");
  if (!category.ok) {
    throw new Error("Failed to fetch categories");
  }
  const json = await category.json();
  return json.data;
};
