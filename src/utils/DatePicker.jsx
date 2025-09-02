"use client";

import React from "react";
import { useOrder } from "@/context/OrderContext";

function DatePicker() {
  const { date, setDate } = useOrder();
  const formattedDate = date.toISOString().substring(0, 10);

  return (
    <div className="flex justify-evenly items-center text-teal-600">
      <label htmlFor="todayDate" className="text-nowrap">
        Select Date:
      </label>
      <input
        type="date"
        id="todayDate"
        value={formattedDate}
        onChange={(e) => setDate(new Date(e.target.value))}
      />
    </div>
  );
}

export default DatePicker;
