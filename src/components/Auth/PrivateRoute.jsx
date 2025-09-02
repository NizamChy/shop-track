"use client";

import LoginPage from "./LoginPage";
import Loader from "../Loader/Loader";
import { useUser } from "@/context/UserContext";

const PrivateRoute = ({ children }) => {
  const { userInfo, loading } = useUser();

  if (loading) {
    return <Loader />;
  }

  if ((!loading && !userInfo) || !userInfo?.merchant_info?._id) {
    return <LoginPage />;
  }

  return children;
};

export default PrivateRoute;
