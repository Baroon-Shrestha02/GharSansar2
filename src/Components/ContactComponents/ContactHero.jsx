import React from "react";
import HeroSection from "../HelperComponents/HeroSection";

export default function ContactHero() {
  return (
    <HeroSection
      title="Get In Touch with Us."
      description="We’re here to listen and help. Reach out to us anytime with your questions, feedback, or ideas — let’s stay connected and build together."
      backgroundType="image"
      backgroundSrc="about/hero.jpg"
      height="70vh"
      overlay="gradient"
      textAlignment="center"
      breadcrumbs={[{ label: "Home", href: "/" }, { label: "About Us" }]}
    />
  );
}
