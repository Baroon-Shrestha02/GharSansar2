import React from "react";
import HeroSection from "../HelperComponents/HeroSection";

export default function ProductHero() {
  return (
    <HeroSection
      title="Our Products"
      description="Explore our wide range of quality materials designed to support every stage of your building journey with durability, reliability, and style you can trust."
      backgroundType="video"
      videoSrc="home/intro2.mp4"
      height="70vh"
      overlay="gradient"
      textAlignment="center"
      breadcrumbs={[{ label: "Home", href: "/" }, { label: "About Us" }]}
    />
  );
}
