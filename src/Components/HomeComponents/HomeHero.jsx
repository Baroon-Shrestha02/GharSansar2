import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useIsLargeScreen } from "../Hooks/useIsLargeScreen";

// CardStack Component (embedded inside Hero)
const CardStack = ({ isInView }) => {
  const isLargeScreen = useIsLargeScreen(1024);

  const cardData = [
    {
      id: 1,
      imageSrc: "main/gs.png",
      alt: "Construction site",
      bgColor: "bg-white",
      rotation: isInView ? -15 : 0,
      x: isLargeScreen ? -250 : -150,

      zIndex: 1,
    },
    {
      id: 2,
      imageSrc: "main/logo.jpg",
      alt: "Company logo",
      bgColor: "bg-emerald-500 text-white",
      rotation: 0,
      x: 0,
      zIndex: 3,
    },
    {
      id: 3,
      imageSrc: "home/hero2.jpg",
      alt: "Building materials",
      bgColor: "bg-white",
      rotation: isInView ? 15 : 0,
      x: isLargeScreen ? 250 : 150,
      zIndex: 2,
    },
  ];

  return (
    <div className="relative w-46 h-58 sm:w-64 sm:h-80 lg:w-72 lg:h-96 mx-auto">
      {cardData.map((card, index) => (
        <motion.div
          key={card.id}
          className={`absolute inset-0 w-full h-full rounded-3xl shadow-2xl overflow-hidden flex items-center justify-center ${card.bgColor}`}
          style={{ zIndex: card.zIndex }}
          initial={{ y: 300, opacity: 0 }}
          animate={{
            y: isInView ? 0 : 300,
            opacity: isInView ? 1 : 0,
            rotate: card.rotation,
            x: card.x,
          }}
          transition={{
            type: "spring",
            damping: 26,
            stiffness: 70,
            delay: index * 0.25,
            duration: 1.2,
          }}
        >
          <img
            src={card.imageSrc}
            alt={card.alt}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </motion.div>
      ))}
    </div>
  );
};

export default function HomeHero() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 200);
    return () => clearTimeout(timer);
  }, []);

  const titleWords = "Elevate Your Home Experience.".split(" ");

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="home/hero.jpg"
          alt="Construction background"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full min-h-screen flex flex-col lg:flex-row lg:items-stretch lg:justify-between max-w-7xl mx-auto px-6 py-12 gap-8">
        {/* Left Text */}
        <div className="order-2 lg:order-1 flex-1 w-full flex flex-col justify-end items-center text-center lg:items-start lg:text-left">
          {/* Animated Title */}
          <div className="flex flex-wrap justify-left gap-2">
            {titleWords.map((word, i) => (
              <motion.h1
                key={i}
                className="text-white text-left font-black text-5xl lg:text-7xl drop-shadow-xl"
                initial={{ y: 50, opacity: 0 }}
                animate={{
                  y: isLoaded ? 0 : 50,
                  opacity: isLoaded ? 1 : 0,
                }}
                transition={{ delay: i * 0.3, duration: 1.1, ease: "easeOut" }}
              >
                {word}
              </motion.h1>
            ))}
          </div>

          {/* Subtitle */}
          <motion.p
            className="mt-6 text-white/90 text-lg sm:text-xl max-w-xl leading-relaxed"
            initial={{ y: 30, opacity: 0 }}
            animate={{
              y: isLoaded ? 0 : 30,
              opacity: isLoaded ? 1 : 0,
            }}
            transition={{ delay: 1.4, duration: 1.1, ease: "easeOut" }}
          >
            From cement to steel, we deliver everything you need to build your
            dream house with quality and trust.
          </motion.p>

          {/* Button */}
          <motion.div
            className="mt-8"
            initial={{ y: 20, opacity: 0 }}
            animate={{
              y: isLoaded ? 0 : 20,
              opacity: isLoaded ? 1 : 0,
            }}
            transition={{ delay: 2.0, duration: 0.9, ease: "easeOut" }}
          >
            <Link to="/products">
              <button className="px-8 py-3 bg-orange-500 text-white font-bold rounded-full shadow-lg hover:bg-orange-600 transition">
                Explore Materials
              </button>
            </Link>
          </motion.div>
        </div>

        {/* Right Animated Cards */}
        <div className="order-1 lg:order-2 flex-1 w-full flex items-center justify-center lg:justify-end">
          <CardStack isInView={isLoaded} />
        </div>
      </div>
    </section>
  );
}
