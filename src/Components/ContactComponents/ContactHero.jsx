import React from "react";
import HeroSection from "../HelperComponents/HeroSection";

export default function ContactHero() {
  return (
    <HeroSection
      title="Get In Touch with Us."
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
