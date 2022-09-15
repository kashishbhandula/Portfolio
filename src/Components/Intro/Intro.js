import React from "react";
import "./Intro.css";
import Github from "../../img/github.png";
import Linkedin from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
function Intro() {
  return (
    <div className="intro">
      <div className="i-left">
        <div className="i-name">
          <span>Hy! I Am </span>
          <span>Kashish Bhandula</span>
          <span>
            Frontend Developer with high level of experience in web designing
            and devlopment,
            <br />
            producing the Quality work
          </span>
        </div>
        <button className="button i-button ">Hire me</button>
        <div className="i-icons">
          <a href="">
            <img src={Github} alt="Github" />
          </a>
          <a href="">
            <img src={Linkedin} alt="Linkedin" />
          </a>
          <a href="">
            <img src={Instagram} alt="Instagram" />
          </a>
        </div>
      </div>
      <div className="i-right">I am right side</div>
    </div>
  );
}

export default Intro;
