import { Star, ChevronLeft, ChevronRight, Heart } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";

export default function HorizontalProducts() {
  const [isVisible, setIsVisible] = useState(false);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const sectionRef = useRef(null);
  const scrollRef = useRef(null);

  const products = [
    {
      id: "cement",
      name: "PORTLAND CEMENT",
      image:
        "https://images.unsplash.com/photo-1599305445671-5a1a5f37d2d6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "50kg bag • High strength",
      price: 750,
      company: "Ghar Sansar",
    },
    {
      id: "steel-rods",
      name: "STEEL RODS (TMT)",
      image:
        "https://images.unsplash.com/photo-1623177584050-bd94b35729ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Per bundle • Reinforcement rods",
      price: 2500,
      company: "Delight",
    },
    {
      id: "bricks",
      name: "CLAY BRICKS",
      image:
        "https://images.unsplash.com/photo-1618773928121-c32242e63f4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Per 100 pcs • Standard size",
      price: 1200,
      company: "GS",
    },
    {
      id: "sand",
      name: "RIVER SAND",
      image:
        "https://images.unsplash.com/photo-1590086782794-7a7fef47cd93?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Per cubic foot • Fine quality",
      price: 65,
      company: "Ghar Sansar",
    },
    {
      id: "gravel",
      name: "GRAVEL (AGGREGATES)",
      image:
        "https://images.unsplash.com/photo-1609899047034-d98a71edb39c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Per cubic foot • Strong base material",
      price: 75,
      company: "Delight",
    },
    {
      id: "tiles",
      name: "CERAMIC TILES",
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Per box • Floor & wall use",
      price: 1500,
      company: "GS",
    },
    {
      id: "paint",
      name: "INTERIOR PAINT",
      image:
        "https://images.unsplash.com/photo-1509228627152-72ae9ae6848d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "20L bucket • Premium finish",
      price: 3200,
      company: "Ghar Sansar",
    },
    {
      id: "pipes",
      name: "PVC PIPES",
      image:
        "https://images.unsplash.com/photo-1616627985272-8905e1af9da6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Per 10ft • Water supply use",
      price: 400,
      company: "Delight",
    },
    {
      id: "wires",
      name: "ELECTRICAL WIRES",
      image:
        "https://images.unsplash.com/photo-1598791319116-8c2b59d1af3c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "90m coil • Copper insulated",
      price: 2500,
      company: "GS",
    },
    {
      id: "wood",
      name: "PLYWOOD SHEETS",
      image:
        "https://images.unsplash.com/photo-1605733160314-4f7b89e97b0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Per sheet • Durable finishing",
      price: 2200,
      company: "Ghar Sansar",
    },
    {
      id: "roofing",
      name: "ROOFING SHEETS",
      image:
        "https://images.unsplash.com/photo-1635322993651-4484a1c2cc74?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Per sheet • Corrugated steel",
      price: 1800,
      company: "Delight",
    },
    {
      id: "doors",
      name: "WOODEN DOORS",
      image:
        "https://images.unsplash.com/photo-1600585154203-c7aebfe244fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
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
                <div
                  className="px-3 py-2 absolute bottom-0 w-full 
     bg-white/40 backdrop-blur-md rounded-t-lg"
                >
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
          <button className="bg-primary text-white font-bold px-12 py-4 rounded-full text-lg transition-all duration-300 ease-out transform hover:scale-105 hover:shadow-2xl">
            EXPLORE ALL PRODUCTS
          </button>
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
