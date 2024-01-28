import Link from "next/link";
import React from "react";
import { FaBars } from "react-icons/fa";
import { LuBadgePercent } from "react-icons/lu";

const BottomNav = () => {
  return (
    <div className="text-base-100 flex justify-between  p-4  ">
      <div>
        <FaBars className="inline" />
        Browse all categories
      </div>
      <div className="space-x-6">
        <Link href={"/"}>Home</Link>
        <Link href={"shop"}>Shop</Link>
        <Link href={"products"}>Product</Link>
        <Link href={"blog"}>Blog</Link>
        <Link href={"about"}>About</Link>
        <Link href={"contact"}>Contact Us</Link>
      </div>
      <div className="">
        <p className="capitalize">
          <LuBadgePercent className="text-error text-xl mr-2 inline" />
          Sale $20 off your first order
        </p>
      </div>
    </div>
  );
};

export default BottomNav;
