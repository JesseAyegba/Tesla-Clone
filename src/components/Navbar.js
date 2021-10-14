import React from "react";
import "./Navbar.css";
import logo from "../images/tesla-logo-white.svg";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar__wrapper">
        <div className="navbar__left">
          <Link exact to="/">
            <img src={logo} alt="Tesla Logo" />
          </Link>
        </div>
        <ul className="navbar__middleLinks">
          <Link exact to="/">
            <li className="navbar__middleLink">Model S</li>
          </Link>
          <Link exact to="/">
            <li className="navbar__middleLink">Model 3</li>
          </Link>
          <Link exact to="/">
            <li className="navbar__middleLink">Model X</li>
          </Link>
          <Link exact to="/">
            <li className="navbar__middleLink">Model Y</li>
          </Link>
          <Link exact to="/">
            <li className="navbar__middleLink">Solar Roof</li>
          </Link>
          <Link exact to="/">
            <li className="navbar__rightLink">Shop</li>
          </Link>
          <Link exact to="/">
            <li className="navbar__rightLink">Account</li>
          </Link>
          <Link exact to="/">
            <li className="navbar__middleLink">Solar Panels</li>
          </Link>
        </ul>
        <ul className="navbar__rightLinks">
          <li className="navbar__rightLink navbar__rightLink--show">Menu</li>
        </ul>
      </div>
    </div>
  );
}
