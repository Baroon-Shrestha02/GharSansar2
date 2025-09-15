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
              src="/images/medium-shot-woman-working-bakery.jpg"
              alt="Our Bakery"
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
              Our Story
            </h2>

            <p className="text-lg md:text-xl leading-relaxed text-secondary light">
              Born in the heart of the neighborhood, our bakery started as a
              small family dream in 1995. With the smell of fresh croissants
              drifting down the streets and the sound of early morning coffee
              brewing, we’ve grown into a cozy corner where stories are shared
              and memories are made. Every loaf, cake, and cookie we bake
              carries that love forward — warm, comforting, and always fresh.
            </p>

            <p className="text-lg md:text-xl leading-relaxed text-secondary light">
              What began with a single oven and a passion for homemade flavor
              has now blossomed into a beloved gathering place. Our recipes are
              rooted in tradition, but we’re not afraid to sprinkle in a little
              innovation. Whether it’s a seasonal tart, custom cake, or just
              your favorite muffin, we bake with heart, soul, and a pinch of
              magic.
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
}
