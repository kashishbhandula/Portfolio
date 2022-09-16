import React from "react";
import "./Intro.css";
import FloatingDiv from "../FloatingDiv/FlotingDiv"
import Github from "../../img/github.png";
import Linkedin from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import boy from "../../img/boy.png";
import Crown from "../../img/crown.png";
import ThumbUp from "../../img/thumbup.png";
import glassesimoji from "../../img/glassesimoji.png";
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
      <div className="i-right">
        <img src={Vector1} alt=""/>
        <img src={Vector2} alt=""/>
        <img src={boy} alt=""/>
        <img src={glassesimoji} alt=""/>
        <div style={{top:"-4%" ,left:"68%"}}>
          <FloatingDiv 
            image={Crown} 
            tx1="Web" 
            tx2="Developer"
          />
        </div>
        <div style={{top:"18rem"}}>
          <FloatingDiv 
            image={ThumbUp} 
            tx1="Competitive" 
            tx2="Programmer"
          />
        </div>
      </div>
    </div>
  );
}

export default Intro;
