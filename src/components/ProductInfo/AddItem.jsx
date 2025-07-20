"use client";

import React from "react";
import { useState } from "react";

const AddItem = () => {
  const [previewImg, setPreviewImg] = useState(
    "https://www.pngplay.com/wp-content/uploads/8/Upload-Icon-Logo-Transparent-Free-PNG.png"
  );

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImg(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="p-4">
      <div className="p-6 mb-8 bg-white border rounded-lg shadow max-w-md mx-auto">
        <h2 className="text-xl font-bold mb-4 text-gray-800">Add New Item</h2>
        <form className="space-y-4">
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
                  onChange={handleFileChange}
                  className="block w-full text-sm text-slate-500
                    file:mr-4 file:py-2 file:px-4
                    file:rounded-full file:border-0
                    file:text-sm file:font-semibold
                    file:bg-violet-50 file:text-violet-700
                    hover:file:bg-violet-100"
                  accept="image/*"
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
                className="w-full px-3 py-2 border border-gray-300 bg-slate-50 rounded-md focus:outline-none focus:ring-1 focus:ring-teal-500"
                placeholder="Item name"
              />
            </div>

            <div className="w-1/3">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Price
              </label>
              <input
                type="text"
                className="w-full px-3 py-2 border border-gray-300 bg-slate-50 rounded-md focus:outline-none focus:ring-1 focus:ring-teal-500"
                placeholder="৳"
                step="0.01"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-teal-600 hover:bg-teal-700 text-white py-2 px-4 rounded-md transition duration-200"
          >
            Add Item
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddItem;
