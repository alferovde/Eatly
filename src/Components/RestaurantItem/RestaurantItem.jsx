import React from "react";
import "./restaurantitem.scss";
import SVGimage from "../../MyComponents/SVGimage/SVGimage";
import { star2, bookmark } from "../../Store/sprite";

const RestaurantItem = ({ id, img, highlight, title, time, rating }) => {
  const logo = require(`../../Image/${img}`);

  const styleHighlight = {
    style_red: { color: "#FB471D", backgroundColor: "#F7C5BA" },
    style_brown: { color: "#DAA31A", backgroundColor: "#F7EDD0" },
  };

  return (
    <div className="restaurant__item">
      <img src={logo} alt="" />
      <div className="item__body">
        <span
          className="highlight"
          style={
            highlight == "Healthy"
              ? styleHighlight.style_brown
              : styleHighlight.style_red
          }
        >
          {highlight}
        </span>
        <h3>{title}</h3>
        <div className="item__footer">
          {time}
          <div className="dot"></div>
          <SVGimage src={star2} />
          {rating}
        </div>
        <div className="bookmark">
          <SVGimage src={bookmark} />
        </div>
      </div>
    </div>
  );
};

export default RestaurantItem;
