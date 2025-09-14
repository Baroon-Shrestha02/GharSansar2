import React from "react";

import HomeHero from "./HomeHero";
import HomeIntro from "./HomeIntro";
import HomeProducts from "./HomeProducts";
import HomeServices from "./HomeServices";
import HomeSweets from "./HomeSweets";
import HomeBestSelling from "./HomeBestSelling";
import HommeTestimonials from "./HommeTestimonials";
import CardStack from "../HelperComponents/CardStack";
import HomePartners from "./HomePartners";
import HomePartners2 from "./HomePartners2";

export default function HomeMain() {
  return (
    <div>
      <HomeHero />
      {/* <CardStack /> */}
      <HomeIntro />
      {/* <HomeBestSelling /> */}
      {/* <HomeSweets /> */}
      {/* <HomeProducts /> */}
      <HomePartners2 />
      {/* <HommeTestimonials /> */}
      {/* <HomeServices /> */}
    </div>
  );
}
