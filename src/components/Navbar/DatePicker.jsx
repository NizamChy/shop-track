"use client";

import React, { useState } from "react";

function DatePicker() {
  const [selectedDate, setSelectedDate] = useState(new Date());

  // Format the date to YYYY-MM-DD for the input value
  const formattedDate = selectedDate.toISOString().substring(0, 10);

  return (
    <div className="flex justify-evenly items-center">
      <label htmlFor="todayDate" className="text-nowrap">
        Select Date:
      </label>
      <input
        type="date"
        id="todayDate"
        value={formattedDate}
        onChange={(e) => setSelectedDate(new Date(e.target.value))}
      />
    </div>
  );
}

export default DatePicker;
