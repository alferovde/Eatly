import React from "react";
import "./PurchasesItem.scss";
const PurchasesItem = ({ img, title, time, highlight }) => {
  const logo = require(`../../Image/${img}`);
  return (
    <div className="PurchasesItem__item">
      <div className="PurchasesItem__item--img">
        <img src={logo} alt="" />
      </div>
      <div className="PurchasesItem__item-info">
        <h3>{title}</h3>
        <p
          style={
            highlight === "Cancelled" ? { color: "red" } : { color: "black" }
          }
        >
          {highlight}
        </p>
        <span>{time}</span>
      </div>
    </div>
  );
};

export default PurchasesItem;
