import AutocompleteInput from "@/components/AutocompleteInput";
import DatePicker from "@/components/Navbar/DatePicker";
import React from "react";

const page = () => {
  return (
    <>
      <div className="pt-20 container mx-auto lg:max-w-2xl">
        <div className="min-h-[60vh] mx-auto border">
          <div className="flex flex-col sm:flex-row gap-4 p-4 w-full">
            {/* <button className="border p-2 w-full">Date</button> */}

            {/* <input
              type="date"
              name="date"
              id="date"
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            /> */}

            <DatePicker />

            <button className="border p-2 w-full">Walking Customer</button>
          </div>

          {/* <div className="p-4">
            <button className="border p-2 w-full">Menu Search Bar</button>
          </div> */}

          <>
            <div className="flex justify-center items-center">
              <form action="/search" className="max-w-[480px] w-full px-4">
                <div className="relative">
                  <input
                    type="text"
                    name="q"
                    className="w-full border h-12 shadow p-4 rounded-full focus:outline-none"
                    placeholder="Search menu.."
                  />
                  <button type="submit">
                    <svg
                      className="text-teal-400 h-5 w-5 absolute top-3.5 right-3 fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      version="1.1"
                      x="0px"
                      y="0px"
                      viewBox="0 0 56.966 56.966"
                      style={{ enableBackground: "new 0 0 56.966 56.966" }}
                      space="preserve"
                    >
                      <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z"></path>
                    </svg>
                  </button>
                </div>
              </form>
            </div>
          </>

          <>
            <div className="bg-white overflow-auto p-4">
              <h2 className="text-2xl mb-4">Items</h2>

              <div className="relative overflow-auto">
                <div className="overflow-x-auto rounded-lg">
                  <table className="min-w-full bg-white border mb-20">
                    <thead>
                      <tr className="bg-[#2B4DC994] border-b text-xs md:text-sm text-center text-white font-bold">
                        <th className="p-2 md:p-4 border-r">Product</th>
                        <th className="p-2 md:p-4 border-r">Quantity</th>
                        <th className="p-2 md:p-4 border-r">Price</th>
                        <th className="relative p-2 md:p-4 flex justify-center space-x-2">
                          Action
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b text-xs md:text-sm text-center text-gray-800">
                        <td className="p-2 md:p-4 border-r">Pizza</td>
                        <td className="p-2 md:p-4 border-r">1</td>
                        <td className="p-2 md:p-4 border-r">300 tk</td>
                        <td className="relative p-2 md:p-4 flex justify-center space-x-2">
                          <button className="px-3 py-1 rounded-md text-xs md:text-sm">
                            x
                          </button>
                        </td>
                      </tr>

                      <tr className="border-b text-xs md:text-sm text-center text-gray-800">
                        <td className="p-2 md:p-4 border-r">Burger</td>
                        <td className="p-2 md:p-4 border-r">2</td>
                        <td className="p-2 md:p-4 border-r">400 tk</td>
                        <td className="relative p-2 md:p-4 flex justify-center space-x-2">
                          <button className="px-3 py-1 rounded-md text-xs md:text-sm">
                            x
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </>

          <div className="flex flex-col justify-end items-end p-4">
            <p>Subtotal : 0 tk</p>
            <p>Vat (%) : 0 %</p>
            <p>Delivery Charge : 0 tk</p>
            <p>Discount : 0 tk</p>
            <p>Total : 700 tk</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
