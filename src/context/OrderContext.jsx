"use client";

import React, { createContext, useState, useContext } from "react";

const OrderContext = createContext();

export const OrderProvider = ({ children }) => {
  const [date, setDate] = useState(new Date());
  const [orderItems, setOrderItems] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const [customerInfo, setCustomerInfo] = useState({
    name: "",
    phone: "",
  });

  const [charges, setCharges] = useState({
    vat: 0,
    deliveryCharge: 0,
    discount: 0,
  });

  const menuItems = [
    { id: 1, name: "Pizza", price: 300 },
    { id: 2, name: "Burger", price: 400 },
    { id: 3, name: "Pasta", price: 250 },
    { id: 4, name: "Salad", price: 200 },
  ];

  const filteredMenuItems = menuItems.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const addOrderItem = (item) => {
    setOrderItems((prevItems) => {
      const existingItem = prevItems.find((i) => i.id === item.id);
      if (existingItem) {
        return prevItems.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...prevItems, { ...item, quantity: 1 }];
    });
  };

  const updateQuantity = (id, action) => {
    setOrderItems((prevItems) =>
      prevItems.map((item) => {
        if (item.id === id) {
          if (action === "increase") {
            return { ...item, quantity: item.quantity + 1 };
          } else if (action === "decrease" && item.quantity > 1) {
            return { ...item, quantity: item.quantity - 1 };
          }
        }
        return item;
      })
    );
  };

  const removeItem = (id) => {
    setOrderItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const updateCustomerInfo = (name, value) => {
    setCustomerInfo((prev) => ({ ...prev, [name]: value }));
  };

  const updateCharges = (name, value) => {
    setCharges((prev) => ({ ...prev, [name]: Number(value) }));
  };

  const calculateSubtotal = () => {
    return orderItems.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
  };

  const calculateTotal = () => {
    const subtotal = calculateSubtotal();
    const vatAmount = (subtotal * charges.vat) / 100;
    return subtotal + vatAmount + charges.deliveryCharge - charges.discount;
  };

  const printOrder = () => {
    const orderData = {
      date,
      customerInfo,
      orderItems,
      charges,
      subtotal: calculateSubtotal(),
      total: calculateTotal(),
    };
    console.log("Order Data:", orderData);
  };

  return (
    <OrderContext.Provider
      value={{
        date,
        setDate,
        customerInfo,
        updateCustomerInfo,
        orderItems,
        addOrderItem,
        updateQuantity,
        removeItem,
        charges,
        updateCharges,
        searchQuery,
        setSearchQuery,
        filteredMenuItems,
        calculateSubtotal,
        calculateTotal,
        printOrder,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
};

export const useOrder = () => useContext(OrderContext);
