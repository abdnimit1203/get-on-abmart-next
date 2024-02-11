import Counter from "@/components/Counter/Counter";
import Navbar from "@/components/Navbar/Navbar";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import coffeeImg from "/public/pcoffee.JPG";
import coffeeImg2 from "/src/assets/coffee.JPG";
import Footer from "@/components/Footer/Footer";
import MainSlider from "@/components/Sliders/MainSlider";
import Products from "./(withlayout)/products/page";
import CategoryData from "@/components/CategoryData/CategoryData";
import Recommend from "@/components/Shared/Recommend";
import { FaArrowRight } from "react-icons/fa";
import FlashSale from "@/components/Shared/FlashSale";
import NewsTicker from "@/components/Shared/NewsTicker";

const Homepage = () => {
  // throw new Error()

  return (
    <div className="space-y-6">
      <Navbar />
      <div className="px-[5%] mx-auto space-x-14 py-8 bg-slate-100 ">
        <MainSlider />
      </div>
      <div className="px-[5%] mx-auto bg-slate-100 space-y-6 ">
        <Recommend />
        <NewsTicker/>
        <FlashSale/>
        <div className="flex items-center">
          <h2 className="text-xl md:text-3xl font-bold ">Our Products</h2>
          <Link href={'/products'} className="font-semibold ml-10 opacity-65 text-lg md:text-2xl ">
         <p className="flex items-center"> See all
            <FaArrowRight className="inline ml-3" />
          </p>  
          </Link>
        </div>
        <hr className="mb-6 bg-red" />
       
    
   
      
          <CategoryData category={"smartphones"} categoryName={"SmartPhones"} categoryColor="bg-pink-600"/>
      
          <CategoryData category={"laptops"} categoryName={"Laptops"} categoryColor="bg-teal-600"/>
       
          <CategoryData category={"fragrances"} categoryName={"Fragrances"} categoryColor="bg-sky-600"/>
  
      
          <CategoryData category={"skincare"} categoryName={"Skin Care"} categoryColor={"bg-rose-600"} />
   
      </div>

      <Footer />
    </div>
  );
};

export default Homepage;
