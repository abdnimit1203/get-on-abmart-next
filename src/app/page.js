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
import FlashSale from "@/components/Shared/FlashSale";
import NewsTicker from "@/components/Shared/NewsTicker";
import Delivery from "@/components/Others/Delivery";

const Homepage = () => {
  // throw new Error()

  return (
    <>
      <Navbar />
      <div className="space-y-6 bg-slate-100 px-[5%] mx-auto  py-8  ">
        <MainSlider />
        <NewsTicker />
        <FlashSale />
        <div className="flex items-center">
          <h2 className="header-text text-center font-bold w-full">
            Our Products
          </h2>
        </div>
        <hr className="mb-6 bg-red" />

        <CategoryData
          category={"smartphones"}
          categoryName={"SmartPhones"}
          categoryColor="bg-pink-600"
        />

        <CategoryData
          category={"laptops"}
          categoryName={"Laptops"}
          categoryColor="bg-teal-600"
        />

        <CategoryData
          category={"fragrances"}
          categoryName={"Fragrances"}
          categoryColor="bg-sky-600"
        />

        <CategoryData
          category={"skincare"}
          categoryName={"Skin Care"}
          categoryColor={"bg-rose-600"}
        />
        <Delivery/>
      </div>

      <Footer />
    </>
  );
};

export default Homepage;
