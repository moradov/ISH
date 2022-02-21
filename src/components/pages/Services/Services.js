import React, { useEffect } from "react";
import HeroSection from "../../HeroSection";
import { homeObjOne, homeObjThree } from "./Data";
import Pricing from "../../Pricing";

function Services() {
  useEffect(() => window.scrollTo(0, 0), []);
  return (
    <>
      <Pricing />
      <HeroSection {...homeObjOne} />
      <HeroSection {...homeObjThree} />
    </>
  );
}
export default Services;
