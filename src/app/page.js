import Counter from "@/components/Counter/Counter";
import Navbar from "@/components/Navbar/Navbar";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import coffeeImg from "/public/pcoffee.JPG";
import coffeeImg2 from "/src/assets/coffee.JPG";
import Footer from "@/components/Footer/Footer";

const Homepage = () => {
  // throw new Error()

  return (
    <div>
      <Navbar />
      <div className="diff aspect-[16/9]">
        <div className="diff-item-1">
          <div className="bg-primary text-primary-content text-9xl font-black grid place-content-center">
            ABMART
          </div>
        </div>
        <div className="diff-item-2">
          <div className="bg-base-200 text-9xl font-black grid place-content-center">
            ABMART
          </div>
        </div>
        <div className="diff-resizer"></div>
      </div>
      <p>WElcome to hoempage</p>
      <Counter />
      <Image
        src={"https://i.ibb.co/3BX1gBZ/yuji.jpg"}
        alt="itadori"
        width={200}
        height={200}
      />
      <Image src={coffeeImg} alt="coffee" width={200} height={200} />
      <Image src={coffeeImg2} alt="coffee" width={200} height={200} />
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Homepage;
