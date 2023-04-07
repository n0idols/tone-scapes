import fetchProduct from "@/components/data/fetchProduct";
import { Params } from "@/types";

const SingeProductPage = async ({ params }: Params) => {
  const product = await fetchProduct(params.id);

  return <h1>{JSON.stringify(product)}</h1>;
};
export default SingeProductPage;
