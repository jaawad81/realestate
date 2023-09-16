import React from "react";
import "./Header.css";
const Header = () => {
  return (
    <section className="h-wrapper">
      <div className="h-container innerWidth paddings ">
        <img src="./logo.png" alt="Logo"  width={100}/>
        <div className="h-menu">
          <a href="/">Residences</a>
          <a href="/">Our Value</a>
          <a href="/">Contact Us</a>
          <a href="/">Get Started</a>
          <button className="button">
            <a href="/">Contact</a>
          </button>
        </div>
      </div>

    </section>
  );
};

export default Header;
