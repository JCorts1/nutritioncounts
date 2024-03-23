import React from "react";
import { Link } from "react-router-dom";
import MainBackground from "../components/MainBackground";
import HomeButton from "../components/HomeButton";

const MainCore = () => {
  return (
    <MainBackground>
      <HomeButton />
    </MainBackground>
  );
};

export default MainCore;
