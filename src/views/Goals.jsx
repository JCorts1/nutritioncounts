import { Link } from "react-router-dom";
import React from "react";
import salat from "../img/salat.png";
import corn from "../img/corn.png";
import carrot from "../img/carrot.png";
import FirstButton from "../components/FirstButton";

const Goals = () => {
  return (
    <div className="flex-col h-screen">
      <div className="w-screen h-2/6 flex space-x-64 bg-[#C3E2C2]">
        <div className="w-3/12 h-1/4 rounded-3xl mt-14 ml-12 bg-[#DBCC95] flex justify-center items-center">
          <img src={salat} alt="Salat" />
        </div>
        <div className="w-2/12 h-14 bg-[#EAECCC] rounded-3xl mt-6 flex justify-center items-center hover:bg-[#CD8D7A] hover:text-[#EAECCC]">
          <Link to="/"
            className="text-[#CD8D7A] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:rounded-full hover:bg-[#C3E2C2] duration-200"
          >
            Home
          </Link>
        </div>
        <img className="h-5/6 mt-14" src={carrot} alt="carrot" />
      </div>
      //Secondline
      <div className="w-screen h-2/6 space-x-64 bg-[#C3E2C2]">
        <h2>Lose Weight</h2>
        <h1 className="text-7xl  text-[#CD8D7A]">What's your goal?</h1>
        <FirstButton text="Whatever text"/>
        <h2>Gain Weight</h2>
      </div>
    </div>
  );
};

export default Goals;
