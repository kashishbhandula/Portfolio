import React from "react";
import "./Services.css"
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";

function Services() {
  return (
    <div className="services">
      {/* left side */}
      
      <div className="awesome">
        <span>My Awesome</span>
        <span>services</span>
        <button className="button s-button">Download CV</button>
        <div className="blur s-blur" style={{background:"#ABF1FF94"}}></div>
      </div>
      {/* right side */}
      <div className="cards">
        {/* I am the right side */}
      </div>
    </div>
  );
}

export default Services;
