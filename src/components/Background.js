import React from "react";
import "./Background.css";

export default function Background({ image }) {
  return (
    <div
      style={{
        backgroundImage: `url(${image})`,
      }}
      className="background"
    ></div>
  );
}
