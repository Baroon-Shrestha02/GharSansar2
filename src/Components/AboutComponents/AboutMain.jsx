import React from "react";
import AboutHero from "./AboutHero";

import AboutHistory from "./AboutHistory";
import AboutMission from "./AboutMission";
import AboutCraft from "./AboutCraft";
import AboutPartners from "./AboutPartners";

export default function AboutMain() {
  return (
    <div>
      <AboutHero />
      <AboutMission />
      <AboutHistory />
      <AboutCraft />
      <AboutPartners />
    </div>
  );
}
