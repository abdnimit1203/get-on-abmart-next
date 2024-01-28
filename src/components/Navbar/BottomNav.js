import Link from "next/link";
import React from "react";
import { FaBars } from "react-icons/fa";
import { LuBadgePercent } from "react-icons/lu";

const BottomNav = () => {
  return (
    <div className="text-base-100 flex justify-between  p-4  ">
      <div>
        <FaBars className="inline mr-2" />
        Browse all categories
      </div>
      <div className="space-x-6">
        <Link className="hover:text-primary font-semibold" href={"/"}>Home</Link>
        <Link className="hover:text-primary font-semibold" href={"shop"}>Shop</Link>
        <Link className="hover:text-primary font-semibold" href={"products"}>Product</Link>
        <Link className="hover:text-primary font-semibold" href={"blog"}>Blog</Link>
        <Link className="hover:text-primary font-semibold" href={"about"}>About</Link>
        <Link className="hover:text-primary font-semibold" href={"contact"}>Contact Us</Link>
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
