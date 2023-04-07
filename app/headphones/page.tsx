import fetchProducts from "@/components/data/fetchProducts";

const page = async () => {
  const products = await fetchProducts();
  return <div>{JSON.stringify(products, null, 2)}</div>;
};
export default page;
