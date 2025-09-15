import React, { useState, useEffect, useRef } from "react";

export default function HomeFeatured() {
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
      image: "home/featured/cement.png",
      shape: "rounded",
      title: "Cement Bags",
    },
    {
      id: 2,
      image: "home/featured/tanks.jpg",
      shape: "rounded",
      title: "Steel Rods",
    },
    {
      id: 3,
      image: "home/featured/brick.jpg",
      shape: "rounded",
      title: "Clay Bricks",
    },
    {
      id: 4,
      image: "home/featured/basin.jpg",
      shape: "rounded",
      title: "Wall Paints",
    },
    {
      id: 5,
      image: "home/featured/tiles.avif",
      shape: "rounded",
      title: "Floor Tiles",
    },
    {
      id: 6,
      image: "home/featured/paints.webp",
      shape: "rounded",
      title: "Wood Planks",
    },
    {
      id: 7,
      image: "home/featured/roof.jpg",
      shape: "rounded",
      title: "Roof Sheets",
    },
    {
      id: 8,
      image: "home/featured/pipes.jpeg",
      shape: "rounded",
      title: "PVC Pipes",
    },
    {
      id: 10,
      image: "home/featured/electric.png",
      shape: "rounded",
      title: "Electrical Items",
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
            <h2 className="text-5xl md:text-7xl font-black text-gray-900 leading-[0.85] tracking-tight">
              <span className="block">YOUR ONLY</span>
              <span className="block"></span>
              <span className="block">DOSE OF</span>
              <span className="block text-primary">DELIGHT</span>
            </h2>
          </div>

          {/* Decorative underline */}
          <div
            className={`transform transition-all duration-1000 ease-out delay-300 ${
              isVisible ? "scale-x-100 opacity-100" : "scale-x-0 opacity-0"
            }`}
          >
            <div className="w-32 h-2 bg-primary mx-auto mt-4 rounded-full"></div>
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
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Bottom Text */}
      <div className="container mx-auto px-6 lg:px-8 ">
        {/* <div
          className={`text-center transform transition-all duration-1000 ease-out delay-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <p className="text-xl lg:text-2xl text-gray-600 font-medium max-w-3xl mx-auto leading-relaxed">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi
            nemo cum repudiandae nesciunt enim corporis obcaecati aperiam
            excepturi voluptatibus facere.
          </p>
        </div> */}
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
