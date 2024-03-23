import React from "react";
import { Link } from "react-router-dom";

const HomeButton = () => {
  return (
    <div className="flex justify-center items-center ">
      <div className="w-1/12 h-14 mt-8 bg-[#EAECCC] rounded-3xl flex justify-center items-center hover:text-[#EAECCC] hover:bg-[#CD8D7A] text-[#CD8D7A]">
        <Link
          to="/"
          className=" text-lg font-bold transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:rounded-full duration-200"
        >
          Home
        </Link>
      </div>
    </div>
  );
};

export default HomeButton;
