"use client";

import { useMenu } from "./MenuContext";
import { STORE_INFO } from "@/utils/constant";
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

  const { menuItems } = useMenu();

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
    const orderHtml = `
    <html>
      <head>
        <style>
          @media print {
            @page {
              size: 80mm 250mm; /* 80mm width, height auto */
              margin: 0;
            }
            body {
              margin: 0;
              padding: 10px;
              width: 80mm;
              word-wrap: break-word;
            }
          }

          body {
            font-family: monospace;
            font-size: 16px;
            color: #000;
            width: 80mm;
            padding: 10px;
          }

          h2, h3 {
            text-align: center;
            margin: 4px 0;
            font-size: 16px;
          }

          .item {
            display: flex;
            justify-content: space-between;
            margin-bottom: 4px;
            flex-wrap: wrap;
          }

          .item-name {
            flex: 1;
            min-width: 60%;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }

          .item-price {
            flex-shrink: 0;
            text-align: right;
          }

          .long-name {
            white-space: normal;
            word-break: break-word;
            display: block;
            margin-bottom: 2px;
          }

          .total {
            font-weight: bold;
            border-top: 1px dashed #000;
            padding-top: 6px;
          }

          hr {
            border: none;
            border-top: 1px dashed #000;
            margin: 4px 0;
          }

          .center {
            text-align: center;
          }
        </style>
      </head>
      <body>
        <h2>${STORE_INFO.store_name}</h2>
        <h3>${STORE_INFO.location}</h3>
        <p class="center">Call: ${STORE_INFO.contact}</p>
        <hr />
        <p>Customer: ${customerInfo.name || "N/A"}</p>
        <p>Phone: ${customerInfo.phone || "N/A"}</p>
        <p>Date: ${new Date(date).toLocaleString()}</p>
        <hr />

        ${orderItems
          .map(
            (item) => `
            <div class="item">
              <span class="item-name">
                ${
                  item.name.length > 30
                    ? `<span class="long-name">${item.name}</span>`
                    : item.name
                } x${item.quantity}
              </span>
              <span class="item-price">${item.price * item.quantity}৳</span>
            </div>
          `
          )
          .join("")}

        <hr />
        <div class="item"><span>Subtotal</span><span>${calculateSubtotal()}৳</span></div>
        <div class="item"><span>VAT (${charges.vat}%)</span><span>${(
      (calculateSubtotal() * charges.vat) /
      100
    ).toFixed(2)}৳</span></div>
        <div class="item"><span>Delivery</span><span>${
          charges.deliveryCharge
        }৳</span></div>
        <div class="item"><span>Discount</span><span>-${
          charges.discount
        }৳</span></div>
        <div class="item total"><span>Total</span><span>${calculateTotal()}৳</span></div>
        <hr />
        <p class="center">Thanks for your order!</p>
      </body>
    </html>
  `;

    const iframe = document.createElement("iframe");
    iframe.style.position = "absolute";
    iframe.style.width = "0";
    iframe.style.height = "0";
    iframe.style.border = "0";
    document.body.appendChild(iframe);

    iframe.contentWindow.document.open();
    iframe.contentWindow.document.write(orderHtml);
    iframe.contentWindow.document.close();

    iframe.onload = () => {
      iframe.contentWindow.focus();
      iframe.contentWindow.print();
      setTimeout(() => {
        document.body.removeChild(iframe); // cleanup
      }, 1000);
    };
  };

  // const printOrder = () => {
  //   const orderHtml = `
  //   <html>
  //     <head>
  //       <style>
  //         @media print {
  //           @page {
  //             size: 80mm 250mm; /* 80mm width, height auto */
  //             margin: 0;
  //           }
  //           body {
  //             margin: 0;
  //             padding: 10px;
  //             width: 80mm;
  //             word-wrap: break-word;
  //           }
  //         }

  //         body {
  //           font-family: monospace;
  //           font-size: 16px;
  //           color: #000;
  //           width: 80mm;
  //           padding: 10px;
  //         }

  //         h2, h3 {
  //           text-align: center;
  //           margin: 4px 0;
  //           font-size: 16px;
  //         }

  //         .item {
  //           display: flex;
  //           justify-content: space-between;
  //           margin-bottom: 4px;
  //           flex-wrap: wrap;
  //         }

  //         .item-name {
  //           flex: 1;
  //           min-width: 60%;
  //           overflow: hidden;
  //           text-overflow: ellipsis;
  //           white-space: nowrap;
  //         }

  //         .item-price {
  //           flex-shrink: 0;
  //           text-align: right;
  //         }

  //         .long-name {
  //           white-space: normal;
  //           word-break: break-word;
  //           display: block;
  //           margin-bottom: 2px;
  //         }

  //         .total {
  //           font-weight: bold;
  //           border-top: 1px dashed #000;
  //           padding-top: 6px;
  //         }

  //         hr {
  //           border: none;
  //           border-top: 1px dashed #000;
  //           margin: 4px 0;
  //         }

  //         .center {
  //           text-align: center;
  //         }
  //       </style>
  //     </head>
  //     <body>
  //       <h2>${STORE_INFO.store_name}</h2>
  //       <h3>${STORE_INFO.location}</h3>
  //       <p class="center">Call: ${STORE_INFO.contact}</p>
  //       <hr />
  //       <p>Customer: ${customerInfo.name || "N/A"}</p>
  //       <p>Phone: ${customerInfo.phone || "N/A"}</p>
  //       <p>Date: ${new Date(date).toLocaleString()}</p>
  //       <hr />

  //       ${orderItems
  //         .map(
  //           (item) => `
  //           <div class="item">
  //             <span class="item-name">
  //               ${
  //                 item.name.length > 30
  //                   ? `<span class="long-name">${item.name}</span>`
  //                   : item.name
  //               } x${item.quantity}
  //             </span>
  //             <span class="item-price">${item.price * item.quantity}৳</span>
  //           </div>
  //         `
  //         )
  //         .join("")}

  //       <hr />
  //       <div class="item"><span>Subtotal</span><span>${calculateSubtotal()}৳</span></div>
  //       <div class="item"><span>VAT (${charges.vat}%)</span><span>${(
  //     (calculateSubtotal() * charges.vat) /
  //     100
  //   ).toFixed(2)}৳</span></div>
  //       <div class="item"><span>Delivery</span><span>${
  //         charges.deliveryCharge
  //       }৳</span></div>
  //       <div class="item"><span>Discount</span><span>-${
  //         charges.discount
  //       }৳</span></div>
  //       <div class="item total"><span>Total</span><span>${calculateTotal()}৳</span></div>
  //       <hr />
  //       <p class="center">Thanks for your order!</p>
  //     </body>
  //   </html>
  // `;

  //   const printWindow = window.open("", "PRINT");
  //   printWindow.document.write(orderHtml);
  //   printWindow.document.close();
  //   printWindow.focus();

  //   // Add slight delay to ensure content is loaded before printing
  //   setTimeout(() => {
  //     printWindow.print();
  //     printWindow.close();
  //   }, 200);
  // };

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
