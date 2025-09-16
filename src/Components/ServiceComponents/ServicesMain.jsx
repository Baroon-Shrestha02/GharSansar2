import React from "react";
import ServiceHero from "./ServiceHero";
import CoreServices from "./CoreServices";
import HowWeWork from "./HowWeWork";
import ServiceFAQ from "./ServiceFAQ";
import FeaturedProject from "./FeaturedProject";
import CTA from "./CTA";

export default function ServicesMain() {
  return (
    <div>
      <ServiceHero />
      <CoreServices />
      <HowWeWork />
      <FeaturedProject />
      <ServiceFAQ />
      <CTA />
    </div>
  );
}
