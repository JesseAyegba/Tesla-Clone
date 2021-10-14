import React from "react";
import "./Background.css";
import Fade from "react-reveal/Fade";

export default function Background({ image }) {
  return (
    <div className="background">
      <Fade>
        <img src={image} alt="Tesla Model" />
      </Fade>
    </div>
  );
}
