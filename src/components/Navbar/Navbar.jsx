"use client";

import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import AuthModal from "../Auth/AuthModal";
import { NAV_ITEMS } from "@/utils/constant";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
    document.body.style.overflow = "hidden"; // Prevent scrolling when modal is open
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = "unset"; // Re-enable scrolling
  };

  return (
    <>
      <div className="hidden md:block fixed z-20 bg-teal-50 w-full border-b border-gray-200 shadow-sm">
        <nav className="min-h-16 flex gap-2 justify-center items-center relative py-2">
          <Link href="/">
            <div className="w-12 h-12">
              <Image
                className="w-full object-cover"
                src="/logo/shop-track-logo.webp"
                alt="shop track logo"
                width={48}
                height={44}
              />
            </div>
          </Link>
          <ul className="text-sm sm:text-base text-gray-700 sm:font-medium flex flex-wrap items-center gap-2 sm:gap-4 text-center">
            {NAV_ITEMS.map((item) => (
              <li
                key={item.href}
                className={`border rounded-lg p-1 text-nowrap transition-all ${
                  pathname === item.href
                    ? "bg-teal-200 border-teal-300 shadow-sm"
                    : "bg-teal-50 hover:bg-teal-100 border-teal-100"
                }`}
              >
                <Link href={item.href} className="px-2 py-1 block">
                  {item.label}
                </Link>
              </li>
            ))}

            {/* <li>
              <button
                onClick={openModal}
                className="border rounded-lg p-1 text-nowrap bg-teal-50 hover:bg-teal-200 hover:border-teal-300 cursor-pointer transition-all px-3 py-1.5 border-teal-100"
              >
                Login
              </button>
            </li> */}
          </ul>
        </nav>
      </div>

      {/* <AuthModal isOpen={isModalOpen} onClose={closeModal} /> */}
    </>
  );
};

export default Navbar;
