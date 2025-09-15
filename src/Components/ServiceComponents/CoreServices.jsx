import React, { useEffect, useState, useRef } from "react";
import {
  CheckCircle,
  ArrowRight,
  X,
  Phone,
  MapPin,
  Users,
  Award,
} from "lucide-react";
import servicesData from "./services";
import { Link } from "react-router-dom";

// Mock services data - replace with your actual import

export default function CoreServices() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  const scrollYRef = useRef(0);

  // Process steps for modal
  const processSteps = [
    {
      step: 1,
      title: "Initial Consultation",
      description:
        "We begin with a comprehensive discussion about your vision, requirements, and budget. Our experts will assess your needs and provide initial recommendations.",
      duration: "30-45 mins",
      icon: Phone,
    },
    {
      step: 2,
      title: "Site Assessment & Planning",
      description:
        "Our team conducts a thorough site visit and creates detailed plans. We'll provide you with timeline estimates and material specifications.",
      duration: "1-3 days",
      icon: MapPin,
    },
    {
      step: 3,
      title: "Project Execution",
      description:
        "We begin implementation with regular progress updates. Our quality assurance team ensures every phase meets our high standards.",
      duration: "Varies by project",
      icon: Users,
    },
    {
      step: 4,
      title: "Final Delivery & Warranty",
      description:
        "Project completion with thorough inspection, handover, and comprehensive warranty coverage for your peace of mind.",
      duration: "Ongoing support",
      icon: Award,
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

  // Enhanced scroll management
  useEffect(() => {
    if (isModalOpen) {
      scrollYRef.current = window.scrollY;
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollYRef.current}px`;
      document.body.style.left = "0";
      document.body.style.right = "0";
      document.body.style.width = "100%";
      document.body.style.overflowY = "hidden";

      const navbar = document.querySelector("nav");
      if (navbar) {
        navbar.style.display = "none";
      }
    } else {
      const y = scrollYRef.current;
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.right = "";
      document.body.style.width = "";
      document.body.style.overflowY = "";

      const navbar = document.querySelector("nav");
      if (navbar) {
        navbar.style.display = "";
      }

      window.scrollTo(0, y);
    }

    return () => {
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.right = "";
      document.body.style.width = "";
      document.body.style.overflowY = "";

      const navbar = document.querySelector("nav");
      if (navbar) {
        navbar.style.display = "";
      }
    };
  }, [isModalOpen]);

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-gray-50 via-white to-slate-50 py-20 overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-40 left-20 w-64 h-64 bg-gradient-to-r from-blue-100/30 to-purple-100/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 right-20 w-80 h-80 bg-gradient-to-r from-emerald-100/30 to-cyan-100/30 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Our Core Services
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive solutions for all your construction, appliance, and
            interior design needs. Quality craftsmanship backed by years of
            experience.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {servicesData.map((service, index) => (
            <div
              key={index}
              className={`group relative bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 overflow-hidden h-full flex flex-col ${
                hoveredIndex === index ? "shadow-lg -translate-y-1" : ""
              }`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Service Header */}
              <div className="p-6 border-b border-gray-50">
                <div className="flex items-center gap-4 justify-start  mb-4">
                  <div className="w-14 h-14  flex items-center justify-center text-2xl">
                    {/* {service.logo} */}
                    <img src={service.logo} alt="" className="rounded-xl" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 leading-tight">
                    {service.company}
                  </h3>
                </div>

                <p className="text-gray-600 text-sm font-medium mb-3">
                  {service.tagline}
                </p>

                <p className="text-gray-500 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Service Stats */}
              <div className="px-6 py-4 bg-gray-50/50">
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-lg font-bold text-gray-900">
                      {service.projects}
                    </div>
                    <div className="text-xs text-gray-500">
                      Projects Completed
                    </div>
                  </div>
                  <div>
                    <div className="text-lg font-bold text-gray-900">
                      {service.established}
                    </div>
                    <div className="text-xs text-gray-500">Established</div>
                  </div>
                </div>
              </div>

              {/* Services List */}
              <div className="p-6 pt-4 flex flex-col flex-1">
                <h4 className="font-semibold text-gray-900 mb-3 text-sm">
                  Our Services Include:
                </h4>
                <ul className="space-y-2 mb-6">
                  {service.services.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-2 text-gray-600 text-sm"
                    >
                      <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <button
                  onClick={() => openModal(service)}
                  className="mt-auto w-full bg-secondary text-white py-3 px-4 rounded-xl font-medium transition-all duration-300 flex items-center justify-center gap-2 group/btn text-sm"
                >
                  <span>View Process</span>
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-0.5 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        {/* <div className="text-center mt-16">
          <button className="bg-primary text-white px-8 py-4 rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            Get Started Today
          </button>
        </div> */}
      </div>

      {/* Enhanced Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[85vh] overflow-hidden flex flex-col">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-100 bg-white">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl flex items-center justify-center text-xl">
                  <img
                    src={selectedService?.logo}
                    alt=""
                    className="rounded-xl"
                  />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">
                    How {selectedService.company} Work
                  </h2>
                  <p className="text-gray-600 text-sm">
                    {selectedService?.company} • Step-by-step process
                  </p>
                </div>
              </div>
              <button
                onClick={closeModal}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X className="w-6 h-6 text-gray-500" />
              </button>
            </div>

            {/* Modal Content - Scrollable */}
            <div className="flex-1 overflow-y-auto">
              <div className="p-6">
                <div className="space-y-8">
                  {processSteps.map((step, index) => {
                    const IconComponent = step.icon;
                    return (
                      <div key={step.step} className="flex gap-6">
                        {/* Step Indicator */}
                        <div className="flex flex-col items-center">
                          <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                            {step.step}
                          </div>
                          {index < processSteps.length - 1 && (
                            <div className="w-0.5 h-16 bg-gradient-to-b from-blue-200 to-purple-200 mt-4"></div>
                          )}
                        </div>

                        {/* Step Content */}
                        <div className="flex-1">
                          <div className="bg-gray-50 p-6 rounded-xl">
                            <div className="flex items-center gap-3 mb-3">
                              <IconComponent className="w-5 h-5 text-blue-600" />
                              <h3 className="text-lg font-semibold text-gray-900">
                                {step.title}
                              </h3>
                              <span className="ml-auto text-xs text-blue-600 bg-blue-50 px-3 py-1 rounded-full font-medium">
                                {step.duration}
                              </span>
                            </div>
                            <p className="text-gray-600 text-sm leading-relaxed">
                              {step.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="border-t border-gray-100 p-6 bg-white">
              <div className="flex flex-col sm:flex-row gap-4 justify-between items-center">
                <div className="text-center sm:text-left">
                  <p className="text-gray-600 text-sm">
                    Ready to start your project?
                  </p>
                  <p className="text-gray-900 font-semibold">
                    Let's discuss your requirements today!
                  </p>
                </div>
                <div className="flex gap-3">
                  <button
                    onClick={closeModal}
                    className="px-6 py-2.5 border border-gray-300 text-gray-600 rounded-xl hover:bg-gray-50 transition-colors text-sm font-medium"
                  >
                    Close
                  </button>
                  <Link to="/contact">
                    <button className="px-6 py-2.5 bg-secondary text-white rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg text-sm font-medium">
                      Start Consultation
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
