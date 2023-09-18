import React from "react";
import "./Value.css";

import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
  AccordionItemState,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import { MdOutlineArrowDropDown } from "react-icons/md";
import data from "./../../utils/accordion";

const Value = () => {

  return (
    <section className="v-wrapper">
      <div className="flexCenter v-container paddings innerWidth">
        {/* Left Side */}
        <div className="v-left">
          <div className="v-left-wrapper">
            <img src="./value.png" alt="Value Image" />
          </div>
        </div>
        {/* Right Side */}
        <div className=" flexColStart v-right">
          <span className="orangeText">Our Value</span>
          <span className="primaryText">Value We Give to You</span>
          <span className="secondaryText">
            We always ready to help by providing the best sevices for your home
            consultancy
            <br />
            We believe a good blace to live can make your life better
          </span>
          <Accordion
            className="Accordion"
            allowMultipleExpanded={false}
            preExpanded={[0]}
          >
            {data.map((d, i) => {
              return (
                <AccordionItem className="accordion-item" key={i} uuid={i}>
                  <AccordionItemHeading>
                    <AccordionItemButton className=" accordion-Button">
               
                      <div className="flexCenter icon">{d.icon}</div>
                      <span className="primaryText">{d.heading}</span>
                      <div className="flexCenter icon">
                        <MdOutlineArrowDropDown size={20} />
                      </div>
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p className="secondaryText">{d.detail}</p>
                  </AccordionItemPanel>
                </AccordionItem>
              );
            })}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default Value;
