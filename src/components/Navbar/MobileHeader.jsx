"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useUser } from "@/context/UserContext";
import Drawer from "../Drawer/Drawer";

const MobileHeader = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const { userInfo, logout } = useUser();

  const toggleCart = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <>
      <div className="bg-white md:hidden">
        <div className="flex items-center justify-between px-2">
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

          <div className="text-center">
            <button
              onClick={toggleCart}
              className="w-10 h-10 bg-teal-500 rounded-full flex items-center justify-center mx-auto"
            >
              <span className="text-white font-bold">
                {userInfo?.merchant_info?.merchant_name?.charAt(0) || "U"}
              </span>
            </button>
          </div>
        </div>
      </div>

      <Drawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} />
    </>
  );
};

export default MobileHeader;
