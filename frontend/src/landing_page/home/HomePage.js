import React from "react";
import Hero from "./Hero";
import Awards from "./Awards";
import Education from "./Education";
import Pricing from "./Pricing";
import Stats from "./Stats";
import OpenAccount from "../OpenAccount";
function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <Pricing />
      <Education />
      <Awards />
      <OpenAccount />
    </>
  );
}

export default HomePage;
