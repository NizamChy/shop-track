"use client";

import React from "react";
import { useOrder } from "@/context/OrderContext";

const CalculateTotal = () => {
  const { calculateSubtotal, calculateTotal, charges, printOrder } = useOrder();

  const subtotal = calculateSubtotal();
  const total = calculateTotal();
  const vatAmount = (subtotal * charges.vat) / 100;

  const handlePrintClick = () => {
    printOrder();
    // window.print();
  };

  return (
    <>
      <div className="flex flex-col justify-end items-end p-4 pe-10 lg:pe-16">
        <div className="text-gray-800">
          <p className="flex justify-between gap-5">
            <span>Subtotal :</span> <span>{subtotal}৳</span>
          </p>
          <p className="flex justify-between gap-5">
            <span>Vat ({charges.vat}%) :</span> <span>{vatAmount}৳</span>
          </p>
          <p className="flex justify-between gap-5">
            <span>Delivery Charge :</span>{" "}
            <span>{charges.deliveryCharge}৳</span>
          </p>
          <p className="flex justify-between gap-5">
            <span>Discount :</span> <span>{charges.discount}৳</span>
          </p>
          <p className="flex justify-between gap-5 font-bold">
            <span>Total :</span> <span>{total}৳</span>
          </p>
        </div>
      </div>

      <div className="ps-10">
        <button
          className="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          onClick={handlePrintClick}
          // onClick={printOrder}
        >
          Print
        </button>
      </div>
    </>
  );
};

export default CalculateTotal;
