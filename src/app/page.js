import React from "react";
import DatePicker from "@/utils/DatePicker";
import OrderTable from "@/components/orderTable/OrderTable";
import ChargesForm from "@/components/ChargesForm/ChargesForm";
import CustomerInfo from "@/components/CustomerInfo/CustomerInfo";
import MenuSearchBar from "@/components/MenuSearchBar/MenuSearchBar";
import CalculateTotal from "@/components/CalculateTotal/CalculateTotal";

const page = () => {
  return (
    <>
      <div className="pt-20 pb-5 container mx-auto lg:max-w-2xl">
        <div className="min-h-[60vh] mx-auto border rounded-lg py-4">
          <div className="flex flex-col sm:flex-row gap-4 p-4 w-full">
            <DatePicker />
            <MenuSearchBar />
          </div>

          <CustomerInfo />
          <OrderTable />
          <ChargesForm />
          <CalculateTotal />
        </div>
      </div>
    </>
  );
};

export default page;
