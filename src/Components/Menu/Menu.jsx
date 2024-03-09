import React from "react";
import { NavLink } from "react-router-dom";
import "./menu.scss";
const Menu = ({ className }) => {
  return (
    <nav className={className + " menu__wrapper"}>
      <NavLink
        to={"/menu"}
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active" : ""
        }
      >
        Menu
      </NavLink>
      <NavLink
        to={"/blog"}
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active" : ""
        }
      >
        Blog
      </NavLink>
      <NavLink to={"/pricing"}>Pricing</NavLink>
      <NavLink to={"/contact"}>Contact</NavLink>
    </nav>
  );
};

export default Menu;
