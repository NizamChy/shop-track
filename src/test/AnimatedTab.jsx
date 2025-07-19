"use client";

import { useState, useRef, useEffect } from "react";

const AnimatedTab = () => {
  const [activeTab, setActiveTab] = useState(1);
  const [indicatorWidth, setIndicatorWidth] = useState(0);
  const tabRefs = useRef([]);

  const tabs = [
    { id: 1, label: "Add Bill" },
    { id: 2, label: "Product Info" },
    { id: 3, label: "Business Info" },
  ];

  useEffect(() => {
    // Update indicator width when active tab changes
    if (tabRefs.current[activeTab - 1]) {
      const activeTabElement = tabRefs.current[activeTab - 1];
      if (activeTabElement) {
        const width = activeTabElement.offsetWidth;
        const left = activeTabElement.offsetLeft;
        setIndicatorWidth(width);
      }
    }
  }, [activeTab]);

  return (
    <div className="pt-20 mx-4">
      <div className="max-w-md mx-auto">
        <ul className="flex items-center bg-[#59bdf738] rounded-full p-1 relative">
          {/* Active tab indicator */}
          <div
            className="absolute bg-[#3B9DF8] h-[85%] transition-all duration-300 rounded-full"
            style={{
              width: `${indicatorWidth}px`,
              transform: `translateX(${
                tabRefs.current[activeTab - 1]?.offsetLeft || 0
              }px)`,
            }}
          />

          {tabs.map((tab, index) => (
            <li
              key={tab.id}
              ref={(el) => (tabRefs.current[index] = el)}
              className={`px-4 py-2 text-[#424242] z-20 transition duration-300 rounded-full cursor-pointer whitespace-nowrap ${
                activeTab === tab.id ? "text-white" : ""
              }`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AnimatedTab;

// bg-[#2B4DC994]
//  <tr className="bg-[#2B4DC994] border-b text-xs md:text-sm text-center text-white font-bold">

// "use client";

// import { useState } from "react";

// const AnimatedTab = () => {
//   const [activeTab, setActiveTab] = useState(1);

//   return (
//     <div className="pt-20">
//       <ul className="flex items-center bg-[#59bdf738] rounded-full p-1 relative">
//         <div
//           className={`${
//             (activeTab === 1 && "translate-x-[0px]") ||
//             (activeTab === 2 && "translate-x-[90px]") ||
//             (activeTab === 3 && "translate-x-[186px]") ||
//             (activeTab === 4 && "!w-[100px] translate-x-[290px]")
//           } !bg-[#3B9DF8] absolute !text-[#fff] h-[85%] w-[95px] transition duration-700 rounded-full border-transparent cursor-pointer`}
//         ></div>
//         <li
//           className={`${
//             activeTab === 1 && " !text-[#fff]"
//           } px-2 py-2 text-[#424242] z-20 transition duration-300 rounded-full border-transparent cursor-pointer`}
//           onClick={() => setActiveTab(1)}
//         >
//           Add Bill
//         </li>
//         <li
//           className={`${
//             activeTab === 2 && " !text-[#fff]"
//           } px-2 py-2 text-[#424242] z-20 transition duration-300 rounded-full border-transparent cursor-pointer`}
//           onClick={() => setActiveTab(2)}
//         >
//           Product Info
//         </li>
//         <li
//           className={`${
//             activeTab === 3 && " !text-[#fff]"
//           } px-2 py-2 text-[#424242] z-20 transition duration-300 rounded-full border-transparent cursor-pointer`}
//           onClick={() => setActiveTab(3)}
//         >
//           Business Info
//         </li>
//       </ul>
//     </div>
//   );
// };

// export default AnimatedTab;
