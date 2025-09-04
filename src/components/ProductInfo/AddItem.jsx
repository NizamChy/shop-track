"use client";

import { toast } from "sonner";
import { useMenu } from "@/context/MenuContext";
import React, { useState, useEffect } from "react";

const AddItem = () => {
  const { addItem, updateItem, itemToEdit, setItemToEdit, menuItems } =
    useMenu();

  const [previewImg, setPreviewImg] = useState(
    "https://i.pinimg.com/564x/0c/bb/aa/0cbbaab0deff7f188a7762d9569bf1b3.jpg"
  );
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    image: null,
  });
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (itemToEdit) {
      setFormData({
        name: itemToEdit.name,
        price: itemToEdit.price,
        image: itemToEdit.image,
      });
      setPreviewImg(
        itemToEdit?.image
          ? itemToEdit?.image
          : "https://i.pinimg.com/564x/0c/bb/aa/0cbbaab0deff7f188a7762d9569bf1b3.jpg"
      );
    } else {
      setFormData({
        name: "",
        price: "",
        image: null,
      });

      setPreviewImg(
        "https://i.pinimg.com/564x/0c/bb/aa/0cbbaab0deff7f188a7762d9569bf1b3.jpg"
      );
    }
  }, [itemToEdit]);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImg(reader.result);
      };
      reader.readAsDataURL(file);
      setFormData({ ...formData, image: file });
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCancel = () => {
    setItemToEdit(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      let imageUrl = formData.image;

      if (formData.image instanceof File) {
        const uploadedUrl = await uploadImage(formData.image);
        imageUrl = uploadedUrl;
      }

      const itemData = {
        id: itemToEdit ? itemToEdit.id : Date.now(),
        name: formData.name,
        price: Number(formData.price),
        image: imageUrl,
      };

      if (itemToEdit) {
        updateItem(itemData);
      } else {
        const newItemName = formData.name.trim().toLowerCase();

        if (
          menuItems.find(
            (item) => item.name.trim().toLowerCase() === newItemName
          )
        ) {
          return toast.warning("Similar item already exists!");
        }

        addItem(itemData);
      }

      setFormData({
        name: "",
        price: "",
        image: null,
      });
      setPreviewImg(
        "https://i.pinimg.com/564x/0c/bb/aa/0cbbaab0deff7f188a7762d9569bf1b3.jpg"
      );
    } catch (error) {
      console.error("Error saving item:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const uploadImage = async (imageFile) => {
    const formData = new FormData();
    formData.append("image", imageFile);

    const response = await fetch(
      "https://api.imgbb.com/1/upload?key=68458734269d038c11ca0ffc8338e965",
      {
        method: "POST",
        body: formData,
      }
    );

    const data = await response.json();
    return data.data.url;
  };

  return (
    <div id="add-edit-item-section" className="p-4 bg-teal-50">
      <div className="p-6 mb-8 border rounded-lg shadow max-w-md mx-auto">
        <h2 className="text-xl font-bold mb-4 text-gray-800">
          {itemToEdit ? "Edit Item" : "Add New Item"}
        </h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Item Image
            </label>
            <div className="flex items-center space-x-6">
              <div className="shrink-0">
                <img
                  className="h-16 w-16 object-cover rounded-full"
                  src={previewImg}
                  alt="Current item photo"
                />
              </div>
              <label className="block w-full">
                <span className="sr-only">Choose item photo</span>
                <input
                  type="file"
                  name="image"
                  onChange={handleFileChange}
                  className="block w-full text-sm text-slate-500
                    file:mr-4 file:py-2 file:px-4
                    file:rounded-full file:border-0
                    file:text-sm file:font-semibold
                    file:bg-violet-50 file:text-violet-700
                    hover:file:bg-violet-100 cursor-pointer"
                  accept="image/*"
                  // required={!itemToEdit}
                />
              </label>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-2/3">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 bg-slate-50 rounded-md focus:outline-none focus:ring-1 focus:ring-teal-500"
                placeholder="Item name"
                required
              />
            </div>

            <div className="w-1/3">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Price
              </label>
              <input
                type="number"
                name="price"
                value={formData.price}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 bg-slate-50 rounded-md focus:outline-none focus:ring-1 focus:ring-teal-500 appearance-none"
                placeholder="৳"
                step="1"
                min="0"
                required
              />
            </div>
          </div>

          <div className="flex gap-2">
            <button
              type="submit"
              className="flex-1 bg-teal-600 hover:bg-teal-700 text-white py-2 px-4 rounded-md transition duration-200 disabled:opacity-50"
              disabled={isLoading}
            >
              {isLoading
                ? "Saving..."
                : itemToEdit
                ? "Update Item"
                : "Add Item"}
            </button>

            {itemToEdit && (
              <button
                type="button"
                onClick={handleCancel}
                className="flex-1 bg-gray-500 hover:bg-gray-600 text-white py-2 px-4 rounded-md transition duration-200"
              >
                Cancel
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddItem;
