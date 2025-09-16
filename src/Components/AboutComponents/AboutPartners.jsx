import React, { useEffect, useState, useRef } from "react";
import {
  CheckCircle,
  ArrowRight,
  X,
  Phone,
  MapPin,
  Users,
  Award,
  Star,
  Calendar,
  Hammer,
  Home,
  Zap,
  Palette,
  Mail,
  ExternalLink,
} from "lucide-react";
import Partners from "./Partner";
import { Link } from "react-router-dom";

export default function AboutPartners() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  const scrollYRef = useRef(0);

  const getCompanyIcon = (company) => {
    if (company.includes("Ghar Sansar")) return Home;
    if (company.includes("GS Alliance")) return Zap;
    if (company.includes("Delight Color")) return Palette;
    return Home;
  };

  const getCardColor = (index) => {
    const colors = [
      "from-blue-500 to-blue-600",
      "from-emerald-500 to-emerald-600",
      "from-amber-500 to-amber-600",
    ];
    return colors[index % colors.length];
  };

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
      scrollYRef.current = window.scrollY;
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isModalOpen]);

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-50 to-white py-20">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold text-gray-900 mb-4">
            Trusted Partners
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto px-4">
            Comprehensive solutions for all your construction, appliance, and
            interior design needs.
          </p>
        </div>

        {/* Enhanced Cards Grid */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          {Partners.map((service, index) => {
            const IconComponent = getCompanyIcon(service.company);
            const isHovered = hoveredIndex === index;

            return (
              <div
                key={index}
                className={`group relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 cursor-pointer overflow-hidden border border-gray-100 ${
                  isHovered ? "scale-105 " : ""
                }`}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                onClick={() => openModal(service)}
              >
                {/* Gradient Header */}
                <div className="h-24 sm:h-32 bg-gradient-to-r relative overflow-hidden">
                  <div className="absolute inset-0">
                    <img
                      src={service.bgImg}
                      alt=""
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/50"></div>
                  </div>

                  {/* Animated background shapes */}
                  <div className="absolute top-4 right-4 w-12 h-12 sm:w-16 sm:h-16 bg-white/10 rounded-full animate-pulse"></div>
                  <div className="absolute -top-2 -right-2 w-16 h-16 sm:w-24 sm:h-24 bg-white/5 rounded-full"></div>

                  {/* Icon */}
                  <div className="absolute top-4 left-4 sm:top-6 sm:left-6">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                      <img src={service.logo} alt="" className="rounded-xl" />
                    </div>
                  </div>

                  {/* Projects badge */}
                  <div
                    className={`absolute bottom-2 right-2 sm:bottom-4 sm:right-4 bg-white/20 backdrop-blur-sm rounded-full px-2 py-1 sm:px-3 sm:py-1 transition-all duration-300 ${
                      isHovered ? "scale-105" : ""
                    }`}
                  >
                    <span className="text-xs font-semibold text-white">
                      {service.projects} Projects
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
                    {service.company}
                  </h3>

                  <p
                    className="text-gray-600 text-sm mb-4 leading-relaxed"
                    style={{
                      display: "-webkit-box",
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden",
                    }}
                  >
                    {service.tagline}
                  </p>

                  {/* Stats */}
                  <div className="flex items-center justify-between mb-4 sm:mb-6">
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <Calendar className="w-4 h-4" />
                      <span>Since {service.established}</span>
                    </div>
                  </div>

                  {/* View Details Button */}
                  <button
                    className={`w-full bg-gray-50 hover:bg-gray-100 text-gray-700 py-3 px-4 rounded-xl font-medium transition-all duration-300 flex items-center justify-center gap-2 group/btn ${
                      isHovered ? "bg-gray-100" : ""
                    }`}
                  >
                    <span>View Details</span>
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                  </button>
                </div>

                {/* Hover overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${getCardColor(
                    index
                  )} opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none`}
                ></div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Enhanced Modal */}
      {isModalOpen && selectedService && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-2 sm:p-4">
          <div className="bg-white rounded-lg sm:rounded-2xl shadow-2xl w-full max-w-6xl max-h-[95vh] sm:max-h-[90vh] overflow-hidden">
            <div className="flex h-full flex-col lg:flex-row max-h-[95vh] sm:max-h-[90vh]">
              {/* Left Side - Logo and Company Name */}
              <div className="w-full lg:w-80 relative bg-gradient-to-br from-gray-50 to-gray-100 flex flex-col lg:min-h-0 min-h-[200px]">
                <div className="absolute inset-0">
                  <img
                    src={selectedService.bgImg}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/50"></div>
                </div>

                {/* Logo Section */}
                <div className="flex-1 flex items-center justify-center p-4 sm:p-8 z-10 lg:block hidden">
                  <div className="text-center">
                    <div className="w-24 h-24 sm:w-32 sm:h-32 mx-auto mb-4 sm:mb-6 rounded-full overflow-hidden shadow-lg">
                      <img
                        src={selectedService.logo}
                        alt={selectedService.company}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>

                {/* Company Name at Bottom */}
                <div className="p-4 sm:p-6 bg-white border-t border-gray-200 z-10">
                  <div className="flex items-center gap-3 sm:gap-4 lg:block lg:text-center">
                    <div className="h-12 w-12 sm:h-16 sm:w-16 lg:mx-auto lg:mb-2">
                      <img
                        src={selectedService.logo}
                        alt=""
                        className="w-full h-full rounded-full object-cover"
                      />
                    </div>
                    <div>
                      <h2 className="text-lg sm:text-2xl font-bold text-gray-900 mb-1">
                        {selectedService.company}
                      </h2>
                      <p className="text-xs sm:text-sm text-gray-600">
                        {selectedService.motto}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Side - Content */}
              <div className="flex-1 flex flex-col min-h-0">
                {/* Header with Close Button */}
                <div className="flex items-center justify-between p-4 sm:p-6 border-b border-gray-200 flex-shrink-0">
                  <div className="flex items-center gap-3">
                    {React.createElement(
                      getCompanyIcon(selectedService.company),
                      {
                        className: "w-5 h-5 sm:w-6 sm:h-6 text-blue-600",
                      }
                    )}
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900">
                      Company Details
                    </h3>
                  </div>
                  <button
                    onClick={closeModal}
                    className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                  >
                    <X className="w-5 h-5 text-gray-500" />
                  </button>
                </div>

                {/* Scrollable Content */}
                <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6 sm:space-y-8">
                  {/* About Section */}
                  <div>
                    <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-3">
                      About Us
                    </h4>
                    <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                      {selectedService.description}
                    </p>
                  </div>

                  {/* Services and Specialties */}
                  <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 sm:gap-8">
                    <div>
                      <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                        <Hammer className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
                        Services
                      </h4>
                      <div className="space-y-2">
                        {selectedService.services.map((service, index) => (
                          <div
                            key={index}
                            className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg"
                          >
                            <CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0" />
                            <span className="text-gray-700 text-sm">
                              {service}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                        <Award className="w-4 h-4 sm:w-5 sm:h-5 text-purple-600" />
                        Specialties
                      </h4>
                      <div className="space-y-2">
                        {selectedService.specialties.map((specialty, index) => (
                          <div
                            key={index}
                            className="flex items-center gap-3 p-3 bg-purple-50 rounded-lg"
                          >
                            <Star className="w-4 h-4 text-purple-600 flex-shrink-0" />
                            <span className="text-gray-700 text-sm">
                              {specialty}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Achievements */}
                  <div>
                    <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                      <Award className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-600" />
                      Achievements
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {selectedService.achievements.map(
                        (achievement, index) => (
                          <div
                            key={index}
                            className="p-3 bg-emerald-50 rounded-lg border border-emerald-100"
                          >
                            <div className="flex items-start gap-2">
                              <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-gray-700 text-sm">
                                {achievement}
                              </span>
                            </div>
                          </div>
                        )
                      )}
                    </div>
                  </div>

                  {/* Contact Info */}
                  <div className="bg-gray-50 rounded-xl p-4 sm:p-6">
                    <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-4">
                      Contact Information
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <div className="text-center">
                        <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                          <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
                        </div>
                        <p className="text-sm font-medium text-gray-900 mb-1">
                          Phone
                        </p>
                        <p className="text-xs sm:text-sm text-gray-600 break-all">
                          {selectedService.contactInfo.phone}
                        </p>
                      </div>
                      <div className="text-center">
                        <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                          <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
                        </div>
                        <p className="text-sm font-medium text-gray-900 mb-1">
                          Email
                        </p>
                        <p className="text-xs sm:text-sm text-gray-600 break-all">
                          {selectedService.contactInfo.email}
                        </p>
                      </div>
                      <div className="text-center">
                        <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                          <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
                        </div>
                        <p className="text-sm font-medium text-gray-900 mb-1">
                          Location
                        </p>
                        <p className="text-xs sm:text-sm text-gray-600 text-center">
                          {selectedService.contactInfo.address}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Footer */}
                <div className="border-t border-gray-200 p-4 sm:p-6 flex-shrink-0">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <div>
                      <p className="text-gray-600 text-sm mb-1">
                        Ready to work together?
                      </p>
                      <p className="font-semibold text-gray-900 text-sm sm:text-base">
                        Get in touch for a consultation
                      </p>
                    </div>
                    <div className="flex gap-3 w-full sm:w-auto">
                      <button
                        onClick={closeModal}
                        className="flex-1 sm:flex-none px-4 sm:px-6 py-2.5 border border-gray-300 text-gray-600 rounded-xl hover:bg-gray-50 transition-colors font-medium text-sm sm:text-base"
                      >
                        Close
                      </button>
                      <Link to="/contact" className="flex-1 sm:flex-none">
                        <button className="w-full px-4 sm:px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl transition-colors font-medium flex items-center justify-center gap-2 text-sm sm:text-base">
                          Contact
                          <ExternalLink className="w-4 h-4" />
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        // </div>
        // </div>
      )}
    </section>
  );
}
