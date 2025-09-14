import React from "react";
import HeroSection from "../HelperComponents/HeroSection";

export default function AboutHero() {
  return (
    <HeroSection
      title="About Ghar Sansar Pvt. Ltd"
      description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia illo quos qui quas ipsa ratione at quae officia animi maiores!"
      backgroundType="image"
      backgroundSrc="About/hero.jpg"
      height="70vh"
      overlay="gradient"
      textAlignment="center"
      breadcrumbs={[{ label: "Home", href: "/" }, { label: "About Us" }]}
    />
  );
}
