import React from "react";
import HeroSection from "../HelperComponents/HeroSection";

export default function ServiceHero() {
  return (
    <HeroSection
      title="Our Services"
      description="We provide reliable and high-quality solutions designed to meet your needs. From expert guidance to tailored support, our services ensure value and satisfaction every step of the way."
      backgroundType="image"
      backgroundSrc="/about/hero.jpg"
      height="70vh"
      overlay="gradient"
      textAlignment="center"
    />
  );
}
