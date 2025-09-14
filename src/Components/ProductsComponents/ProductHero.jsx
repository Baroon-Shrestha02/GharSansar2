import React from "react";
import HeroSection from "../HelperComponents/HeroSection";

export default function ProductHero() {
  return (
    <HeroSection
      title="Our products"
      description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur incidunt recusandae officiis voluptates"
      backgroundType="image"
      backgroundSrc="About/hero.jpg"
      height="70vh"
      overlay="gradient"
      textAlignment="center"
      breadcrumbs={[{ label: "Home", href: "/" }, { label: "About Us" }]}
    />
  );
}
