"use client";

import { toast } from "sonner";
import { useShopItem } from "@/hooks/useShopItem";
import { createContext, useContext, useState } from "react";

const MenuContext = createContext();

export const MenuProvider = ({ children }) => {
  const [itemToEdit, setItemToEdit] = useState(null);

  const { useAllItem, useAddItem, useUpdateItem, useDeleteItem } =
    useShopItem();

  const { data: menuItems = [], isLoading, isError } = useAllItem();
  const addItemMutation = useAddItem();
  const updateItemMutation = useUpdateItem();
  const deleteItemMutation = useDeleteItem();

  const addItem = async (newItem) => {
    addItemMutation.mutate(newItem, {
      onSuccess: () => {
        toast.success(`${newItem.name} added successfully!`);
        setItemToEdit(null);
      },
      onError: () => {
        toast.error("Failed to add item. Try again.");
      },
    });
  };

  const updateItem = async (updatedItem) => {
    updateItemMutation.mutate(updatedItem, {
      onSuccess: () => {
        toast.success(`${updatedItem.name} updated successfully!`);
        setItemToEdit(null);
      },
      onError: () => {
        toast.error("Failed to update item. Try again.");
      },
    });
  };

  const deleteItem = async (id) => {
    deleteItemMutation.mutate(id, {
      onSuccess: () => {
        toast.success("Item deleted successfully!");
      },
      onError: () => {
        toast.error("Failed to delete item. Try again.");
      },
    });
  };

  return (
    <MenuContext.Provider
      value={{
        menuItems,
        isLoading,
        isError,
        addItem,
        updateItem,
        deleteItem,
        itemToEdit,
        setItemToEdit,
      }}
    >
      {children}
    </MenuContext.Provider>
  );
};

export const useMenu = () => useContext(MenuContext);
