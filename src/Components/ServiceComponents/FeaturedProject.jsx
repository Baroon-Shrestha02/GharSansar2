import React, { useState, useEffect } from "react";
import { X, ZoomIn } from "lucide-react";
import { Link } from "react-router-dom";

// Enhanced Featured Projects Data
const featuredProjects = [
  {
    id: 1,
    name: "Modern Family Home",
    location: "Kathmandu",
    images: [
      "home/intro.jpeg",
      "home/cement.png",
      "home/paint.jpg",
      "home/ply.jpg",
      "home/rods.jpg",
      "home/wires.jpg",
    ],
    mainImage: "main/logo.jpg",
    description:
      "A contemporary 3-bedroom house with modern interiors and sustainable materials.",
    details:
      "This home features open-plan living spaces, natural lighting, eco-friendly materials, and a landscaped garden. GS provided premium electrical appliances including smart home automation, energy-efficient lighting systems, and modern kitchen appliances. Delight transformed the interiors with elegant furniture, color coordination, and artistic wall treatments.",
    highlights: [
      "Smart home automation by GS",
      "Energy-efficient LED lighting systems",
      "Premium kitchen appliances installation",
      "Custom interior design by Delight",
      "Elegant furniture and decor selection",
      "Professional color coordination",
    ],
    tags: ["Residential", "Interior", "Smart Home"],
  },
  {
    id: 2,
    name: "Luxury Apartment Renovation",
    location: "Lalitpur",
    images: [
      "/images/projects/luxury-apartment-1.jpg",
      "/images/projects/luxury-apartment-2.jpg",
      "/images/projects/luxury-apartment-3.jpg",
      "/images/projects/luxury-apartment-4.jpg",
    ],
    mainImage: "/images/projects/luxury-apartment-1.jpg",
    description:
      "Complete renovation with stylish finishes and optimized space for comfort.",
    details:
      "Redesigning the apartment with high-quality materials and modern aesthetics. GS installed state-of-the-art electrical systems, premium home appliances, and smart lighting solutions. Delight created a sophisticated interior design with luxury furnishings, artistic elements, and optimal space utilization.",
    highlights: [
      "Complete electrical system upgrade by GS",
      "Smart lighting and automation",
      "Premium home appliance installation",
      "Luxury interior design by Delight",
      "Custom furniture and artwork",
      "Space optimization and styling",
    ],
    tags: ["Renovation", "Interior Design", "Luxury"],
  },
  {
    id: 3,
    name: "Contemporary Villa",
    location: "Bhaktapur",
    images: [
      "/images/projects/villa-1.jpg",
      "/images/projects/villa-2.jpg",
      "/images/projects/villa-3.jpg",
      "/images/projects/villa-4.jpg",
      "/images/projects/villa-5.jpg",
    ],
    mainImage: "/images/projects/villa-1.jpg",
    description:
      "Elegant villa with modern amenities and sophisticated interior design.",
    details:
      "A stunning villa featuring contemporary architecture and premium finishes. GS provided comprehensive electrical solutions including home theater systems, smart climate control, and energy-efficient appliances. Delight curated an exquisite interior design with premium materials, artistic lighting, and carefully selected decor elements.",
    highlights: [
      "Home theater system by GS",
      "Smart climate control installation",
      "Premium electrical appliances",
      "Sophisticated interior styling by Delight",
      "Artistic lighting design",
      "Luxury material selection",
    ],
    tags: ["Villa", "Modern", "Premium"],
  },
];

export default function FeaturedProjects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedProject(null);
    setIsModalOpen(false);
  };

  // Disable/enable body scroll when modal opens/closes
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    // Cleanup function to reset overflow when component unmounts
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isModalOpen]);

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover our exceptional home construction and renovation projects
            featuring
            <span className="font-semibold text-blue-600">
              {" "}
              GS electrical appliances
            </span>{" "}
            and
            <span className="font-semibold text-purple-600">
              {" "}
              Delight interior design
            </span>
          </p>
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-10">
          {featuredProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 cursor-pointer"
              onClick={() => openModal(project)}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.mainImage}
                  alt={project.name}
                  className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ZoomIn className="w-5 h-5 text-gray-700" />
                </div>
              </div>

              <div className="p-8">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-gradient-to-r from-blue-100 to-purple-100 text-gray-700 px-4 py-2 rounded-full text-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {project.name}
                </h3>
                <p className="text-blue-600 font-medium text-sm mb-4 flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                  {project.location}
                </p>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {project.description}
                </p>

                <div className="flex items-center justify-between">
                  <span className="text-blue-600 font-semibold group-hover:text-blue-700 transition-colors">
                    View Details →
                  </span>
                  <div className="flex -space-x-2">
                    {project.images.slice(0, 3).map((img, index) => (
                      <div
                        key={index}
                        className="w-8 h-8 rounded-full border-2 border-white overflow-hidden"
                      >
                        <img
                          src={img}
                          alt=""
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
                    {project.images.length > 3 && (
                      <div className="w-8 h-8 rounded-full border-2 border-white bg-gray-200 flex items-center justify-center text-xs font-medium text-gray-600">
                        +{project.images.length - 3}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Enhanced Modal */}
      {isModalOpen && selectedProject && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-lg z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl shadow-2xl max-w-6xl w-full max-h-[90vh] overflow-hidden flex flex-col animate-in fade-in duration-300">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-8 border-b border-gray-100 bg-gradient-to-r from-blue-50 to-purple-50">
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-2">
                  {selectedProject.name}
                </h3>
                <p className="text-blue-600 font-medium flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                  {selectedProject.location}
                </p>
              </div>
              <button
                onClick={closeModal}
                className="p-3 hover:bg-white rounded-full transition-all duration-300 group"
              >
                <X className="w-6 h-6 text-gray-500 group-hover:text-gray-700" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="flex-1 overflow-y-auto">
              <div className="p-8 space-y-8">
                {/* Main Image */}
                <div className="relative group">
                  <img
                    src={selectedImage}
                    alt="Selected view"
                    className="w-full h-96 object-cover rounded-2xl shadow-lg"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent rounded-2xl" />
                </div>

                {/* Media Gallery */}
                <div className="bg-gray-50 rounded-2xl p-6">
                  <h4 className="font-bold text-gray-900 mb-6 text-xl flex items-center">
                    <span className="w-1 h-6 bg-gradient-to-b from-blue-500 to-purple-500 rounded mr-3"></span>
                    Project Gallery
                  </h4>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {selectedProject.images.map((image, index) => (
                      <div
                        key={index}
                        className={`relative group cursor-pointer rounded-xl overflow-hidden transition-all duration-300 ${
                          selectedImage === image
                            ? "ring-4 ring-blue-500 shadow-lg transform scale-105"
                            : "hover:shadow-md hover:scale-105"
                        }`}
                        onClick={() => setSelectedImage(image)}
                      >
                        <img
                          src={image}
                          alt={`Gallery ${index + 1}`}
                          className="w-full h-24 object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                          <ZoomIn className="w-5 h-5 text-white" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Project Details */}
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6">
                    <h4 className="font-bold text-gray-900 mb-4 text-xl flex items-center">
                      <span className="w-1 h-6 bg-blue-500 rounded mr-3"></span>
                      Project Overview
                    </h4>
                    <p className="text-gray-700 leading-relaxed">
                      {selectedProject.details}
                    </p>
                  </div>

                  <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-6">
                    <h4 className="font-bold text-gray-900 mb-4 text-xl flex items-center">
                      <span className="w-1 h-6 bg-purple-500 rounded mr-3"></span>
                      Key Highlights
                    </h4>
                    <div className="space-y-3">
                      {selectedProject.highlights.map((item, index) => (
                        <div key={index} className="flex items-start">
                          <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-gray-700">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Brand Showcase */}
                <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl p-6">
                  <h4 className="font-bold text-gray-900 mb-6 text-xl text-center">
                    Our Trusted Partners
                  </h4>
                  <div className="flex justify-center items-center space-x-12">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mb-3 mx-auto">
                        <span className="">
                          <img
                            src="main/gs.png"
                            alt=""
                            className="rounded-full"
                          />
                        </span>
                      </div>
                      <p className="text-gray-700 font-medium">
                        Electrical Appliances
                      </p>
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mb-3 mx-auto">
                        <span className="text-white font-bold text-lg">D</span>
                      </div>
                      <p className="text-gray-700 font-medium">
                        Interior Design
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="border-t border-gray-100 p-8 bg-white">
              <div className="flex justify-end gap-4">
                <button
                  onClick={closeModal}
                  className="px-8 py-3 border-2 border-gray-300 text-gray-600 rounded-xl hover:bg-gray-50 hover:border-gray-400 transition-all duration-300 font-medium"
                >
                  Close
                </button>
                <Link to="/contact">
                  <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-300 font-medium">
                    Get Started
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
