import React from "react";
import SVGimage from "../../MyComponents/SVGimage/SVGimage";
import "./purchasesFormItem.scss";
import ProgressBar from "../../MyComponents/ProgressBar/ProgressBar";
const PurchasesFormItem = ({
  img,
  text,
  title,
  price,
  progress,
  color,
  imgcolor,
}) => {
  const styleProgress = { backGroundColor: color, width: progress };

  return (
    <div className="purchasesformitem">
      <div className="purchasesform__header">
        <div
          className="purchasesform__img"
          style={{ backgroundColor: `#${imgcolor}` }}
        >
          <SVGimage src={img} />
        </div>
        <div className="purchasesform__info">
          <h3>{title}</h3>
          <p>{text}</p>
        </div>
        <div className="purchasesform__price">{price}</div>
      </div>
      <ProgressBar style={styleProgress} />
    </div>
  );
};

export default PurchasesFormItem;
