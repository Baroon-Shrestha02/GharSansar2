import React from "react";
import { motion } from "framer-motion";
const MotionDiv = motion.div;

export default function AboutHistory() {
  return (
    <>
      {/* Our Story Section */}
      <section className="bg-gray-0 py-12 px-4 sm:px-8 md:px-16">
        <div className="max-w-6xl mx-auto md:grid md:grid-cols-2 md:gap-10 md:items-stretch flex flex-col gap-8">
          {/* Image */}
          <MotionDiv
            className="w-full aspect-[4/3] md:aspect-auto md:h-auto"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <img
              src="about/about1.jpeg"
              alt="Our Work"
              className="w-full h-full rounded-3xl shadow-md object-cover"
            />
          </MotionDiv>

          {/* Text */}
          <MotionDiv
            className="flex flex-col justify-center space-y-6"
            style={{ color: "#005F59" }}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <h2 className="text-5xl md:text-6xl font-serif font-bold mb-2 text-secondary">
              Our Work
            </h2>

            <p className="text-lg md:text-xl leading-relaxed text-secondary light">
              At the heart of our operations, Ghar Sansar, GS Alliance, and
              Delight work together to provide high-quality home-building
              materials and supplies across Nepal. From cement, rods, and bricks
              to paint, tiles, and electrical items, we ensure that every
              product meets strict quality standards and reaches your doorstep
              reliably.
            </p>

            <p className="text-lg md:text-xl leading-relaxed text-secondary light">
              Our mission is to simplify construction and renovation for
              homeowners and contractors alike. With years of experience, our
              teams at Ghar Sansar, GS Alliance, and Delight combine expertise,
              trust, and exceptional service to make every project smoother,
              safer, and more efficient. We’re committed to building not just
              homes, but lasting relationships with our clients.
            </p>
          </MotionDiv>
        </div>
      </section>
    </>
  );
}
