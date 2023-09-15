import React from "react";
import { HiLocationMarker } from "react-icons/hi";
import CountUp from "react-countup";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero-wrapper">
      <div className="paddings innerWidth  hero-container ">
        {/* Hero Left Section */}
        <div className="hero-left">
          <div className="hero-title">
            <div className="orange-circle" />
            <h1>
              Discover <br />
              Most Suitable <br />
              Property
            </h1>
          </div>
          <div className="hero-description">
            <span>Find a variety of property that suit you very easilit.</span>
            <span>
              Forget all the difficulties in finding a residence for you.
            </span>
          </div>

          <div className="hero-search-bar ">
            <HiLocationMarker color="var(--blue)" size={25} />
            <input type="text" />
            <button className="button">Search</button>
          </div>

          <div className="hero-stats">
            <div className="stat">
              <span>
                <CountUp start={5} end={10} duration={4} />
                <span className="sign">+</span>
              </span>
              <span className="secondaryText">Premium Products</span>
            </div>
            <div className="stat">
              <span>
                <CountUp start={2} end={5} duration={3} />
                <span className="sign">+</span>
              </span>
              <span className="secondaryText">Happy Customer</span>
            </div>
            <div className="stat">
              <span>
                <CountUp start={1} end={3} duration={4} />
                <span className="sign">+</span>
              </span>
              <span className="secondaryText">Award Winnings</span>
            </div>
          </div>
        </div>

        {/*  Hero Right Section*/}
        <div className="flexCenter hero-right">
          <div className="image-container">
            <img src="./hero-image.png" alt="Hero Image" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
