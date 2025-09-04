import Link from "next/link";
import { FaArrowLeftLong } from "react-icons/fa6";

const NotFoundPage = () => {
  return (
    <div className="m-5 lg:m-10 md:pt-20 min-h-[75vh] flex justify-center items-center">
      <div className="px-10 w-full flex items-center flex-col justify-center py-20 rounded-xl bg-emerald-500">
        <img
          src="https://i.ibb.co/LvLq6d3/Group-29.png"
          alt="illustration"
          className="w-full lg:w-[400px]"
        />
        <p className="text-[#fff] text-[1.2rem] w-full lg:w-[55%] text-center">
          Oops! Something went wrong!
        </p>

        <Link href="/">
          <button className="py-3 px-6 sm:px-8 rounded-full bg-[#fff] text-black mt-4 flex items-center gap-[10px]">
            <FaArrowLeftLong /> Back to home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
