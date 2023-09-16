import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Import Swiper CSS
import "./Residences.css";
import data from "../../utils/slider.json";
import { sliderSettings } from "../../utils/common";
const Residences = () => {
  console.log(data);
  return (
    <section className="r-wrapper">
      <div className="r-container innerWidth paddings">
        <div className="r-head flexColStart">
          <span className="orangeText">Best Choice</span>
          <span className="primaryText">Our Residences</span>
        </div>
        
        <div  style={{width:"100%"}}>
  
        <Swiper 
        
        slidesPerView={4}
        spaceBetween={5}
        >
          {data.map((d, i) => (
            <SwiperSlide key={i}>
              <div className="flexColStart r-card">
                <img src={d.image} alt="Image"  />
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