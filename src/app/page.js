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

const Homepage = () => {
  // throw new Error()

  return (
    <div>
      <Navbar />
      <div className="px-[5%] mx-auto space-x-14 py-8 bg-slate-100 ">
        <MainSlider />
      </div>
      <div className="px-[5%] mx-auto bg-slate-100 ">
        <h2 className="text-xl md:text-3xl font-bold ">Our Products </h2>
        <hr className="mb-6" />
        <div className="pb-6 space-y-4">
          <h4 className="font-semibold bg-white p-1 rounded-xl md:p-4 md:text-xl  drop-shadow-md shadow-slate-400 ">SmartPhones</h4>
          <CategoryData category={"smartphones"} />
        </div>
        <div className="pb-6 md:py-16 space-y-8">
          <h4 className="font-semibold  p-1 rounded-xl md:p-4 md:text-xl bg-teal-600 drop-shadow-md shadow-slate-400 text-white">Laptops</h4>
          <CategoryData category={"laptops"} />
        </div>
        <div className="pb-6 space-y-4">
          <h4 className="font-semibold  p-1 rounded-xl md:p-4 md:text-xl bg-sky-600 drop-shadow-md shadow-slate-400 text-white">Fragrances</h4>
          <CategoryData category={"fragrances"} />
        </div>
        <div className="pb-6 space-y-4">
          <h4 className="font-semibold  p-1 rounded-xl md:p-4 md:text-xl bg-rose-600 drop-shadow-md shadow-slate-400 text-white">Skin Care</h4>
          <CategoryData category={"skincare"} />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Homepage;
