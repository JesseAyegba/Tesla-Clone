import React from "react";
import "./Navbar.css";
import logo from "../images/tesla-logo-white.svg";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar__wrapper">
        <div className="navbar__left">
          <img src={logo} alt="" />
        </div>
        <ul className="navbar__middleLinks">
          <li className="navbar__middleLink">Model S</li>
          <li className="navbar__middleLink">Model 3</li>
          <li className="navbar__middleLink">Model X</li>
          <li className="navbar__middleLink">Model Y</li>
          <li className="navbar__middleLink">Solar Roof</li>
          <li className="navbar__middleLink">Solar Panels</li>
        </ul>
        <ul className="navbar__rightLinks">
          <li className="navbar__rightLink">Shop</li>
          <li className="navbar__rightLink">Account</li>
          <li className="navbar__rightLink navbar__rightLink--show">Menu</li>
        </ul>
      </div>
    </div>
  );
}
