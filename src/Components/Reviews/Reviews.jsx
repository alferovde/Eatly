import React from "react";
import "./reviews.scss";
import Slider from "react-slick";
import { reviewsItems } from "../../Store/store";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CurrentSlide from "../../MyComponents/CurrentSlide/CurrentSlide";

const Reviews = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    dots: false,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          // centerMode: true,
        },
      },
    ],

    appendDots: (dots) => (
      <div>
        <ul> {dots} </ul>
      </div>
    ),
  };

  const sliderRender = () => {
    return reviewsItems.map((item, index) => {
      return <CurrentSlide key={index} index={index} {...item} />;
    });
  };

  return (
    <section className="reviews">
      <div className="reviews__wrapper container">
        <h2>
          {" "}
          <span>Customer</span> Say
        </h2>
        <div className="slider__container">
          {" "}
          <Slider {...settings}>{sliderRender()}</Slider>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
