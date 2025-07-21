"use client";

import React from "react";
import AddItem from "./AddItem";
import MenuItemCard from "./MenuItemCard";
import { useMenu } from "@/context/MenuContext";

const ProductInfo = () => {
  const { menuItems } = useMenu();

  return (
    <div className="pt-20 pb-16 container mx-auto lg:max-w-2xl bg-gradient-to-b from-teal-50 to-white">
      <AddItem />

      <div className="grid grid-cols-1 gap-5 place-items-center mx-4 md:mx-8">
        {menuItems.map((item) => (
          <MenuItemCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default ProductInfo;
