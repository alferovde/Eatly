import React from "react";
import "./features.scss";
import SVGimage from "../../MyComponents/SVGimage/SVGimage";
import { vector1, vector2, vector3, vector4 } from "../../Store/sprite";
const Features = () => {
  return (
    <section className="features ">
      <div className="features__style">
        <div className="features__style-1">
          <SVGimage src={vector1} />
          <SVGimage src={vector2} />
        </div>
        <div className="features__style-2">
          <SVGimage src={vector3} />
          <SVGimage src={vector4} />
        </div>
      </div>
      <div className="features__wrapper">
        <div className="features__item">
          <h2>10K+</h2>
          <p>Satisfied Costumers All Great Over The World </p>
        </div>
        <div className="features__item">
          <h2>4M</h2>
          <p>Healthy Dishes Sold Including Milk Shakes Smooth</p>
        </div>
        <div className="features__item">
          <h2>99.99%</h2>
          <p>Reliable Customer Support We Provide Great Experiences</p>
        </div>
      </div>
    </section>
  );
};

export default Features;
