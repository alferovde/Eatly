import React from "react";
import SVGimage from "../../MyComponents/SVGimage/SVGimage";
import { logo } from "../../Store/sprite";
import "./header.scss";
import MyButton from "../../MyComponents/MyButton/MyButton";
import LoginComponent from "../LoginComponent/LoginComponent";
import Menu from "../Menu/Menu";
import { NavLink } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import MobileMenu from "../MobileMenu/MobileMenu";
import { useEffect } from "react";
const Header = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(max-width: 768px)",
  });

  const isMobile = useMediaQuery({
    query: "(max-width: 500px)",
  });

  console.log(isDesktopOrLaptop);

  return (
    <header className="header">
      <div className="header__wrapper container">
        <div className="header__logo">
          <NavLink
            to={"/"}
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }
          >
            <SVGimage src={logo} />
          </NavLink>
        </div>
        {!isDesktopOrLaptop ? (
          <div className="header__menu">
            <Menu />
          </div>
        ) : undefined}

        {!isMobile ? (
          <div className="header__login">
            <LoginComponent />
          </div>
        ) : undefined}

        {isDesktopOrLaptop ? (
          <div className="mobile-menu">
            <MobileMenu />
          </div>
        ) : undefined}
      </div>
    </header>
  );
};

export default Header;
