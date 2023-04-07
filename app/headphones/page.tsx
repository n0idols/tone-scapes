async function fetchProducts() {
  const res = await fetch(`https://tone-scapes.vercel.app/api/products`);
  const data = await res.json();
  return data;
}

const page = async () => {
  const products = await fetchProducts();
  return <pre>{JSON.stringify(products, null, 2)}</pre>;
};
export default page;
