import React from "react";
import "./Projects.css";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import Slidebar from "../../img/sidebar.png";

function Projects() {
  return (
    <div className="projects">
      <span>Recent Projects</span>

      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="projects-slider"
      >
        <SwiperSlide>
          <img src={Slidebar} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Slidebar} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Slidebar} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Slidebar} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Projects;
