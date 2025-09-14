import { Star } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";

export default function HomeProducts() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const products = [
    {
      id: "croissant",
      name: "BUTTER CROISSANT",
      image: "croissant.jpg",
      description: "Box of 6 • Fresh daily",
      price: 240,
      rating: 4.9,
      reviews: 156,
      popular: true,
    },
    {
      id: "sourdough",
      name: "ARTISAN SOURDOUGH",
      image:
        "https://images.unsplash.com/photo-1509440159596-0249088772ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Whole loaf • 48hr fermentation",
      price: 180,
      rating: 4.8,
      reviews: 203,
      popular: false,
    },
    {
      id: "macarons",
      name: "FRENCH MACARONS",
      image:
        "https://images.unsplash.com/photo-1569864358642-9d1684040f43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Box of 12 • Assorted flavors",
      price: 320,
      rating: 4.9,
      reviews: 89,
      popular: true,
    },
    {
      id: "danish",
      name: "CHERRY DANISH",
      image:
        "https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Box of 4 • Seasonal fruit",
      price: 220,
      rating: 4.7,
      reviews: 134,
      popular: false,
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
            Latest{" "}
            <span className="text-transparent bg-clip-text bg-secondary">
              Products
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non
            numquam rem perspiciatis eveniet a veritatis qui nobis, nostrum
            inventore sint!
          </p>
        </div>

        <div className="">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8  mx-4">
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
                {/* Popular Badge */}
                {/* {product.popular && (
                <div className="absolute top-4 left-4 z-10 bg-[#009F8A] text-white px-3 py-1 rounded-full text-xs font-bold">
                  POPULAR
                </div>
              )} */}

                {/* Product Image */}
                <div className="relative h-64 overflow-hidden bg-gradient-to-br from-orange-50 to-amber-50">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-[#009F8A]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out"></div>

                {/* Product Info */}
                <div className="p-6 relative z-10">
                  {/* Rating */}
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 transition-colors duration-200 ${
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
                  <h3 className="text-2xl font-black text-gray-900 mb-2 group-hover:text-[#009F8A] transition-colors duration-300 ease-out">
                    {product.name}
                  </h3>

                  <p className="text-gray-600 font-medium mb-4 text-sm">
                    {product.description}
                  </p>

                  {/* Price */}
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-black text-[#009F8A]">
                      Rs. {product.price}
                    </span>
                    <button className="bg-gray-100 hover:bg-[#009F8A] hover:text-white text-gray-700 font-bold px-4 py-2 rounded-full text-sm transition-all duration-300 ease-out transform hover:scale-105">
                      Add to Cart
                    </button>
                  </div>
                </div>

                {/* Subtle shadow enhancement on hover */}
                <div className="absolute inset-0 rounded-3xl shadow-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out pointer-events-none"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20">
          <button className="bg-primary text-white font-black px-16 py-5 rounded-full text-xl transition-all duration-300 ease-out transform hover:scale-105 hover:shadow-2xl hover:bg-primary">
            EXPLORE ALL PRODUCTS
          </button>
        </div>
      </div>
    </div>
  );
}
