import Image from "next/image";
import Link from "next/link";
import React from "react";
import Searchbar from "../Searchbar/Searchbar";
import WishlistButton from "../ActionButtons/WishlistButton";
import CartButton from "../ActionButtons/CartButton";
import ProfileLoginButton from "../ActionButtons/ProfileLoginButton";
import LOGO from "/public/logo.PNG";

const MiddleNav = () => {
  return (
   
      <nav className="flex justify-between  text-amber-400 items-center p-2">
        <div>
          <Link href="/">
            <Image src={LOGO} alt="ABMart" width={180} height={100} />
          </Link>
        </div>
        <Searchbar />
        <div className="flex gap-6 justify-center items-center">
          <ProfileLoginButton />
          <WishlistButton />
          <CartButton />
        </div>
      </nav>
   
  );
};

export default MiddleNav;
