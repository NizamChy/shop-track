import React from "react";

const MenuItemSkeleton = () => {
  return (
    <div className="flex justify-between items-center w-full p-1 sm:p-4 rounded-lg border border-gray-200 bg-teal-50">
      <div className="flex items-center gap-2 sm:gap-4 w-full min-w-0">
        <div className="relative w-16 h-16 rounded-lg overflow-hidden flex-shrink-0 bg-gray-300 animate-pulse"></div>

        <div className="space-y-1 min-w-0 flex-1">
          <div className="h-4 bg-gray-300 rounded animate-pulse mb-2 w-3/4"></div>
          <div className="h-5 bg-gray-300 rounded animate-pulse w-1/3"></div>
        </div>
      </div>

      <div className="flex flex-col justify-end items-end sm:flex-row gap-1 sm:gap-4">
        <div className="flex items-center gap-1.5 px-2 sm:px-3 py-1.5 text-xs sm:text-sm text-transparent bg-gray-300 rounded-md animate-pulse w-16 h-8"></div>
        <div className="flex items-center gap-1.5 px-2 sm:px-3 py-1.5 text-xs sm:text-sm text-transparent bg-gray-300 rounded-md animate-pulse w-16 h-8"></div>
      </div>
    </div>
  );
};

export default MenuItemSkeleton;
