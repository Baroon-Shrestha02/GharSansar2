import React, { useState } from "react";
import { Minus, Plus, ShoppingCart, Star } from "lucide-react";

export default function HomeBestSelling() {
  const products = [
    {
      id: "birthday",
      name: "BIRTHDAY CAKE",
      image:
        "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Box of 6 • 4oz each",
      price: 29,
      rating: 4.9,
      reviews: 127,
      popular: true,
    },
    {
      id: "chocolate",
      name: "CHOCOLATE CHUNK",
      image:
        "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Box of 6 • 4oz each",
      price: 29,
      rating: 4.8,
      reviews: 98,
      popular: false,
    },
    {
      id: "smores",
      name: "S'MORES DELIGHT",
      image:
        "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Box of 6 • 4oz each",
      price: 29,
      rating: 4.7,
      reviews: 89,
      popular: false,
    },
    {
      id: "smores",
      name: "S'MORES DELIGHT",
      image:
        "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Box of 6 • 4oz each",
      price: 29,
      rating: 4.7,
      reviews: 89,
      popular: false,
    },
  ];

  return (
    // <div className="relative py-24 bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 overflow-hidden">
    <div className="relative py-24 overflow-hidden ">
      {/* Enhanced Moving Background Text */}
      <div className="absolute inset-0 pointer-events-none opacity-[.08]">
        {/* Layer 1 - Top */}
        <div className="absolute top-20 left-0 w-[200%] hidden md:block">
          <div className="animate-slide-right-fast text-[8rem] lg:text-[12rem] font-black text-[#009F8A] whitespace-nowrap leading-none tracking-wider">
            ★ BEST SELLING ★ FRESHLY BAKED ★ DELICIOUS ★ BEST SELLING ★ FRESHLY
            BAKED ★ DELICIOUS ★
          </div>
        </div>

        {/* Layer 2 - Middle */}
        <div className="absolute top-1/2 -translate-y-1/2 left-0 w-[200%] hidden md:block">
          <div className="animate-slide-left-medium text-[10rem] lg:text-[16rem] font-black text-[#009F8A] whitespace-nowrap leading-none tracking-widest">
            COOKIES • COOKIES • COOKIES • COOKIES • COOKIES • COOKIES •
          </div>
        </div>

        {/* Layer 3 - Bottom */}
        <div className="absolute bottom-20 left-0 w-[200%] hidden md:block">
          <div className="animate-slide-right-slow text-[6rem] lg:text-[10rem] font-black text-[#009F8A] whitespace-nowrap leading-none tracking-wider">
            ✦ HOMEMADE ✦ QUALITY ✦ TASTE ✦ HOMEMADE ✦ QUALITY ✦ TASTE ✦
          </div>
        </div>

        {/* Layer 4 - Diagonal */}
        {/* <div className="absolute top-1/4 left-0 w-[200%] transform rotate-12">
          <div className="animate-slide-left-fast text-[4rem] lg:text-[8rem] font-black text-teal-600 whitespace-nowrap leading-none tracking-widest opacity-50">
            ARTISAN • PREMIUM • GOURMET • ARTISAN • PREMIUM • GOURMET •
          </div>
        </div> */}
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-6">
        {/* Section Title */}
        <div className="text-center mb-20">
          <h2 className="text-6xl lg:text-8xl font-black text-gray-900 mb-6 leading-tight">
            BEST{" "}
            <span className="text-transparent bg-clip-text bg-[#009F8A]">
              SELLING
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Our customers can't get enough of these handcrafted cookies made
            with premium ingredients
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {products.map((product) => (
            <div
              key={product.id}
              className="group relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-orange-100"
            >
              {/* Product Image - Positioned at top */}
              <div className="relative h-64 overflow-hidden bg-gradient-to-br from-orange-50 to-amber-50">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Product Info */}
              <div className="p-6">
                {/* Rating */}
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.floor(product.rating)
                            ? "text-orange-400 fill-current"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm font-bold text-gray-700">
                    {product.rating}
                  </span>
                  <span className="text-xs text-gray-500">
                    ({product.reviews} reviews)
                  </span>
                </div>

                {/* Product Name */}
                <h3 className="text-2xl font-black text-gray-900 mb-2 group-hover:text-[#009F8A] transition-colors duration-300">
                  {product.name}
                </h3>

                <p className="text-gray-600 font-medium mb-4 text-sm">
                  {product.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20">
          <button className="bg-[#009F8A] text-white font-black px-16 py-5 rounded-full text-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
            EXPLORE ALL FLAVORS
          </button>
        </div>
      </div>

      {/* Enhanced CSS Animations */}
      <style jsx>{`
        @keyframes slide-right-fast {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }

        @keyframes slide-left-medium {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }

        @keyframes slide-right-slow {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(50%);
          }
        }

        @keyframes slide-left-fast {
          0% {
            transform: translateX(100%) rotate(12deg);
          }
          100% {
            transform: translateX(-100%) rotate(12deg);
          }
        }

        .animate-slide-right-fast {
          animation: slide-right-fast 20s linear infinite;
        }

        .animate-slide-left-medium {
          animation: slide-left-medium 35s linear infinite;
        }

        .animate-slide-right-slow {
          animation: slide-right-slow 45s linear infinite;
        }

        .animate-slide-left-fast {
          animation: slide-left-fast 25s linear infinite;
        }
      `}</style>
    </div>
  );
}
