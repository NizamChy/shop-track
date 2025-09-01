import React from "react";
import AddItem from "./AddItem";
import AllItem from "./AllItem";

const ProductInfo = () => {
  return (
    <section className="md:pt-20 pb-16 container mx-auto lg:max-w-2xl bg-gradient-to-b from-teal-50 to-teal-100">
      <AddItem />
      <AllItem />
    </section>
  );
};

export default ProductInfo;
