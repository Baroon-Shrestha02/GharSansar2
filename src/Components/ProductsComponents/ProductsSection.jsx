import { Loader, Search } from "lucide-react";
import React, { useState } from "react";
import ProductCard from "./ProductCard";
import data from "./ProductsData";

export default function ProductsSection() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCompany, setSelectedCompany] = useState("All");
  const [visibleCount, setVisibleCount] = useState(6);
  const [isLoading, setIsLoading] = useState(false);

  const companies = ["All", "Ghar Sansar", "GS", "Delight"];

  // Filter products by search and company
  const filteredProducts = data.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesCompany =
      selectedCompany === "All" || product.company === selectedCompany;
    return matchesSearch && matchesCompany;
  });

  const loadMore = () => {
    setIsLoading(true);
    setTimeout(() => {
      setVisibleCount((prev) => prev + 6);
      setIsLoading(false);
    }, 800);
  };

  return (
    <section className="relative z-20 -mt-30 container mx-auto min-h-screen rounded-t-2xl py-12">
      {/* Header and Search */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8 px-6">
        <div className="text-4xl md:text-6xl font-bold text-gray-800">
          Our Products
        </div>
        <div className="flex flex-col md:flex-row items-center gap-3">
          {/* Search */}
          <div className="flex items-center gap-3 bg-white rounded-lg shadow-md px-4 py-2">
            <Search className="text-gray-400" size={20} />
            <input
              type="search"
              className="border-0 outline-none px-2 py-1 text-gray-700 placeholder-gray-400 focus:ring-0"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          {/* Company Filter */}
          <select
            className="bg-white border border-gray-300 rounded-lg px-4 py-2 shadow-md text-gray-700 font-medium"
            value={selectedCompany}
            onChange={(e) => setSelectedCompany(e.target.value)}
          >
            {companies.map((company) => (
              <option key={company} value={company}>
                {company}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Product Cards */}
      <ProductCard products={filteredProducts.slice(0, visibleCount)} />

      {/* Load More */}
      {visibleCount < filteredProducts.length && (
        <div className="flex justify-center mt-4">
          <button
            onClick={loadMore}
            disabled={isLoading}
            className="relative overflow-hidden px-6 py-3 font-semibold text-green-800 transition-colors duration-300 group rounded-xl shadow-md border border-green-300"
          >
            {/* Animated hover spans */}
            <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-green-400 transition-all duration-300 group-hover:w-full"></span>
            <span className="absolute left-0 bottom-0 w-full h-0 bg-gradient-to-r from-green-300 to-teal-300 transition-all duration-300 delay-300 group-hover:h-full"></span>

            {/* Button text / loader */}
            <span className="relative z-10 flex items-center justify-center gap-2">
              {isLoading ? (
                <svg
                  className="animate-spin h-5 w-5 text-green-600"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v8H4z"
                  ></path>
                </svg>
              ) : (
                "Load More"
              )}
            </span>
          </button>
        </div>
      )}
    </section>
  );
}
