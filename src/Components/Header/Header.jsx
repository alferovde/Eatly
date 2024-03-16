import React, { useState, useEffect } from "react";
import SVGimage from "../../MyComponents/SVGimage/SVGimage";
import { logo } from "../../Store/sprite";
import "./header.scss";

import LoginComponent from "../LoginComponent/LoginComponent";
import Menu from "../Menu/Menu";
import { NavLink } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import MobileMenu from "../MobileMenu/MobileMenu";

import LoginForm from "../LoginForm/LoginForm";
const Header = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(max-width: 768px)",
  });

  const isMobile = useMediaQuery({
    query: "(max-width: 500px)",
  });

  const [loginModalHidden, setLoginModalHidden] = useState(false);

  useEffect(() => {
    if (loginModalHidden) {
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.body.style.overflow = "scroll";
    };
  }, [loginModalHidden]);

  return (
    <header className="header">
      {loginModalHidden ? (
        <LoginForm
          setLoginModalHidden={setLoginModalHidden}
          loginModalHidden={loginModalHidden}
        />
      ) : undefined}
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
            <LoginComponent
              loginModalHidden={loginModalHidden}
              setLoginModalHidden={setLoginModalHidden}
            />
          </div>
        ) : undefined}

        {isDesktopOrLaptop ? (
          <div className="mobile-menu">
            <MobileMenu
              loginModalHidden={loginModalHidden}
              setLoginModalHidden={setLoginModalHidden}
            />
          </div>
        ) : undefined}
      </div>
    </header>
  );
};

export default Header;
