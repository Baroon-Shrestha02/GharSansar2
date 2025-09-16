import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Plus,
  Minus,
  University,
  MessageCircle,
  FileText,
  Briefcase,
  Award,
  Play,
} from "lucide-react";
import faqs from "./Questions";

export default function FAQquestions() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen my-12 px-4 md:px-8">
      <div className="flex flex-col lg:flex-row">
        {/* Title Section */}
        <div className="w-full lg:w-1/2 flex items-center justify-center bg-white lg:sticky lg:top-0 lg:h-screen mb-8 lg:mb-0">
          <div className="max-w-md p-4 md:p-8 text-center lg:text-left">
            <div className="relative">
              <div className="absolute -top-10 left-1/2 lg:left-0 -translate-x-1/2 lg:translate-x-0 opacity-30">
                {/* <img
                  src="Main/logo2.png"
                  alt="Logo"
                  className="h-[100px] object-contain"
                /> */}
              </div>

              {/* Main heading */}
              <div className="relative z-10">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-4">
                  Frequently <br className="hidden lg:block" />
                  Asked <br className="hidden lg:block" />
                  Questions
                </h1>
                <p className="text-gray-600 text-base md:text-lg">
                  Everything you need to know about studying in Japan
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* FAQs */}
        <div className="w-full lg:w-1/2">
          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="mb-4"
                >
                  {/* Question Header */}
                  <div className="flex items-start gap-4 mb-3">
                    <button
                      onClick={() => toggleFAQ(index)}
                      className="relative inline-block text-left focus:outline-none group"
                    >
                      <div className="bg-secondary text-white px-6 py-4 rounded-3xl transition-all duration-300 ease-in-out transform hover:scale-[1.02]">
                        <h3 className="font-medium text-base leading-relaxed">
                          {faq.question}
                        </h3>
                      </div>
                    </button>

                    {/* Toggle Icon */}
                    <motion.button
                      onClick={() => toggleFAQ(index)}
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="flex-shrink-0 w-12 h-12 bg-gray-200 hover:bg-gray-300 rounded-full flex items-center justify-center transition-all duration-300 focus:outline-none mt-2"
                    >
                      <Plus className="w-5 h-5 text-gray-600" />
                    </motion.button>
                  </div>

                  {/* Answer Content */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="content"
                        initial={{ height: 0, opacity: 0, y: -10 }}
                        animate={{
                          height: "auto",
                          opacity: 1,
                          y: 0,
                          transition: {
                            height: { duration: 0.4, ease: "easeOut" },
                            opacity: { duration: 0.3, delay: 0.1 },
                            y: { duration: 0.3, delay: 0.1 },
                          },
                        }}
                        exit={{
                          height: 0,
                          opacity: 0,
                          y: -10,
                          transition: {
                            height: { duration: 0.3, ease: "easeIn" },
                            opacity: { duration: 0.2 },
                            y: { duration: 0.2 },
                          },
                        }}
                        className="overflow-hidden"
                      >
                        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 ml-4">
                          <p className="text-gray-700 leading-relaxed text-base">
                            {faq.answer}
                          </p>
                          <p className="text-gray-500 text-sm mt-3 italic">
                            {faq.subtitle}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
