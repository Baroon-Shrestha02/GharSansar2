import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

const ServiceFAQ = () => {
  const [activeQuestion, setActiveQuestion] = useState(0);

  const faqs = [
    {
      question: "What services does Ghar Sansar provide?",
      answer:
        "Ghar Sansar offers end-to-end home solutions including project consultation, design & planning, material procurement, construction & implementation, and final handover with support. We guide you at every step of building your dream home.",
    },
    {
      question: "How long does the entire process take?",
      answer:
        "The timeline depends on your project size and complexity. Typical durations range from 1-2 days for consultation, 3-5 days for design planning, 2-4 days for material procurement, and variable time for construction. We provide a clear schedule after the initial consultation.",
    },
    {
      question: "Do you handle interior design and furniture?",
      answer:
        "Yes, our team provides interior design, furniture, and décor selection services. We ensure that your home looks perfect and aligns with your style and budget.",
    },
    {
      question: "Do you provide quality assurance and support?",
      answer:
        "Absolutely! Every stage of construction is monitored for quality. After handover, we provide guidance on maintenance, warranty information, and ongoing support to ensure your home remains in top condition.",
    },
    {
      question: "Can I make modifications during the project?",
      answer:
        "Yes, we accommodate reasonable modifications during the design and implementation stages. Our team will guide you on how changes may affect timelines and budget.",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto p-8 bg-white py-20">
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
        <Link to="/faq">
          <span className="text-secondary">More FAQ's</span>
        </Link>
      </div>
    </div>
  );
};

export default ServiceFAQ;
