import React from "react";
import { Link } from "react-router-dom";

export default function CTA() {
  return (
    <div className="text-center mt-16">
      <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 p-8 ">
        <h3 className="text-2xl font-bold  mb-4">
          Ready to Start Your Project?
        </h3>
        <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
          Let's discuss how our proven process can bring your vision to life.
          Get started with a free consultation today.
        </p>
        <Link to="/contact">
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            Start Your Journey
          </button>
        </Link>
      </div>
    </div>
  );
}
