import React from "react";
import MainBackground from "../components/MainBackground";
import HomeButton from "../components/HomeButton";
import BrownButton from "../components/BrownButton";
import grill from "../img/grill.png";
import meal from "../img/meal.png"
import budda from "../img/budda.png"

const MainCore = () => {
  return (
    <MainBackground>
      <div className="flex w-screen h-screen flex-col">
        <div className="w-screen h-20">
          <HomeButton />
        </div>
        <div className="w-screen h-2/4 flex items-center justify-between">
          <div className="w-2/6 h-5/6 bg-[#EAECCC] rounded-3xl ml-10"></div>
          <div className="w-2/6 h-5/6 bg-[#CD8D7A] rounded-full mr-10 flex items-center justify-center hover:bg-[#7D564C]">
            <a
              href="#"
              className="text-6xl text-[#fff] font-bold transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:rounded-full duration-200 "
            >
              Premium!!
            </a>
          </div>
        </div>
        <div className="w-screen h-2/4 flex">
          <div className="w-2/4 h-full flex">
            <div className="w-screen h-full flex flex-col justify-around items-center">
              <div className="bg-[#CD8D7A] w-2/4 h-14 rounded-2xl flex justify-center items-center">
                <a className="text-[#ffffff] text-4xl" href="#">
                  Your day
                </a>
              </div>
              <div className="bg-[#CD8D7A] w-2/4 h-14 rounded-2xl flex justify-center items-center">
                <a className="text-[#ffffff] text-4xl" href="./stats">
                  Stats
                </a>
              </div>
              <div className="bg-[#CD8D7A] w-2/4 h-14 rounded-2xl flex justify-center items-center">
                <a className="text-[#ffffff] text-4xl" href="./goal">
                  Goal
                </a>
              </div>
            </div>
          </div>
          <div className="w-2/4 h-full flex items-center justify-end">
            <div className="w-4/6 h-5/6 bg-[#EAECCC] rounded-3xl mr-10 flex flex-row">
              <div className="w-2/6 h-full flex justify-center ">
                <div className="flex flex-col items-center">
                  <img className="mt-6" src={meal} alt="meal" />
                  <h2 className="text-[#CD8D7A] text-lg mt-3">Recipes</h2>
                </div>
              </div>
              <div className="w-2/6 h-full bg-[#fff]">
              <div className="flex flex-col items-center mt-36">
                  <img className="" src={budda} alt="meal" />
                  <h2 className="text-[#CD8D7A] text-lg mt-3">Yoga</h2>
                </div>
              </div>
              <div className="w-2/6 h-full"></div>
            </div>
          </div>
        </div>
      </div>
    </MainBackground>
  );
};

export default MainCore;
