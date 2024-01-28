import Image from "next/image";
import Link from "next/link";
import React from "react";

const SingleProduct = async ({ params, searchParams }) => {
  const res = await fetch(`https://dummyjson.com/products/${params.id}`);
  const product = await res.json();
  console.log(product);
  console.log(params);
  return (
    <div className="py-10">
      {/* Dynamic Page: I am single product : {params.id}
      <h2>Search by : {searchParams.category}</h2>
      <h2>Search price : {searchParams.price}</h2> */}
      <Link href={'/products'} className="btn  btn-block btn-error text-white my-10"> --- Go back</Link>
      <article className="flex bg-white transition hover:shadow-xl flex-col md:flex-row rounded-xl ">
  

  <div className=" sm:block sm:w-fit ">
    <Image
      alt="product picture"
      src={product?.images[0]}
      className="w-full mx-auto rounded-t-xl"
       width={300} height={300}
    />
  </div>

  <div className="flex flex-1 flex-col justify-between">
    <div className="border-s border-gray-900/10 p-4 sm:border-l-transparent sm:p-6">
      
        <h3 className="font-bold uppercase text-gray-900 lg:text-xl pb-2">
         {product?.title}
        </h3>
        <p className="border-2 w-fit bg-green-600 text-white font-semibold text-xs p-1 px-2 rounded-xl mb-2"> {product?.category}</p>
        <div>
      <h4><span className="font-semibold">Ratings : </span>  ⭐{product?.rating}</h4>
      <h4><span className="font-semibold">Stock :  </span>  {product?.stock}</h4>

        </div>
        <h4 className="font-semibold ">Brand :<span className="font-semibold  cursor-pointer hover:text-secondary"> {product?.brand}</span></h4>
      <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-700"><span className="font-semibold">Description: </span> 
      {product?.description}
      </p>
    </div>

   <div className="border-s border-gray-900/10 p-4 sm:border-l-transparent sm:p-6 space-y-3">
    <p className="font-semibold">Price: ${product?.price} <span className="ml-6 text-xs opacity-60"> ( Discount : {product?.discountPercentage}% )</span></p>
    <button className="btn btn-secondary">Add to cart</button>
   </div>
  </div>
</article>
    </div>
  );
};

export default SingleProduct;
