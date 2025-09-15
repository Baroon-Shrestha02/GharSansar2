import React from "react";

const TestimonialsCarousel = () => {
  // Sample testimonials data matching the style from the image
  const testimonials = [
    {
      id: 1,
      text: "I purchased home fittings from Ghar Sansar and was impressed by the range of options. Their products are reliable and made my kitchen setup easier.",
      author: "Anil Sharma",
      image: "A",
      bgColor: "bg-emerald-700",
      textColor: "text-white",
    },
    {
      id: 2,
      text: "Delight has been my trusted place for construction equipment. Their delivery was quick, and the staff helped me pick the right tools.",
      author: "Bina Thapa",
      image: "B",
      bgColor: "bg-secondary",
      textColor: "text-white",
    },
    {
      id: 3,
      text: "I got tiles and bathroom fittings from GS. The designs were modern, and the quality has held up really well over time.",
      author: "Sanjay Koirala",
      image: "S",
      bgColor: "bg-emerald-700",
      textColor: "text-white",
    },
    {
      id: 4,
      text: "While building our new home, we bought several essentials from Ghar Sansar. Everything was reasonably priced and durable.",
      author: "Priya Adhikari",
      image: "P",
      bgColor: "bg-secondary",
      textColor: "text-white",
    },
    {
      id: 5,
      text: "Delight’s collection of hardware and electrical items made things simple for me. Great value and easy process overall.",
      author: "Ramesh Shrestha",
      image: "R",
      bgColor: "bg-emerald-700",
      textColor: "text-white",
    },
    {
      id: 6,
      text: "GS was very helpful during my house renovation. Their staff gave me genuine suggestions, and the items were high quality.",
      author: "Meena Gurung",
      image: "M",
      bgColor: "bg-secondary",
      textColor: "text-white",
    },
    {
      id: 7,
      text: "I ordered sanitary fittings from Ghar Sansar, and they turned out perfect. The whole buying process was smooth and professional.",
      author: "Deepak Joshi",
      image: "D",
      bgColor: "bg-emerald-700",
      textColor: "text-white",
    },
    {
      id: 8,
      text: "Delight and GS both have become my go-to for building supplies. Good service, affordable prices, and trustworthy quality.",
      author: "Kritika Lama",
      image: "K",
      bgColor: "bg-secondary",
      textColor: "text-white",
    },
  ];

  return (
    <div className="w-full py-16 ">
      <div className="text-center mb-20">
        <h2 className="text-5xl lg:text-7xl font-black text-gray-900 mb-6 leading-tight">
          Why People <span className=" text-secondary">Choose Us?</span>
        </h2>
        {/* <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Hear from our satisfied customers
        </p> */}
      </div>

      <div className="relative">
        {/* Horizontally scrollable container */}
        <div
          className="flex gap-8 overflow-x-auto scrollbar-hide px-12 py-4"
          style={{ scrollBehavior: "smooth" }}
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
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

        {/* Gradient overlays for visual effect */}
        <div className="absolute top-0 left-0 w-12 h-full bg-gradient-to-r from-gray-50 to-transparent pointer-events-none z-10"></div>
        <div className="absolute top-0 right-0 w-12 h-full bg-gradient-to-l from-gray-50 to-transparent pointer-events-none z-10"></div>
      </div>

      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};

export default TestimonialsCarousel;
