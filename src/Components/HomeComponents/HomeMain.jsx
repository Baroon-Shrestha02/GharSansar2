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
import HomeFeatured from "./HomeFeatured";
import HomeContact from "./HomeContact";
import HomeFAQ from "./HomeFAQ";

export default function HomeMain() {
  return (
    <div>
      <HomeHero />
      <HomeIntro />
      {/* <HomeBestSelling /> */}
      {/* <HomeSweets /> */}

      <HomePartners2 />
      <HomeFeatured />
      <HomeProducts />
      <HommeTestimonials />
      {/* <HomeContact /> */}
      <HomeFAQ />
      {/* <HomeServices /> */}
    </div>
  );
}
