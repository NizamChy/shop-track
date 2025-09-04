"use client";

import {
  AiOutlineHome,
  AiOutlineShop,
  AiOutlineProfile,
  AiOutlineShopping,
} from "react-icons/ai";
import Link from "next/link";
import { useState } from "react";
import Drawer from "../Drawer/Drawer";
import { usePathname } from "next/navigation";
import { useUser } from "@/context/UserContext";

const MobileNavbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const pathname = usePathname();
  const { userInfo } = useUser();

  const NAV_ITEMS = [
    { href: "/", label: "Add Bill", icon: AiOutlineHome },
    { href: "/products", label: "Products", icon: AiOutlineShopping },
    { href: "/business", label: "Business", icon: AiOutlineShop },
  ];

  const toggleCart = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  if (!userInfo || !userInfo?.merchant_info?._id) return null;

  return (
    <>
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-teal-100 border-t border-gray-200 shadow-lg">
        <nav className="flex justify-around items-center py-2">
          {NAV_ITEMS.map((item) => {
            const IconComponent = item?.icon;
            const isActive = pathname === item?.href;

            return (
              <Link
                key={item?.href}
                href={item?.href}
                className={`flex flex-col items-center justify-center p-2 rounded-lg transition-all ${
                  isActive
                    ? "text-teal-600 bg-teal-50/10"
                    : "text-gray-500 hover:text-teal-500"
                }`}
              >
                <IconComponent
                  className={`text-xl ${isActive ? "scale-110" : ""}`}
                />
                <span className="text-xs mt-1">{item?.label}</span>
              </Link>
            );
          })}

          <button
            className="flex flex-col items-center justify-center p-2 rounded-lg text-gray-500 hover:text-teal-500"
            onClick={toggleCart}
          >
            <AiOutlineProfile className="text-xl" />
            <span className="text-xs mt-1">Profile</span>
          </button>
        </nav>
      </div>

      <Drawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} />
    </>
  );
};

export default MobileNavbar;
