"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { FaBars } from "react-icons/fa";
import { LuBadgePercent } from "react-icons/lu";

const BottomNav = () => {
  const pathname = usePathname();
  return (
    <div className="text-base-100 flex flex-col md:flex-row justify-between  p-4 gap-5 md:gap-2 ">
      <div>
        <FaBars className="inline mr-2" />
        Browse all categories
      </div>
      <div className="flex gap-6 flex-col md:flex-row">
        <Link
          className={`link ${
            pathname === "/"
              ? "active text-primary font-semibold no-underline"
              : "no-underline hover:text-primary font-semibold"
          }`}
          href={"/"}
        >
          Home
        </Link>
        <Link
          className={`link ${
            pathname === "/shop"
              ? "active text-primary font-semibold no-underline"
              : "no-underline hover:text-primary font-semibold"
          }`}
          href={"shop"}
        >
          Shop
        </Link>
        <Link
          className={`link ${
            pathname === "/products"
              ? "active text-primary font-semibold no-underline"
              : "no-underline hover:text-primary font-semibold "
          }`}
          href={"products"}
        >
          Product
        </Link>
        <Link
          className={`link ${
            pathname === "/blog"
              ? "active text-primary font-semibold no-underline"
              : "no-underline hover:text-primary font-semibold"
          }`}
          href={"blog"}
        >
          Blog
        </Link>
        <Link
          className={`link ${
            pathname === "/about"
              ? "active text-primary font-semibold no-underline"
              : "no-underline hover:text-primary font-semibold"
          }`}
          href={"about"}
        >
          About
        </Link>
        <Link
          className={`link ${
            pathname === "/contact"
              ? "active text-primary font-semibold no-underline"
              : "no-underline hover:text-primary font-semibold"
          }`}
          href={"contact"}
        >
          Contact Us
        </Link>
      </div>
      <div className="hidden lg:block">
        <p className="capitalize">
          <LuBadgePercent className="text-error text-xl mr-2 inline" />
          Sale $20 off your first order
        </p>
      </div>
    </div>
  );
};

export default BottomNav;
