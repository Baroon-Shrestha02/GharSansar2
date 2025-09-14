import React from "react";
import AboutHero from "./AboutHero";

import AboutHistory from "./AboutHistory";
import AboutMission from "./AboutMission";

export default function AboutMain() {
  return (
    <div>
      <AboutHero />
      <AboutMission />
      <AboutHistory />
    </div>
  );
}
