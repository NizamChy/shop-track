"use client";

import Calendar from "react-calendar";
import React, { useState } from "react";
import "react-calendar/dist/Calendar.css";
import { LuCalendarDays } from "react-icons/lu";
import { useOrderHistory } from "@/context/OrderHistoryContext";

const BusinessInfo = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [showCalendar, setShowCalendar] = useState(false);

  const { getOrdersByDate } = useOrderHistory();

  const dailyOrders = getOrdersByDate(selectedDate);
  const totalSales = dailyOrders.reduce((sum, order) => sum + order.total, 0);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Sales Overview</h1>

      <button
        className="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-4"
        onClick={() => setShowCalendar(!showCalendar)}
      >
        <span className="flex items-center justify-center gap-2">
          <LuCalendarDays className="text-xl" /> Select Date
        </span>
      </button>

      {showCalendar && (
        <div className="mb-6 mt-2 transition-all duration-300 ease-in-out">
          <Calendar
            onChange={setSelectedDate}
            onClickDay={() => setShowCalendar(!showCalendar)}
            value={selectedDate}
            className="border rounded p-2"
          />
        </div>
      )}

      {/* <div className="flex justify-evenly items-center">
      <label htmlFor="todayDate" className="text-nowrap">
        Select Date:
      </label>
      <input
        type="date"
        id="todayDate"
        value={formattedDate}
        onChange={(e) => setDate(new Date(e.target.value))}
      />
    </div> */}

      {/* <div className="mb-6">
        <Calendar
          onChange={setSelectedDate}
          value={selectedDate}
          className="border rounded p-2"
        />
      </div> */}

      <div className="bg-white p-4 rounded shadow">
        <h2 className="text-xl font-semibold mb-2">
          Sales for {selectedDate?.toLocaleDateString()}
        </h2>

        <div className="mb-4">
          <p className="text-lg">
            Total Sales: <span className="font-bold">{totalSales}৳</span>
          </p>
          <p className="text-lg">
            Orders: <span className="font-bold">{dailyOrders.length}</span>
          </p>
        </div>

        {dailyOrders.length > 0 ? (
          <div className="space-y-6">
            {dailyOrders.map((order, index) => (
              <div key={index} className="border-b pb-4">
                <div className="flex justify-between mb-2">
                  <p className="font-medium">Order #{index + 1}</p>
                  <p className="text-gray-600">
                    {new Date(order.date).toLocaleTimeString()}
                  </p>
                </div>

                <div className="mb-2">
                  <p>Customer: {order.customerInfo.name}</p>
                  <p>Phone: {order.customerInfo.phone}</p>
                </div>

                <div className="mb-2">
                  <p>Items: {order.orderItems.length}</p>
                  <p>Total: {order.total}৳</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-500">No orders found for this date</p>
        )}
      </div>
    </div>
  );
};

export default BusinessInfo;
