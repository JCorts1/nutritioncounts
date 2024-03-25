import React from "react";
import MainBackground from "../components/MainBackground";
import HomeButton from "../components/HomeButton";
import corn from "../img/corn.png";

const Stats = () => {
  return (
    <MainBackground>
      <div className="flex flex-col w-screen h-screen">
        <div className="w-screen h-1/6">
          <HomeButton />
        </div>
        <div className="w-screen h-1/6 flex items-center justify-center">
          <img  className="w-20 mr-5"src={corn} alt="corn" />
          <h2 className="text-4xl text-[#CD8D7A]">Your day</h2>
          <img className="w-20 ml-5" src={corn} alt="corn" />
        </div>
        <div className="w-screen h-4/6 flex">
          <div className="w-4/6 h-full flex items-center justify-center">
            <div className="w-5/6 h-5/6 bg-[#EAECCC] rounded-3xl flex">
              <div className="w-2/4 h-full flex flex-col justify-center items-center">
                <ul>
                  <li className="text-xl text-[#CD8D7A] mb-2">Protein</li>
                  <li className="text-xl text-[#CD8D7A] mb-2">Carbs</li>
                  <li className="text-xl text-[#CD8D7A] mb-2">Fiber</li>
                  <li className="text-xl text-[#CD8D7A] mb-2">Sugar</li>
                  <li className="text-xl text-[#CD8D7A] mb-2">Fat</li>
                  <li className="text-xl text-[#CD8D7A] mb-2">Cholesterol</li>
                  <li className="text-xl text-[#CD8D7A] mb-2">Sodium</li>
                  <li className="text-xl text-[#CD8D7A] mb-2">Potassium</li>
                  <li className="text-xl text-[#CD8D7A] mb-2">Vitamin A</li>
                  <li className="text-xl text-[#CD8D7A] mb-2">Vitamin C</li>
                </ul>
              </div>
              <div className="w-2/4 f-full flex justify-between">
                <h3 className="m-3 text-2xl text-[#CD8D7A]">Total</h3>
                <h3 className="m-3 text-2xl text-[#CD8D7A]">Goal</h3>
                <h3 className="m-3 text-2xl text-[#CD8D7A]">Left</h3>
              </div>
            </div>
          </div>
          <div className="w-2/6 h-full "></div>
        </div>
      </div>
    </MainBackground>
  );
};

export default Stats;
