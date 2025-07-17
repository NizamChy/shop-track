import React from "react";

const Navbar = () => {
  return (
    <>
      <div className="fixed z-20 bg-white w-full">
        <nav className="min-h-16 flex border justify-center items-center px-4 lg:px-8 relative">
          <ul className="text-base text-gray-600 font-semibold flex gap-4 text-center">
            <li className="border p-2">Add Bill</li>
            <li className="border p-2">Product Info</li>
            <li className="border p-2">Business Info</li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
