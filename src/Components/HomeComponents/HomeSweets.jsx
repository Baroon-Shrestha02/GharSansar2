import React, { useState, useEffect, useRef } from "react";

export default function HomeSweets() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const carouselItems = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1541167760496-1628856ab772?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      shape: "circle",
      title: "Artisan Coffee",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      shape: "rounded",
      title: "Berry Cake",
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      shape: "rounded",
      title: "Chocolate Delight",
    },
    {
      id: 4,
      image:
        "https://images.unsplash.com/photo-1486427944299-d1955d23e34d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      shape: "rounded-full",
      title: "Sweet Treats",
    },
    {
      id: 5,
      image: "croissant.jpg",
      shape: "rounded",
      title: "Butter Croissant",
    },
  ];

  // Duplicate items for seamless infinite scroll
  const duplicatedItems = [
    ...carouselItems,
    ...carouselItems,
    ...carouselItems,
  ];

  const getShapeClasses = (shape, size = "default") => {
    const sizeClasses = {
      small: "w-48 h-48",
      default: "w-64 h-64",
      large: "w-80 h-80",
    };

    const baseClasses = `${sizeClasses[size]} object-cover shadow-2xl`;

    switch (shape) {
      case "circle":
        return `${baseClasses} rounded-full`;
      case "rounded":
        return `${baseClasses} rounded-3xl`;
      case "rounded-full":
        return `${baseClasses} rounded-full`;
      default:
        return `${baseClasses} rounded-2xl`;
    }
  };

  const getRandomSize = (index) => {
    const sizes = ["small", "default", "large"];
    return sizes[index % 3];
  };

  return (
    <div
      ref={sectionRef}
      className="py-20 lg:py-32 bg-gradient-to-b from-gray-50/50 to-white overflow-hidden"
    >
      <div className="container mx-auto px-6 lg:px-8">
        {/* Main Heading */}
        <div className="text-center mb-20 lg:mb-32">
          <div
            className={`transform transition-all duration-1000 ease-out ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-12 opacity-0"
            }`}
          >
            <h2 className="text-6xl sm:text-7xl lg:text-8xl xl:text-9xl font-black text-gray-900 leading-[0.85] tracking-tight">
              <span className="block">YOUR</span>
              <span className="block">ONLY</span>
              <span className="block">DOSE OF</span>
              <span className="block text-[#009F8A]">DELIGHT</span>
            </h2>
          </div>

          {/* Decorative underline */}
          <div
            className={`transform transition-all duration-1000 ease-out delay-300 ${
              isVisible ? "scale-x-100 opacity-100" : "scale-x-0 opacity-0"
            }`}
          >
            <div className="w-32 h-2 bg-gradient-to-r from-[#009F8A] to-teal-500 mx-auto mt-8 rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Infinite Carousel */}
      <div
        className={`transform transition-all duration-1000 ease-out delay-500 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
        }`}
      >
        <div className="relative">
          {/* Gradient overlays for fade effect */}
          <div className="hidden md:block absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10"></div>
          <div className="hidden md:block absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10"></div>

          {/* Carousel Container */}
          <div className="flex animate-scroll">
            {duplicatedItems.map((item, index) => {
              const size = getRandomSize(index);
              const yOffset =
                index % 4 === 0
                  ? "translate-y-8"
                  : index % 4 === 1
                  ? "-translate-y-4"
                  : index % 4 === 2
                  ? "translate-y-12"
                  : "-translate-y-8";

              return (
                <div
                  key={`${item.id}-${Math.floor(index / carouselItems.length)}`}
                  className={`flex-shrink-0 mx-4 lg:mx-8 transform transition-all duration-700 hover:scale-110 hover:-translate-y-4 group ${yOffset}`}
                >
                  <div className="relative">
                    <img
                      src={item.image}
                      alt={item.title}
                      className={`${getShapeClasses(
                        item.shape,
                        size
                      )} group-hover:shadow-3xl transition-all duration-700`}
                    />

                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></div>

                    {/* Title overlay */}
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
                      <div className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-bold text-gray-900 whitespace-nowrap shadow-lg">
                        {item.title}
                      </div>
                    </div>

                    {/* Decorative ring */}
                    <div className="absolute inset-0 rounded-full border-2 border-[#009F8A]/0 group-hover:border-[#009F8A]/30 transition-all duration-300 scale-105"></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Bottom Text */}
      <div className="container mx-auto px-6 lg:px-8 mt-20">
        <div
          className={`text-center transform transition-all duration-1000 ease-out delay-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <p className="text-xl lg:text-2xl text-gray-600 font-medium max-w-3xl mx-auto leading-relaxed">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi
            nemo cum repudiandae nesciunt enim corporis obcaecati aperiam
            excepturi voluptatibus facere.
          </p>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-${carouselItems.length * 320}px);
          }
        }

        .animate-scroll {
          animation: scroll 40s linear infinite;
        }

        .animate-scroll:hover {
          animation-play-state: paused;
        }

        /* Custom shadow */
        .shadow-3xl {
          box-shadow: 0 35px 60px -12px rgba(0, 0, 0, 0.25);
        }
      `}</style>
    </div>
  );
}
