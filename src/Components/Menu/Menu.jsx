import React from "react";
import { NavLink } from "react-router-dom";
import "./menu.scss";
const Menu = () => {
  return (
    <nav className="menu__wrapper">
      <NavLink to={"/menu"}>Menu</NavLink>
      <NavLink to={"/blog"}>Blog</NavLink>
      <NavLink to={"/pricing"}>Pricing</NavLink>
      <NavLink to={"/contact"}>Contact</NavLink>
    </nav>
  );
};

export default Menu;
