import React from "react";
import "./Background.css";

export default function Background({ image }) {
  return (
    <div className="background">
      <img src={image} alt="Tesla Model" />
    </div>
  );
}
