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
import { BsWhatsapp } from "react-icons/bs";

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
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero,
            consectetur amet? Expedita odio veritatis deserunt voluptate eum,
            soluta corporis, enim ratione excepturi similique fuga blanditiis
            laboriosam, et aperiam tempore possimus.
          </p>

          {/* Social Media Icons */}
          <div className="flex gap-4">
            <Link
              to="#"
              className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all duration-300 hover:scale-110"
            >
              <Instagram size={20} />
            </Link>
            <Link
              to="#"
              className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all duration-300 hover:scale-110"
            >
              <Facebook size={20} />
            </Link>
            <Link
              to="#"
              className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all duration-300 hover:scale-110"
            >
              <BsWhatsapp size={20} />
            </Link>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-bold mb-6 text-white">Quick Links</h3>
          <ul className="space-y-3">
            <li>
              <Link
                to="/about"
                className="text-white/90 hover:text-white hover:translate-x-1 transition-all duration-200 inline-block"
              >
                Our Story
              </Link>
            </li>
            <li>
              <Link
                to="/products"
                className="text-white/90 hover:text-white hover:translate-x-1 transition-all duration-200 inline-block"
              >
                Menu & Pricing
              </Link>
            </li>
            {/* <li>
              <Link
                to="#"
                className="text-white/90 hover:text-white hover:translate-x-1 transition-all duration-200 inline-block"
              >
                Custom Orders
              </Link>
            </li> */}
            {/* <li>
              <Link
                to="#"
                className="text-white/90 hover:text-white hover:translate-x-1 transition-all duration-200 inline-block"
              >
                Catering Services
              </Link>
            </li> */}
            {/* <li>
              <Link
                to="#"
                className="text-white/90 hover:text-white hover:translate-x-1 transition-all duration-200 inline-block"
              >
                Gift Cards
              </Link>
            </li> */}
            <li>
              <Link
                to="/contact"
                className="text-white/90 hover:text-white hover:translate-x-1 transition-all duration-200 inline-block"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-bold mb-6 text-white">Contact Us</h3>
          <ul className="space-y-4">
            <li className="flex items-start gap-3 text-white/90">
              <MapPin size={18} className="mt-1 flex-shrink-0" />
              <div>
                <div className="font-medium">Kathmandu, Nepal</div>
                {/* <div className="text-sm">
                  123 Bakery Street
                  <br />
                  Sweet Valley, NY 10001
                </div> */}
              </div>
            </li>
            <li className="flex items-center gap-3 text-white/90">
              <Phone size={18} className="flex-shrink-0" />
              <div>
                <div className="font-medium">(555) 123-BAKE</div>
              </div>
            </li>
            <li className="flex items-center gap-3 text-white/90">
              <Mail size={18} className="flex-shrink-0" />
              <div>
                <div className="font-medium">hello@bakehouse.com</div>
              </div>
            </li>
          </ul>
        </div>

        {/* Store Hours */}
        <div>
          <h3 className="text-xl font-bold mb-6 text-white">Store Hours</h3>
          <div className="space-y-3 text-white/90">
            {/* <div className="flex items-center gap-3 mb-4">
              <Clock size={18} className="flex-shrink-0" />
              <span className="font-medium">Fresh Daily</span>
            </div> */}

            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span>Monday - Friday</span>
                <span className="font-medium">6:00 AM - 8:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Saturday</span>
                <span className="font-medium">7:00 AM - 9:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Sunday</span>
                <span className="font-medium">8:00 AM - 6:00 PM</span>
              </div>
            </div>

            <div className="mt-6 p-4 bg-white/10 rounded-lg">
              <div className="text-sm font-medium mb-1">Fresh Bread Daily</div>
              <div className="text-xs text-white/80">
                Hot out of the oven by 7 AM!
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer Bar */}
      <div className="relative z-10 mt-16 pt-8 border-t border-white/20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-white/80">
            © {new Date().getFullYear()} BakeHouse. All rights reserved.
          </div>
          <div className="flex gap-6 text-sm text-white/80">
            <Link
              to="#"
              className="hover:text-white transition-colors duration-200"
            >
              Privacy Policy
            </Link>
            <Link
              to="#"
              className="hover:text-white transition-colors duration-200"
            >
              Terms of Service
            </Link>
            <Link
              to="#"
              className="hover:text-white transition-colors duration-200"
            >
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
