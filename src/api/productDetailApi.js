export const productDetailApi = async (productName) => {
  const res = await fetch(
    `http://localhost:3000/api/v1/products/${productName}`,
  );
  const json = await res.json();
  return json.data;
};
