import ProductCards from "../Cards/ProductCards";

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
         text-white p-1 rounded-xl md:p-4 md:text-xl  drop-shadow-md shadow-slate-400 `}
      >
        {categoryName}
      </h4>
      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-4 md:gap-6 w-full justify-center ">
        {filteredProduct.map((product) => (
          <ProductCards key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default CategoryData;
