import React from "react";

const Loader = () => {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div>
        <div className="w-7 h-7 animate-[ping_2s_linear_infinite] rounded-full border-2 border-teal-600 flex items-center justify-center">
          <div className="w-5 h-5 animate-[ping_2s_linear_3s_infinite] rounded-full border-2 border-teal-600"></div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
