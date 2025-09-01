"use client";

import React from "react";
import MenuItemCard from "./MenuItemCard";
import { useShopItem } from "@/hooks/useShopItem";
import MenuItemSkeleton from "../LoadingSkeleton/MenuItemSkeleton";

const AllItem = () => {
  const { useAllItem } = useShopItem();
  const { data: menuItems = [], isLoading, isError } = useAllItem();

  if (isLoading)
    return (
      <div className="grid grid-cols-1 gap-5 place-items-center mx-4 md:mx-8">
        {Array.from({ length: 3 })?.map((_, i) => (
          <MenuItemSkeleton key={i} />
        ))}
      </div>
    );
  if (isError)
    return (
      <div className="text-center text-red-600">Error loading menu items!</div>
    );
  if (!menuItems || menuItems?.length < 1) return null;

  return (
    <div className="grid grid-cols-1 gap-5 place-items-center mx-4 md:mx-8">
      {menuItems?.map((item) => (
        <MenuItemCard key={item._id} item={item} />
      ))}
    </div>
  );
};

export default AllItem;
