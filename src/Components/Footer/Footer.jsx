import React from "react";
import "./footer.scss";
import SVGimage from "../../MyComponents/SVGimage/SVGimage";
import { logo } from "../../Store/sprite";
import Menu from "../Menu/Menu";
import { NavLink } from "react-router-dom";
import { socialItems } from "../../Store/store";
const Footer = () => {
  const renderSocial = () => {
    return socialItems.map((item) => {
      return (
        <li key={item.id}>
          <SVGimage src={item.img} />
        </li>
      );
    });
  };

  return (
    <footer className="footer">
      <div className="footer__wrapper container">
        <div className="footer__top">
          <NavLink to={"/"}>
            <SVGimage src={logo} />
          </NavLink>

          <Menu />
        </div>
        <div className="footer__bottom">
          <div className="rights">© 2023 EATLY All Rights Reserved.</div>
          <div className="social">
            <ul>{renderSocial()}</ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
