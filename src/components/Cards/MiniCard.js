"use client"
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { FaHeart, FaRegHeart } from 'react-icons/fa';

const MiniCard = () => {
    const [addToWishlist, setAddToWishlist]= useState(false)
    const handleWishList =(e)=>{
        e.stopPropagation()
        e.nativeEvent.preventDefault();
        setAddToWishlist(!addToWishlist)
        console.log("yes");

    }
    return (
        <Link href="/" className="group relative block overflow-hidden w-96">
        <button
          className="absolute end-4 top-4 z-10 rounded-full bg-white p-1.5 text-gray-900 transition hover:text-gray-900/75" onClick={handleWishList}
        >
          <span className="sr-only">Wishlist</span>
            {
             !addToWishlist?   
          <FaRegHeart className="text-xl text-pink-600" />: <FaHeart className="text-xl text-pink-600" />

            }
        </button>
      
        <Image
          src="https://i.ibb.co/mhZF7BJ/dessert-bg.jpg"
          alt="product image"
          className="h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72"
          width={400}
          height={400}
        />
      
        <div className="relative border border-gray-100 bg-white p-6">
          <span className="whitespace-nowrap bg-yellow-400 px-3 py-1.5 text-xs font-medium"> New </span>
      
          <h3 className="mt-4 text-lg font-medium text-gray-900">Robot Toy</h3>
      
          <p className="mt-1.5 text-sm text-gray-700">$14.99</p>
      
          <form className="mt-4">
            <button
              className="block w-full rounded bg-yellow-400 p-4 text-sm font-medium transition hover:scale-105"
            >
              Add to Cart
            </button>
          </form>
        </div>
      </Link>
    );
};

export default MiniCard;