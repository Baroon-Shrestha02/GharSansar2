import React from "react";
import { motion } from "framer-motion";

export default function AboutHistory() {
  return (
    <>
      {/* Our Story Section */}
      <section className="bg-gray-0 py-12 px-4 md:px-16">
        <div className="max-w-6xl mx-auto md:grid md:grid-cols-2 md:gap-8 md:items-stretch flex flex-col gap-10">
          {/* Image */}
          <motion.div
            className="w-full h-[450px] md:h-auto"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <img
              src="about/about1.jpeg"
              alt="Our Work"
              className="w-full h-full rounded-3xl shadow-md object-cover"
            />
          </motion.div>

          {/* Text */}
          <motion.div
            className="flex flex-col justify-center space-y-6"
            style={{ color: "#005F59" }}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
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
          </motion.div>
        </div>
      </section>
    </>
  );
}
