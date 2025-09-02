"use client";

import React from "react";
import Image from "next/image";
import { toast } from "sonner";
import { useMenu } from "@/context/MenuContext";
import { FiEdit2, FiTrash2 } from "react-icons/fi";

const MenuItemCard = ({ item }) => {
  const { deleteItem, setItemToEdit } = useMenu();

  const handleDelete = () => {
    const handleConfirmClick = () => {
      deleteItem(item?._id);
      toast.dismiss();
    };

    toast(
      <>
        <p className="text-base font-semibold mb-2">
          Are you sure you want to delete{" "}
          <span className="text-red-600">{item?.name}</span>?
        </p>
        <div className="flex gap-2 justify-end">
          <button
            onClick={() => toast.dismiss()}
            className="px-3 py-1.5 text-sm text-teal-600 bg-teal-50 rounded-md transition-colors"
          >
            No
          </button>
          <button
            onClick={handleConfirmClick}
            className="px-3 py-1.5 text-sm text-red-600 bg-red-50 rounded-md transition-colors"
          >
            Yes
          </button>
        </div>
      </>
    );
  };

  const handleEdit = () => {
    setItemToEdit(item);
    const formSection = document.getElementById("add-edit-item-section");
    if (formSection) {
      formSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex justify-between items-center w-full p-1 sm:p-4 rounded-lg border border-gray-200 hover:shadow-md transition-all duration-300 cursor-pointer bg-white">
      <div className="flex items-center gap-2 sm:gap-4 w-full min-w-0">
        <div className="relative w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
          <Image
            src={
              item?.image ||
              "https://i.pinimg.com/564x/0c/bb/aa/0cbbaab0deff7f188a7762d9569bf1b3.jpg"
            }
            alt={item?.name}
            fill
            className="object-cover"
            // sizes="64px"
            sizes="200px"
          />
        </div>

        <div className="space-y-1 min-w-0 flex-1">
          <h3 className="text-xs sm:text-base font-normal text-gray-700 break-words overflow-hidden text-ellipsis line-clamp-2">
            {item?.name}
          </h3>
          <p className="text-sm sm:text-lg font-bold text-teal-600">
            ৳{item?.price}
          </p>
        </div>
      </div>

      <div className="flex flex-col justify-end items-end sm:flex-row gap-1 sm:gap-4">
        <button
          onClick={handleEdit}
          className="flex items-center gap-1.5 px-2 sm:px-3 py-1.5 text-xs sm:text-sm text-gray-600 hover:text-teal-600 hover:bg-teal-50 rounded-md transition-colors"
          aria-label="Edit item"
        >
          <FiEdit2 size={14} />
          <span>Edit</span>
        </button>
        <button
          onClick={handleDelete}
          className="flex items-center gap-1.5 px-2 sm:px-3 py-1.5 text-xs sm:text-sm text-gray-600 hover:text-red-600 hover:bg-red-50 rounded-md transition-colors"
          aria-label="Delete item"
        >
          <FiTrash2 size={14} />
          <span>Delete</span>
        </button>
      </div>
    </div>
  );
};

export default MenuItemCard;
