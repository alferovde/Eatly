import React from "react";
import "./mainpage.scss";
import Hero from "../Hero/Hero";
import Features from "../Features/Features";
import DownloadApp from "../DownloadApp/DownloadApp";
import Restaurants from "../Restaurants/Restaurants";
import Dishes from "../Dishes/Dishes";
import Purchases from "../Purchases/Purchases";
import Reviews from "../Reviews/Reviews";
import Subscribe from "../Subscribe/Subscribe";
const MainPage = () => {
  return (
    <div className="mainpage__container">
      <div className="mainpage__wrapper">
        <Hero />
        <Features />
        <DownloadApp />
        <Restaurants />
        <Dishes />
        <Purchases />
        <Reviews />
        <Subscribe />
      </div>
    </div>
  );
};

export default MainPage;
