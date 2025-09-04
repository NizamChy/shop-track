import axios from "axios";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

// API ENDPOINTS :
const BASE_URL = "https://shop-track-server.vercel.app";
const ADD_ITEM = "/api/v1/product/add";
const ALL_ITEM = "/api/v1/product/all-product";
const ORDER_INFO_BY_DATE = `/api/v1/order/order-info`;
const UPDATE_ITEM = (id) => `/api/v1/product/update/${id}`;
const DELETE_ITEM = (id) => `/api/v1/product/delete/${id}`;

const fetchData = async (endpoint) => {
  const response = await axios.get(`${BASE_URL}${endpoint}`);
  return response.data.data;
};

const fetchOrderInfoByDate = async (storeId, date) => {
  const response = await axios.post(`${BASE_URL}${ORDER_INFO_BY_DATE}`, {
    storeInfo: storeId,
    order_date: date,
  });
  return response.data.data;
};

export const useShopItem = () => {
  const queryClient = useQueryClient();

  const useAllItem = () => {
    return useQuery({
      queryKey: ["menuItems"],
      queryFn: () => fetchData(ALL_ITEM),
    });
  };

  const useOrderInfoByDate = (storeId, date) => {
    return useQuery({
      queryKey: ["orderInfoByDate", storeId, date],
      queryFn: () => fetchOrderInfoByDate(storeId, date),
      enabled: !!storeId && !!date,
    });
  };

  const useAddItem = () => {
    return useMutation({
      mutationFn: async ({ name, image, price }) => {
        const response = await axios.post(`${BASE_URL}${ADD_ITEM}`, {
          name,
          image,
          price,
        });
        return response.data;
      },
      onSuccess: () => {
        queryClient.invalidateQueries(["menuItems"]);
      },
    });
  };

  const useUpdateItem = () => {
    return useMutation({
      mutationFn: async ({ id, name, image, price }) => {
        const response = await axios.put(`${BASE_URL}${UPDATE_ITEM(id)}`, {
          name,
          image,
          price,
        });
        return response.data;
      },
      onSuccess: () => {
        queryClient.invalidateQueries(["menuItems"]);
      },
    });
  };

  const useDeleteItem = () => {
    return useMutation({
      mutationFn: async (id) => {
        const response = await axios.put(`${BASE_URL}${DELETE_ITEM(id)}`);
        return response.data;
      },
      onSuccess: () => {
        queryClient.invalidateQueries(["menuItems"]);
      },
    });
  };

  return {
    useAllItem,
    useAddItem,
    useUpdateItem,
    useDeleteItem,
    useOrderInfoByDate,
  };
};
