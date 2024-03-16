import React from "react";
import "./errorpage.scss";
import logo from "../../Image/Dinner-Plate-Transparent.png";
const ErrorPage = () => {
  return (
    <section className="errorpage__wrapper container">
      <h1>404</h1>

      <img src={logo} alt="" />
    </section>
  );
};

export default ErrorPage;
