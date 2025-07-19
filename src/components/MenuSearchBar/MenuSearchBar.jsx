"use client";

import React from "react";
import { useOrder } from "@/context/OrderContext";

const MenuSearchBar = () => {
  const { searchQuery, setSearchQuery, filteredMenuItems, addOrderItem } =
    useOrder();

  return (
    <div className="flex justify-center items-center w-full">
      <div className="max-w-[480px] w-full px-4">
        <div className="relative">
          <input
            type="text"
            name="q"
            className="w-full border h-12 shadow-sm p-4 rounded-xl focus:outline-none focus:ring-1 focus:ring-teal-500"
            placeholder="Search menu.."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button>
            <svg
              className="text-teal-400 h-5 w-5 absolute top-3.5 right-3 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 56.966 56.966"
              space="preserve"
            >
              <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z"></path>
            </svg>
          </button>

          {searchQuery && (
            <div className="absolute z-20 w-full mt-2 bg-white border rounded-lg shadow-lg max-h-60 overflow-auto">
              {filteredMenuItems.map((item) => (
                <div
                  key={item.id}
                  className="p-2 px-4 hover:bg-gray-100 cursor-pointer flex justify-between"
                  onClick={() => {
                    addOrderItem(item);
                    setSearchQuery("");
                  }}
                >
                  <span>{item.name}</span>
                  <span>{item.price}৳</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MenuSearchBar;
