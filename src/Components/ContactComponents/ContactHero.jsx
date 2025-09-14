import React, { useState, useEffect } from "react";

export default function HomeHero() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Trigger animations after component mounts
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const titleWords = "Let's Bake Something Sweet Together.".split(" ");

  return (
    <>
      <div className="min-h-[100vh] overflow-hidden relative">
        <div className="relative continer mx-auto h-full">
          <div className="relative h-screen ">
            {/* Hero Image */}
            <div className="absolute inset-0">
              <img
                src="contact2.jpg"
                alt="Delicious bakery display"
                className="h-full w-full object-cover"
              />
            </div>

            {/* Multi-layered Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/30 to-black/70 "></div>
            <div className="absolute inset-0 bg-gradient-to-r from-[#009F8A]/10 via-transparent to-[#009F8A]/5 "></div>
            <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/60 to-transparent "></div>

            {/* Content Container */}
            <div className="absolute bottom-0 left-0 right-0 pb-6 px-4 ">
              <div className="container mx-auto">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
                  {/* Title Section */}
                  <div className="flex-1 max-w-5xl">
                    <div className="space-y-4">
                      {/* Animated Title Words */}
                      <div className="overflow-hidden">
                        <div className="flex flex-wrap items-end gap-x-6 gap-y-2">
                          {titleWords.map((word, index) => (
                            <div
                              key={index}
                              className={`transform transition-all duration-1000 ease-out ${
                                isLoaded
                                  ? "translate-y-0 opacity-100"
                                  : "translate-y-full opacity-0"
                              }`}
                              style={{
                                transitionDelay: `${index * 200 + 300}ms`,
                              }}
                            >
                              <h1 className="text-[#F8F8F2] font-black text-6xl sm:text-6xl lg:text-8xl xl:text-9xl leading-none tracking-tight drop-shadow-2xl">
                                {word}
                              </h1>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Subtitle */}
                      {/* <div
                        className={`transform transition-all duration-1000 ease-out ${
                          isLoaded
                            ? "translate-y-0 opacity-100"
                            : "translate-y-8 opacity-0"
                        }`}
                        style={{ transitionDelay: "1500ms" }}
                      >
                        <p className="text-[#F8F8F2]/90 text-lg lg:text-2xl font-extralight max-w-2xl leading-relaxed drop-shadow-lg">
                          Freshly baked goods made with love, using the finest
                          ingredients for an unforgettable taste experience.
                        </p>
                      </div> */}
                    </div>
                  </div>

                  {/* CTA Button */}
                </div>
              </div>
            </div>

            {/* Floating Background Elements */}
            <div
              className={`absolute top-1/4 left-8 w-32 h-32 bg-[#009F8A]/5 rounded-full blur-2xl transform transition-all duration-2000 ${
                isLoaded
                  ? "translate-x-0 opacity-100 rotate-0"
                  : "-translate-x-16 opacity-0 -rotate-45"
              }`}
              style={{ transitionDelay: "1000ms" }}
            />

            <div
              className={`absolute top-1/3 right-12 w-24 h-24 bg-[#F8F8F2]/10 rounded-full blur-xl transform transition-all duration-2000 ${
                isLoaded
                  ? "translate-x-0 opacity-100 rotate-0"
                  : "translate-x-16 opacity-0 rotate-45"
              }`}
              style={{ transitionDelay: "1200ms" }}
            />
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(60px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes shimmer {
          0% {
            background-position: -200% center;
          }
          100% {
            background-position: 200% center;
          }
        }

        .animate-shimmer {
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.2),
            transparent
          );
          background-size: 200% 100%;
          animation: shimmer 2s infinite;
        }

        /* Custom bounce animation */
        @keyframes customBounce {
          0%,
          20%,
          53%,
          80%,
          100% {
            transform: translate3d(0, 0, 0);
          }
          40%,
          43% {
            transform: translate3d(0, -8px, 0);
          }
          70% {
            transform: translate3d(0, -4px, 0);
          }
          90% {
            transform: translate3d(0, -2px, 0);
          }
        }

        .animate-bounce {
          animation: customBounce 2s infinite;
        }
      `}</style>
    </>
  );
}
