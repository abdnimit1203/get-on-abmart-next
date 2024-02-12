import Link from "next/link";
import ProductCards from "../Cards/ProductCards";
import { FaArrowRight } from "react-icons/fa";

const CategoryData = async ({ category, categoryName, categoryColor }) => {
  const res = await fetch(
    `https://dummyjson.com/products?category=${category}`
  );
  const products = await res.json();
  const filteredProduct = products.products.filter(
    (product) => product.category == category
  );
  return (
    <div className="pb-6 space-y-4">
      <h4
        className={`font-semibold ${categoryColor}
         text-white p-3 text-base rounded-xl md:p-4 md:text-xl  drop-shadow-md shadow-slate-400 flex items-center`}
      >
        {categoryName}{" "}
        <Link
          href={"/products"}
          className="font-semibold ml-10 opacity-65 text-sm hover:text-primary "
        >
          <p className="flex items-center ">
            {" "}
            See all
            <FaArrowRight className="inline ml-3" />
          </p>
        </Link>
      </h4>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6 w-full justify-center ">
        {filteredProduct.map((product) => (
          <ProductCards key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default CategoryData;
