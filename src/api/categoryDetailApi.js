export const categoryDetailApi = async (categoryName) => {
  const res = await fetch(
    `http://localhost:3000/api/v1/categories/${categoryName}`,
  );
  const json = await res.json();
  return json.data;
};
