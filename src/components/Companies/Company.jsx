import React from "react";
import './Company.css'
const Company = () => {
  return (
    <section className="c-wrapper" id="companies">
      <div className="innerWidth paddings c-container">
        <img src="./equinix.png" alt="Equinix Loading" />
        <img src="./prologis.png" alt="Prologis" />
        <img src="./realty.png" alt="Realty" />
        <img src="./tower.png" alt="Tower" />
      </div>
    </section>
  );
};

export default Company;
