"use client";

import React from "react";
import { useOrder } from "@/context/OrderContext";

const ChargesForm = () => {
  const { charges, updateCharges } = useOrder();

  const handleChange = (e) => {
    const { name, value } = e.target;
    updateCharges(name, value);
  };

  return (
    <form className="flex items-center justify-center md:justify-end gap-1 sm:gap-4 p-4 bg-gray-100 mx-4 rounded-lg">
      <div className="flex flex-col text-sm">
        <label className="mb-1 text-gray-600">VAT (%)</label>
        <input
          min="0"
          step="1"
          name="vat"
          type="number"
          placeholder="%"
          // value={charges.vat}
          onChange={handleChange}
          className="w-24 px-2 py-1 border rounded-md focus:outline-none focus:ring-1 focus:ring-teal-500"
        />
      </div>

      <div className="flex flex-col text-sm">
        <label className="mb-1 text-gray-600">Delivery Charge</label>
        <input
          min="0"
          step="1"
          type="number"
          placeholder="৳"
          name="deliveryCharge"
          onChange={handleChange}
          // value={charges.deliveryCharge}
          className="w-28 px-2 py-1 border rounded-md focus:outline-none focus:ring-1 focus:ring-teal-500"
        />
      </div>

      <div className="flex flex-col text-sm">
        <label className="mb-1 text-gray-600">Discount</label>
        <input
          min="0"
          step="1"
          type="number"
          name="discount"
          placeholder="৳"
          onChange={handleChange}
          // value={charges.discount}
          className="w-24 px-2 py-1 border rounded-md focus:outline-none focus:ring-1 focus:ring-teal-500"
        />
      </div>
    </form>
  );
};

export default ChargesForm;
