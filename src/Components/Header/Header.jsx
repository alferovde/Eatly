import React from "react";
import SVGimage from "../../MyComponents/SVGimage/SVGimage";
import { logo } from "../../Store/sprite";
import "./header.scss";
import MyButton from "../../MyComponents/MyButton/MyButton";
import LoginComponent from "../LoginComponent/LoginComponent";
import Menu from "../Menu/Menu";
import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <header className="header">
      <div className="header__wrapper container">
        <div className="header__logo">
          <NavLink to={"/"}>
            <SVGimage src={logo} />
          </NavLink>
        </div>
        <div className="header__menu">
          <Menu />
        </div>
        <div className="header__login">
          <LoginComponent />
        </div>
      </div>
    </header>
  );
};

export default Header;
