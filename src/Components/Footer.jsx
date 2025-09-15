import React from "react";
import {
  Facebook,
  Instagram,
  Youtube,
  X,
  MapPin,
  Phone,
  Mail,
  Clock,
} from "lucide-react";
import { Link } from "react-router-dom";
import { BsTiktok, BsWhatsapp } from "react-icons/bs";
import { FaTiktok } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative bg-secondary text-white pt-20 pb-12 px-6 md:px-16 overflow-hidden">
      {/* Top Curved Wave */}
      <div className="absolute top-0 left-0 w-full">
        <svg
          viewBox="0 0 1440 320"
          className="w-full h-32 md:h-40"
          preserveAspectRatio="none"
        >
          <path
            fill="#F9FAFB"
            d="M0,64L60,80C120,96,240,128,360,138.7C480,149,600,139,720,122.7C840,107,960,85,1080,101.3C1200,117,1320,171,1380,197.3L1440,224L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
          />
        </svg>
      </div>

      {/* Main Footer Content */}
      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
        {/* Brand & About */}
        <div className="lg:col-span-1">
          <h2 className="text-4xl font-[Pacifico] mb-6 text-white">
            Ghar Sansar
          </h2>
          <p className="text-white/90 leading-relaxed mb-6 text-sm">
            Bringing authentic Nepali flavors to your doorstep. From traditional
            dal bhat to modern fusion dishes, we celebrate the rich culinary
            heritage of Nepal with fresh ingredients and time-honored recipes.
          </p>

          {/* Social Media Icons */}
          <div className="flex gap-4">
            <a
              href="https://www.facebook.com/p/Ghar-Sansar-Pvt-Ltd-100054670110720/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all duration-300 hover:scale-110 group"
            >
              <Facebook
                size={20}
                className="group-hover:text-blue-400 transition-colors duration-300"
              />
            </a>

            <a
              href="https://wa.me/9779847875763" // replace with actual number
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all duration-300 hover:scale-110 group"
            >
              <BsWhatsapp
                size={20}
                className="group-hover:text-green-400 transition-colors duration-300"
              />
            </a>

            <a
              href="https://www.tiktok.com/@gharsansarpvt.ltd84?_t=ZS-8zkHiYUZ3zk&_r=1" // replace with actual TikTok profile
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all duration-300 hover:scale-110 group"
            >
              <FaTiktok
                size={20}
                className="group-hover:text-pink-400 transition-colors duration-300"
              />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-bold mb-6 text-white relative">
            Quick Links
            <div className="absolute -bottom-2 left-0 w-12 h-1 bg-gradient-to-r from-orange-400 to-red-500 rounded-full"></div>
          </h3>
          <ul className="space-y-3">
            <li>
              <Link
                to="/about"
                className="text-white/90 hover:text-white hover:translate-x-1 transition-all duration-200 inline-flex items-center group"
              >
                <span className="w-4 h-1 bg-orange-400 rounded-full mr-3 group-hover:scale-125 transition-transform duration-200"></span>
                Our Story
              </Link>
            </li>
            <li>
              <Link
                to="/products"
                className="text-white/90 hover:text-white hover:translate-x-1 transition-all duration-200 inline-flex items-center group"
              >
                <span className="w-4 h-1 bg-orange-400 rounded-full mr-3 group-hover:scale-125 transition-transform duration-200"></span>
                Our Products
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                className="text-white/90 hover:text-white hover:translate-x-1 transition-all duration-200 inline-flex items-center group"
              >
                <span className="w-4 h-1 bg-orange-400 rounded-full mr-3 group-hover:scale-125 transition-transform duration-200"></span>
                Our Services
              </Link>
            </li>
            {/* <li>
              <Link
                to="/gallery"
                className="text-white/90 hover:text-white hover:translate-x-1 transition-all duration-200 inline-flex items-center group"
              >
                <span className="w-4 h-1 bg-orange-400 rounded-full mr-3 group-hover:scale-125 transition-transform duration-200"></span>
                Gallery
              </Link>
            </li> */}
            <li>
              <Link
                to="/contact"
                className="text-white/90 hover:text-white hover:translate-x-1 transition-all duration-200 inline-flex items-center group"
              >
                <span className="w-4 h-1 bg-orange-400 rounded-full mr-3 group-hover:scale-125 transition-transform duration-200"></span>
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-bold mb-6 text-white relative">
            Get in Touch
            <div className="absolute -bottom-2 left-0 w-12 h-1 bg-gradient-to-r from-orange-400 to-red-500 rounded-full"></div>
          </h3>
          <ul className="space-y-4">
            <li className="flex items-center gap-3 text-white/90 hover:text-white transition-colors duration-200 group">
              <div className="bg-white/10 p-2 rounded-lg group-hover:bg-white/20 transition-colors duration-200">
                <Phone size={18} className="flex-shrink-0" />
              </div>
              <div>
                <div className="font-medium">+977 9801354730</div>
                <div className="text-sm text-white/70">Call us anytime</div>
              </div>
            </li>
            <li className="flex items-center gap-3 text-white/90 hover:text-white transition-colors duration-200 group">
              <div className="bg-white/10 p-2 rounded-lg group-hover:bg-white/20 transition-colors duration-200">
                <Mail size={18} className="flex-shrink-0" />
              </div>
              <div>
                <div className="font-medium">Gsalliancedang@gmail.com</div>
                <div className="text-sm text-white/70">24/7 support</div>
              </div>
            </li>
          </ul>

          {/* Call-to-Action */}
          <div className="mt-6 p-4 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-lg border border-white/10">
            <div className="text-sm font-medium mb-1">Order Online</div>
            {/* <div className="text-xs text-white/80 mb-3">
              Fresh meals delivered to your door
            </div> */}
            <Link
              to="/order"
              className="inline-flex items-center text-xs bg-white/20 hover:bg-white/30 px-3 py-2 rounded-full transition-all duration-200 hover:scale-105"
            >
              Order Now →
            </Link>
          </div>
        </div>

        {/* Our Locations */}
        <div>
          <h3 className="text-xl font-bold mb-6 text-white relative">
            Our Locations
            <div className="absolute -bottom-2 left-0 w-12 h-1 bg-gradient-to-r from-orange-400 to-red-500 rounded-full"></div>
          </h3>
          <div className="space-y-6">
            {/* Thamel Location */}
            <div className="group cursor-pointer">
              <div className="flex items-start gap-3 text-white/90 hover:text-white transition-colors duration-200">
                <div className="bg-white/10 p-2 rounded-lg group-hover:bg-orange-500/20 transition-colors duration-200">
                  <MapPin size={18} className="flex-shrink-0 mt-0.5" />
                </div>
                <div>
                  <div className="font-lg text-sm">Ghar Sansar Pvt Ltd</div>
                  <div className="font--md text-white/70 leading-relaxed">
                    Lamahi, Dang, Nepal
                  </div>
                </div>
              </div>
            </div>

            {/* Patan Location */}
            <div className="group cursor-pointer">
              <div className="flex items-start gap-3 text-white/90 hover:text-white transition-colors duration-200">
                <div className="bg-white/10 p-2 rounded-lg group-hover:bg-orange-500/20 transition-colors duration-200">
                  <MapPin size={18} className="flex-shrink-0 mt-0.5" />
                </div>
                <div>
                  <div className="font-lg text-sm">
                    Delight Color World & Suppliers
                  </div>
                  <div className="font-md text-white/70 leading-relaxed">
                    Lamahi, Dang, Nepal
                  </div>
                </div>
              </div>
            </div>

            {/* Pokhara Location */}
            <div className="group cursor-pointer">
              <div className="flex items-start gap-3 text-white/90 hover:text-white transition-colors duration-200">
                <div className="bg-white/10 p-2 rounded-lg group-hover:bg-orange-500/20 transition-colors duration-200">
                  <MapPin size={18} className="flex-shrink-0 mt-0.5" />
                </div>
                <div>
                  <div className="font-lg text-sm">
                    Gs Alliance trading Pvt Ltd
                  </div>
                  <div className="font-md text-white/70 leading-relaxed">
                    Lamahi Gally, Namai, Nepal
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer Bar */}
      <div className="relative z-10 mt-16 pt-8 border-t border-white/20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-white/80">
            © {new Date().getFullYear()} Ghar Sansar. All rights reserved. Made
            with love in Nepal.
          </div>
          <div className="flex gap-6 text-sm text-white/80">
            <Link
              to="/privacy"
              className="hover:text-white transition-colors duration-200 hover:underline"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms"
              className="hover:text-white transition-colors duration-200 hover:underline"
            >
              Terms of Service
            </Link>
            <Link
              to="/cookies"
              className="hover:text-white transition-colors duration-200 hover:underline"
            >
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
