"use client";

import React, { useState } from "react";
import FloatingInput from "../FloatingInput/FloatingInput";

const CustomerInfo = () => {
  const [phone, setPhone] = useState("");
  const [customerName, setCustomerName] = useState("");

  return (
    <div className="p-4 my-2 flex flex-col sm:flex-row gap-4 justify-between">
      <div className="w-full">
        <FloatingInput
          id="name"
          size="text-base"
          label="Customer name"
          value={customerName}
          onChange={(e) => setCustomerName(e.target.value)}
        />
      </div>

      <div className="w-full">
        <FloatingInput
          id="phone"
          size="text-base"
          label="Phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </div>
    </div>
  );
};

export default CustomerInfo;
