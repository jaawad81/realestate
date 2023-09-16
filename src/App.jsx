import React from "react";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Company from "./components/Companies/Company";
import Residences from "./components/Residences/Residences";
// import GetStarted from "./components/GetStarted/GetStarted";
import "./App.css";

const App = () => {
  return (
      <div className="App">
        <div>
          <div className="white-gradient"></div>
            <Header />
            <Hero />
        </div>
        <Company/>
        <Residences/>
        {/* <GetStarted/> */}
      </div>
  );
};

export default App;
