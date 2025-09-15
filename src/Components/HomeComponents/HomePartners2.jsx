import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useIsLargeScreen } from "../Hooks/useIsLargeScreen";

export default function HomePartners2() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 200);
    return () => clearTimeout(timer);
  }, []);

  const titleWords = "Our Partners.".split(" ");

  const CardStack = ({ isInView }) => {
    const isLargeScreen = useIsLargeScreen(1024);

    const cardData = [
      {
        id: 1,
        imageSrc: "home/hero.jpg",
        alt: "Construction site",
        bgColor: "bg-gradient-to-br from-blue-500 to-purple-600",
        rotation: -8,
        x: isLargeScreen ? -80 : -90, // 👈 different for big & small
        y: isLargeScreen ? -140 : -120,
        zIndex: 1,
        scale: 1.05,
      },
      {
        id: 2,

        imageSrc: "main/logo.jpg",
        alt: "Modern building",
        bgColor: "bg-gradient-to-br from-emerald-500 to-teal-600",
        rotation: 5,
        x: isLargeScreen ? 30 : 10,
        y: isLargeScreen ? 10 : 0,
        zIndex: 2,
        scale: 0.95,
      },
      {
        id: 3,
        imageSrc: "home/hero2.jpg",
        alt: "Architecture",
        bgColor: "bg-gradient-to-br from-orange-500 to-red-500",
        rotation: -3,
        x: isLargeScreen ? 160 : 90,
        y: isLargeScreen ? 140 : 120,
        zIndex: 3,
        scale: 0.9,
      },
    ];

    return (
      <div className="relative w-80 h-80  mx-auto">
        {cardData.map((card, index) => (
          <motion.div
            key={card.id}
            className={`absolute w-64 h-48 md:h-80 rounded-2xl shadow-2xl overflow-hidden ${card.bgColor}`}
            style={{
              zIndex: card.zIndex,
              transformOrigin: "center center",
            }}
            initial={{
              y: 200,
              opacity: 0,
              rotate: 0,
              x: 0,
              scale: 0.8,
            }}
            animate={{
              y: isInView ? card.y : 200,
              opacity: isInView ? 1 : 0,
              rotate: isInView ? card.rotation : 0,
              x: isInView ? card.x : 0,
              scale: isInView ? card.scale : 0.8,
            }}
            transition={{
              type: "spring",
              damping: 25,
              stiffness: 80,
              delay: index * 0.2,
              duration: 1.5,
            }}
          >
            <div className="relative w-full h-full">
              <img
                src={card.imageSrc}
                alt={card.alt}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
            </div>
          </motion.div>
        ))}

        {/* Background decorative circle */}
        <motion.div
          className="absolute -inset-8 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-full blur-3xl"
          initial={{ scale: 0, opacity: 0 }}
          animate={{
            scale: isInView ? 1 : 0,
            opacity: isInView ? 1 : 0,
          }}
          transition={{
            delay: 0.8,
            duration: 1.5,
            ease: "easeOut",
          }}
        />
      </div>
    );
  };

  return (
    <section className=" bg-secondary py-20 container mx-auto rounded-4xl">
      <div className="container mx-auto px-4">
        <div className="relative z-10 h-full flex flex-col lg:flex-row lg:items-center lg:justify-between max-w-7xl mx-auto gap-12">
          {/* Left Text */}
          <div className="order-2 lg:order-1 flex-1 w-full flex flex-col justify-center items-center text-center lg:items-start lg:text-left pl-10">
            {/* Animated Title */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-2  mb-6">
              {titleWords.map((word, i) => (
                <motion.h1
                  key={i}
                  className="text-white font-black text-5xl lg:text-7xl drop-shadow-2xl"
                  initial={{ y: 50, opacity: 0 }}
                  animate={{
                    y: isLoaded ? 0 : 50,
                    opacity: isLoaded ? 1 : 0,
                  }}
                  transition={{
                    delay: i * 0.3,
                    duration: 1.1,
                    ease: "easeOut",
                  }}
                >
                  {word}
                </motion.h1>
              ))}
            </div>

            <motion.p
              className="text-gray-300 text-lg lg:text-xl mb-8 max-w-lg leading-relaxed"
              initial={{ y: 20, opacity: 0 }}
              animate={{
                y: isLoaded ? 0 : 20,
                opacity: isLoaded ? 1 : 0,
              }}
              transition={{ delay: 1.5, duration: 0.9, ease: "easeOut" }}
            >
              Discover our trusted network of industry-leading partners who help
              us deliver exceptional results across every project.
            </motion.p>

            <motion.div
              className="flex gap-4"
              initial={{ y: 20, opacity: 0 }}
              animate={{
                y: isLoaded ? 0 : 20,
                opacity: isLoaded ? 1 : 0,
              }}
              transition={{ delay: 2.0, duration: 0.9, ease: "easeOut" }}
            >
              <Link to="/about">
                <button className="px-8 py-4 bg-primary text-white font-bold rounded-2xl shadow-xl hover:from-orange-600 hover:to-red-600 transform hover:scale-105 transition-all duration-300">
                  Explore More
                </button>
              </Link>
            </motion.div>
          </div>

          {/* Right Animated Cards */}
          <div className="order-1 lg:order-2 flex-1 w-full flex items-center justify-center lg:justify-end">
            <CardStack isInView={isLoaded} />
          </div>
        </div>
      </div>
    </section>
  );
}
