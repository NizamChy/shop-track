"use client";

import { toast } from "sonner";
import { MENU_ITEMS } from "@/utils/constant";
import { createContext, useContext, useState, useEffect } from "react";

const MenuContext = createContext();

export const MenuProvider = ({ children }) => {
  const [menuItems, setMenuItems] = useState([]);
  const [itemToEdit, setItemToEdit] = useState(null);

  useEffect(() => {
    const storedItems = localStorage.getItem("menuItems");
    if (storedItems) {
      setMenuItems(JSON.parse(storedItems));
    } else {
      localStorage.setItem("menuItems", JSON.stringify(MENU_ITEMS));
      setMenuItems(MENU_ITEMS);
    }
  }, []);

  useEffect(() => {
    if (menuItems.length > 0) {
      localStorage.setItem("menuItems", JSON.stringify(menuItems));
    }
  }, [menuItems]);

  const addItem = (newItem) => {
    setMenuItems([...menuItems, newItem]);
    setItemToEdit(null);

    toast.success(`${newItem.name} added successfully!`);
  };

  const updateItem = (updatedItem) => {
    setMenuItems(
      menuItems.map((item) => (item.id === updatedItem.id ? updatedItem : item))
    );
    setItemToEdit(null);

    toast.success(`${updatedItem.name} updated successfully!`);
  };

  const deleteItem = (id) => {
    setMenuItems(menuItems.filter((item) => item.id !== id));
  };

  return (
    <MenuContext.Provider
      value={{
        menuItems,
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
