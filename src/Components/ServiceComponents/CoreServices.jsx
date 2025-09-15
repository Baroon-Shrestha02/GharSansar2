import React, { useEffect, useState } from "react";
import {
  CheckCircle,
  ArrowRight,
  Sparkles,
  X,
  Home,
  ShoppingCart,
  Palette,
} from "lucide-react";
import servicesData from "./services";

// Add icons and colors to the imported services
const services = servicesData.map((service, index) => {
  const icons = ["🏠", "🛒", "🎨"];
  const colors = [
    "from-blue-500 to-cyan-500",
    "from-emerald-500 to-teal-500",
    "from-purple-500 to-pink-500",
  ];

  return {
    ...service,
    icon: icons[index] || "🏠",
    color: colors[index] || "from-blue-500 to-cyan-500",
  };
});

export default function CoreServices() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  // Process steps for modal
  const processSteps = [
    {
      step: 1,
      title: "Initial Consultation",
      description:
        "We start with understanding your specific needs and requirements for your project.",
      duration: "30 mins",
      icon: Home,
    },
    {
      step: 2,
      title: "Project Planning",
      description:
        "Our team creates a detailed plan tailored to your budget and timeline.",
      duration: "1-2 days",
      icon: ShoppingCart,
    },
    {
      step: 3,
      title: "Implementation",
      description:
        "We execute the plan with regular updates and quality assurance.",
      duration: "Varies",
      icon: Palette,
    },
    {
      step: 4,
      title: "Delivery & Support",
      description:
        "Final delivery with ongoing support to ensure your complete satisfaction.",
      duration: "Ongoing",
      icon: CheckCircle,
    },
  ];

  const openModal = (service) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedService(null);
  };

  useEffect(() => {
    if (isModalOpen) {
      document.body.classList.add("overflow-hidden"); // disable page scroll
      document.querySelector("nav")?.classList.add("hidden"); // hide navbar
    } else {
      document.body.classList.remove("overflow-hidden");
      document.querySelector("nav")?.classList.remove("hidden");
    }

    return () => {
      // cleanup
      document.body.classList.remove("overflow-hidden");
      document.querySelector("nav")?.classList.remove("hidden");
    };
  }, [isModalOpen]);

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 -mt-30 z-20 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-emerald-400/20 to-cyan-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-6 py-16 relative z-10">
        {/* Header Section */}
        <div className="flex items-center justify-center flex-col gap-6 mb-20">
          <div className="flex items-center gap-3 mb-4">
            <Sparkles className="w-8 h-8 text-indigo-600" />
            <span className="text-sm font-semibold text-indigo-600 uppercase tracking-wider">
              Our Expertise
            </span>
          </div>

          <h2 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-slate-800 via-slate-700 to-slate-600 bg-clip-text text-transparent text-center leading-tight">
            Our Services
          </h2>

          <p className="text-lg md:text-xl text-slate-600 max-w-4xl text-center leading-relaxed">
            From construction materials to household appliances and home décor,
            we provide everything you need to build and beautify your dream
            home.
          </p>

          <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"></div>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group relative bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-white/50 ${
                hoveredIndex === index ? "scale-105" : ""
              }`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Gradient background overlay */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group rounded-3xl transition-opacity duration-500`}
              ></div>

              {/* Service Icon */}
              <div className="relative z-10 mb-6">
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center text-2xl shadow-lg group-hover:scale-110 transition-transform duration-300`}
                >
                  {service.icon}
                </div>
              </div>

              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-slate-800 mb-3 group-hover:text-slate-900 transition-colors">
                  {service.company}
                </h3>

                <p className="text-slate-600 mb-6 leading-relaxed">
                  {service.tagline}
                </p>

                {/* Services List */}
                <ul className="space-y-3 mb-8">
                  {service.services.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-slate-700 group/item hover:text-slate-900 transition-colors"
                    >
                      <CheckCircle className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0 group-hover/item:scale-110 transition-transform" />
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <button
                  onClick={() => openModal(service)}
                  className={`w-full bg-gradient-to-r ${service.color} text-white py-3 px-6 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 group/btn`}
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>

              {/* Hover glow effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-3xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20 flex flex-col items-center gap-2">
          <button className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-8 py-4 rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            Get Started Today
          </button>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="sticky top-0 bg-white border-b border-gray-100 p-6 rounded-t-3xl">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div
                    className={`w-12 h-12 bg-gradient-to-br ${selectedService?.color} rounded-xl flex items-center justify-center text-xl`}
                  >
                    {selectedService?.icon}
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-slate-800">
                      How to Get {selectedService?.company}
                    </h2>
                    <p className="text-slate-600">
                      Step-by-step process to get started
                    </p>
                  </div>
                </div>
                <button
                  onClick={closeModal}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <X className="w-6 h-6 text-slate-500" />
                </button>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-6">
              <div className="space-y-6">
                {processSteps.map((step, index) => {
                  const IconComponent = step.icon;
                  return (
                    <div key={step.step} className="flex gap-4">
                      {/* Step Number and Icon */}
                      <div className="flex flex-col items-center">
                        <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                          {step.step}
                        </div>
                        {index < processSteps.length - 1 && (
                          <div className="w-0.5 h-16 bg-gradient-to-b from-indigo-200 to-purple-200 mt-4"></div>
                        )}
                      </div>

                      {/* Step Content */}
                      <div className="flex-1 pb-8">
                        <div className="bg-gradient-to-r from-slate-50 to-gray-50 p-6 rounded-2xl">
                          <div className="flex items-center gap-3 mb-3">
                            <IconComponent className="w-6 h-6 text-indigo-600" />
                            <h3 className="text-xl font-semibold text-slate-800">
                              {step.title}
                            </h3>
                            <span className="ml-auto text-sm text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full">
                              {step.duration}
                            </span>
                          </div>
                          <p className="text-slate-600 leading-relaxed">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Modal Footer */}
              <div className="border-t border-gray-100 pt-6 mt-8">
                <div className="flex flex-col sm:flex-row gap-4 justify-between items-center">
                  <div className="text-center sm:text-left">
                    <p className="text-slate-600 text-sm">
                      Ready to start your journey?
                    </p>
                    <p className="text-slate-800 font-semibold">
                      Get in touch with our team today!
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <button
                      onClick={closeModal}
                      className="px-6 py-3 border border-gray-300 text-slate-600 rounded-xl hover:bg-gray-50 transition-colors"
                    >
                      Close
                    </button>
                    <button className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 shadow-lg">
                      Start Consultation
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
