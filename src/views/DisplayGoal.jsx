import React from "react";
import MainBackground from "../components/MainBackground";
import HomeButton from "../components/HomeButton";
import carrot from "../img/carrot.png";
import grill from "../img/grill.png"
import BrownButton from "../components/BrownButton";

const DisplayGoal = () => {
  return (
    <MainBackground>
      <div className="w-screen h-screen flex flex-col">
        <div className="w-screen h-1/6">
          <HomeButton />
        </div>
        <div className="w-screen h-1/6 flex items-center justify-center">
          <img  className="w-28" src={carrot} alt="carrot" />
          <h2 className="text-4xl text-[#CD8D7A] m-5">Goal</h2>
          <img className="w-28" src={carrot} alt="carrot" />
        </div>
        <div className="w-screen h-1/3 flex justify-between">
          <div className="w-2/6 h-full bg-[#EAECCC] rounded-3xl"></div>
          <div className="w-1/6 h-full flex items-center">
            <img src={grill} alt="grill" />
          </div>
          <div className="w-2/6 h-full flex flex-col justify-center items-center">
            <h2 className="text-[#CD8D7A] mb-10 text-center text-4xl">Change of plans? Update your Goal!!</h2>
            <BrownButton text="Update"/>
          </div>
        </div>
        <div className="w-screen h-1/3 flex flex-col items-center justify-center">
            <h2 className="text-3xl text-[#CD8D7A] w-3/6 text-center mb-10">Unlock Premium Features and enjoy hundreds of Benefits!!</h2>
          <BrownButton text="Premium"/>
        </div>
      </div>
    </MainBackground>
  );
};

export default DisplayGoal;
