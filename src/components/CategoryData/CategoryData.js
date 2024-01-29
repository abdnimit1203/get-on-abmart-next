import ProductCards from "../Cards/ProductCards";

const CategoryData = async({category}) => {
    const res = await fetch(`https://dummyjson.com/products?category=${category}`);
  const products = await res.json();
  const filteredProduct = products.products.filter(product=> product.category == category )
    return (
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-4 md:gap-6 w-full justify-center ">
            {
                filteredProduct.map(product=> <ProductCards key={product.id} product={product}/>)
            }
        </div>
    );
};

export default CategoryData;