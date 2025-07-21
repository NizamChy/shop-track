"use client";

import React from "react";
import Image from "next/image";
import { useMenu } from "@/context/MenuContext";
import { FiEdit2, FiTrash2 } from "react-icons/fi";

const MenuItemCard = ({ item }) => {
  const { deleteItem, setItemToEdit } = useMenu();

  const handleDelete = () => {
    if (confirm("Are you sure you want to delete this item?")) {
      deleteItem(item.id);
    }
  };

  const handleEdit = () => {
    setItemToEdit(item);
    document.getElementById("add-edit-item-section").scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <>
      <div className="flex justify-between items-center w-full p-4 rounded-lg border border-gray-200 hover:shadow-md transition-all duration-300 cursor-pointer bg-white">
        <div className="flex items-center gap-4">
          <div className="relative w-16 h-16 rounded-lg overflow-hidden">
            <Image
              src={item.image}
              alt={item.name}
              fill
              className="object-cover"
              sizes="(max-width: 64px) 100vw"
            />
          </div>

          <div className="space-y-1">
            <h3 className="text-lg font-semibold text-gray-800 line-clamp-1">
              {item.name}
            </h3>
            <p className="text-xl font-bold text-teal-600">৳{item.price}</p>
          </div>
        </div>

        <div className="flex gap-4">
          <button
            onClick={handleEdit}
            className="flex items-center gap-1.5 px-3 py-1.5 text-sm text-gray-600 hover:text-teal-600 hover:bg-teal-50 rounded-md transition-colors"
            aria-label="Edit item"
          >
            <FiEdit2 size={16} />
            <span>Edit</span>
          </button>
          <button
            onClick={handleDelete}
            className="flex items-center gap-1.5 px-3 py-1.5 text-sm text-gray-600 hover:text-red-600 hover:bg-red-50 rounded-md transition-colors"
            aria-label="Delete item"
          >
            <FiTrash2 size={16} />
            <span>Delete</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default MenuItemCard;
