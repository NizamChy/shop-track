"use client";

import axios from "axios";
import { toast } from "sonner";
import OtpInput from "./OtpInput";
import React, { useState } from "react";
import { useUser } from "@/context/UserContext";
import { IoMdArrowRoundBack } from "react-icons/io";
import { useMutation } from "@tanstack/react-query";

const LoginPage = () => {
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [isPasswordView, setIsPasswordView] = useState(false);

  // User Login
  // phone: +8801859168695
  // password: 12356

  const { setUserInfo } = useUser();

  const loginMutation = useMutation({
    mutationFn: async (loginData) => {
      const response = await axios.put(
        "https://shop-track-server.vercel.app/api/v1/auth/login",
        loginData
      );
      return response.data;
    },
    onSuccess: (data) => {
      console.log("User login successfully:", data);

      toast?.success(data?.message);
      // localStorage.setItem("userInfo", JSON.stringify(data?.data));

      setUserInfo(data?.data);
    },
    onError: (error) => {
      console.error("Error login user:", error);
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const loginData = {
      contact_no: phone,
      password: password,
    };

    loginMutation.mutate(loginData);
  };

  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  };

  return (
    <div className="px-4 min-h-[70vh] flex justify-center items-center">
      <>
        <div className="max-w-sm mx-auto w-full">
          {!isPasswordView ? (
            <>
              <div className="mb-4">
                <label
                  htmlFor="phone"
                  className="block text-gray-700 text-sm font-medium mb-2"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  value={phone}
                  onChange={handlePhoneChange}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                  placeholder="Enter your phone number"
                  required
                />
              </div>

              <button
                onClick={() => setIsPasswordView(true)}
                className="w-full bg-teal-600 text-white py-3 px-4 rounded-lg hover:bg-teal-700 transition duration-200 font-medium shadow-md hover:shadow-teal-200 shadow-teal-100"
              >
                Continue
              </button>
            </>
          ) : (
            <>
              <div className="mb-6">
                <button onClick={() => setIsPasswordView(false)}>
                  <IoMdArrowRoundBack className="text-xl text-gray-500 hover:text-gray-700 transition-colors" />
                </button>

                <label
                  htmlFor="password"
                  className="block text-gray-700 text-sm font-medium mb-2"
                >
                  Password
                </label>

                <OtpInput setPassword={setPassword} />
              </div>

              <button
                onClick={handleSubmit}
                disabled={loginMutation?.isPending}
                className="w-full bg-teal-600 text-white py-3 px-4 rounded-lg hover:bg-teal-700 transition duration-200 font-medium shadow-md hover:shadow-teal-200 shadow-teal-100 disabled:bg-teal-400"
              >
                {loginMutation?.isPending ? "Loggin in..." : "Log in"}
              </button>
            </>
          )}
        </div>
      </>
    </div>
  );
};

export default LoginPage;
