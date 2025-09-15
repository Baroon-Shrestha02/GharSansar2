import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

export default function HomeIntro() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const stats = [
    { number: "10,000+", label: "Happy Customers" },
    { number: "50+", label: "Unique Recipes" },
    { number: "25+", label: "Years Experience" },
    { number: "100%", label: "Fresh Daily" },
  ];

  return (
    <section
      ref={sectionRef}
      className="py-20 lg:py-32 bg-gradient-to-b from-white to-gray-50/50"
    >
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text Section */}
          <div className="order-2 lg:order-1 flex flex-col justify-center">
            <div
              className={`transform transition-all duration-1000 ease-out ${
                isVisible
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-12 opacity-0"
              }`}
            >
              <div className="space-y-6">
                <div className="w-24 h-1 bg-primary rounded-full"></div>
                <h2 className="text-5xl lg:text-7xl font-black leading-[0.9] text-gray-900 tracking-tight">
                  <span className="block">MATERIALS THAT</span>
                  <span className="block text-secondary">BUILD DREAMS</span>
                  <span className="block">AND CREATE</span>
                  <span className="block text-secondary">
                    FOUNDATIONS FOR LIFE.
                  </span>
                </h2>
                <div
                  className={`transform transition-all duration-1000 ease-out delay-300 ${
                    isVisible
                      ? "translate-y-0 opacity-100"
                      : "translate-y-8 opacity-0"
                  }`}
                >
                  <p className="text-xl lg:text-2xl text-gray-600 font-medium leading-relaxed max-w-lg">
                    Every bite tells a story of passion, craftsmanship, and the
                    finest ingredients carefully selected to create moments of
                    pure joy.
                  </p>
                </div>

                <Link to="/about">
                  <div
                    className={`transform transition-all duration-1000 ease-out delay-500 ${
                      isVisible
                        ? "translate-y-0 opacity-100"
                        : "translate-y-8 opacity-0"
                    }`}
                  >
                    <button className="group mt-8 bg-primary text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-xl hover:scale-105 transition-all duration-300 relative overflow-hidden">
                      <span className="relative z-10">Discover Our Story</span>
                      <div className="absolute inset-0 bg-secondary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                    </button>
                  </div>
                </Link>
              </div>
            </div>
          </div>

          {/* Video Section */}
          <div className="order-1 lg:order-2">
            <div
              className={`transform transition-all duration-1000 ease-out delay-200 ${
                isVisible
                  ? "translate-x-0 opacity-100 scale-100"
                  : "translate-x-12 opacity-0 scale-95"
              }`}
            >
              <div className="relative group rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">
                <video
                  src="home/intro2.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Statistics */}
        <div
          className={`mt-20 lg:mt-32 transform transition-all duration-1000 ease-out delay-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
          }`}
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="text-3xl lg:text-4xl font-black text-secondary mb-2 group-hover:scale-110 transition-transform duration-300">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium uppercase text-sm tracking-wide">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
