import React from "react";

const Navbar = () => {
  return (
    <>
      <div className="fixed z-20 bg-white w-full my-2">
        <nav className="min-h-16 flex border justify-center items-center relative">
          <ul className="text-sm sm:text-base text-gray-600 sm:font-semibold flex gap-2 sm:gap-4 text-center">
            <li className="border p-2 text-nowrap">Add Bill</li>
            <li className="border p-2 text-nowrap">Product Info</li>
            <li className="border p-2 text-nowrap">Business Info</li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
