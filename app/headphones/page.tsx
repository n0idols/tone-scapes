import fetchCategory from "@/components/data/fetchCategory";
import PageHero from "@/components/ui/PageHero";
import CategoryItem from "@/components/ui/category/item";
import { Product } from "@/types";

const page = async () => {
  const category = await fetchCategory("1");
  const products = category[0].Products;
  return (
    <>
      <PageHero title={category[0].name} />
      <section className="container">
        {products.map((product: Product) => (
          <CategoryItem key={product.id} product={product} />
        ))}
      </section>
    </>
  );
};
export default page;
