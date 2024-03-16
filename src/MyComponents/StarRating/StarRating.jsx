import React from "react";
import SVGimage from "../SVGimage/SVGimage";
import { smallStar } from "../../Store/sprite";
import "./starrating.scss";
const StarRating = ({ num }) => {
  let result = new Array(Number(num)).fill("").map((_, index) => {
    return (
      <SVGimage src={smallStar} key={index} style={{ marginRight: "5px" }} />
    );
  });

  return <div className="starrating__container">{result}</div>;
};

export default StarRating;
