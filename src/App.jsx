import React from "react";
import "./App.css";
import { Navbar } from "./Components/Navbar";
import { HeroSection } from "./Components/Hero";
import Design from "./Components/Design";
import SellingSection from "./Components/Selling";
import SitesSection from "./Components/Sites";
import IndependentSection from "./Components/Independent";
import LinksSection from "./Components/LinksSection";
import FooterSection from "./Components/FooterSection";

function App() {
  return (
    <>
      <div>
        <Navbar />
        <HeroSection />
        <Design />
        <SellingSection />
        <SitesSection />
        <IndependentSection />
        <LinksSection />
        <FooterSection />
      </div>
    </>
  );
}

export default App;
