import React, { useState, useEffect, useRef } from "react";

export default function HomeIntro() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div
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
                  {/* Decorative Line */}
                  <div className="w-24 h-1 bg-primary rounded-full"></div>

                  {/* Main Text */}
                  <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-[0.9] text-gray-900 tracking-tight">
                    <span className="block">MATERIALS THAT</span>
                    <span className="block text-secondary">BUILD DREAMS</span>
                    <span className="block">AND CREATE</span>
                    <span className="block text-secondary">
                      FOUNDATIONS FOR LIFE.
                    </span>
                  </h2>

                  {/* Subtitle */}
                  <div
                    className={`transform transition-all duration-1000 ease-out delay-300 ${
                      isVisible
                        ? "translate-y-0 opacity-100"
                        : "translate-y-8 opacity-0"
                    }`}
                  >
                    <p className="text-xl lg:text-2xl text-gray-600 font-medium leading-relaxed max-w-lg">
                      Every bite tells a story of passion, craftsmanship, and
                      the finest ingredients carefully selected to create
                      moments of pure joy.
                    </p>
                  </div>

                  {/* Call to Action */}
                  <div
                    className={`transform transition-all duration-1000 ease-out delay-500 ${
                      isVisible
                        ? "translate-y-0 opacity-100"
                        : "translate-y-8 opacity-0"
                    }`}
                  >
                    <button className="group mt-8 bg-primary text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-xl hover:scale-105 transition-all duration-300 relative overflow-hidden">
                      <span className="relative z-10">Discover Our Story</span>
                      <div className="absolute inset-0 bg-gradient-to-r from-teal-600 to-[#009F8A] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Image Section */}
            <div className="order-1 lg:order-2">
              <div
                className={`transform transition-all duration-1000 ease-out delay-200 ${
                  isVisible
                    ? "translate-x-0 opacity-100 scale-100"
                    : "translate-x-12 opacity-0 scale-95"
                }`}
              >
                <div className="relative group">
                  <div className="hidden md: block absolute -top-8 -right-8 w-full h-full bg-gradient-to-br from-[#009F8A]/10 to-teal-500/5 rounded-3xl transform rotate-3 group-hover:rotate-6 transition-transform duration-500"></div>

                  <div className="relative rounded-3xl shadow-2xl group-hover:shadow-3xl transition-all duration-500 border border-gray-100">
                    <img
                      src="intro.jpg"
                      alt="Artisan bakery workspace with fresh ingredients and tools"
                      className="w-full h-auto rounded-2xl object-cover aspect-[4/5] group-hover:scale-105 transition-transform duration-700 "
                    />
                  </div>

                  <div className="absolute -bottom-4 -left-4 bg-white rounded-full p-4 shadow-xl border-4 border-[#009F8A]/10 group-hover:scale-110 transition-transform duration-300">
                    <div className="text-center">
                      <div className="text-2xl font-black text-[#009F8A]">
                        **+
                      </div>
                      <div className="text-xs font-semibold text-gray-600 uppercase tracking-wide">
                        Years
                      </div>
                    </div>
                  </div>

                  {/* Decorative Elements */}
                  {/* <div className="absolute top-4 left-4 w-16 h-16 bg-[#F8F8F2] rounded-full opacity-20 group-hover:scale-150 transition-transform duration-700"></div>
                  <div className="absolute bottom-8 right-8 w-12 h-12 bg-[#009F8A]/20 rounded-full opacity-30 group-hover:scale-125 transition-transform duration-500"></div> */}
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Statistics */}
          <div
            className={`mt-20 lg:mt-32 transform transition-all duration-1000 ease-out delay-700 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-12 opacity-0"
            }`}
          >
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              {[
                { number: "10,000+", label: "Happy Customers" },
                { number: "50+", label: "Unique Recipes" },
                { number: "25+", label: "Years Experience" },
                { number: "100%", label: "Fresh Daily" },
              ].map((stat, index) => (
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
      </div>
    </>
  );
}
