"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useEffect } from "react";
import DrawerItem from "./DrawerItem";
import { IoClose } from "react-icons/io5";

const Drawer = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isOpen && !event.target.closest(".cartdrawer-container")) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  return (
    <>
      <div
        className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      />

      <div
        className={`cartdrawer-container fixed top-0 right-0 h-full w-[90%] lg:w-96 bg-gradient-to-b from-teal-50 to-teal-100 shadow-lg z-50 transform transition-all duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-4 border-b">
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

            <h2 className="text-lg font-semibold">Shop Track</h2>

            <button onClick={onClose}>
              <IoClose className="text-2xl" />
            </button>
          </div>

          <div className="flex-grow p-4 overflow-y-auto">
            <div className="h-full flex flex-col">
              <DrawerItem onClose={onClose} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Drawer;
