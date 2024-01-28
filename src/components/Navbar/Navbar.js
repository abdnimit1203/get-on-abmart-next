import Link from "next/link";
import React from "react";

import TopNav from "./TopNav";
import MiddleNav from "./MiddleNav";
import BottomNav from "./BottomNav";
const Navbar = () => {
  return (
    <div className="bg-neutral ">
      <div className=" w-[90%]  mx-auto">
        <TopNav />
        <MiddleNav />
        <BottomNav />
      </div>
    </div>
  );
};

export default Navbar;
