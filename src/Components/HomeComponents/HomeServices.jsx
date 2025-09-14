import React, { useState, useEffect, useRef } from "react";

export default function HomeServices() {
  const [isVisible, setIsVisible] = useState(false);
  const [textOffset, setTextOffset] = useState(25); // State to control text position

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
    <div
      ref={sectionRef}
      className="py-20 lg:py-32 bg-gradient-to-b from-white to-gray-50/30 overflow-hidden"
    >
      <div className="container mx-auto px-6 lg:px-8">
        {/* Controls for text position */}
        <div className="flex justify-center mb-8">
          <div className="bg-white rounded-lg shadow-md p-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Adjust Text Position Around Circle
            </label>
            <input
              type="range"
              min="0"
              max="100"
              value={textOffset}
              onChange={(e) => setTextOffset(Number(e.target.value))}
              className="w-64 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
            />
            <div className="text-xs text-gray-500 mt-1 text-center">
              {textOffset}% around the circle
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center min-h-[600px] lg:min-h-[700px]">
          {/* Main Container */}
          <div
            className={`relative transform transition-all duration-1000 ease-out ${
              isVisible ? "scale-100 opacity-100" : "scale-90 opacity-0"
            }`}
          >
            {/* Curved Text Container */}
            <div className="relative w-96 h-96 lg:w-[500px] lg:h-[500px]">
              {/* SVG for Curved Text */}
              <svg
                viewBox="0 0 400 400"
                className="absolute inset-0 w-full h-full"
              >
                <defs>
                  <path
                    id="circle-path"
                    d="M 200, 200 m -160, 0 a 160,160 0 1,1 320,0 a 160,160 0 1,1 -320,0"
                  />
                </defs>
                <text
                  className={`fill-gray-900 text-4xl lg:text-5xl font-black tracking-wider transform transition-all duration-1000 delay-300 ${
                    isVisible ? "opacity-100" : "opacity-0"
                  }`}
                  style={{ fontFamily: "system-ui, -apple-system, sans-serif" }}
                >
                  <textPath
                    href="#circle-path"
                    startOffset={`${textOffset}%`}
                    textAnchor="middle"
                  >
                    CELEBRATE WITH CAKE
                  </textPath>
                </text>
              </svg>

              {/* Center Image */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div
                  className={`transform transition-all duration-1000 ease-out delay-500 ${
                    isVisible
                      ? "scale-100 opacity-100 rotate-0"
                      : "scale-80 opacity-0 rotate-12"
                  }`}
                >
                  <div className="relative group">
                    {/* Image container with rounded rectangle shape */}
                    <div className="w-64 h-80 lg:w-100 lg:h-150 overflow-hidden shadow-2xl rounded-t-full">
                      <img
                        src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                        alt="Beautiful layered cake with white frosting and colorful sprinkles"
                        className="w-full h-full object-cover rounded-2xl group-hover:scale-105 transition-transform duration-700"
                      />
                      {/* Subtle overlay */}
                      <div className="absolute inset-2 rounded-2xl bg-gradient-to-t from-black/5 via-transparent to-transparent"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* ORDER Button */}
            <div
              className={`absolute -bottom-16 left-1/2 transform -translate-x-1/2 transition-all duration-1000 ease-out delay-700 ${
                isVisible
                  ? "translate-y-0 opacity-100 scale-100"
                  : "translate-y-8 opacity-0 scale-90"
              }`}
            >
              <button className="group relative">
                {/* Button shadow */}
                <div className="absolute inset-0 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full transform scale-105 opacity-20 group-hover:scale-110 group-hover:opacity-30 transition-all duration-300"></div>
                {/* Main button */}
                <div className="relative bg-gradient-to-br from-pink-400 via-pink-500 to-purple-500 rounded-full w-32 h-32 lg:w-40 lg:h-40 flex items-center justify-center shadow-2xl group-hover:shadow-3xl transform group-hover:scale-105 transition-all duration-300">
                  {/* Button text */}
                  <div className="text-white font-black text-xl lg:text-2xl tracking-wide transform group-hover:scale-110 transition-transform duration-300">
                    ORDER
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom descriptive text */}
        <div
          className={`text-center mt-20 transform transition-all duration-1000 ease-out delay-900 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <p className="text-lg lg:text-xl text-gray-600 font-medium max-w-2xl mx-auto leading-relaxed">
            Every celebration deserves the perfect centerpiece. Our handcrafted
            cakes turn moments into memories, layer by delicious layer.
          </p>
        </div>
      </div>

      <style jsx>{`
        /* Custom animations */
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        /* Enhanced shadows */
        .shadow-3xl {
          box-shadow: 0 35px 60px -12px rgba(0, 0, 0, 0.25);
        }
        /* SVG text styling */
        text {
          filter: drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.1));
        }
      `}</style>
    </div>
  );
}
