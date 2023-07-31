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
import CommonBlue from "./Components/CommonBlue";

import { common1, common2 } from "./Components/Constants";

function App() {
  return (
    <>
      <div>
        <Navbar />
        <HeroSection />
        <Design />
        <CommonBlue heading={common1.h1} btn={common1.btn} />
        <SellingSection />
        <SitesSection />
        <IndependentSection />
        <LinksSection />
        <CommonBlue heading={common2.h1} btn={common2.btn} />
        <FooterSection />
      </div>
    </>
  );
}

export default App;
