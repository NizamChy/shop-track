import React from "react";
import DatePicker from "@/utils/DatePicker";
import OrderTable from "@/components/orderTable/OrderTable";
import MenuSearchBar from "@/components/MenuSearchBar/MenuSearchBar";
import CalculateTotal from "@/components/CalculateTotal/CalculateTotal";
import CustomerInfo from "@/components/CustomerInfo/CustomerInfo";

const page = () => {
  return (
    <>
      <div className="pt-20 container mx-auto lg:max-w-2xl">
        <div className="min-h-[60vh] mx-auto border">
          <div className="flex flex-col sm:flex-row gap-4 p-4 w-full">
            <DatePicker />
            <MenuSearchBar />
          </div>

          <CustomerInfo />

          <OrderTable />
          <CalculateTotal />
        </div>
      </div>
    </>
  );
};

export default page;
