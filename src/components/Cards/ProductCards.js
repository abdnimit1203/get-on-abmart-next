"use client";
import Image from "next/image";
import Link from "next/link";
import { FaCheck } from "react-icons/fa";
import StarRatings from "react-star-ratings";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { useState } from "react";

const ProductCards = ({ product }) => {
  const [addWishlist, setAddWishlist] = useState(false);

  return (
    <Link
      href={`/products/${product.id}`}
      className="z-0"
      
    >
      <div className="bg-white w-[170px] xl:w-[200px] card rounded-md justify-evenly p-4 gap-3   hover:shadow-md transition duration-200 hover:shadow-[#7f9efa] h-full relative">
        <div
          className="absolute top-1 right-2 p-2 z-10  "
          
        >
          {addWishlist ? (
            <FaHeart className="text-xl text-pink-600" onClick={(e) => {
              e.stopPropagation();
              setAddWishlist(!addWishlist);
            }} />
          ) : (
            <FaRegHeart className="text-xl text-pink-600" onClick={(e) => {
            e.stopPropagation();
            setAddWishlist(!addWishlist);
          }} />
          )}
        </div>
        <Image
          src={product?.images[0]}
          alt="product image"
          className="rounded-xl w-[100px] h-[100px] xl:w-[150px] xl:h-[150px] mx-auto aspect-square object-contain"
          width={100}
          height={100}
        />

        <h2 className="font-bold ">{product.title}</h2>
        {/* <Rating start={0} stop={5}/> */}
        <div>
          <StarRatings
            rating={product?.rating}
            starRatedColor="orange"
            numberOfStars={5}
            name="rating"
            starDimension="16px"
            starSpacing="0"
          />
          <p className="text-xs pt-1 opacity-40">(1 review)</p>
          <p className="font-semibold text-lg text-secondary">
            ${product?.price}{" "}
            <span className="text-sm line-through opacity-25 ml-2">
              ${parseInt(product?.price * 1.1)}
            </span>
          </p>
        </div>
        {product?.stock > 0 ? (
          <p className="font-semibold text-green-600">
            <FaCheck className="inline mr-1" />
            Only {product?.stock} left in stock
          </p>
        ) : (
          <p className="font-semibold text-error">Out of stock</p>
        )}
      </div>
    </Link>
  );
};

export default ProductCards;
