import ProductCards from "@/components/Cards/ProductCards";
import React from "react";

export const metadata = {
  title: "Products",
  description: "This is all products page abmart",
};
const Products = async () => {
  const res = await fetch("https://dummyjson.com/products");
  const products = await res.json();
  // console.log(products);

  return (
    <div className="pt-10">
      <h2 className="text-xl lg:text-3xl py-8 border-b-4 w-fit font-bold ">
        All Products
      </h2>
      <p>Total products: {products?.products?.length}</p>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-6 md:gap-x-8 gap-y-8 md:gap-y-12 py-8">
        {products?.products?.map((product) => (
          <ProductCards key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
