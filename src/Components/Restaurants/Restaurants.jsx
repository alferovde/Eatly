import React from "react";
import "./restaurants.scss";
import SVGimage from "../../MyComponents/SVGimage/SVGimage";
import { arrowLeft } from "../../Store/sprite";
import RestaurantItem from "../RestaurantItem/RestaurantItem";
import { restaurantsItems } from "../../Store/store";
const Restaurants = () => {
  const renderRestaurantItems = () => {
    return restaurantsItems.map((item) => {
      return <RestaurantItem key={item.id} {...item} />;
    });
  };

  return (
    <section className="restaurants">
      <div className="restaurants__wrapper container">
        <h2>
          Our Top <span>Restaurants</span>
        </h2>
        <div className="restaurants__items">{renderRestaurantItems()}</div>
        <div className="restaurants__viewall">
          <a href="#">
            View All <SVGimage src={arrowLeft} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Restaurants;
