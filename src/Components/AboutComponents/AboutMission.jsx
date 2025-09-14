import React from "react";
import { motion } from "framer-motion";

export default function AboutMission() {
  return (
    <section className="bg-[#005F59] py-16 px-6 md:px-20">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Text Content - shown first on small screens */}
        <motion.div
          className="text-white space-y-6 order-1 md:order-none"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-5xl md:text-6xl font-serif font-bold mb-2">
            Our Mission
          </h2>

          <p className="text-lg md:text-xl leading-relaxed ">
            At the heart of our bakery lies a simple mission: to spread joy
            through every bite. We are committed to crafting high-quality baked
            goods that bring warmth, comfort, and celebration to everyday life.
            Whether you're grabbing a morning pastry, ordering a birthday cake,
            or simply enjoying a fresh loaf of bread, we want every experience
            to feel like home.
          </p>

          <p className="text-lg md:text-xl leading-relaxed ">
            Our dedication to quality, creativity, and community drives
            everything we do. With locally sourced ingredients, time-tested
            recipes, and a passion for baking, we aim to make the world a little
            sweeter — one treat at a time.
          </p>
        </motion.div>

        {/* Image on Right (default order) */}
        <motion.div
          className="w-full h-[400px] md:h-full"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <img
            src="/images/Mission.jpg"
            alt="Baking Mission"
            className="w-full h-full rounded-3xl object-cover shadow-lg"
          />
        </motion.div>
      </div>
    </section>
  );
}
