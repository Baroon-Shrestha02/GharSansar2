import { ArrowRight, Star } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";

export default function HomePartners() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const products = [
    {
      id: "ghar",
      name: "Ghar Sansar",
      image: "croissant.jpg",
      description: "Box of 6 • Fresh daily",
      price: 240,
      rating: 4.9,
      reviews: 156,
      popular: true,
    },
    {
      id: "delight",
      name: "Delight",
      image:
        "https://images.unsplash.com/photo-1509440159596-0249088772ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Whole loaf • 48hr fermentation",
      price: 180,
      rating: 4.8,
      reviews: 203,
      popular: false,
    },
    {
      id: "gs",
      name: "gs",
      image:
        "https://images.unsplash.com/photo-1569864358642-9d1684040f43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Box of 12 • Assorted flavors",
      price: 320,
      rating: 4.9,
      reviews: 89,
      popular: true,
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

  return (
    <div ref={sectionRef}>
      <div className="container mx-auto py-12">
        <div className="text-center mb-20">
          <h2 className="text-6xl lg:text-8xl font-black text-gray-900 mb-6 leading-tight">
            Our{" "}
            <span className="text-transparent bg-clip-text bg-secondary">
              Partners
            </span>
          </h2>
          {/* <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed"></p> */}
        </div>

        <div className="">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8  mx-4">
            {products.map((product, index) => (
              <div
                key={product.id}
                className={`group relative bg-white rounded-3xl overflow-hidden shadow-xl border border-orange-100 transition-all duration-300 ease-out transform ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-8 opacity-0"
                }`}
                style={{
                  transitionDelay: isVisible ? `${index * 100}ms` : "0ms",
                }}
              >
                {/* Product Image */}
                <div className="relative h-100 overflow-hidden bg-gradient-to-br from-orange-50 to-amber-50">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                <div className="absolute inset-0 bg-[#009F8A]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out"></div>
                <div className="absolute bottom-6 right-4 ">
                  <button className="flex items-center gap-x-2 px-4 py-2 bg-primary text-white rounded-xl font-bold">
                    <span>Learn More</span>
                    <ArrowRight />
                  </button>
                </div>

                {/* Subtle shadow enhancement on hover */}
                <div className="absolute inset-0 rounded-3xl shadow-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out pointer-events-none"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
