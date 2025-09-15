import { Loader } from "lucide-react";
import React, { useState, useEffect } from "react";

export default function SimpleMasonryPortfolio() {
  const [showMore, setShowMore] = useState(false);
  const [loading, setLoading] = useState(false);
  const [columns, setColumns] = useState(3);

  const initialItems = [
    // first 8 items
    {
      id: 1,
      title: "Modern Architecture",
      image:
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop",
      height: "tall",
    },
    {
      id: 2,
      title: "Interior Design",
      image:
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop",
      height: "medium",
    },
    {
      id: 3,
      title: "Urban Planning",
      image:
        "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&h=600&fit=crop",
      height: "short",
    },
    {
      id: 4,
      title: "Sustainable Design",
      image:
        "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&h=600&fit=crop",
      height: "tall",
    },
    {
      id: 5,
      title: "Residential Complex",
      image:
        "https://images.unsplash.com/photo-1600047508788-786907afb9c4?w=800&h=600&fit=crop",
      height: "medium",
    },
    {
      id: 6,
      title: "Office Renovation",
      image:
        "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop",
      height: "short",
    },
    {
      id: 7,
      title: "Cultural Center",
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop",
      height: "medium",
    },
    {
      id: 8,
      title: "Luxury Villa",
      image:
        "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop",
      height: "tall",
    },
  ];

  const additionalItems = [
    {
      id: 9,
      title: "Art Gallery",
      image:
        "https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=800&h=600&fit=crop",
      height: "medium",
    },
    {
      id: 10,
      title: "Mixed Use Development",
      image:
        "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&h=600&fit=crop",
      height: "short",
    },
    {
      id: 11,
      title: "Shopping Center",
      image:
        "https://images.unsplash.com/photo-1600607688960-e095bc23ce83?w=800&h=600&fit=crop",
      height: "tall",
    },
    {
      id: 12,
      title: "Hospital Complex",
      image:
        "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?w=800&h=600&fit=crop",
      height: "medium",
    },
    {
      id: 13,
      title: "Educational Campus",
      image:
        "https://images.unsplash.com/photo-1600607688108-0094e6c39ce9?w=800&h=600&fit=crop",
      height: "short",
    },
    {
      id: 14,
      title: "Sports Complex",
      image:
        "https://images.unsplash.com/photo-1600607688118-e095bc23ce83?w=800&h=600&fit=crop",
      height: "tall",
    },
  ];

  const [displayItems, setDisplayItems] = useState(initialItems);

  // Responsive columns
  useEffect(() => {
    const updateColumns = () => {
      if (window.innerWidth >= 1024) setColumns(4);
      else if (window.innerWidth >= 768) setColumns(3);
      else setColumns(2);
    };
    updateColumns();
    window.addEventListener("resize", updateColumns);
    return () => window.removeEventListener("resize", updateColumns);
  }, []);

  const distributeItems = (items, columnCount) => {
    const columnHeights = new Array(columnCount).fill(0);
    const columnItems = Array.from({ length: columnCount }, () => []);

    items.forEach((item) => {
      const shortestColumnIndex = columnHeights.indexOf(
        Math.min(...columnHeights)
      );
      columnItems[shortestColumnIndex].push(item);
      const heightMap = { short: 250, medium: 320, tall: 400 };
      columnHeights[shortestColumnIndex] += heightMap[item.height] || 300;
    });

    return columnItems;
  };

  const getItemHeight = (height) => {
    switch (height) {
      case "short":
        return "h-60";
      case "medium":
        return "h-72";
      case "tall":
        return "h-80";
      default:
        return "h-64";
    }
  };

  const handleViewMore = async () => {
    if (!showMore) {
      setLoading(true);
      await new Promise((resolve) => setTimeout(resolve, 1500)); // simulate loading
      setDisplayItems([...initialItems, ...additionalItems]);
      setLoading(false);
    } else {
      setDisplayItems(initialItems); // collapse back
    }
    setShowMore(!showMore);
  };

  const renderGridItem = (item) => (
    <div
      key={item.id}
      className={`relative group cursor-pointer overflow-hidden rounded-2xl mb-4 transition-all duration-500 transform hover:scale-[1.02] hover:shadow-xl ${getItemHeight(
        item.height
      )}`}
    >
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
        style={{ backgroundImage: `url(${item.image})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent group-hover:from-black/80 transition-all duration-300" />
      <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
        <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
          <h3 className="text-xl md:text-2xl font-bold leading-tight group-hover:text-white/95">
            {item.title}
          </h3>
          <div className="w-12 h-0.5 bg-white/60 group-hover:w-20 group-hover:bg-white transition-all duration-300 rounded-full mt-3" />
        </div>
      </div>
      <div className="absolute inset-0 border-2 border-white/0 group-hover:border-white/20 rounded-2xl transition-all duration-300" />
    </div>
  );

  const columnItems = distributeItems(displayItems, columns);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="py-12 bg-secondary relative overflow-hidden">
        <div className="relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl text-white font-bold mb-4 ">
            Our Crafts
          </h1>
          <p className="text-gray-300 text-base md:text-lg max-w-3xl mx-auto px-4 leading-relaxed">
            Discover our innovative designs and architectural excellence through
            our featured projects
          </p>
        </div>
      </section>

      {/* Masonry Grid */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex gap-4">
            {columnItems.map((columnData, columnIndex) => (
              <div key={columnIndex} className="flex-1">
                {columnData.map(renderGridItem)}
              </div>
            ))}
          </div>

          {/* View More Button */}
          <div className="flex justify-center mt-12">
            <button
              onClick={handleViewMore}
              disabled={loading}
              className="group relative px-10 py-5 bg-primary text-white font-bold rounded-full overflow-hidden transition-all duration-500 hover:shadow-2xl transform hover:scale-105 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              <span className="relative z-10 flex items-center gap-3 text-lg">
                {loading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Loading...
                  </>
                ) : showMore ? (
                  "Show Less"
                ) : (
                  "View More Projects"
                )}
              </span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
