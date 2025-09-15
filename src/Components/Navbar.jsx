import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navItems = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About Us" },
    { to: "/products", label: "Our Products" },
    { to: "/services", label: "Our Services" },
    { to: "/contact", label: "Contact Us" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
          isScrolled
            ? "bg-white/95 backdrop-blur-lg shadow-xl border-b border-gray-100"
            : " backdrop-blur-sm"
        }`}
      >
        <div className="container mx-auto py-2">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/">
              <div
                className={`text-3xl font-bold transition-all duration-500 cursor-pointer hover:scale-105 ${
                  isScrolled
                    ? "text-[#009F8A] drop-shadow-sm"
                    : "text-white drop-shadow-lg"
                }`}
              >
                <img src="main/logo.jpg" alt="" className="w-16 rounded-full" />
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-x-2">
              {navItems.map((item, index) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className={`relative px-6 py-3 rounded-full font-medium transition-all duration-300 hover:scale-110 transform ${
                    isScrolled
                      ? "text-gray-700 hover:text-secondary"
                      : "text-white hover:text-white"
                  } group overflow-hidden`}
                >
                  <span className="relative z-10">{item.label}</span>
                  {/* Animated background */}
                  <div
                    className={`absolute inset-0 rounded-full scale-0 transition-all duration-500 ease-out group-hover:scale-100 ${
                      isScrolled
                        ? "bg-gradient-to-r from-[#009F8A]/10 to-[#009F8A]/5"
                        : "bg-gradient-to-r from-white/20 to-white/10"
                    }`}
                  ></div>
                  {/* Hover border effect */}
                  <div
                    className={`absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                      isScrolled
                        ? "ring-2 ring-[#009F8A]/20"
                        : "ring-2 ring-white/30"
                    }`}
                  ></div>
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className={`lg:hidden relative w-12 h-12 rounded-full transition-all duration-300 focus:outline-none focus:ring-4 ${
                isScrolled
                  ? "text-gray-700 hover:bg-[#009F8A]/10 focus:ring-[#009F8A]/20"
                  : "text-white hover:bg-white/20 focus:ring-white/30"
              } transform hover:scale-110 active:scale-95`}
              aria-label="Toggle mobile menu"
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-6 h-6">
                  <span
                    className={`absolute inset-x-0 h-0.5 bg-current transform transition-all duration-300 ease-in-out ${
                      isMobileMenuOpen ? "top-3 rotate-45" : "top-1"
                    }`}
                  ></span>
                  <span
                    className={`absolute inset-x-0 top-3 h-0.5 bg-current transform transition-all duration-300 ease-in-out ${
                      isMobileMenuOpen
                        ? "opacity-0 scale-0 rotate-180"
                        : "opacity-100 scale-100 rotate-0"
                    }`}
                  ></span>
                  <span
                    className={`absolute inset-x-0 h-0.5 bg-current transform transition-all duration-300 ease-in-out ${
                      isMobileMenuOpen ? "top-3 -rotate-45" : "top-5"
                    }`}
                  ></span>
                </div>
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Full-screen Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-500 ease-in-out ${
          isMobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Background overlay */}
        <div
          className={`absolute inset-0 transition-all duration-500 ${
            isMobileMenuOpen
              ? "bg-gradient-to-br from-orange-300 via-orange-400 to-amber-500 backdrop-blur-xl"
              : "bg-transparent"
          }`}
          onClick={() => setIsMobileMenuOpen(false)}
        />

        {/* Menu content */}
        <div
          className={`relative h-full flex flex-col justify-center items-center p-8 transform transition-all duration-700 ${
            isMobileMenuOpen
              ? "translate-y-0 scale-100"
              : "translate-y-full scale-95"
          }`}
        >
          {/* Navigation items */}
          <div className="space-y-8 text-center">
            {navItems.map((item, index) => (
              <div
                key={item.to}
                className={`transform transition-all duration-500 ${
                  isMobileMenuOpen
                    ? "translate-x-0 opacity-100"
                    : "translate-x-8 opacity-0"
                } mobile-nav-item`}
                style={{
                  transitionDelay: isMobileMenuOpen
                    ? `${(index + 1) * 150}ms`
                    : "0ms",
                }}
              >
                <Link
                  to={item.to}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-12 py-6 text-4xl md:text-5xl font-bold text-white hover:text-white transition-all duration-300 transform hover:scale-110 active:scale-95 relative group"
                >
                  <span className="relative z-10">{item.label}</span>
                  <div className="absolute inset-0 bg-white/10 rounded-2xl scale-0 group-hover:scale-100 transition-transform duration-300 ease-out"></div>
                </Link>
              </div>
            ))}
          </div>

          {/* Decorative elements */}
          <div
            className={`absolute top-1/4 left-8 w-32 h-32 bg-white/5 rounded-full blur-xl transform transition-all duration-1000 ${
              isMobileMenuOpen
                ? "translate-x-0 opacity-100 rotate-0"
                : "-translate-x-16 opacity-0 -rotate-45"
            }`}
            style={{ transitionDelay: "800ms" }}
          />

          <div
            className={`absolute bottom-1/4 right-8 w-24 h-24 bg-white/10 rounded-full blur-lg transform transition-all duration-1000 ${
              isMobileMenuOpen
                ? "translate-x-0 opacity-100 rotate-0"
                : "translate-x-16 opacity-0 rotate-45"
            }`}
            style={{ transitionDelay: "1000ms" }}
          />

          {/* Close hint */}
          <div
            className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60 text-sm transition-all duration-500 ${
              isMobileMenuOpen
                ? "translate-y-0 opacity-100"
                : "translate-y-4 opacity-0"
            }`}
            style={{ transitionDelay: "1200ms" }}
          >
            Tap anywhere to close
          </div>
        </div>
      </div>

      <style>{`
        .mobile-nav-item {
          animation: slideInUp 0.4s ease-out forwards;
          opacity: 0;
          transform: translateY(20px);
        }

        @keyframes slideInUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Smooth scrolling */
        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </>
  );
}
