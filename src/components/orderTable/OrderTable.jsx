"use client";

import React from "react";
import { useOrder } from "@/context/OrderContext";

const OrderTable = () => {
  const { orderItems, updateQuantity, removeItem } = useOrder();

  return (
    <div className="bg-teal-50 overflow-auto p-2 lg:p-4">
      <h2 className="text-2xl mb-4">Order Items</h2>
      <div className="relative overflow-auto">
        <div className="overflow-x-auto rounded-lg">
          <table className="min-w-full bg-white border mb-4">
            <thead>
              <tr className="bg-slate-50 border-b text-xs md:text-sm text-center text-gray-800 font-bold">
                <th className="p-2 md:p-4 border-r">Product</th>
                <th className="p-2 md:p-4 border-r">Quantity</th>
                <th className="p-2 md:p-4 border-r">Price</th>
                <th className="p-2 md:p-4 border-r">Subtotal</th>
                <th className="p-2 md:p-4 flex justify-center items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18 18 6M6 6l12 12"
                    />
                  </svg>
                </th>
              </tr>
            </thead>
            <tbody>
              {orderItems.map((item) => (
                <tr
                  key={item.id}
                  className="border-b text-xs md:text-sm text-center text-gray-800"
                >
                  {/* <td className="p-2 md:p-4 border-r">{item.name}</td> */}
                  <td className="p-0.5 md:p-4 border-r max-w-16">
                    <p className="break-words overflow-hidden text-ellipsis line-clamp-3">
                      {item.name}
                    </p>
                  </td>
                  <td className="p-2 md:p-4 flex justify-center items-center">
                    <div className="flex items-center text-sm font-semibold">
                      <button
                        onClick={() => updateQuantity(item.id, "decrease")}
                        className="px-2.5 sm:px-3 py-1 border border-gray-300 rounded-l-md hover:bg-gray-100"
                      >
                        -
                      </button>
                      <span className="px-3 font-medium sm:px-4 py-1 border-t border-b border-gray-300">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, "increase")}
                        className="px-2.5 sm:px-3 py-1 border border-gray-300 rounded-r-md hover:bg-gray-100"
                      >
                        +
                      </button>
                    </div>
                  </td>
                  <td className="p-2 md:p-4 border-r border-l">
                    {item.price}৳
                  </td>
                  <td className="p-2 md:p-4 border-r">
                    {item.price * item.quantity}৳
                  </td>
                  <td className="p-2 md:p-4 flex justify-center">
                    <button
                      onClick={() => removeItem(item.id)}
                      className="rounded-md hover:text-red-500"
                      aria-label="Remove item"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6 18 18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default OrderTable;
