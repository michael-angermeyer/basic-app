import React from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import ServicesSection from "./components/ServicesSection";
import "./App.css";
import Parallax from "./components/Parallax";
import { img1 } from "./imgs/images.helper";

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <ServicesSection />
      <Parallax imgName={img1} minHeight={"40%"} />
      <ServicesSection />
      <Parallax imgName={img1} captionText={"DEN DURCHBLICK BEWAHREN"} />
      <ServicesSection />

      {/* <HeroSection />
      <ServicesSection />
      <HeroSection /> */}
    </div>
  );
}

export default App;
