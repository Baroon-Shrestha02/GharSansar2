import React, { useState } from "react";
import {
  Mail,
  Phone,
  User,
  MessageCircle,
  MapPin,
  Clock,
  Building2,
} from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    partner: "ghar-sansar", // Default partner
  });

  // Partner data configuration
  const partners = {
    "ghar-sansar": {
      name: "Ghar Sansar Pvt. Ltd",
      phone: ["+977 984-7875763"],
      email: "bhimdang2012@gmail.com",
      location: {
        address: "Lamahi, Dang, Nepal",
        mapSrc:
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3728.988982107788!2d82.51910067569399!3d27.873557576087624!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39979852646fdb63%3A0x8ec1eea3f05a9cf8!2sP.C.O%20Road%2C%20Lamahi%2022414!5e1!3m2!1sen!2snp!4v1757928512487!5m2!1sen!2snp",
      },
      hours: {
        weekdays: "Sunday - Friday: 7:00 AM - 9:00 PM",
        weekend: "Saturday: 7:00 AM - 10:00 PM",
      },
      color: "#009F8A",
      description: "Your trusted home essentials partner",
    },
    delight: {
      name: "Delight Color World And Suppliers",
      phone: ["+977 984-7875763", "+977 9857855779"],
      email: "Delightdang@gmail.com",
      location: {
        address: "Lamahi, Dang,  Nepal",
        mapSrc:
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1864.4944907296997!2d82.52048929543025!3d27.873557594924474!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39979852646fdb63%3A0x8ec1eea3f05a9cf8!2sP.C.O%20Road%2C%20Lamahi%2022414!5e1!3m2!1sen!2snp!4v1757928078138!5m2!1sen!2snp",
      },
      hours: {
        weekdays: "Sunday - Friday: 8:00 AM - 8:00 PM",
        weekend: "Saturday: 8:00 AM - 9:00 PM",
      },
      color: "#E74C3C",
      description: "Bringing joy through quality products",
    },

    gs: {
      name: "GS Alliance Trading Pvt.Ltd ",
      phone: ["9801354730 - Lamahi Branch", "9801329559 - Ghorahi Branch"],
      email: "Gsalliancedang@gmail.com",
      location: {
        address: "Lamahi Gally, Namai, Nepal",
        mapSrc:
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3729.0937552792943!2d82.5181824756939!3d27.870513576089323!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3997990072825a19%3A0x2fce1dd93d123dea!2zS2FyYW7igJlzIEhvdXNl!5e1!3m2!1sen!2snp!4v1757928392347!5m2!1sen!2snp",
      },
      hours: {
        weekdays: "Sunday - Friday: 9:00 AM - 7:00 PM",
        weekend: "Saturday: 9:00 AM - 8:00 PM",
      },
      color: "#8E44AD",
      description: "Premium goods and services",
    },
  };

  const currentPartner = partners[formData.partner];

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Prepare submission data
    const submissionData = {
      formData: formData,
      partnerDetails: {
        name: currentPartner.name,
        email: currentPartner.email,
        phone: currentPartner.phone,
        color: currentPartner.color,
      },
      timestamp: new Date().toISOString(),
    };

    console.log("Form submitted:", submissionData);

    // Here you would typically send the data to your backend
    // Example API call structure:
    /*
    fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(submissionData)
    })
    .then(response => response.json())
    .then(data => {
      alert(`Message sent successfully to ${currentPartner.name}!`);
      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
        partner: formData.partner
      });
    })
    .catch(error => {
      console.error('Error:', error);
      alert('There was an error sending your message. Please try again.');
    });
    */

    alert(
      `Message submitted successfully to ${currentPartner.name}!\n\nYour message will be sent to: ${currentPartner.email}`
    );

    // Reset form (keeping selected partner)
    setFormData((prev) => ({
      name: "",
      email: "",
      phone: "",
      message: "",
      partner: prev.partner,
    }));
  };

  const handlePartnerChange = (e) => {
    const newPartner = e.target.value;
    setFormData((prev) => ({
      ...prev,
      partner: newPartner,
    }));

    // Smooth color transition effect
    document.documentElement.style.setProperty(
      "--partner-color",
      partners[newPartner].color
    );
  };

  // Set CSS custom property for smoother transitions
  React.useEffect(() => {
    document.documentElement.style.setProperty(
      "--partner-color",
      currentPartner.color
    );
  }, [currentPartner.color]);

  return (
    <section className="bg-gradient-to-b from-gray-200 to-white py-16 mx-12 px-8 rounded-t-3xl relative -mt-30 z-20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2
            className="text-4xl md:text-5xl font-serif font-bold mb-4 transition-colors duration-300"
            style={{ color: currentPartner.color }}
          >
            Get In Touch with {currentPartner.name}
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-2">
            {currentPartner.description}
          </p>
          <p className="text-gray-500">
            Visit us, call us, or send us a message. We're here to serve you!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Contact Details */}
          <div className="space-y-8">
            {/* Partner Selection Card */}
            <div className="bg-white rounded-3xl shadow-xl p-8">
              <h3
                className="text-xl font-serif font-bold mb-4"
                style={{ color: currentPartner.color }}
              >
                Select Partner
              </h3>
              <div
                className="flex items-center gap-3 border-2 border-gray-200 rounded-xl p-4 focus-within:ring-2 focus-within:ring-opacity-20 transition-all"
                style={{
                  borderColor: currentPartner.color,
                  "--tw-ring-color": `${currentPartner.color}33`,
                }}
              >
                <Building2
                  className="transition-colors"
                  style={{ color: currentPartner.color }}
                  size={20}
                />
                <select
                  name="partner"
                  value={formData.partner}
                  onChange={handlePartnerChange}
                  className="w-full focus:outline-none bg-transparent text-gray-700 font-medium"
                >
                  {Object.entries(partners).map(([key, partner]) => (
                    <option key={key} value={key} className="py-2">
                      {partner.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Contact Information Cards */}
            <div className="bg-white rounded-3xl shadow-xl p-8 space-y-6">
              <h3
                className="text-2xl font-serif font-bold mb-6"
                style={{ color: currentPartner.color }}
              >
                Contact Information
              </h3>

              {/* Location */}
              <div
                className="flex items-start gap-4 p-4 rounded-2xl border-l-4 transition-all duration-300"
                style={{
                  backgroundColor: `${currentPartner.color}0D`,
                  borderLeftColor: currentPartner.color,
                }}
              >
                <MapPin
                  className="mt-1 flex-shrink-0 transition-colors duration-300"
                  style={{ color: currentPartner.color }}
                  size={24}
                />
                <div>
                  <h4
                    className="font-semibold text-lg transition-colors duration-300"
                    style={{ color: currentPartner.color }}
                  >
                    Our Location
                  </h4>
                  <p className="text-gray-600 mt-1 whitespace-pre-line">
                    {currentPartner.location.address}
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div
                className="flex items-start gap-4 p-4 rounded-2xl border-l-4 transition-all duration-300"
                style={{
                  backgroundColor: `${currentPartner.color}0D`,
                  borderLeftColor: currentPartner.color,
                }}
              >
                <Phone
                  className="mt-1 flex-shrink-0 transition-colors duration-300"
                  style={{ color: currentPartner.color }}
                  size={24}
                />
                <div>
                  <h4
                    className="font-semibold text-lg transition-colors duration-300"
                    style={{ color: currentPartner.color }}
                  >
                    Phone
                  </h4>
                  <div className="text-gray-600 mt-1 space-y-1">
                    {currentPartner.phone.map((phone, index) => (
                      <p
                        key={index}
                        className="hover:text-gray-800 transition-colors cursor-pointer"
                        onClick={() => {
                          navigator.clipboard.writeText(
                            phone.replace(/[^+\d]/g, "")
                          );
                          alert(`Phone number ${phone} copied to clipboard!`);
                        }}
                      >
                        {phone}{" "}
                        <span className="ml-2 text-xs text-gray-400">
                          (click to copy)
                        </span>
                      </p>
                    ))}
                  </div>
                </div>
              </div>

              {/* Email */}
              <div
                className="flex items-start gap-4 p-4 rounded-2xl border-l-4 transition-all duration-300"
                style={{
                  backgroundColor: `${currentPartner.color}0D`,
                  borderLeftColor: currentPartner.color,
                }}
              >
                <Mail
                  className="mt-1 flex-shrink-0 transition-colors duration-300"
                  style={{ color: currentPartner.color }}
                  size={24}
                />
                <div>
                  <h4
                    className="font-semibold text-lg transition-colors duration-300"
                    style={{ color: currentPartner.color }}
                  >
                    Email
                  </h4>
                  <p className="text-gray-600 mt-1">
                    <a
                      href={`mailto:${currentPartner.email}`}
                      className="hover:text-gray-800 hover:underline transition-colors"
                    >
                      {currentPartner.email}
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="bg-white rounded-3xl shadow-xl p-8">
            <h3
              className="text-2xl font-serif font-bold mb-6 transition-colors duration-300"
              style={{ color: currentPartner.color }}
            >
              Send Us a Message
            </h3>
            <p className="text-gray-600 mb-8">
              Have a special order or question? We'd love to hear from you! Your
              message will be sent directly to{" "}
              <span
                className="font-semibold"
                style={{ color: currentPartner.color }}
              >
                {currentPartner.name}
              </span>
              .
            </p>

            <div className="space-y-6">
              {/* Name */}
              <div className="group">
                <label
                  className="block text-sm font-medium mb-2 transition-colors duration-300"
                  style={{ color: currentPartner.color }}
                >
                  Full Name *
                </label>
                <div
                  className="flex items-center gap-3 border-2 border-gray-200 rounded-xl p-4 focus-within:ring-2 focus-within:ring-opacity-20 transition-all duration-300 hover:border-gray-300"
                  style={{
                    "--tw-ring-color": `${currentPartner.color}33`,
                  }}
                >
                  <User
                    className="text-gray-400 group-focus-within:transition-colors"
                    style={{ "--hover-color": currentPartner.color }}
                    size={20}
                  />
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full focus:outline-none bg-transparent text-gray-700 placeholder-gray-400"
                    required
                  />
                </div>
              </div>

              {/* Email */}
              <div className="group">
                <label
                  className="block text-sm font-medium mb-2 transition-colors duration-300"
                  style={{ color: currentPartner.color }}
                >
                  Email Address *
                </label>
                <div
                  className="flex items-center gap-3 border-2 border-gray-200 rounded-xl p-4 focus-within:ring-2 focus-within:ring-opacity-20 transition-all duration-300 hover:border-gray-300"
                  style={{
                    "--tw-ring-color": `${currentPartner.color}33`,
                  }}
                >
                  <Mail
                    className="text-gray-400 group-focus-within:transition-colors"
                    size={20}
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full focus:outline-none bg-transparent text-gray-700 placeholder-gray-400"
                    required
                  />
                </div>
              </div>

              {/* Phone */}
              <div className="group">
                <label
                  className="block text-sm font-medium mb-2 transition-colors duration-300"
                  style={{ color: currentPartner.color }}
                >
                  Phone Number *
                </label>
                <div
                  className="flex items-center gap-3 border-2 border-gray-200 rounded-xl p-4 focus-within:ring-2 focus-within:ring-opacity-20 transition-all duration-300 hover:border-gray-300"
                  style={{
                    "--tw-ring-color": `${currentPartner.color}33`,
                  }}
                >
                  <Phone
                    className="text-gray-400 group-focus-within:transition-colors"
                    size={20}
                  />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="+977-98xxxxxxxx"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full focus:outline-none bg-transparent text-gray-700 placeholder-gray-400"
                    required
                  />
                </div>
              </div>

              {/* Message */}
              <div className="group">
                <label
                  className="block text-sm font-medium mb-2 transition-colors duration-300"
                  style={{ color: currentPartner.color }}
                >
                  Your Message *
                </label>
                <div
                  className="flex items-start gap-3 border-2 border-gray-200 rounded-xl p-4 focus-within:ring-2 focus-within:ring-opacity-20 transition-all duration-300 hover:border-gray-300"
                  style={{
                    "--tw-ring-color": `${currentPartner.color}33`,
                  }}
                >
                  <MessageCircle
                    className="text-gray-400 group-focus-within:transition-colors mt-1 flex-shrink-0"
                    size={20}
                  />
                  <textarea
                    name="message"
                    placeholder={`Tell us about your inquiry, orders, or any questions you have for ${currentPartner.name}...`}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full focus:outline-none bg-transparent resize-none text-gray-700 placeholder-gray-400"
                    rows={5}
                    required
                  />
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <button
                  type="button"
                  onClick={handleSubmit}
                  className="w-full transition-all duration-300 text-white px-8 py-4 rounded-xl font-medium text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 active:scale-95"
                  style={{
                    backgroundColor: currentPartner.color,
                    boxShadow: `0 10px 25px ${currentPartner.color}33`,
                  }}
                  onMouseOver={(e) => {
                    e.target.style.filter = "brightness(0.9)";
                    e.target.style.transform = "translateY(-2px) scale(1.02)";
                  }}
                  onMouseOut={(e) => {
                    e.target.style.filter = "brightness(1)";
                    e.target.style.transform = "translateY(0) scale(1)";
                  }}
                >
                  Send Message to {currentPartner.name}
                </button>
                <p className="text-sm text-gray-500 text-center mt-3">
                  We typically respond within 24 hours during business days.
                </p>
                <p className="text-xs text-gray-400 text-center mt-1">
                  Your message will be sent to: {currentPartner.email}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Embedded Map */}
        <div className="bg-white rounded-3xl w-full shadow-xl overflow-hidden mt-12 transition-all duration-300">
          <div
            className="p-6 text-white transition-all duration-300"
            style={{ backgroundColor: currentPartner.color }}
          >
            <h3 className="text-xl font-serif font-bold">
              Find {currentPartner.name} Here
            </h3>
            <p className="opacity-90 mt-1">
              Visit us at our location for personalized service
            </p>
          </div>
          <div className="h-[350px] w-full">
            <iframe
              key={formData.partner} // Force re-render when partner changes
              title={`${currentPartner.name} Location`}
              src={currentPartner.location.mapSrc}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full transition-all duration-500"
            />
          </div>
        </div>

        {/* Additional Info Section */}
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {Object.entries(partners).map(([key, partner]) => (
            <div
              key={key}
              className={`bg-white rounded-2xl p-6 shadow-lg transition-all duration-300 cursor-pointer hover:shadow-xl ${
                key === formData.partner
                  ? "ring-2 ring-opacity-50 transform scale-105"
                  : "hover:scale-102"
              }`}
              style={{
                ringColor:
                  key === formData.partner ? partner.color : "transparent",
                borderTop: `4px solid ${partner.color}`,
              }}
              onClick={() => handlePartnerChange({ target: { value: key } })}
            >
              <h4
                className="font-bold text-lg mb-2"
                style={{ color: partner.color }}
              >
                {partner.name}
              </h4>
              <p className="text-gray-600 text-sm mb-3">
                {partner.description}
              </p>
              <p className="text-gray-500 text-xs">
                Click to select this partner
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
