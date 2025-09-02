"use client";

import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { LuCalendarDays } from "react-icons/lu";
import { useShopItem } from "@/hooks/useShopItem";
import React, { useState, useEffect } from "react";

const BusinessInfo = () => {
  const [storeId, setStoreId] = useState(null);
  const [isClient, setIsClient] = useState(false);
  const [showCalendar, setShowCalendar] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());

  const { useOrderInfoByDate } = useShopItem();

  const formatDateToYYYYMMDD = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  const orderInfoDate = formatDateToYYYYMMDD(selectedDate);

  useEffect(() => {
    setIsClient(true);

    const userInfo = localStorage.getItem("userInfo");
    const parsedUserInfo = JSON.parse(userInfo || "{}");
    const merchantId = parsedUserInfo?.merchant_info?._id;

    if (merchantId) {
      setStoreId(merchantId);
    }
  }, []);

  const {
    data: orderInfo,
    isLoading,
    isError,
  } = useOrderInfoByDate(storeId, orderInfoDate);

  const totalSales =
    orderInfo && orderInfo?.reduce((sum, order) => sum + order.total, 0);

  const formatDate = (date) => {
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4 text-teal-600 text-center">
        Sales Overview
      </h1>

      <button
        className="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-4"
        onClick={() => setShowCalendar(!showCalendar)}
      >
        <span className="flex items-center justify-center gap-2">
          <LuCalendarDays className="text-xl" />
          {showCalendar ? formatDate(selectedDate) : "Select Date"}
        </span>
      </button>

      <div
        className={`mb-4 transition-all duration-300 ease-in-out overflow-hidden ${
          showCalendar ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        {isClient && (
          <Calendar
            onChange={setSelectedDate}
            onClickDay={() => setShowCalendar(false)}
            value={selectedDate}
            className="border rounded p-2"
          />
        )}
      </div>

      {isLoading ? (
        <>
          <div className="grid grid-cols-1 gap-5 place-items-center mx-4 md:mx-8">
            {Array.from({ length: 3 })?.map((_, i) => (
              <div
                key={i}
                className="flex justify-between items-center w-full p-1 sm:p-4 rounded-lg border border-gray-200 bg-white"
              >
                <div className="flex items-center gap-2 sm:gap-4 w-full min-w-0">
                  <div className="space-y-1 min-w-0 flex-1">
                    <div className="h-4 bg-gray-300 rounded animate-pulse mb-2 w-3/4"></div>
                    <div className="h-5 bg-gray-300 rounded animate-pulse w-2/3"></div>
                    <div className="h-5 bg-gray-300 rounded animate-pulse w-1/3"></div>
                  </div>
                </div>

                <div className="flex flex-col justify-end items-end sm:flex-row gap-1 sm:gap-4">
                  <div className="flex items-center gap-1.5 px-2 sm:px-3 py-1.5 text-xs sm:text-sm text-transparent bg-gray-300 rounded-md animate-pulse w-16 h-8"></div>
                </div>
              </div>
            ))}
          </div>
        </>
      ) : (
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-xl font-semibold mb-2">
            Sales for {formatDate(selectedDate)}
          </h2>

          <div className="mb-4">
            <p className="text-lg">
              Total Sales: <span className="font-bold">{totalSales}৳</span>
            </p>
            <p className="text-lg">
              Orders: <span className="font-bold">{orderInfo?.length}</span>
            </p>
          </div>

          {orderInfo?.length > 0 ? (
            <div className="space-y-6">
              {orderInfo?.map((order, index) => (
                <div key={order?._id?.toString()} className="border-b pb-4">
                  <div className="flex justify-between mb-2">
                    <p className="font-medium">Order #{index + 1}</p>
                    <p className="text-gray-600">
                      {new Date(order?.order_date)?.toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </p>
                  </div>

                  <div className="mb-2">
                    <p>Customer: {order?.customer_name}</p>
                    <p>Phone: {order?.customer_phone}</p>
                  </div>

                  <div className="mb-2">
                    <p>Items: {order?.orderItems?.length}</p>
                    <p>Total: {order?.total}৳</p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-500">No orders found for this date</p>
          )}
        </div>
      )}
    </div>
  );
};

export default BusinessInfo;
