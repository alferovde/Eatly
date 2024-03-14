import React from "react";
import "./currentslide.scss";
import StarRating from "../StarRating/StarRating";
import { slider_element } from "../../Store/sprite";
import SVGimage from "../SVGimage/SVGimage";
const CurrentSlide = ({ img, name, text, time, stars }) => {
  const logo = require(`../../Image/${img}`);

  console.log(img);

  return (
    <div className="currentslide">
      <div className="slide__header">
        <div className="slide__img">
          <img src={logo} alt="" />
        </div>
        <div className="slide__usrname">
          <h3>{name}</h3>
          <span>{time}</span>
        </div>
        <SVGimage src={slider_element} />
      </div>
      <div className="slide__text">{text}</div>
      <div className="slide__rating">
        <StarRating num={stars} />
      </div>
    </div>
  );
};

export default CurrentSlide;
