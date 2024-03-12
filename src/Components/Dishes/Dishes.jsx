import React from "react";
import "./dishes.scss";
import SVGimage from "../../MyComponents/SVGimage/SVGimage";
import { arrowLeft } from "../../Store/sprite";
import { dishesItems } from "../../Store/store";
import DishesItem from "../DishesItem/DishesItem";
const Dishes = () => {
  const dishesRender = () => {
    return dishesItems.map((item) => {
      return <DishesItem key={item.id} {...item} />;
    });
  };

  return (
    <section className="dishes">
      <div className="dishes__wrapper container">
        <h2>
          Our Top <span>Dishes</span>{" "}
        </h2>

        <div className="dishes__items">{dishesRender()}</div>

        <div className="dishes__viewall">
          <a href="#">
            View All <SVGimage src={arrowLeft} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Dishes;
