import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const HomeFAQ = () => {
  const [activeQuestion, setActiveQuestion] = useState(0);

  const faqs = [
    {
      question: "Who are Ghar Sansar, GS, and Delight?",
      answer:
        "They are trusted suppliers of house-building materials in Nepal. From cement, rods, and bricks to tiles, paint, and electrical items, they provide reliable products to make building and renovating your home easier.",
    },
    {
      question: "Are the products genuine and high quality?",
      answer:
        "Yes, all products from Ghar Sansar, GS, and Delight are sourced from certified manufacturers. Quality and durability are ensured so you can build with confidence.",
    },
    {
      question: "Do they offer home delivery?",
      answer:
        "Yes, delivery is available depending on the product and location. Heavy items like cement, rods, and sand are delivered directly to your site with proper handling.",
    },
    {
      question: "What are the payment options?",
      answer:
        "You can pay through cash, bank transfer, or popular digital wallets like eSewa and Khalti. Some bulk orders may also allow partial payment options.",
    },
    {
      question: "Can I return or exchange items?",
      answer:
        "Returns and exchanges are possible if products are unused and in original condition. For large items like tiles or plywood, please check with the supplier at the time of purchase.",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto p-8 bg-white">
      {/* Header */}
      <div className="mb-12">
        <h2 className="text-5xl md:text-7xl font-extrabold text-gray-900 mb-4">
          Got questions?
        </h2>
      </div>

      {/* FAQ Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-0">
        {/* Questions List */}
        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <motion.button
              key={index}
              onClick={() => setActiveQuestion(index)}
              className={`w-full text-left p-4 rounded-lg transition-all duration-200 ${
                activeQuestion === index
                  ? "bg-secondary text-white shadow-sm"
                  : "bg-gray-50 text-gray-700 hover:bg-gray-100"
              }`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="font-medium text-base">{faq.question}</div>
            </motion.button>
          ))}
        </div>

        {/* Answer Panel */}
        <div className="lg:pl-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeQuestion}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="bg-secondary rounded-lg p-8 min-h-[300px] flex flex-col justify-center"
            >
              <motion.h3
                className="text-xl font-semibold text-white mb-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1 }}
              >
                {faqs[activeQuestion].question}
              </motion.h3>

              <motion.p
                className="text-white leading-relaxed text-base"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                {faqs[activeQuestion].answer}
              </motion.p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
      <div className="flex gap-2 mt-6 items-center justify-center text-lg md:text-2xl">
        Still Have Queries?
        <span className="text-secondary">More FAQ's</span>
      </div>
    </div>
  );
};

export default HomeFAQ;
