import React, { useState } from "react";
import "./Header.css";
import { BiMenuAltRight } from "react-icons/bi";
import OutsideClickHandler from "react-outside-click-handler";

const Header = () => {
  const [menuOpened,setMenuOpened] =useState(false)
  const getMenuStyles=()=>{
    if(document.documentElement.clientWidth<=800){
      return {right:!menuOpened && "-100%"}
    }
  }
  return (
    <section className="h-wrapper" id="header">
      <div className="h-container innerWidth paddings ">
        <img src="./logo.png" alt="Logo" width={100} />
        <OutsideClickHandler 
        onOutsideClick={()=>{
          setMenuOpened(false)
        }}
        >
        <div className="h-menu" style={getMenuStyles(menuOpened)}>
          <a href="#residences">Residences</a>
          <a href="#value">Our Value</a>
          <a href="#contact">Contact Us</a>
          <a href="#getstarted">Get Started</a>
          <button className="button">
            <a href="#contact">Contact</a>
          </button>
        </div>
        </OutsideClickHandler>

        <div className="menu-icon" onClick={()=>setMenuOpened((pre)=>!pre)}>
          <BiMenuAltRight size={30} />
        </div>
      </div>
    </section>
  );
};

export default Header;
