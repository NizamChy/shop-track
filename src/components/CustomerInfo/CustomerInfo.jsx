"use client";

import React from "react";
import { useOrder } from "@/context/OrderContext";
import FloatingInput from "../FloatingInput/FloatingInput";

const CustomerInfo = () => {
  const { customerInfo, updateCustomerInfo } = useOrder();

  return (
    <div className="p-4 flex flex-col sm:flex-row gap-4 justify-between">
      <div className="w-full">
        <FloatingInput
          id="name"
          size="text-base"
          label="Customer name"
          value={customerInfo.name}
          onChange={(e) => updateCustomerInfo("name", e.target.value)}
        />
      </div>
      <div className="w-full">
        <FloatingInput
          id="phone"
          size="text-base"
          label="Phone"
          value={customerInfo.phone}
          onChange={(e) => updateCustomerInfo("phone", e.target.value)}
        />
      </div>
    </div>
  );
};

export default CustomerInfo;
