export const productApi = async () => {
  const res = await fetch("http://localhost:3000/api/v1/products");
  const json = await res.json();
  return json.data;
};
