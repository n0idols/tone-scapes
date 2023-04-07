// import Hero from "@/components/Hero";
// import Info from "@/components/Info";

import Hero from "@/components/ui/layout/Hero";
import CategoryList from "@/components/ui/category/list";
import Featured from "@/components/ui/product/Featured";
import Info from "@/components/ui/layout/Info";

// import React from "react";
// import CategoryList from "@/components/CategoryList";
// import FeaturedProducts from "@/components/FeaturedProducts";

export default async function page() {
  return (
    <>
      <Hero />

      <CategoryList />
      <Featured />

      <Info />
    </>
  );
}
