import React from "react";
import SVGimage from "../../MyComponents/SVGimage/SVGimage";
import { logo } from "../../Store/sprite";
import "./header.scss";
import MyButton from "../../MyComponents/MyButton/MyButton";
const Header = () => {
  return (
    <header className="header">
      <div className="header__wrapper container">
        <SVGimage src={logo} />
        haedar
        <MyButton> Get Started </MyButton>
      </div>
    </header>
  );
};

export default Header;
