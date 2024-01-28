import Counter from "@/components/Counter/Counter";
import Navbar from "@/components/Navbar/Navbar";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import coffeeImg from "/public/pcoffee.JPG";
import coffeeImg2 from "/src/assets/coffee.JPG";
import Footer from "@/components/Footer/Footer";
import MainSlider from "@/components/Sliders/MainSlider";

const Homepage = () => {
  // throw new Error()

  return (
    <div>
      <Navbar />
      <div className="px-[5%] mx-auto space-x-14 py-8 bg-slate-100">
        <MainSlider />
      </div>

      <Footer />
    </div>
  );
};

export default Homepage;
