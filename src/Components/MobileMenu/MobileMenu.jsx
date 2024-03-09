import { useState, useEffect } from "react";
import React from "react";
import Menu from "../Menu/Menu";
import "./mobilemenu.scss";
import SVGimage from "../../MyComponents/SVGimage/SVGimage";
import { logo } from "../../Store/sprite";
const MobileMenu = () => {
  const [hiddenMenu, setHiddenMenu] = useState(false);
  const [animatStyle, setAnimatStyle] = useState("");

  useEffect(() => {
    if (hiddenMenu) {
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.body.style.overflow = "scroll";
    };
  }, [hiddenMenu]);

  const handlerBurger = () => {
    if (!hiddenMenu) {
      setHiddenMenu((prev) => !prev);
      setAnimatStyle(
        "animate__animated animate__bounceInRight animate-duration-.5s"
      );
    } else {
      setTimeout(() => {
        setHiddenMenu((prev) => !prev);
      }, 500);
      setAnimatStyle(
        "animate__animated animate__bounceOutRight animate-duration-.1s"
      );
    }
  };

  return (
    <>
      <div className="mobile-menu__burger" onClick={() => handlerBurger()}>
        <input class="checkbox" type="checkbox" name="" id="" />
        <div class="hamburger-lines">
          <span class="line line1"></span>
          <span class="line line2"></span>
          <span class="line line3"></span>
        </div>
      </div>

      {hiddenMenu ? (
        <div className="mobile-menu__bg">
          <div
            className={
              hiddenMenu ? animatStyle + " mobile-menu__container" : undefined
            }
          >
            <nav className="mobile-menu__wrapper ">
              <Menu className="" />
            </nav>
          </div>
        </div>
      ) : undefined}
    </>
  );
};

export default MobileMenu;
