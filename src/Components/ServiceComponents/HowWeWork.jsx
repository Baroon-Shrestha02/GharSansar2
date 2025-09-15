import React, { useState, useEffect } from "react";
import {
  Calendar,
  Users,
  Hammer,
  CheckCircle,
  ArrowRight,
  Clock,
  Star,
  Play,
  Pause,
  ChevronLeft,
  ChevronRight,
  Award,
  Target,
  Zap,
  X,
} from "lucide-react";

// Mock WorkProcess data - replace with your actual import
const WorkProcess = [
  {
    id: 1,
    title: "Project Discovery",
    description:
      "We dive deep into understanding your vision, requirements, and goals through detailed consultation.",
    icon: "Target",
    duration: "1-2 Days",
    details: [
      "Initial consultation call",
      "Site visit and assessment",
      "Budget planning and timeline",
      "Requirements documentation",
    ],
    color: "from-blue-500 to-cyan-500",
    bgColor: "from-blue-50 to-cyan-50",
  },
  {
    id: 2,
    title: "Design & Planning",
    description:
      "Our expert team creates comprehensive plans and designs tailored to your specific needs.",
    icon: "Calendar",
    duration: "3-5 Days",
    details: [
      "Detailed project planning",
      "3D visualizations",
      "Material selection",
      "Final approval process",
    ],
    color: "from-emerald-500 to-teal-500",
    bgColor: "from-emerald-50 to-teal-50",
  },
  {
    id: 3,
    title: "Implementation",
    description:
      "Professional execution with regular updates, quality checks, and milestone tracking.",
    icon: "Hammer",
    duration: "Variable",
    details: [
      "Project kickoff meeting",
      "Daily progress updates",
      "Quality assurance checks",
      "Milestone completion",
    ],
    color: "from-purple-500 to-pink-500",
    bgColor: "from-purple-50 to-pink-50",
  },
  {
    id: 4,
    title: "Delivery & Support",
    description:
      "Final handover with comprehensive warranty and ongoing support for complete satisfaction.",
    icon: "Award",
    duration: "Ongoing",
    details: [
      "Final quality inspection",
      "Project handover",
      "Warranty documentation",
      "Ongoing support",
    ],
    color: "from-orange-500 to-red-500",
    bgColor: "from-orange-50 to-red-50",
  },
];

const iconMap = {
  Target,
  Calendar,
  Hammer,
  Award,
  Users,
  CheckCircle,
  Clock,
  Star,
  Zap,
};

export default function HowWeWork() {
  const [activeStep, setActiveStep] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const [selectedStep, setSelectedStep] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Auto-advance steps
  useEffect(() => {
    if (!isAutoPlay) return;

    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % WorkProcess.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlay]);

  // Modal scroll management
  useEffect(() => {
    if (isModalOpen) {
      const scrollY = window.scrollY;
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = "100%";
      document.body.style.overflowY = "hidden";
    } else {
      const scrollY = document.body.style.top;
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      document.body.style.overflowY = "";

      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY || "0") * -1);
      }
    }

    return () => {
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      document.body.style.overflowY = "";
    };
  }, [isModalOpen]);

  const handleStepClick = (index) => {
    setActiveStep(index);
    setIsAutoPlay(false);
  };

  const openModal = (step) => {
    setSelectedStep(step);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedStep(null);
  };

  const nextStep = () => {
    setActiveStep((prev) => (prev + 1) % WorkProcess.length);
  };

  const prevStep = () => {
    setActiveStep(
      (prev) => (prev - 1 + WorkProcess.length) % WorkProcess.length
    );
  };

  return (
    <section className="py-20 bg-secondary text-white relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl "></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl "></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl "></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            How We Work
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Experience our streamlined process designed to bring your vision to
            life with precision, transparency, and exceptional results.
          </p>
        </div>

        {/* Interactive Timeline */}
        <div className="max-w-6xl mx-auto mb-16">
          {/* Progress Bar */}
          <div className="relative mb-12">
            <div className="flex justify-between items-center">
              {WorkProcess.map((step, index) => {
                const IconComponent = iconMap[step.icon] || Target;
                return (
                  <button
                    key={step.id}
                    onClick={() => handleStepClick(index)}
                    className={`relative z-10 w-16 h-16 rounded-full flex items-center justify-center transition-all duration-500 ${
                      index <= activeStep
                        ? `bg-gradient-to-r ${step.color} text-white shadow-lg transform scale-110`
                        : "bg-slate-700 text-gray-400 hover:bg-slate-600"
                    }`}
                  >
                    <IconComponent className="w-8 h-8" />
                    {index <= activeStep && (
                      <div className="absolute inset-0 rounded-full bg-white/20 animate-ping"></div>
                    )}
                  </button>
                );
              })}
            </div>

            {/* Progress Line */}
            <div className="absolute top-8 left-8 right-8 h-1 bg-slate-700 rounded-full">
              <div
                className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-1000 ease-out"
                style={{
                  width: `${(activeStep / (WorkProcess.length - 1)) * 100}%`,
                }}
              ></div>
            </div>

            {/* Step Numbers */}
            <div className="flex justify-between items-center mt-4">
              {WorkProcess.map((step, index) => (
                <div key={step.id} className="text-center">
                  <div
                    className={`text-sm font-medium ${
                      index <= activeStep ? "text-white" : "text-gray-500"
                    }`}
                  >
                    Step {index + 1}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Active Step Display */}
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-3xl p-8 border border-slate-700/50 shadow-2xl">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Left Content */}
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-4xl font-bold text-transparent bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text">
                    0{activeStep + 1}
                  </span>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-1">
                      {WorkProcess[activeStep].title}
                    </h3>
                    <div className="flex items-center gap-2 text-sm text-gray-400">
                      <Clock className="w-4 h-4" />
                      <span>{WorkProcess[activeStep].duration}</span>
                    </div>
                  </div>
                </div>

                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  {WorkProcess[activeStep].description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {WorkProcess[activeStep].details.map((detail, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-slate-700/50 text-gray-300 rounded-full text-sm border border-slate-600/50"
                    >
                      {detail}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => openModal(WorkProcess[activeStep])}
                  className={`bg-gradient-to-r ${WorkProcess[activeStep].color} text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 flex items-center gap-2 group`}
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

              {/* Right Visual */}
              <div
                className={`bg-gradient-to-br ${WorkProcess[activeStep].bgColor} rounded-2xl p-8 text-slate-800`}
              >
                <div className="text-center">
                  <div
                    className={`w-20 h-20 bg-gradient-to-r ${WorkProcess[activeStep].color} rounded-full flex items-center justify-center text-white mx-auto mb-6 shadow-lg`}
                  >
                    {React.createElement(
                      iconMap[WorkProcess[activeStep].icon] || Target,
                      { className: "w-10 h-10" }
                    )}
                  </div>
                  <h4 className="text-xl font-bold mb-4">
                    Step {activeStep + 1} Highlights
                  </h4>
                  <ul className="space-y-2 text-left">
                    {WorkProcess[activeStep].details.map((detail, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                        <span className="text-sm">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Controls */}
        <div className="flex justify-center items-center gap- mb-12">
          <button
            onClick={prevStep}
            className="p-3 bg-slate-800/50 hover:bg-slate-700/50 rounded-full border border-slate-600/50 transition-colors group"
          >
            <ChevronLeft className="w-5 h-5 group-hover:-translate-x-0.5 transition-transform" />
          </button>

          <button
            onClick={() => setIsAutoPlay(!isAutoPlay)}
            className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 flex items-center gap-2 
            `}
          >
            {isAutoPlay ? (
              <>
                <Pause className="w-4 h-4" />
              </>
            ) : (
              <>
                <Play className="w-4 h-4" />
              </>
            )}
          </button>

          <button
            onClick={nextStep}
            className="p-3 bg-slate-800/50 hover:bg-slate-700/50 rounded-full border border-slate-600/50 transition-colors group"
          >
            <ChevronRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>

        {/* All Steps Grid */}

        {/* Call to Action */}
      </div>

      {/* Enhanced Modal */}
      {isModalOpen && selectedStep && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-3xl w-full max-h-[85vh] overflow-hidden flex flex-col">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-100 bg-white">
              <div className="flex items-center gap-4">
                <div
                  className={`w-16 h-16 bg-gradient-to-r ${selectedStep.color} rounded-2xl flex items-center justify-center text-white shadow-lg`}
                >
                  {React.createElement(iconMap[selectedStep.icon] || Target, {
                    className: "w-8 h-8",
                  })}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    {selectedStep.title}
                  </h3>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Clock className="w-4 h-4" />
                    <span>Duration: {selectedStep.duration}</span>
                  </div>
                </div>
              </div>
              <button
                onClick={closeModal}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X className="w-6 h-6 text-gray-500" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="flex-1 overflow-y-auto">
              <div className="p-6">
                <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                  {selectedStep.description}
                </p>

                <div className="bg-gray-50 rounded-2xl p-6 mb-6">
                  <h4 className="font-semibold text-gray-900 mb-4 text-lg">
                    What's Included in This Step:
                  </h4>
                  <div className="grid md:grid-cols-2 gap-3">
                    {selectedStep.details.map((detail, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                        <span className="text-gray-700">{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6">
                  <h4 className="font-semibold text-gray-900 mb-3">
                    Why This Step Matters
                  </h4>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    This step ensures we maintain the highest quality standards
                    while keeping you informed throughout the process. Our
                    systematic approach guarantees successful project outcomes
                    and exceeds your expectations.
                  </p>
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="border-t border-gray-100 p-6 bg-white">
              <div className="flex flex-col sm:flex-row gap-4 justify-between items-center">
                <div className="text-center sm:text-left">
                  <p className="text-gray-600 text-sm">
                    Questions about this step?
                  </p>
                  <p className="text-gray-900 font-semibold">
                    Let's discuss your project requirements!
                  </p>
                </div>
                <div className="flex gap-3">
                  <button
                    onClick={closeModal}
                    className="px-6 py-2.5 border border-gray-300 text-gray-600 rounded-xl hover:bg-gray-50 transition-colors font-medium"
                  >
                    Close
                  </button>
                  <button
                    className={`px-6 py-2.5 bg-gradient-to-r ${selectedStep.color} text-white rounded-xl hover:shadow-lg transition-all duration-300 font-medium`}
                  >
                    Get Started
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
