import { Link } from "react-router-dom";
import React from "react";
import salat from "../img/salat.png";
import HomeButton from "../components/HomeButton";
import corn from "../img/corn.png";
import carrot from "../img/carrot.png";
import MainBackground from "../components/MainBackground";
import hamburguer from "../img/hamburguer.png";

const Goals = () => {
  return (
    <MainBackground>
      <div className="flex-row h-screen">
        <div className="w-screen h-20 ">
          <HomeButton></HomeButton>
        </div>
        <div className="w-screen h-2/7 flex items-center justify-between">
          <div className="bg-[#DBCC95] w-3/12 h-3/4 rounded-2xl ml-5 flex items-center justify-center">
            <img className="w-3/6" src={salat} alt="salat" />
          </div>
          <img className="mr-10" src={carrot} alt="Carrot" />
        </div>
        <div className="w-screen h-2/6 flex items-center justify-between">
          <h3 className="text-[#CD8D7A]  text-5xl ml-6">Lose Weight</h3>
          <h2 className="text-[#CD8D7A] w-80 text-7xl">What’s your goal?</h2>
          <h3 className="text-[#CD8D7A]  text-5xl mr-12">Gain Weight</h3>
        </div>
        <div className="w-screen h-2/6 flex items-center justify-between">
          <img className="ml-10" src={corn} alt="corn" />
          <div className="bg-[#DBCC95] w-3/12 h-3/4 rounded-2xl mr-5 flex items-center justify-center">
            <img className="w-3/6" src={hamburguer} alt="salat" />
          </div>
        </div>
      </div>
    </MainBackground>
  );
};

export default Goals;
