import React from "react";
import HeroSection from "../../HelperComponents/HeroSection";

export default function FAQHero() {
  return (
    <HeroSection
      title="Frequently Asked Questions"
      description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel obcaecati, aspernatur eius sed quibusdam eveniet veniam maiores facilis?"
      backgroundType="video"
      videoSrc="about/hero.mp4"
      height="70vh"
      overlay="gradient"
      textAlignment="center"
      breadcrumbs={[{ label: "Home", href: "/" }, { label: "About Us" }]}
    />
  );
}
