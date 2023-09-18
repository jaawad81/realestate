import React from "react";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Company from "./components/Companies/Company";
import Residences from "./components/Residences/Residences";
import Value from "./components/Value/Value";
import Contact from "./components/Contact/Contact";
import GetStarted from "./components/GetStarted/GetStarted";
import Footer from "./components/Footer/Footer";
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
        <Value/>
        <Contact/>
        <GetStarted/>
        <Footer/>
      </div>
  );
};

export default App;
