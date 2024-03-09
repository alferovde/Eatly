import React from "react";
import "./mainpage.scss";
import Hero from "../Hero/Hero";
const MainPage = () => {
  return (
    <div className="mainpage__container">
      <div className="mainpage__wrapper">
        <Hero />
      </div>
    </div>
  );
};

export default MainPage;
