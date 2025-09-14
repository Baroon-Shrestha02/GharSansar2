import React from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react"; // optional for scroll indicator

export default function About() {
  return (
    <section
      className="relative h-screen w-full bg-cover bg-center "
      style={{
        backgroundImage: "url('/medium-shot-woman-working-bakery.jpg')",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Main Animated Content */}
      <motion.div
        className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4"
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 80, duration: 1.2 }}
      >
        {/* Title with hover glow effect */}
        <motion.h1
          className="text-4xl md:text-6xl font-serif font-bold mb-4 transition-all duration-300 hover:text-yellow-400 hover:drop-shadow-xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          A BAKING LOVE AFFAIR
        </motion.h1>

        {/* Subtitle with soft motion */}
        <motion.p
          className="text-lg md:text-xl font-light max-w-xl text-white/90"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1 }}
        >
          Good food should both comfort and nourish the soul.
        </motion.p>

        {/* Scroll indicator */}
        <motion.div
          className="mt-10 text-white/70 animate-bounce"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <ChevronDown size={32} />
        </motion.div>
      </motion.div>

      {/* Bottom U-shape SVG */}
      <div className="absolute bottom-0 w-full overflow-hidden leading-[0] rotate-180">
        <svg
          className="relative block w-full h-[100px] shadow-4xl"
          viewBox="0 0 1440 100"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0 C360,100 1080,0 1440,100 L1440,0 L0,0 Z"
            fill="#005F59"
          />
        </svg>
      </div>
    </section>
  );
}
