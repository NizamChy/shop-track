"use client";

import React from "react";
import Link from "next/link";
import { NAV_ITEMS } from "@/utils/constant";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <div className="fixed z-20 bg-white w-full">
      <nav className="min-h-16 flex justify-center items-center relative">
        <ul className="text-sm sm:text-base text-gray-700 sm:font-medium flex gap-2 sm:gap-4 text-center">
          {NAV_ITEMS.map((item) => (
            <li
              key={item.href}
              className={`border rounded-lg p-2 text-nowrap ${
                pathname === item.href
                  ? "bg-teal-200 border-teal-300"
                  : "bg-teal-50"
              }`}
            >
              <Link href={item.href}>{item.label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
