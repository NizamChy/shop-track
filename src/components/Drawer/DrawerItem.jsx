"use client";

import React from "react";
import { useUser } from "@/context/UserContext";

const DrawerItem = ({ onClose }) => {
  const { userInfo, logout } = useUser();

  return (
    <div className="p-6 bg-white rounded-lg shadow-md max-w-sm w-full mx-auto">
      {/* Header Section */}
      <div className="text-center mb-6">
        <div className="w-20 h-20 bg-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
          <span className="text-white text-2xl font-bold">
            {userInfo?.merchant_info?.merchant_name?.charAt(0) || "U"}
          </span>
        </div>
        <h2 className="text-xl font-semibold text-gray-800">
          {userInfo?.merchant_info?.merchant_name || "User Name"}
        </h2>
        <p className="text-gray-600">{userInfo?.user_role || "Role"}</p>
      </div>

      {/* User Details Section */}
      <div className="space-y-4 mb-6">
        <div className="flex items-center">
          <svg
            className="w-5 h-5 text-gray-500 mr-3"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M16 8l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2M5 3a2 2 0 00-2 2v1c0 8.284 6.716 15 15 15h1a2 2 0 002-2v-3.28a1 1 0 00-.684-.948l-4.493-1.498a1 1 0 00-1.21.502l-1.858 3.811A10.96 10.96 0 015 10V5a2 2 0 00-2-2z"
            ></path>
          </svg>
          <span className="text-gray-700">
            {userInfo?.contact_no || "No phone number"}
          </span>
        </div>

        <div className="flex items-center">
          <svg
            className="w-5 h-5 text-gray-500 mr-3"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
            ></path>
          </svg>
          <span className="text-gray-700">
            {userInfo?.merchant_info?.address || "No address provided"}
          </span>
        </div>

        <div className="flex items-center">
          <svg
            className="w-5 h-5 text-gray-500 mr-3"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
            ></path>
          </svg>
          <span className="text-gray-700">
            {userInfo?.merchant_info?.merchant_shop_name || "No shop name"}
          </span>
        </div>

        <div className="flex items-center">
          <svg
            className="w-5 h-5 text-gray-500 mr-3"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            ></path>
          </svg>
          <span className="text-gray-700">
            Joined:{" "}
            {userInfo?.createdAt
              ? new Date(userInfo.createdAt).toLocaleDateString()
              : "Unknown"}
          </span>
        </div>

        <div className="flex items-center">
          <div
            className={`w-3 h-3 rounded-full mr-3 ${
              userInfo?.is_active ? "bg-green-500" : "bg-red-500"
            }`}
          ></div>
          <span className="text-gray-700">
            Status: {userInfo?.is_active ? "Active" : "Inactive"}
          </span>
        </div>

        <div className="flex items-center">
          <div
            className={`w-3 h-3 rounded-full mr-3 ${
              userInfo?.is_paid ? "bg-green-500" : "bg-yellow-500"
            }`}
          ></div>
          <span className="text-gray-700">
            Payment: {userInfo?.is_paid ? "Paid" : "Pending"}
          </span>
        </div>
      </div>

      {/* Logout Button */}
      <button
        onClick={() => {
          onClose();
          logout();
        }}
        className="w-full py-2 px-4 bg-red-500 text-white rounded-md hover:bg-red-600 transition duration-200 flex items-center justify-center"
      >
        <svg
          className="w-5 h-5 mr-2"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
          ></path>
        </svg>
        Logout
      </button>
    </div>
  );
};

export default DrawerItem;
