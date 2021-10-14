import React, { useEffect, useState } from "react";
import "./Floater.css";

export default function Floater() {
  const [model, setModel] = useState("Model S");
  useEffect(() => {
    window.addEventListener("scroll", () => {
      let windowHeight = window.innerHeight;
      let windowScroll = window.scrollY;
      if (windowScroll < windowHeight) {
        setModel("Model S");
      } else if (
        windowScroll > windowHeight &&
        windowScroll < 2 * windowHeight
      ) {
        setModel("Model Y");
      } else if (
        windowScroll > windowHeight &&
        windowScroll < 3 * windowHeight
      ) {
        setModel("Model 3");
      } else if (
        windowScroll > windowHeight &&
        windowScroll < 4 * windowHeight
      ) {
        setModel("Model X");
      } else if (
        windowScroll > windowHeight &&
        windowScroll < 5 * windowHeight
      ) {
        setModel("Solar Panels");
      } else if (
        windowScroll > windowHeight &&
        windowScroll < 6 * windowHeight
      ) {
        setModel("Solar Roof");
      } else if (
        windowScroll > windowHeight &&
        windowScroll < 7 * windowHeight
      ) {
        setModel("Accessories");
      }
    });
  }, []);
  return (
    <div className="floater">
      <div className="floater__header">{model}</div>
      <p className="floater__order"></p>
      <div className="floater__btns">
        <button className="floater__btn floater__btn--left">
          CUSTOMER ORDER
        </button>
        <button className="floater__btn floater__btn--right">
          EXISTING INVENTORY
        </button>
      </div>
    </div>
  );
}
