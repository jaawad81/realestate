import React from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css"; // Import Swiper CSS
import "./Residences.css";
import data from "../../utils/slider.json";
import { sliderSettings } from "../../utils/common";
const Residences = () => {
  console.log(data);
  return (
    <section className="r-wrapper">
      <div className="r-container innerWidth paddings">
        <div className="r-head ">
          <span className="orangeText">Best Choice</span>
          <span className="primaryText">Our Residences</span>
        </div>

        <div   className="r-s-container" style={{ width: "100%" }}>
          <Swiper slidesPerView={1} spaceBetween={5}>
            <Buttons />
            {data.map((d, i) => (
              <SwiperSlide key={i}>
                <div className="flexColStart r-card">
                  <img src={d.image} alt="Image" />
                  <span className="secondaryText r-price">
                    <span style={{ color: "orange" }}>$</span>
                    <span>{d.price}</span>
                  </span>
                  <span className="primaryText">{d.name}</span>
                  <span className="secondaryText">{d.detail}</span>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Residences;

const Buttons = () => {
  const swiper = useSwiper();
  return (
    <div className="flexCenter r-buttons">
      <button onClick={()=> swiper.slidePrev()}>&lt;</button>
      <button onClick={()=> swiper.slideNext()}>&gt;</button>
    </div>
  );
};
