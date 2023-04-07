import fetchProduct from "@/components/data/fetchProduct";
import SingleProduct from "@/components/ui/product/SingleProduct";
import { Params } from "@/types";

const SingeProductPage = async ({ params }: Params) => {
  const product = await fetchProduct(params.id);

  return (
    <div>
      <SingleProduct product={product.flat()[0]} />
    </div>
  );
};
export default SingeProductPage;
