import React from "react";
import "./downloadapp.scss";
import modile_phone from "../../Image/MobileScreen.png";
import MyButton from "../../MyComponents/MyButton1/MyButton";
import SVGimage from "../../MyComponents/SVGimage/SVGimage";
import { arrowLeft } from "../../Store/sprite";
const DownloadApp = () => {
  return (
    <section className="downloadapp__wrapper container">
      <div className="downloadapp__img">
        <img src={modile_phone} alt="" />
      </div>
      <div className="downloadapp__info">
        <h2>
          Premium <span>Quality</span> <br /> For Your Health
        </h2>

        <ul>
          <li>
            Premium quality food is made with ingredients that are packed with
            essential vitamins, minerals.
          </li>
          <li>
            These foods promote overall wellness by support healthy digestion
            and boosting immunity
          </li>
        </ul>

        <MyButton className="button__color">
          Download <SVGimage src={arrowLeft} />
        </MyButton>
      </div>
    </section>
  );
};

export default DownloadApp;
