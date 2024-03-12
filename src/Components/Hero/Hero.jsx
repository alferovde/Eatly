import React from "react";
import "./hero.scss";
import hero_img from "../../Image/hero_img.png";
import hero_img2 from "../../Image/hero_graph2.png";
import hero_graph from "../../Image/hero_graph1.png";
import hero_arrow3 from "../../Image/hero_arrow3.png";
import MyButton from "../../MyComponents/MyButton/MyButton";
import { bigStar, smallStar, starName } from "../../Store/sprite";
import SVGimage from "../../MyComponents/SVGimage/SVGimage";
const Hero = () => {
  const starRating = (num) => {
    let arr = new Array(num).fill("");

    return arr.map((item, index) => {
      return <SVGimage key={index} src={smallStar} />;
    });
  };

  return (
    <section className="hero">
      <div className="hero__wrapper container">
        <div className="hero__text">
          <span className="subtitle">OVER 1000 USERS</span>
          <h1>
            Enjoy Foods All Over The <span>World</span>
          </h1>
          <p>
            EatLy help you set saving goals, earn cash back offers, Go to
            disclaimer for more details and get paychecks up to two days early.
            Get a <span>$20 bonus</span>.
          </p>
          <div className="hero__buttons">
            <MyButton className="button__color">Get Started</MyButton>
            <MyButton className="button__transparent">Go Pro</MyButton>
          </div>
          <div className="hero__rating">
            <SVGimage src={bigStar} />
            <SVGimage src={starName} />
            {starRating(5)}
            <p>4900+</p>
          </div>
        </div>
        <div className="hero__img">
          <div className="main__img">
            <img src={hero_img} alt="тарелка с едой" />
            <div className="mainsecond__img">
              <img src={hero_img2} alt="" />
            </div>
          </div>
          <div className="second__img">
            <img src={hero_graph} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
