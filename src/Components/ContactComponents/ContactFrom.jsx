import React, { useState } from "react";
import { Mail, Phone, User, MessageCircle, MapPin, Clock } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Message submitted successfully!");
  };

  return (
    <section className="bg-gradient-to-b from-gray-200 to-white py-16 mx-12 px-8 rounded-t-3xl relative -mt-30 z-20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#009F8A] mb-4">
            Get In Touch
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Visit our bakery, call us, or send us a message. We're here to serve
            you the finest baked goods in town!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Contact Details */}
          <div className="space-y-8">
            {/* Contact Information Cards */}
            <div className="bg-white rounded-3xl shadow-xl p-8 space-y-8">
              <h3 className="text-2xl font-serif font-bold text-secondary mb-6">
                Contact Information
              </h3>

              {/* Location */}
              <div className="flex items-start gap-4 p-4 bg-[#009F8A]/5 rounded-2xl border-l-4 border-secondary">
                <MapPin
                  className="text-secondary mt-1 flex-shrink-0"
                  size={24}
                />
                <div>
                  <h4 className="font-semibold text-secondary text-lg">
                    Our Location
                  </h4>
                  <p className="text-gray-600 mt-1">
                    Kathmandu
                    <br />
                    Near Bus Park
                    <br />
                    Kathmandu 44600, Nepal
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4 p-4 bg-[#009F8A]/5 rounded-2xl border-l-4 border-secondary">
                <Phone
                  className="text-secondary mt-1 flex-shrink-0"
                  size={24}
                />
                <div>
                  <h4 className="font-semibold text-secondary text-lg">
                    Phone
                  </h4>
                  <p className="text-gray-600 mt-1">
                    +977-1-4441234
                    <br />
                    +977-9801234567
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4 p-4 bg-[#009F8A]/5 rounded-2xl border-l-4 border-secondary">
                <Mail className="text-secondary mt-1 flex-shrink-0" size={24} />
                <div>
                  <h4 className="font-semibold text-secondary text-lg">
                    Email
                  </h4>
                  <p className="text-gray-600 mt-1">
                    info@bakehouse.com.np
                    <br />
                    orders@bakehouse.com.np
                  </p>
                </div>
              </div>

              {/* Opening Hours */}
              <div className="flex items-start gap-4 p-4 bg-[#009F8A]/5 rounded-2xl border-l-4 border-secondary">
                <Clock
                  className="text-secondary mt-1 flex-shrink-0"
                  size={24}
                />
                <div>
                  <h4 className="font-semibold text-secondary text-lg">
                    Opening Hours
                  </h4>
                  <div className="text-gray-600 mt-1 space-y-1">
                    <p>
                      <span className="font-medium">Monday - Friday:</span> 7:00
                      AM - 9:00 PM
                    </p>
                    <p>
                      <span className="font-medium">Saturday:</span> 7:00 AM -
                      10:00 PM
                    </p>
                    <p>
                      <span className="font-medium">Sunday:</span> 8:00 AM -
                      8:00 PM
                    </p>
                    <p className="text-secondary font-medium mt-2">
                      Fresh bread available from 7:30 AM daily!
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Embedded Map */}
          </div>

          {/* Right Column - Contact Form */}
          <div className="bg-white rounded-3xl shadow-xl p-8">
            <h3 className="text-2xl font-serif font-bold text-secondary mb-6">
              Send Us a Message
            </h3>
            <p className="text-gray-600 mb-8">
              Have a special order or question? We'd love to hear from you!
            </p>

            <div className="space-y-6">
              {/* Name */}
              <div className="group">
                <label className="block text-sm font-medium text-secondary mb-2 group-focus-within:text-[#007A6B]">
                  Full Name *
                </label>
                <div className="flex items-center gap-3 border-2 border-gray-200 rounded-xl p-4 focus-within:border-secondary focus-within:ring-2 focus-within:ring-[#009F8A]/20 transition-all">
                  <User
                    className="text-gray-400 group-focus-within:text-secondary transition-colors"
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
                <label className="block text-sm font-medium text-secondary mb-2 group-focus-within:text-[#007A6B]">
                  Email Address *
                </label>
                <div className="flex items-center gap-3 border-2 border-gray-200 rounded-xl p-4 focus-within:border-secondary focus-within:ring-2 focus-within:ring-[#009F8A]/20 transition-all">
                  <Mail
                    className="text-gray-400 group-focus-within:text-secondary transition-colors"
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
                <label className="block text-sm font-medium text-secondary mb-2 group-focus-within:text-[#007A6B]">
                  Phone Number *
                </label>
                <div className="flex items-center gap-3 border-2 border-gray-200 rounded-xl p-4 focus-within:border-secondary focus-within:ring-2 focus-within:ring-[#009F8A]/20 transition-all">
                  <Phone
                    className="text-gray-400 group-focus-within:text-secondary transition-colors"
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
                <label className="block text-sm font-medium text-secondary mb-2 group-focus-within:text-[#007A6B]">
                  Your Message *
                </label>
                <div className="flex items-start gap-3 border-2 border-gray-200 rounded-xl p-4 focus-within:border-secondary focus-within:ring-2 focus-within:ring-[#009F8A]/20 transition-all">
                  <MessageCircle
                    className="text-gray-400 group-focus-within:text-secondary transition-colors mt-1 flex-shrink-0"
                    size={20}
                  />
                  <textarea
                    name="message"
                    placeholder="Tell us about your inquiry, special orders, or any questions you have..."
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
                  className="w-full bg-secondary hover:bg-[#007A6B] active:bg-[#006B5A] transition-all duration-200 text-white px-8 py-4 rounded-xl font-medium text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  Send Message
                </button>
                <p className="text-sm text-gray-500 text-center mt-3">
                  We typically respond within 24 hours during business days.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-3xl w-full shadow-xl overflow-hidden">
          {/* <div className="p-6 bg-[#009F8A] text-white">
              <h3 className="text-xl font-serif font-bold">Find Us Here</h3>
              <p className="text-[#009F8A]/80 mt-1">
                Located in the heart of Thamel
              </p>
            </div> */}
          <div className="h-[350px] w-full mt-4">
            <iframe
              title="BakeHouse Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.367510410997!2d85.31232951506143!3d27.70523553143905!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19089ec6b281%3A0x6b2f7a3b49b4d66e!2sThamel%2C%20Kathmandu!5e0!3m2!1sen!2snp!4v1663320000000!5m2!1sen!2snp"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
