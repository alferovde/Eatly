import React from "react";
import "./dishesitem.scss";
import { heart, star2, plus } from "../../Store/sprite";
import SVGimage from "../../MyComponents/SVGimage/SVGimage";

function stylehighlight(a) {
  switch (a) {
    case "Trending":
      return { color: "#FB471D", backgroundColor: "#F7C5BA" };

    case "Healthy":
      return { color: "#DAA31A", backgroundColor: "#F7EDD0" };

    case "Supreme":
      return { color: "#309D5B", backgroundColor: "#33ac6484" };

    default:
      break;
  }
}

function priceStyle(price) {
  let res = price.split(".");

  let result = (
    <>
      <span className="priceOne">{res[0]}</span>
      <span className="priceTwo">.{res[1]}</span>
    </>
  );
  return result;
}

const DishesItem = ({ img, title, time, rating, highlight, price }) => {
  const logo = require(`../../Image/${img}`);

  return (
    <div className="dishes__item">
      <div className="svg__heart">
        <SVGimage src={heart} />
      </div>

      <div className="dishes__img">
        <img src={logo} alt="" />
      </div>

      <div className="item__body">
        <span className="highlight" style={stylehighlight(highlight)}>
          {highlight}
        </span>
        <h3>{title}</h3>
        <div className="item__footer">
          {time}
          <div className="dot"></div>
          <SVGimage src={star2} />
          {rating}
        </div>
        <div className="item__price">
          {priceStyle(price)}
          <div className="plus">
            <SVGimage src={plus} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DishesItem;
