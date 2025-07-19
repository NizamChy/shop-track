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
    <form className="flex items-center gap-4 p-4 bg-gray-100">
      <div className="flex flex-col text-sm">
        <label className="mb-1 text-gray-600">VAT (%)</label>
        <input
          type="text"
          name="vat"
          // value={charges.vat}
          onChange={handleChange}
          className="w-24 px-2 py-1 border rounded-md focus:outline-none focus:ring-1 focus:ring-teal-500"
        />
      </div>

      <div className="flex flex-col text-sm">
        <label className="mb-1 text-gray-600">Delivery Charge</label>
        <input
          type="text"
          name="deliveryCharge"
          // value={charges.deliveryCharge}
          onChange={handleChange}
          className="w-28 px-2 py-1 border rounded-md focus:outline-none focus:ring-1 focus:ring-teal-500"
        />
      </div>

      <div className="flex flex-col text-sm">
        <label className="mb-1 text-gray-600">Discount</label>
        <input
          type="text"
          name="discount"
          // value={charges.discount}
          onChange={handleChange}
          className="w-24 px-2 py-1 border rounded-md focus:outline-none focus:ring-1 focus:ring-teal-500"
        />
      </div>
    </form>
  );
};

export default ChargesForm;
