import React from "react";
import "./Services.css";
import Card from "../Card/Card";
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import Resume from "./Resume.pdf";

function Services() {
  return (
    <div className="services">
      {/* left side */}

      <div className="awesome">
        <span>My Awesome</span>
        <span>services</span>
        <span style={{ marginTop: "1rem", color: "grey" }}>
          bbbbbbbbbbbbbbbbbbbbbnnnnnnnnnnnbbbbbbbbbbbbbbbbbbbbbbbbb
          <br />
          bbbbbbbbbbbbbbbbbbbb
        </span>
        <a href={Resume} download>
          <button className="button s-button">Download CV</button>
        </a>
        <div className="blur s-blur" style={{ background: "#ABF1FF94" }}></div>
      </div>
      {/* right side */}
      <div className="cards">
        <div style={{ left: "14rem" }}>
          <Card
            emoji={HeartEmoji}
            heading={"Design"}
            details={"bla blab ba; bandnlabsabbndnmasdmnnmdnmd"}
          />
        </div>
        <div style={{ top: "12rem", left: "-4rem" }}>
          <Card
            emoji={Glasses}
            heading={"Devloper"}
            details={"bla blab ba; bandnla"}
          />
        </div>
        <div style={{ top: "19rem", left: "12rem" }}>
          <Card
            emoji={Humble}
            heading={"Competitive Programmer"}
            details={"bla blab ba; bandnla"}
          />
        </div>
        <div
          className="blur s-blur2"
          style={{ background: "var(--purple)" }}
        ></div>
      </div>
    </div>
  );
}

export default Services;
