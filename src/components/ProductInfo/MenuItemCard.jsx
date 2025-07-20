import React from "react";
import Image from "next/image";

const MenuItemCard = ({ item }) => {
  return (
    <>
      <div className="flex max-w-[480px] items-center gap-5 rounded-3xl border p-3.5 md:pr-12 transition-transform duration-300 ease-in-out hover:scale-105 cursor-pointer">
        <Image
          className="h-32 w-32 rounded-2xl object-cover md:h-40 md:w-40 transition-opacity duration-300"
          src={item.image}
          width={172}
          height={172}
          alt={item.name}
        />
        <div>
          <div className="w-40 md:w-56">
            <h2 className="text-base font-medium text-gray-800 md:text-lg">
              {item.name}
            </h2>
          </div>
          <div className="flex items-end justify-between">
            <div>
              <p className="text-2xl font-semibold text-gray-800 py-2">
                ৳{item.price}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MenuItemCard;
