import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const CardStack = () => {
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    // Trigger animation after component mounts
    const timer = setTimeout(() => {
      setIsInView(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const resetAnimation = () => {
    setIsInView(false);
    setTimeout(() => {
      setIsInView(true);
    }, 100);
  };

  const cardData = [
    {
      id: 1,
      title: "MARTIAL ARTS",
      image: "/api/placeholder/300/400",
      bgColor: "bg-white",
      rotation: isInView ? -15 : 0,
      x: isInView ? -120 : 0,
      zIndex: 1,
    },
    {
      id: 2,
      title: "MUSIC LOVER",
      image: "/api/placeholder/300/400",
      bgColor: "bg-emerald-500",
      rotation: 0,
      x: 0,
      zIndex: 3,
    },
    {
      id: 3,
      title: "FAMILY TIME",
      image: "/api/placeholder/300/400",
      bgColor: "bg-white",
      rotation: isInView ? 15 : 0,
      x: isInView ? 120 : 0,
      zIndex: 2,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-8">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-800 mb-12 tracking-wider">
          MUSIC LOVER.
        </h1>

        <div className="relative w-80 h-96 mx-auto mb-12">
          {cardData.map((card, index) => (
            <motion.div
              key={card.id}
              className={`absolute inset-0 w-full h-full rounded-3xl shadow-2xl overflow-hidden ${card.bgColor}`}
              style={{ zIndex: card.zIndex }}
              initial={{
                y: 300,
                opacity: 0,
                rotate: 0,
                x: 0,
              }}
              animate={{
                y: isInView ? 0 : 300,
                opacity: isInView ? 1 : 0,
                rotate: card.rotation,
                x: card.x,
              }}
              transition={{
                type: "spring",
                damping: 20,
                stiffness: 100,
                delay: index * 0.1,
                duration: 0.8,
              }}
            >
              {/* Card Content */}
              <div className="relative w-full h-full flex items-center justify-center">
                {card.id === 1 && (
                  <div className="text-center p-6">
                    <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gray-200 flex items-center justify-center">
                      <div className="text-4xl">🥋</div>
                    </div>
                    <h3 className="text-xl font-bold text-gray-800">
                      MARTIAL ARTS
                    </h3>
                  </div>
                )}

                {card.id === 2 && (
                  <div className="text-center p-6 text-white">
                    <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-white/20 flex items-center justify-center">
                      <div className="text-4xl">🎵</div>
                    </div>
                    <h3 className="text-xl font-bold">MUSIC LOVER</h3>
                  </div>
                )}

                {card.id === 3 && (
                  <div className="text-center p-6">
                    <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-blue-100 flex items-center justify-center">
                      <div className="text-4xl">👨‍👩‍👧‍👦</div>
                    </div>
                    <h3 className="text-xl font-bold text-gray-800">
                      FAMILY TIME
                    </h3>
                  </div>
                )}
              </div>

              {/* Decorative Elements */}
              <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/20"></div>
              <div className="absolute bottom-4 left-4 w-6 h-6 rounded-full bg-white/10"></div>
            </motion.div>
          ))}
        </div>

        <motion.button
          onClick={resetAnimation}
          className="px-8 py-3 bg-emerald-500 text-white font-semibold rounded-full hover:bg-emerald-600 transition-colors duration-200 shadow-lg"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Replay Animation
        </motion.button>

        <div className="mt-8 text-gray-600">
          <p className="text-sm">
            Cards slide in from bottom and expand with rotation
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardStack;
