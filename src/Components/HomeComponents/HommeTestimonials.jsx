import React from "react";

const TestimonialsCarousel = () => {
  // Sample testimonials data matching the style from the image
  const testimonials = [
    {
      id: 1,
      text: "Home is where the heart is—or is that cookies? Because many times our home has been at Bernice's, where the cookies are what all cookies should be.",
      author: "Time Out",
      logo: "Time Out",
      image:
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=120&h=120&fit=crop&crop=center",
      bgColor: "bg-emerald-700",
      textColor: "text-white",
    },
    {
      id: 2,
      text: "Why You Need To Go: This is one of those bakeries that's like stepping into a little oasis. Not only is the decor so beautiful and so serene, but the pastries themselves are incredible, too.",
      author: "MTL Blog",
      logo: "MTL BLOG",
      image:
        "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=120&h=120&fit=crop&crop=center",
      bgColor: "bg-[#009F8A]",
      textColor: "text-white",
    },
    {
      id: 3,
      text: "Bernice Bakery offers an exceptional selection of artisanal pastries and cakes. Every bite is a testament to their commitment to quality and craftsmanship.",
      author: "Food & Wine",
      logo: "F&W",
      image:
        "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=120&h=120&fit=crop&crop=center",
      bgColor: "bg-emerald-700",
      textColor: "text-white",
    },
    {
      id: 4,
      text: "A hidden gem in Montreal's bakery scene. The attention to detail in both presentation and taste makes Bernice a must-visit destination for any pastry lover.",
      author: "Eater Montreal",
      logo: "EATER",
      image:
        "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=120&h=120&fit=crop&crop=center",
      bgColor: "bg-[#009F8A]",
      textColor: "text-white",
    },
  ];

  // Create an extended array for seamless infinite scroll
  const extendedTestimonials = [
    ...testimonials,
    ...testimonials,
    ...testimonials,
  ];

  return (
    <div className="w-full py-16 bg-gray-50 overflow-hidden">
      <div className="text-center mb-20">
        <h2 className="text-6xl lg:text-8xl font-black text-gray-900 mb-6 leading-tight">
          Why People{" "}
          <span className="text-transparent bg-clip-text bg-[#009F8A]">
            Choose Us?
          </span>
        </h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Hear from our satisfied customers
        </p>
      </div>

      <div className="relative">
        {/* Infinite scrolling container */}
        <div className="flex gap-8 animate-scroll">
          {extendedTestimonials.map((testimonial, index) => (
            <div
              key={`${testimonial.id}-${index}`}
              className={`flex-shrink-0 w-96 h-80 ${testimonial.bgColor} rounded-3xl p-8 flex flex-col justify-between ${testimonial.textColor} shadow-lg hover:shadow-xl transition-shadow duration-300 relative overflow-hidden`}
            >
              {/* Background Image */}
              <div className="absolute top-6 right-6 w-20 h-24 bg-white/10 rounded-lg opacity-20"></div>

              {/* Quote icon */}
              <div className="mb-4">
                <svg
                  className="w-12 h-12 opacity-60"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-10zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" />
                </svg>
              </div>

              {/* Testimonial text */}
              <p className="text-lg leading-relaxed mb-6 flex-grow">
                {testimonial.text}
              </p>

              {/* Author/Logo */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img
                    src={testimonial.image}
                    alt={testimonial.author}
                    className="w-12 h-12 rounded-full object-cover border-2 border-white/20"
                  />
                  <div>
                    <div className="text-lg font-bold tracking-wider opacity-90">
                      {testimonial.logo}
                    </div>
                    <div className="text-sm opacity-70">
                      {testimonial.author}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Gradient overlays for seamless effect */}
        <div className="absolute top-0 left-0 w-12 h-full bg-gradient-to-r from-gray-50 to-transparent pointer-events-none z-10"></div>
        <div className="absolute top-0 right-0 w-12 h-full bg-gradient-to-l from-gray-50 to-transparent pointer-events-none z-10"></div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }

        .animate-scroll {
          animation: scroll 20s linear infinite;
        }

        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default TestimonialsCarousel;
