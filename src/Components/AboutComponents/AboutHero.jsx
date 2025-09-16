import React from "react";
import HeroSection from "../HelperComponents/HeroSection";

export default function AboutHero() {
  return (
    <HeroSection
      title="About Ghar Sansar Pvt. Ltd"
      description="We provide trusted construction and home-building materials in Nepal, helping you build with quality and style."
      backgroundType="video"
      videoSrc="about/hero.mp4"
      height="70vh"
      overlay="gradient"
      textAlignment="center"
      breadcrumbs={[{ label: "Home", href: "/" }, { label: "About Us" }]}
    />
  );
}
