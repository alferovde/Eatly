import React from "react";
import "./subscribe.scss";
import { subscribeBG } from "../../Store/sprite";
import MyInput from "../../MyComponents/MyInput/MyInput";
import MyButton from "../../MyComponents/MyButton/MyButton";
const Subscribe = () => {
  return (
    <section className="subscribe">
      <div className="subscribe__wrapper container">
        <div className="subscribe__element">
          <div className="subscribe__title">GET 50%</div>
          <div className="subscribe__form">
            <MyInput placeholder={" Enter Your Email Address"} />
            <MyButton className="button__color">subscribe</MyButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
