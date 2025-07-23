"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

const OrderHistoryContext = createContext();

export const OrderHistoryProvider = ({ children }) => {
  const [orderHistory, setOrderHistory] = useState([]);

  useEffect(() => {
    const savedOrders = localStorage.getItem("orderHistory");
    if (savedOrders) {
      setOrderHistory(JSON.parse(savedOrders));
    }
  }, []);

  const addOrderToHistory = (order) => {
    const updatedHistory = [...orderHistory, order];
    setOrderHistory(updatedHistory);
    localStorage.setItem("orderHistory", JSON.stringify(updatedHistory));
  };

  const getOrdersByDate = (date) => {
    return orderHistory.filter(
      (order) =>
        new Date(order.date).toDateString() === new Date(date).toDateString()
    );
  };

  return (
    <OrderHistoryContext.Provider
      value={{ orderHistory, addOrderToHistory, getOrdersByDate }}
    >
      {children}
    </OrderHistoryContext.Provider>
  );
};

export const useOrderHistory = () => useContext(OrderHistoryContext);
