import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Eye, ShoppingCart, Loader } from "lucide-react";

const ProductCard = ({ products }) => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  useEffect(() => {
    if (isModalOpen) {
      document.body.classList.add("overflow-hidden"); // disable page scroll
      document.querySelector("nav")?.classList.add("hidden"); // hide navbar
    } else {
      document.body.classList.remove("overflow-hidden");
      document.querySelector("nav")?.classList.remove("hidden");
    }

    return () => {
      // cleanup
      document.body.classList.remove("overflow-hidden");
      document.querySelector("nav")?.classList.remove("hidden");
    };
  }, [isModalOpen]);

  const truncateText = (text, lines = 2) => {
    const words = text.split(" ");
    const wordsPerLine = 8;
    const maxWords = lines * wordsPerLine;
    return words.length > maxWords
      ? words.slice(0, maxWords).join(" ") + "..."
      : text;
  };

  return (
    <>
      <div className="max-w-7xl mx-auto px-4 py-12 min-h-screen">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              className="relative bg-white shadow-xl rounded-3xl overflow-hidden group cursor-pointer hover:shadow-2xl transition-all duration-300 border border-gray-100"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
            >
              {/* Company Badge */}
              <div className="absolute top-4 right-4 z-10">
                <span className="bg-secondary text-white text-xs font-medium px-3 py-1 rounded-full shadow-lg flex items-center gap-1">
                  {product.company}
                </span>
              </div>

              {/* Product Image */}
              <div className="relative w-full h-64 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Product Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                  {product.name}
                </h3>

                <div className="mb-3">
                  <span className="inline-block bg-gradient-to-r from-green-100 to-blue-100 text-green-800 text-xs font-semibold px-3 py-1 rounded-full border border-green-200">
                    {product.quality}
                  </span>
                </div>

                <p className="text-gray-600 text-sm mb-4 leading-relaxed h-10 overflow-hidden">
                  {truncateText(product.description, 2)}
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div className="flex flex-col">
                    <span className="text-2xl font-bold text-orange-600">
                      Rs. {product.price}
                    </span>
                    <span className="text-xs text-gray-500 font-medium">
                      {product.unit}
                    </span>
                  </div>

                  <motion.button
                    disabled={!product.inStock}
                    whileTap={{ scale: 0.95 }}
                    whileHover={{ scale: 1.02 }}
                    className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 bg-secondary text-white shadow-lg hover:shadow-xl`}
                    onClick={() => openModal(product)}
                  >
                    <Eye size={16} />
                    View Details
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {isModalOpen && selectedProduct && (
          <motion.div
            className="fixed inset-0 bg-black backdrop-blur-sm flex items-center justify-center p-4 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.div
              className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto scrollbar-hide shadow-2xl"
              initial={{ scale: 0.9, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 50 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="relative">
                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  className="w-full h-64 object-cover rounded-t-3xl"
                />
                <button
                  onClick={closeModal}
                  className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-2 rounded-full hover:bg-white transition-colors duration-200"
                >
                  <X size={20} className="text-gray-700" />
                </button>
                <div className="absolute bottom-4 left-6">
                  <span className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                    {selectedProduct.company}
                  </span>
                </div>
              </div>

              {/* Modal Content */}
              <div className="p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-3">
                  {selectedProduct.name}
                </h2>

                <div className="mb-4">
                  <span className="inline-block bg-gradient-to-r from-green-100 to-blue-100 text-green-800 text-sm font-semibold px-4 py-2 rounded-full border border-green-200">
                    {selectedProduct.quality}
                  </span>
                </div>

                <div className="flex items-center gap-4 mb-6">
                  <div>
                    <span className="text-2xl font-bold text-green-600">
                      Rs. {selectedProduct.price}
                    </span>
                    <span className="text-gray-500 ml-2 font-medium">
                      {selectedProduct.unit}
                    </span>
                  </div>
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-semibold ${
                      selectedProduct.inStock
                        ? "bg-green-100 text-green-800"
                        : "bg-red-100 text-red-800"
                    }`}
                  >
                    {selectedProduct.inStock ? "In Stock" : "Out of Stock"}
                  </span>
                </div>

                <div className="mb-8">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    Product Description
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-base">
                    {selectedProduct.description}
                  </p>
                </div>

                <div className="flex gap-4">
                  <motion.button
                    disabled={!selectedProduct.inStock}
                    whileTap={{ scale: 0.98 }}
                    className={`flex-1 flex items-center justify-center gap-3 py-4 rounded-xl font-semibold text-lg transition-all duration-300 ${
                      selectedProduct.inStock
                        ? "bg-secondary text-white shadow-lg hover:shadow-xl"
                        : "bg-gray-200 text-gray-500 cursor-not-allowed"
                    }`}
                  >
                    <ShoppingCart size={20} />
                    {selectedProduct.inStock
                      ? "Add to Cart"
                      : "Currently Unavailable"}
                  </motion.button>

                  <motion.button
                    whileTap={{ scale: 0.98 }}
                    onClick={closeModal}
                    className="px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-xl font-semibold hover:bg-gray-50 transition-colors duration-300"
                  >
                    Close
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ProductCard;
