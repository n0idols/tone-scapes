import { Product } from "@/types";

const SingleProduct = ({ product }: { product: Product }) => {
  return (
    <div>
      <pre>{JSON.stringify(product, null, 2)}</pre>
    </div>
  );
};
export default SingleProduct;
