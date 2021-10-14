import React from "react";
import "./Landing.css";
import Background from "../components/Background";
import Navbar from "../components/Navbar";
import tesla from "../images/red-tesla.jpg";
import tesla1 from "../images/tesla1.jpg";
import tesla2 from "../images/tesla2.jpg";
import tesla3 from "../images/tesla3.jpg";
import tesla4 from "../images/tesla4.jpg";
import tesla5 from "../images/tesla5.jpg";
import tesla6 from "../images/tesla6.jpg";
import Floater from "../components/Floater";

export default function Landing() {
  return (
    <div className="landing">
      <Navbar />
      <Floater />
      <Background image={tesla} />
      <Background image={tesla1} />
      <Background image={tesla2} />
      <Background image={tesla3} />
      <Background image={tesla4} />
      <Background image={tesla5} />
      <Background image={tesla6} />
    </div>
  );
}
