import Link from "next/link";
import React from "react";

import TopNav from "./TopNav";
import MiddleNav from "./MiddleNav";
import BottomNav from "./BottomNav";
const Navbar = () => {
  return (
    <div className="px-[5%] bg-neutral ">

        <TopNav />
        <MiddleNav />
        <BottomNav />

    </div>
  );
};

export default Navbar;
