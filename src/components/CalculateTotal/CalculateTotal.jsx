"use client";

import React from "react";
import axios from "axios";
import { toast } from "sonner";
// import { STORE_INFO } from "@/utils/constant";
import { useOrder } from "@/context/OrderContext";
import { useMutation } from "@tanstack/react-query";
// import { useOrderHistory } from "@/context/OrderHistoryContext";

const CalculateTotal = () => {
  const {
    charges,
    orderItems,
    printOrder,
    customerInfo,
    calculateTotal,
    calculateSubtotal,
  } = useOrder();

  // const { addOrderToHistory } = useOrderHistory();

  const subtotal = calculateSubtotal();
  const total = calculateTotal();
  const vatAmount = (subtotal * charges.vat) / 100;

  const postOrderMutation = useMutation({
    mutationFn: async (orderData) => {
      const response = await axios.post(
        "https://shop-track-server.vercel.app/api/v1/order/print",
        orderData
      );
      return response.data;
    },
    onSuccess: (data) => {
      // console.log("Order placed successfully:", data);
      toast.success("Order placed successfully!");

      setTimeout(() => {
        printOrder();
      }, 100);
    },
    onError: (error) => {
      // console.error("Error posting order:", error);
      toast.error(error);
    },
  });

  const handlePrintClick = () => {
    handleOrderClick();
    // printOrder();
  };

  const handleOrderClick = () => {
    const userInfo = localStorage.getItem("userInfo");

    const parsedUserInfo = JSON.parse(userInfo || "{}");
    const merchantId = parsedUserInfo?.merchant_info?._id;

    if (!merchantId) return toast.error("Merchant id not found!");

    const apiOrderData = {
      order_date: new Date().toISOString(),
      customer_name: customerInfo?.name,
      customer_phone: customerInfo?.phone,
      vat: charges?.vat,
      discount: charges?.discount,
      deliveryCharge: charges?.deliveryCharge,
      total: total,
      subtotal: subtotal,
      orderItems: orderItems?.map((item) => ({
        product: item?._id,
        quantity: item?.quantity,
        price: item?.price,
      })),
      storeInfo: merchantId,
    };

    // const orderData = {
    //   date: new Date().toISOString(),
    //   storeInfo: STORE_INFO,
    //   customerInfo,
    //   orderItems,
    //   charges,
    //   subtotal: subtotal,
    //   total: total,
    // };

    // addOrderToHistory(orderData);
    postOrderMutation.mutate(apiOrderData);
  };

  return (
    <>
      <div className="flex flex-col justify-end items-end p-4 pe-10 lg:pe-16">
        <div className="text-gray-800">
          <p className="flex justify-between gap-5">
            <span>Subtotal :</span> <span>{subtotal}৳</span>
          </p>
          <p className="flex justify-between gap-5">
            <span>Vat ({charges.vat}%) :</span> <span>{vatAmount}৳</span>
          </p>
          <p className="flex justify-between gap-5">
            <span>Delivery Charge :</span>{" "}
            <span>{charges.deliveryCharge}৳</span>
          </p>
          <p className="flex justify-between gap-5">
            <span>Discount :</span> <span>{charges.discount}৳</span>
          </p>
          <p className="flex justify-between gap-5 font-bold">
            <span>Total :</span> <span>{total}৳</span>
          </p>
        </div>
      </div>

      <div className="ps-10">
        <button
          className="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          onClick={handlePrintClick}
          disabled={postOrderMutation?.isPending}
        >
          {postOrderMutation?.isPending ? "Processing..." : "Print"}
        </button>
      </div>
    </>
  );
};

export default CalculateTotal;
