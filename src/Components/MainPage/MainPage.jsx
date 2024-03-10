import React from "react";
import "./mainpage.scss";
import Hero from "../Hero/Hero";
import Features from "../Features/Features";
import DownloadApp from "../DownloadApp/DownloadApp";
const MainPage = () => {
  return (
    <div className="mainpage__container">
      <div className="mainpage__wrapper">
        <Hero />
        <Features />
        <DownloadApp />
      </div>
    </div>
  );
};

export default MainPage;
