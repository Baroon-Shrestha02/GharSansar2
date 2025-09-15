import React from "react";
import HeroSection from "../HelperComponents/HeroSection";

export default function AboutHero() {
  return (
    <HeroSection
      title="About Ghar Sansar Pvt. Ltd"
      description="Ghar Sansar, GS, and Delight deliver quality construction and home-building materials in Nepal. From foundations to finishes, we provide trusted products that help you build with strength and style."
      backgroundType="video"
      videoSrc="about/hero.mp4"
      height="70vh"
      overlay="gradient"
      textAlignment="center"
      breadcrumbs={[{ label: "Home", href: "/" }, { label: "About Us" }]}
    />
  );
}
