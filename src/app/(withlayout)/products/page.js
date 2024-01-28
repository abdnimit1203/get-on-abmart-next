import ProductCards from '@/components/Cards/ProductCards';
import React from 'react';

export const metadata ={
    title: "Products",
    description: "This is all products page abmart"
}
const Products = async() => {
    const res = await fetch("https://dummyjson.com/products")
    const products = await res.json();
    console.log(products);

    return (
        <div>
    <p>{products?.products?.length}</p>
       <div className='grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-x-6 md:gap-x-8 gap-y-8 md:gap-y-12 '>
        {products?.products?.map(product=> <ProductCards key={product.id} product={product}/>)}
        </div>

        </div>
    );
};

export default Products;