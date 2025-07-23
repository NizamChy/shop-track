// "use client";

// import { useMenu } from "@/context/MenuContext";
// import React, { useState, useEffect } from "react";

// const AddItem = () => {
//   const { addItem, updateItem, itemToEdit, setItemToEdit } = useMenu();

//   const [previewImg, setPreviewImg] = useState(
//     "https://www.pngplay.com/wp-content/uploads/8/Upload-Icon-Logo-Transparent-Free-PNG.png"
//   );
//   const [formData, setFormData] = useState({
//     name: "",
//     price: "",
//     image: null,
//   });
//   const [isLoading, setIsLoading] = useState(false);

//   useEffect(() => {
//     if (itemToEdit) {
//       setFormData({
//         name: itemToEdit.name,
//         price: itemToEdit.price,
//         image: itemToEdit.image,
//       });
//       setPreviewImg(itemToEdit.image);
//     } else {
//       setFormData({
//         name: "",
//         price: "",
//         image: null,
//       });
//       setPreviewImg(
//         "https://www.pngplay.com/wp-content/uploads/8/Upload-Icon-Logo-Transparent-Free-PNG.png"
//       );
//     }
//   }, [itemToEdit]);

//   const handleFileChange = (event) => {
//     const file = event.target.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         setPreviewImg(reader.result);
//       };
//       reader.readAsDataURL(file);
//       setFormData({ ...formData, image: file });
//     }
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleCancel = () => {
//     setItemToEdit(null);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsLoading(true);

//     try {
//       let imageUrl = formData.image;

//       if (formData.image instanceof File) {
//         const uploadedUrl = await uploadImage(formData.image);
//         imageUrl = uploadedUrl;
//       }

//       const itemData = {
//         id: itemToEdit ? itemToEdit.id : Date.now(),
//         name: formData.name,
//         price: Number(formData.price),
//         image: imageUrl,
//       };

//       if (itemToEdit) {
//         updateItem(itemData);
//       } else {
//         addItem(itemData);
//       }

//       setFormData({
//         name: "",
//         price: "",
//         image: null,
//       });
//       setPreviewImg(
//         "https://www.pngplay.com/wp-content/uploads/8/Upload-Icon-Logo-Transparent-Free-PNG.png"
//       );
//     } catch (error) {
//       console.error("Error saving item:", error);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const uploadImage = async (imageFile) => {
//     // Implement your image upload logic here (e.g., to ImgBB)
//     // For demo purposes, we'll just return a mock URL
//     return URL.createObjectURL(imageFile);
//   };

//   return (
//     <div id="add-edit-item-section" className="p-4">
//       <div className="p-6 mb-8 border rounded-lg shadow max-w-md mx-auto">
//         <h2 className="text-xl font-bold mb-4 text-gray-800">
//           {itemToEdit ? "Edit Item" : "Add New Item"}
//         </h2>
//         <form className="space-y-4" onSubmit={handleSubmit}>
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-2">
//               Item Image
//             </label>
//             <div className="flex items-center space-x-6">
//               <div className="shrink-0">
//                 <img
//                   className="h-16 w-16 object-cover rounded-full"
//                   src={previewImg}
//                   alt="Current item photo"
//                 />
//               </div>
//               <label className="block w-full">
//                 <span className="sr-only">Choose item photo</span>
//                 <input
//                   type="file"
//                   name="image"
//                   onChange={handleFileChange}
//                   className="block w-full text-sm text-slate-500
//                     file:mr-4 file:py-2 file:px-4
//                     file:rounded-full file:border-0
//                     file:text-sm file:font-semibold
//                     file:bg-violet-50 file:text-violet-700
//                     hover:file:bg-violet-100"
//                   accept="image/*"
//                   required={!itemToEdit}
//                 />
//               </label>
//             </div>
//           </div>

//           <div className="flex gap-4">
//             <div className="w-2/3">
//               <label className="block text-sm font-medium text-gray-700 mb-1">
//                 Name
//               </label>
//               <input
//                 type="text"
//                 name="name"
//                 value={formData.name}
//                 onChange={handleInputChange}
//                 className="w-full px-3 py-2 border border-gray-300 bg-slate-50 rounded-md focus:outline-none focus:ring-1 focus:ring-teal-500"
//                 placeholder="Item name"
//                 required
//               />
//             </div>

//             <div className="w-1/3">
//               <label className="block text-sm font-medium text-gray-700 mb-1">
//                 Price
//               </label>
//               <input
//                 type="number"
//                 name="price"
//                 value={formData.price}
//                 onChange={handleInputChange}
//                 className="w-full px-3 py-2 border border-gray-300 bg-slate-50 rounded-md focus:outline-none focus:ring-1 focus:ring-teal-500"
//                 placeholder="৳"
//                 step="0.01"
//                 required
//               />
//             </div>
//           </div>

//           <div className="flex gap-2">
//             <button
//               type="submit"
//               className="flex-1 bg-teal-600 hover:bg-teal-700 text-white py-2 px-4 rounded-md transition duration-200 disabled:opacity-50"
//               disabled={isLoading}
//             >
//               {isLoading
//                 ? "Saving..."
//                 : itemToEdit
//                 ? "Update Item"
//                 : "Add Item"}
//             </button>

//             {itemToEdit && (
//               <button
//                 type="button"
//                 onClick={handleCancel}
//                 className="flex-1 bg-gray-500 hover:bg-gray-600 text-white py-2 px-4 rounded-md transition duration-200"
//               >
//                 Cancel
//               </button>
//             )}
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default AddItem;

// components/AddItem.js
"use client";

import React, { useState } from "react";
import { useMenu } from "@/context/MenuContext";

const AddItem = () => {
  const { addItem } = useMenu();
  const [previewImg, setPreviewImg] = useState(
    "https://www.pngplay.com/wp-content/uploads/8/Upload-Icon-Logo-Transparent-Free-PNG.png"
  );
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    image: null,
  });
  const [isLoading, setIsLoading] = useState(false);

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Upload image to ImgBB
      const imageUrl = await uploadImage(formData.image);

      // Create new item
      const newItem = {
        id: Date.now(), // Simple unique ID
        name: formData.name,
        price: Number(formData.price),
        image: imageUrl,
      };

      addItem(newItem);

      // Reset form
      setFormData({
        name: "",
        price: "",
        image: null,
      });
      setPreviewImg(
        "https://www.pngplay.com/wp-content/uploads/8/Upload-Icon-Logo-Transparent-Free-PNG.png"
      );
    } catch (error) {
      console.error("Error adding item:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="p-4">
      <div className="p-6 mb-8 border rounded-lg shadow max-w-md mx-auto">
        <h2 className="text-xl font-bold mb-4 text-gray-800">Add New Item</h2>
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
                    hover:file:bg-violet-100"
                  accept="image/*"
                  required
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
                className="w-full px-3 py-2 border border-gray-300 bg-slate-50 rounded-md focus:outline-none focus:ring-1 focus:ring-teal-500"
                placeholder="৳"
                step="0.01"
                required
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-teal-600 hover:bg-teal-700 text-white py-2 px-4 rounded-md transition duration-200 disabled:opacity-50"
            disabled={isLoading}
          >
            {isLoading ? "Adding..." : "Add Item"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddItem;

// "use client";

// import React from "react";
// import { useState } from "react";

// const AddItem = () => {
//   const [previewImg, setPreviewImg] = useState(
//     "https://www.pngplay.com/wp-content/uploads/8/Upload-Icon-Logo-Transparent-Free-PNG.png"
//   );

//   const handleFileChange = (event) => {
//     const file = event.target.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         setPreviewImg(reader.result);
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   return (
//     <div className="p-4">
//       <div className="p-6 mb-8 border rounded-lg shadow max-w-md mx-auto">
//         <h2 className="text-xl font-bold mb-4 text-gray-800">Add New Item</h2>
//         <form className="space-y-4">
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-2">
//               Item Image
//             </label>
//             <div className="flex items-center space-x-6">
//               <div className="shrink-0">
//                 <img
//                   className="h-16 w-16 object-cover rounded-full"
//                   src={previewImg}
//                   alt="Current item photo"
//                 />
//               </div>
//               <label className="block w-full">
//                 <span className="sr-only">Choose item photo</span>
//                 <input
//                   type="file"
//                   onChange={handleFileChange}
//                   className="block w-full text-sm text-slate-500
//                     file:mr-4 file:py-2 file:px-4
//                     file:rounded-full file:border-0
//                     file:text-sm file:font-semibold
//                     file:bg-violet-50 file:text-violet-700
//                     hover:file:bg-violet-100"
//                   accept="image/*"
//                 />
//               </label>
//             </div>
//           </div>

//           <div className="flex gap-4">
//             <div className="w-2/3">
//               <label className="block text-sm font-medium text-gray-700 mb-1">
//                 Name
//               </label>
//               <input
//                 type="text"
//                 className="w-full px-3 py-2 border border-gray-300 bg-slate-50 rounded-md focus:outline-none focus:ring-1 focus:ring-teal-500"
//                 placeholder="Item name"
//               />
//             </div>

//             <div className="w-1/3">
//               <label className="block text-sm font-medium text-gray-700 mb-1">
//                 Price
//               </label>
//               <input
//                 type="text"
//                 className="w-full px-3 py-2 border border-gray-300 bg-slate-50 rounded-md focus:outline-none focus:ring-1 focus:ring-teal-500"
//                 placeholder="৳"
//                 step="0.01"
//               />
//             </div>
//           </div>

//           <button
//             type="submit"
//             className="w-full bg-teal-600 hover:bg-teal-700 text-white py-2 px-4 rounded-md transition duration-200"
//           >
//             Add Item
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default AddItem;

// orderInfo to be print

export const orderInfo = {
  date: "2025-07-22T10:00:03.927Z",
  storeInfo: {
    store_name: "Shop Track",
    contact: "01682872654",
    location: "Jobeda Villa, Mirzapur, Muradpur",
  },
  customerInfo: {
    name: "Nizam Chowdhury",
    phone: "01865231563",
  },
  orderItems: [
    {
      id: 1,
      name: "Pizza",
      price: 300,
      image:
        "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      quantity: 2,
    },
    {
      id: 2,
      name: "Burger",
      price: 400,
      image:
        "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      quantity: 3,
    },
    {
      id: 3,
      name: "Pasta",
      price: 250,
      image:
        "https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      quantity: 2,
    },
    {
      id: 1753178439340,
      name: "Checken Rice Bowl",
      price: 220,
      image: null,
      quantity: 3,
    },
    {
      id: 4,
      name: "Salad",
      price: 200,
      image:
        "https://images.unsplash.com/photo-1546793665-c74683f339c1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      quantity: 1,
    },
  ],
  charges: {
    vat: 5,
    deliveryCharge: 50,
    discount: 30,
  },
  subtotal: 3160,
  total: 3338,
};
