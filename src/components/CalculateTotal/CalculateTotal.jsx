import React from "react";

const CalculateTotal = () => {
  return (
    <>
      <div className="flex flex-col justify-end items-end p-4 pe-10 lg:pe-16">
        <div>
          <p className="flex justify-between gap-5">
            <span>Subtotal :</span> <span>0৳</span>
          </p>
          <p className="flex justify-between gap-5">
            <span>Vat (%) :</span> <span>0৳</span>
          </p>
          <p className="flex justify-between gap-5">
            <span>Delivery Charge :</span> <span>0৳</span>
          </p>
          <p className="flex justify-between gap-5">
            <span>Discount :</span> <span>0৳</span>
          </p>
          <p className="flex justify-between gap-5">
            <span>Total :</span> <span>700৳</span>
          </p>
        </div>
      </div>
    </>
  );
};

export default CalculateTotal;
