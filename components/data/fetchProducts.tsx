async function fetchProducts() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_ROUTE}/api/products`);
  const data = await res.json();
  return data;
}
export default fetchProducts;
