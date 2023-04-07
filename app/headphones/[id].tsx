import getSingleProduct from "@/components/data/getSingleProduct";
import SingleProduct from "@/components/ui/product/SingleProduct";
import { Params, Product } from "@/prisma/types";

export default async function Page({ params }: Params) {
  const productData: Promise<Product> = getSingleProduct(params.id);
  const product = await Promise.all([productData]);

  return (
    <section className="container">
      <SingleProduct product={product.flat()[0]} />
    </section>
  );
}
