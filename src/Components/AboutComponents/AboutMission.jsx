import React from "react";
import { motion } from "framer-motion";
const MotionDiv = motion.div;

export default function AboutMission() {
  return (
    <section className="container bg-secondary -mt-25 md:-mt-30 relative z-10  md:mx-20 rounded-3xl">
      <div className=" py-16 px-4 md:px-20 ">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          {/* Text Content - shown first on small screens */}
          <MotionDiv
            className="text-white space-y-6 order-1 md:order-none"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <h2 className="text-5xl md:text-6xl font-serif font-bold mb-2 ">
              Our Mission
            </h2>

            <p className="text-lg md:text-xl leading-relaxed text-justify light">
              At the core of Ghar Sansar, Delight, and GS lies a shared mission:
              to make building your dream home easier, reliable, and more
              affordable. From the foundation to the finishing touches, we are
              dedicated to providing quality materials that support every step
              of the construction journey.
            </p>

            <p className="text-lg md:text-xl leading-relaxed text-justify light">
              Our commitment to trust, durability, and customer satisfaction
              drives everything we do. With a wide range of products, reliable
              sourcing, and a passion for helping families create lasting homes,
              we aim to be your trusted partners in construction — making every
              house a true home.
            </p>
          </MotionDiv>

          {/* Image on Right (default order) */}
          <MotionDiv
            className="w-full aspect-[4/3] md:aspect-auto md:h-full"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <img
              src="about/mission.jpg"
              alt="Baking Mission"
              className="w-full h-full rounded-3xl object-cover shadow-lg"
            />
          </MotionDiv>
        </div>
      </div>
    </section>
  );
}
