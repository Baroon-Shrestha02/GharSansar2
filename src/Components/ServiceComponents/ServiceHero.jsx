import React from "react";
import HeroSection from "../HelperComponents/HeroSection";

export default function ServiceHero() {
  return (
    <HeroSection
      title="Our Services"
      description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia illo quos qui quas ipsa ratione at quae officia animi maiores!"
      backgroundType="image"
      backgroundSrc="/about/hero.jpg"
      height="70vh"
      overlay="gradient"
      textAlignment="center"
    />
  );
}
