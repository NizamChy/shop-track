"use client";

import React, { useState } from "react";

const OrderTable = () => {
  const initialItems = [
    { id: 1, name: "Pizza", price: 300, quantity: 1 },
    { id: 2, name: "Burger", price: 400, quantity: 1 },
    { id: 3, name: "Pasta", price: 250, quantity: 1 },
    { id: 4, name: "Salad", price: 200, quantity: 1 },
  ];

  const [items, setItems] = useState(initialItems);

  const handleQuantityChange = (id, action) => {
    setItems((prevItems) =>
      prevItems.map((item) => {
        if (item.id === id) {
          if (action === "increase") {
            return { ...item, quantity: item.quantity + 1 };
          } else if (action === "decrease" && item.quantity > 1) {
            return { ...item, quantity: item.quantity - 1 };
          }
        }
        return item;
      })
    );
  };

  const handleRemoveItem = (id) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="bg-white overflow-auto p-4">
      <h2 className="text-2xl mb-4">Items</h2>

      <div className="relative overflow-auto">
        <div className="overflow-x-auto rounded-lg">
          <table className="min-w-full bg-white border mb-4">
            <thead>
              <tr className="bg-slate-50 border-b text-xs md:text-sm text-center text-gray-800 font-bold">
                <th className="p-2 md:p-4 border-r">Product</th>
                <th className="p-2 md:p-4 border-r">Quantity</th>
                <th className="p-2 md:p-4 border-r">Price</th>
                <th className="p-2 md:p-4 border-r">Subtotal</th>
                <th className="p-2 md:p-4 flex justify-center items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18 18 6M6 6l12 12"
                    />
                  </svg>
                </th>
              </tr>
            </thead>
            <tbody>
              {items.map((item) => (
                <tr
                  key={item.id}
                  className="border-b text-xs md:text-sm text-center text-gray-800"
                >
                  <td className="p-2 md:p-4 border-r">{item.name}</td>
                  <td className="p-2 md:p-4 border-r flex justify-center">
                    <div className="flex items-center text-sm font-semibold">
                      <button
                        onClick={() =>
                          handleQuantityChange(item.id, "decrease")
                        }
                        className="px-2.5 sm:px-3 py-1 border border-gray-300 rounded-l-md hover:bg-gray-100"
                      >
                        -
                      </button>
                      <span className="px-3 font-medium sm:px-4 py-1 border-t border-b border-gray-300">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() =>
                          handleQuantityChange(item.id, "increase")
                        }
                        className="px-2.5 sm:px-3 py-1 border border-gray-300 rounded-r-md hover:bg-gray-100"
                      >
                        +
                      </button>
                    </div>
                  </td>
                  <td className="p-2 md:p-4 border-r">{item.price}৳</td>
                  <td className="p-2 md:p-4 border-r">
                    {item.price * item.quantity}৳
                  </td>
                  <td className="p-2 md:p-4 flex justify-center">
                    <button
                      onClick={() => handleRemoveItem(item.id)}
                      className="rounded-md hover:text-red-500"
                      aria-label="Remove item"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6 18 18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* <div className="flex justify-end mt-4">
        <div className="bg-slate-50 p-4 rounded-lg w-full md:w-1/3">
          <div className="flex justify-between mb-2">
            <span className="font-semibold">Total:</span>
            <span>{total}৳</span>
          </div>
          <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md transition-colors">
            Place Order
          </button>
        </div>
      </div> */}
    </div>
  );
};

export default OrderTable;

// "use client";

// import React, { useState } from "react";

// const OrderTable = () => {
//   const [quantity, setQuantity] = useState(1);

//   const handleQuantityChange = (action) => {
//     if (action === "increase") {
//       setQuantity((prev) => prev + 1);
//     } else if (action === "decrease" && quantity > 1) {
//       setQuantity((prev) => prev - 1);
//     }
//   };

//   return (
//     <>
//       <div className="bg-white overflow-auto p-4">
//         <h2 className="text-2xl mb-4">Items</h2>

//         <div className="relative overflow-auto">
//           <div className="overflow-x-auto rounded-lg">
//             <table className="min-w-full bg-white border mb-20">
//               <thead>
//                 <tr className="bg-slate-50 border-b text-xs md:text-sm text-center text-gray-800 font-bold">
//                   <th className="p-2 md:p-4 border-r">Product</th>
//                   <th className="p-2 md:p-4 border-r">Quantity</th>
//                   <th className="p-2 md:p-4 border-r">Price</th>
//                   <th className="p-2 md:p-4 flex justify-center">
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       fill="none"
//                       viewBox="0 0 24 24"
//                       strokeWidth={1.5}
//                       stroke="currentColor"
//                       className="size-5"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         d="M6 18 18 6M6 6l12 12"
//                       />
//                     </svg>
//                   </th>
//                 </tr>
//               </thead>
//               <tbody>
//                 <tr className="border-b text-xs md:text-sm text-center text-gray-800">
//                   <td className="p-2 md:p-4 border-r">Pizza</td>
//                   <td className="p-2 md:p-4 border-r flex justify-center">
//                     <div className="flex items-center text-sm font-semibold">
//                       <button
//                         onClick={() => handleQuantityChange("decrease")}
//                         className="px-2.5 sm:px-3 py-1 border border-gray-300 rounded-l-md hover:bg-gray-100"
//                       >
//                         -
//                       </button>
//                       <span className="px-3 font-medium sm:px-4 py-1 border-t border-b border-gray-300">
//                         {quantity}
//                       </span>
//                       <button
//                         onClick={() => handleQuantityChange("increase")}
//                         className="px-2.5 sm:px-3 py-1 border border-gray-300 rounded-r-md hover:bg-gray-100"
//                       >
//                         +
//                       </button>
//                     </div>
//                   </td>
//                   <td className="p-2 md:p-4 border-r">300৳</td>
//                   <td className="flex justify-center space-x-2">
//                     <button className="rounded-md text-xs md:text-sm">
//                       <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         fill="none"
//                         viewBox="0 0 24 24"
//                         strokeWidth={1.5}
//                         stroke="currentColor"
//                         className="size-5 hover:text-red-500"
//                       >
//                         <path
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           d="M6 18 18 6M6 6l12 12"
//                         />
//                       </svg>
//                     </button>
//                   </td>
//                 </tr>

//                 <tr className="border-b text-xs md:text-sm text-center text-gray-800">
//                   <td className="p-2 md:p-4 border-r">Burger</td>
//                   <td className="p-2 md:p-4 border-r flex justify-center">
//                     <div className="flex items-center text-sm font-semibold">
//                       <button
//                         onClick={() => handleQuantityChange("decrease")}
//                         className="px-2.5 sm:px-3 py-1 border border-gray-300 rounded-l-md hover:bg-gray-100"
//                       >
//                         -
//                       </button>
//                       <span className="px-3 font-medium sm:px-4 py-1 border-t border-b border-gray-300">
//                         {quantity}
//                       </span>
//                       <button
//                         onClick={() => handleQuantityChange("increase")}
//                         className="px-2.5 sm:px-3 py-1 border border-gray-300 rounded-r-md hover:bg-gray-100"
//                       >
//                         +
//                       </button>
//                     </div>
//                   </td>
//                   <td className="p-2 md:p-4 border-r">400৳</td>
//                   <td className="relative flex justify-center">
//                     <button className="text-xs md:text-sm">
//                       <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         fill="none"
//                         viewBox="0 0 24 24"
//                         strokeWidth={1.5}
//                         stroke="currentColor"
//                         className="size-5 hover:text-red-500"
//                       >
//                         <path
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           d="M6 18 18 6M6 6l12 12"
//                         />
//                       </svg>
//                     </button>
//                   </td>
//                 </tr>
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default OrderTable;
