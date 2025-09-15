import { Star, ChevronLeft, ChevronRight, Heart } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

export default function HorizontalProducts() {
  const [isVisible, setIsVisible] = useState(false);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const sectionRef = useRef(null);
  const scrollRef = useRef(null);

  const products = [
    {
      id: "cement",
      name: "SHIVAM CEMENT",
      image: "home/cement.png",
      description: "50kg bag • High strength",
      price: 750,
      company: "Ghar Sansar",
    },
    {
      id: "steel-rods",
      name: "STEEL RODS (TMT)",
      image: "home/rods.jpg",
      description: "Per bundle • Reinforcement rods",
      price: 2500,
      company: "Ghar Sansar",
    },
    {
      id: "tiles",
      name: "CERAMIC TILES",
      image: "home/tiles.jpg",
      description: "Per box • Floor & wall use",
      price: 1500,
      company: "GS",
    },
    {
      id: "paint",
      name: "INTERIOR PAINT",
      image: "home/paints.png",
      description: "20L bucket • Premium finish",
      price: 3200,
      company: "Ghar Sansar",
    },
    {
      id: "pipes",
      name: "PVC PIPES",
      image: "home/pvc.png",
      description: "Per 10ft • Water supply use",
      price: 400,
      company: "Delight",
    },
    {
      id: "wires",
      name: "ELECTRICAL WIRES",
      image: "home/wires.jpg",
      description: "90m coil • Copper insulated",
      price: 2500,
      company: "GS",
    },
    {
      id: "wood",
      name: "PLYWOOD SHEETS",
      image: "home/ply.jpg",
      description: "Per sheet • Durable finishing",
      price: 2200,
      company: "Ghar Sansar",
    },
    {
      id: "roofing",
      name: "ROOFING SHEETS",
      image: "home/roof.avif",
      description: "Per sheet • Corrugated steel",
      price: 1800,
      company: "Delight",
    },
    {
      id: "doors",
      name: "WOODEN DOORS",
      image: "home/doors.jpg",
      description: "Per piece • Solid wood",
      price: 9500,
      company: "GS",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.1,
        rootMargin: "50px",
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const checkScrollButtons = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth);
    }
  };

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 320; // Width of one card plus gap
      const newScrollLeft =
        direction === "left"
          ? scrollRef.current.scrollLeft - scrollAmount
          : scrollRef.current.scrollLeft + scrollAmount;

      scrollRef.current.scrollTo({
        left: newScrollLeft,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener("scroll", checkScrollButtons);
      checkScrollButtons(); // Initial check

      return () =>
        scrollContainer.removeEventListener("scroll", checkScrollButtons);
    }
  }, []);

  return (
    <div ref={sectionRef} className="bg-secondary my-12  overflow-hidden">
      <div className="container mx-auto py-16">
        {/* Header with Navigation */}
        <div className="flex items-center justify-between mb-12 px-8">
          <div>
            <h2 className="text-5xl lg:text-7xl font-black text-white mb-2">
              Our Products
            </h2>
          </div>

          <div className="flex gap-4">
            <button
              onClick={() => scroll("left")}
              disabled={!canScrollLeft}
              className={`p-3 rounded-full transition-all duration-300 ${
                canScrollLeft
                  ? "bg-white text-gray-900 hover:bg-gray-50 shadow-lg hover:shadow-xl"
                  : "bg-gray-200 text-gray-400 cursor-not-allowed"
              }`}
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={() => scroll("right")}
              disabled={!canScrollRight}
              className={`p-3 rounded-full transition-all duration-300 ${
                canScrollRight
                  ? "bg-white text-gray-900 hover:bg-gray-50 shadow-lg hover:shadow-xl"
                  : "bg-gray-200 text-gray-400 cursor-not-allowed"
              }`}
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        {/* Horizontal Scrolling Products */}
        <div className="relative">
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide px-8 pb-4"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
              WebkitScrollbar: { display: "none" },
            }}
          >
            {products.map((product, index) => (
              <div
                key={product.id}
                className={`group relative bg-white overflow-hidden shadow-lg flex-shrink-0 w-80 transition-all duration-500 ease-out transform hover:scale-105 hover:shadow-2xl ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-8 opacity-0"
                }`}
                style={{
                  transitionDelay: isVisible ? `${index * 100}ms` : "0ms",
                }}
              >
                <div className="absolute top-4 right-4 z-10 bg-primary text-white px-3 py-1 rounded text-xs font-bold tracking-wide">
                  {product.company}
                </div>
                {/* Product Image */}
                <div className="relative h-100 overflow-hidden ">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Product Info */}
                <div className="px-3 py-2 absolute bottom-0 w-full bg-black/60 backdrop-blur-md rounded-t-lg">
                  {/* Product Name */}
                  <h3 className="text-lg font-bold text-white mb-1 line-clamp-2">
                    {product.name}
                  </h3>

                  <div className="flex items-center justify-between">
                    <span className="text-xl font-black text-white">
                      Rs. {product.price}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-white text-sm mb-3">
                    {product.description}
                  </p>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>
            ))}
          </div>

          {/* Scroll Indicator */}
          <div className="flex justify-center mt-8">
            <div className="flex gap-2">
              {Array.from({ length: Math.ceil(products.length / 3) }).map(
                (_, i) => (
                  <div
                    key={i}
                    className="w-2 h-2 rounded-full bg-gray-300 transition-colors duration-300"
                  />
                )
              )}
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-6">
          <Link to="/products">
            <button className="bg-primary capitalize text-white font-bold px-12 py-4 rounded-full text-lg transition-all duration-300 ease-out transform hover:scale-105 hover:shadow-2xl">
              explore all products
            </button>
          </Link>
        </div>
      </div>

      <style>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
}
