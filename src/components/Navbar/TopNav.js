import React from "react";
import { MdOutlineElectricBolt } from "react-icons/md";
import { FaArrowCircleRight } from "react-icons/fa";
import Link from "next/link";
import {
  FaArrowAltCircleUp,
  FaQuestionCircle,
  FaMoneyBillWave,
} from "react-icons/fa";

const TopNav = () => {
  return (
    <nav className="flex flex-col lg:flex-row md gap-2 justify-between pb-2 items-center">
      <Link href={"sales"}>
        <div className="bg-base-100 w-fit  rounded-b-xl">
          <p className="text-xs px-2 md:text-lg font-semibold animate-pulse ">
            <MdOutlineElectricBolt className="md:text-2xl mr-2 text-primary inline-block " />
            Exclusive Offers on selected products | Limited time only{" "}
            <FaArrowCircleRight className="text-xl mr-2  inline" />
          </p>
        </div>
      </Link>
      <div className="flex gap-4">
        <button className="  sm:rounded-t-none  btn-xs md:btn-sm   btn btn-success text-white">
          <FaArrowAltCircleUp className="inline text-2xl animate-bounce" />
          Vote for Order
        </button>
        <button className="  sm:rounded-t-none  btn-xs md:btn-sm btn btn-primary ">
          <FaMoneyBillWave className="inline" />
          Start Selling
        </button>
        <button className="  sm:rounded-t-none  btn-xs md:btn-sm  btn btn-ghost text-white">
          <FaQuestionCircle className="inline" />
          Help
        </button>
      </div>
    </nav>
  );
};

export default TopNav;
