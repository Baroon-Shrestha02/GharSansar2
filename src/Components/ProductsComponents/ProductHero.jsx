import React, { useState } from "react";
import {
  ShoppingBag,
  Cake,
  Croissant,
  Donut,
  Sandwich,
  Cookie,
  X,
  Plus,
  Star,
  Heart,
  Clock,
  ChefHat,
  Search,
  Filter,
  ShoppingCart,
  Eye,
} from "lucide-react";

// Category List with enhanced styling
const categories = [
  { name: "All", icon: "🍽️", color: "from-purple-400 to-pink-400" },
  {
    name: "Cakes",
    icon: <Cake className="w-5 h-5" />,
    color: "from-pink-400 to-rose-400",
  },
  {
    name: "Pastries",
    icon: <Croissant className="w-5 h-5" />,
    color: "from-amber-400 to-orange-400",
  },
  {
    name: "Donuts",
    icon: <Donut className="w-5 h-5" />,
    color: "from-yellow-400 to-amber-400",
  },
  {
    name: "Breads",
    icon: <Sandwich className="w-5 h-5" />,
    color: "from-orange-400 to-red-400",
  },
  {
    name: "Cookies",
    icon: <Cookie className="w-5 h-5" />,
    color: "from-green-400 to-teal-400",
  },
];

// Enhanced product data with ratings and features
const initialProducts = [
  {
    id: 1,
    name: "Ultimate Chocolate Cake",
    image: "/Ultimate Chocolate.jpeg",
    price: 350,
    originalPrice: 400,
    category: "Cakes",
    rating: 4.9,
    reviews: 124,
    isNew: true,
    isBestseller: true,
    prepTime: "2 hours",
    description:
      "A decadent triple-layer chocolate masterpiece with Belgian dark chocolate ganache, perfect for special celebrations.",
  },
  {
    id: 2,
    name: "Fresh Strawberry Delight",
    image: "/images/Staweberry.jpeg",
    price: 400,
    originalPrice: 450,
    category: "Cakes",
    rating: 4.8,
    reviews: 89,
    isNew: false,
    isBestseller: true,
    prepTime: "1.5 hours",
    description:
      "Light vanilla sponge layered with fresh strawberries and silky whipped cream, topped with glazed strawberries.",
  },
  {
    id: 3,
    name: "Glazed Chocolate Donut",
    image: "/images/Choclatecake.jpeg",
    price: 120,
    originalPrice: 140,
    category: "Donuts",
    rating: 4.7,
    reviews: 203,
    isNew: false,
    isBestseller: false,
    prepTime: "30 mins",
    description:
      "Hand-dipped in premium chocolate glaze with a perfectly soft and airy texture that melts in your mouth.",
  },
  {
    id: 4,
    name: "Artisan Butter Croissant",
    image: "/images/Croissant.jpeg",
    price: 150,
    originalPrice: 180,
    category: "Pastries",
    rating: 4.9,
    reviews: 156,
    isNew: true,
    isBestseller: false,
    prepTime: "24 hours",
    description:
      "Traditional French croissant with 72 buttery layers, made with imported European butter for authentic taste.",
  },
  {
    id: 5,
    name: "Artisanal Sourdough",
    image: "/Easy Dairy Free Bread Recipes .jpeg",
    price: 250,
    originalPrice: 280,
    category: "Breads",
    rating: 4.6,
    reviews: 78,
    isNew: false,
    isBestseller: true,
    prepTime: "48 hours",
    description:
      "Naturally fermented for 48 hours using our century-old starter, creating the perfect tangy flavor and chewy texture.",
  },
  {
    id: 6,
    name: "Premium Choco Chip Cookies",
    image: "/Easy Chocolate Chip Cookies Recipe.jpeg",
    price: 80,
    originalPrice: 100,
    category: "Cookies",
    rating: 4.8,
    reviews: 267,
    isNew: false,
    isBestseller: true,
    prepTime: "45 mins",
    description:
      "Crispy edges, chewy center, loaded with premium Belgian chocolate chips and a hint of sea salt.",
  },
];

export default function EnhancedBakeryUI() {
  const [products, setProducts] = useState(initialProducts);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [addModal, setAddModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [favorites, setFavorites] = useState(new Set());
  const [cart, setCart] = useState([]);
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    originalPrice: "",
    image: "",
    category: "Cakes",
    description: "",
    prepTime: "",
    rating: 4.5,
    reviews: 0,
  });

  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      selectedCategory === "All" || product.category === selectedCategory;
    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleAddProduct = () => {
    const id = Date.now();
    setProducts([
      ...products,
      {
        ...newProduct,
        id,
        price: parseFloat(newProduct.price),
        originalPrice: parseFloat(newProduct.originalPrice),
        isNew: true,
        isBestseller: false,
      },
    ]);
    setNewProduct({
      name: "",
      price: "",
      originalPrice: "",
      image: "",
      category: "Cakes",
      description: "",
      prepTime: "",
      rating: 4.5,
      reviews: 0,
    });
    setAddModal(false);
  };

  const toggleFavorite = (productId) => {
    const newFavorites = new Set(favorites);
    if (newFavorites.has(productId)) {
      newFavorites.delete(productId);
    } else {
      newFavorites.add(productId);
    }
    setFavorites(newFavorites);
  };

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const ProductCard = ({ product, index }) => (
    <div className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-2">
      {/* Product Badges */}
      <div className="absolute top-4 left-4 z-10 flex flex-col gap-2">
        {product.isNew && (
          <span className="bg-gradient-to-r from-green-400 to-emerald-500 text-white text-xs px-3 py-1 rounded-full font-semibold shadow-lg">
            NEW
          </span>
        )}
        {product.isBestseller && (
          <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs px-3 py-1 rounded-full font-semibold shadow-lg">
            BESTSELLER
          </span>
        )}
      </div>

      {/* Favorite Button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          toggleFavorite(product.id);
        }}
        className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/90 backdrop-blur-sm hover:bg-white transition-all duration-300 shadow-lg"
      >
        <Heart
          className={`w-5 h-5 transition-colors duration-300 ${
            favorites.has(product.id)
              ? "text-red-500 fill-red-500"
              : "text-gray-400"
          }`}
        />
      </button>

      {/* Product Image - Full View with Proper Aspect Ratio */}
      <div className="relative overflow-hidden rounded-t-2xl">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-56 object-cover object-center group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Product Info */}
      <div className="p-6">
        <div className="flex items-center gap-2 mb-2">
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
            <span className="text-sm font-semibold text-gray-700">
              {product.rating}
            </span>
            <span className="text-sm text-gray-500">({product.reviews})</span>
          </div>
          <div className="flex items-center gap-1 text-teal-600">
            <Clock className="w-4 h-4" />
            <span className="text-sm">{product.prepTime}</span>
          </div>
        </div>

        <h3 className="text-xl font-bold mb-2 text-gray-800 group-hover:text-teal-600 transition-colors">
          {product.name}
        </h3>

        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {product.description}
        </p>

        {/* Price */}
        <div className="flex items-center gap-2 mb-4">
          <span className="text-2xl font-bold text-teal-600">
            Rs. {product.price}
          </span>
          {product.originalPrice > product.price && (
            <span className="text-lg text-gray-400 line-through">
              Rs. {product.originalPrice}
            </span>
          )}
          {product.originalPrice > product.price && (
            <span className="bg-red-100 text-red-600 text-xs px-2 py-1 rounded-full font-semibold">
              {Math.round((1 - product.price / product.originalPrice) * 100)}%
              OFF
            </span>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2">
          <button
            onClick={() => setSelectedProduct(product)}
            className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white px-4 py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            <Eye size={18} />
            View Details
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              addToCart(product);
            }}
            className="bg-gray-100 hover:bg-teal-50 text-teal-600 p-3 rounded-xl transition-all duration-300 hover:scale-110"
          >
            <ShoppingCart size={18} />
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Enhanced Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('/images/medium-shot-woman-working-bakery.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/60" />

        <div className="relative z-10 text-center text-white px-6 max-w-4xl">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
            <ChefHat className="w-5 h-5" />
            <span className="text-sm font-semibold">
              Artisan Bakery Since ****
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-yellow-400 via-orange-400 to-pink-400 bg-clip-text text-transparent drop-shadow-2xl">
            Heavenly Baked
            <br />
            Delights 🧁
          </h1>

          <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto leading-relaxed">
            Where every bite tells a story of tradition, passion, and the finest
            ingredients crafted into edible art.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300">
              Explore Menu
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-gray-800 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300">
              Order Online
            </button>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-20 animate-bounce">
          <div className="text-6xl">🍰</div>
        </div>
        <div className="absolute top-32 right-32 animate-bounce delay-1000">
          <div className="text-5xl">🥐</div>
        </div>
        <div className="absolute bottom-20 left-32 animate-bounce delay-500">
          <div className="text-4xl">🍪</div>
        </div>
      </section>

      {/* Enhanced Products Section */}
      <section className="py-20 px-6 md:px-20">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-7xl font-extrabold mb-4 bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">
              Our Signature Collection
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Handcrafted with love, served with pride. Discover flavors that
              create memories.
            </p>
          </div>

          {/* Search and Filter Bar */}
          {/* Search + Categories Container */}
          {/* Search + Categories Dropdown */}
          <div className="flex flex-col lg:flex-row gap-4 mb-12">
            {/* Search Input */}
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search for your favorite treats..."
                className="w-full pl-12 pr-4 py-4 rounded-2xl border-2 border-gray-200 focus:border-teal-500 focus:outline-none text-lg"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            {/* Category Dropdown for All Screens */}
            <div className="w-full lg:w-64">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-4 py-4 rounded-2xl border-2 border-gray-200 focus:border-teal-500 focus:outline-none text-lg bg-white text-gray-700"
              >
                <option value="">All Categories</option>
                {categories.map((category) => (
                  <option key={category.name} value={category.name}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.length === 0 ? (
              <div className="col-span-full text-center py-20">
                <div className="text-6xl mb-4">🔍</div>
                <p className="text-2xl font-semibold text-gray-600 mb-2">
                  No products found
                </p>
                <p className="text-gray-500">
                  Try adjusting your search or filter criteria
                </p>
              </div>
            ) : (
              filteredProducts.map((product, index) => (
                <ProductCard key={product.id} product={product} index={index} />
              ))
            )}
          </div>
        </div>
      </section>

      {/* Enhanced Product Detail Modal - Side by Side Layout */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center px-4">
          <div className="bg-white rounded-3xl max-w-5xl w-full max-h-[90vh] overflow-hidden relative">
            <button
              className="absolute top-6 right-6 z-10 p-3 rounded-full bg-white/90 hover:bg-white transition-all duration-300 shadow-lg hover:shadow-xl"
              onClick={() => setSelectedProduct(null)}
            >
              <X size={24} />
            </button>

            <div className="flex flex-col lg:flex-row h-full max-h-[90vh]">
              {/* Left Side - Image */}
              <div className="lg:w-1/2 relative">
                <div className="relative h-64 lg:h-full min-h-[400px]">
                  <img
                    src={selectedProduct.image}
                    alt={selectedProduct.name}
                    className="w-full h-full object-cover rounded-l-3xl lg:rounded-r-none rounded-t-3xl lg:rounded-t-3xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />

                  {/* Badges */}
                  <div className="absolute top-6 left-6 flex flex-col gap-2">
                    {selectedProduct.isNew && (
                      <span className="bg-gradient-to-r from-green-400 to-emerald-500 text-white text-sm px-4 py-2 rounded-full font-semibold shadow-lg">
                        ✨ NEW
                      </span>
                    )}
                    {selectedProduct.isBestseller && (
                      <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-sm px-4 py-2 rounded-full font-semibold shadow-lg">
                        🏆 BESTSELLER
                      </span>
                    )}
                  </div>

                  {/* Image Overlay Info */}
                  <div className="absolute bottom-6 left-6 text-white">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="flex items-center gap-1 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                        <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                        <span className="font-semibold">
                          {selectedProduct.rating}
                        </span>
                      </div>
                      <div className="flex items-center gap-1 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                        <Clock className="w-4 h-4" />
                        <span className="text-sm">
                          {selectedProduct.prepTime}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Side - Content */}
              <div className="lg:w-1/2 p-8 lg:p-10 flex flex-col justify-between overflow-y-auto">
                <div>
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <h3 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-2 leading-tight">
                        {selectedProduct.name}
                      </h3>
                      <p className="text-lg text-gray-600 mb-4">
                        Category:{" "}
                        <span className="font-semibold text-teal-600">
                          {selectedProduct.category}
                        </span>
                      </p>
                    </div>
                    <button
                      onClick={() => toggleFavorite(selectedProduct.id)}
                      className="p-3 rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:scale-110"
                    >
                      <Heart
                        className={`w-7 h-7 transition-all duration-300 ${
                          favorites.has(selectedProduct.id)
                            ? "text-red-500 fill-red-500 scale-110"
                            : "text-gray-400 hover:text-red-400"
                        }`}
                      />
                    </button>
                  </div>

                  {/* Rating and Reviews - Desktop */}
                  <div className="hidden lg:flex items-center gap-6 mb-6">
                    <div className="flex items-center gap-2">
                      <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-5 h-5 ${
                              i < Math.floor(selectedProduct.rating)
                                ? "text-yellow-400 fill-yellow-400"
                                : "text-gray-300"
                            }`}
                          />
                        ))}
                      </div>
                      <span className="font-bold text-lg">
                        {selectedProduct.rating}
                      </span>
                      <span className="text-gray-500">
                        ({selectedProduct.reviews} reviews)
                      </span>
                    </div>
                  </div>

                  {/* Price Section */}
                  <div className="mb-6">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-4xl font-bold text-teal-600">
                        Rs. {selectedProduct.price}
                      </span>
                      {selectedProduct.originalPrice >
                        selectedProduct.price && (
                        <>
                          <span className="text-2xl text-gray-400 line-through">
                            Rs. {selectedProduct.originalPrice}
                          </span>
                          <span className="bg-gradient-to-r from-red-500 to-red-600 text-white text-sm px-3 py-2 rounded-full font-bold shadow-lg">
                            {Math.round(
                              (1 -
                                selectedProduct.price /
                                  selectedProduct.originalPrice) *
                                100
                            )}
                            % OFF
                          </span>
                        </>
                      )}
                    </div>
                    {selectedProduct.originalPrice > selectedProduct.price && (
                      <p className="text-green-600 font-semibold">
                        You save Rs.{" "}
                        {selectedProduct.originalPrice - selectedProduct.price}!
                      </p>
                    )}
                  </div>

                  {/* Description */}
                  <div className="mb-8">
                    <h4 className="text-xl font-semibold text-gray-800 mb-3">
                      Description
                    </h4>
                    <p className="text-gray-700 leading-relaxed text-lg">
                      {selectedProduct.description}
                    </p>
                  </div>

                  {/* Product Features */}
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    <div className="bg-teal-50 p-4 rounded-2xl border border-teal-100">
                      <div className="flex items-center gap-2 mb-2">
                        <Clock className="w-5 h-5 text-teal-600" />
                        <span className="font-semibold text-teal-800">
                          Prep Time
                        </span>
                      </div>
                      <p className="text-teal-700">
                        {selectedProduct.prepTime}
                      </p>
                    </div>
                    <div className="bg-amber-50 p-4 rounded-2xl border border-amber-100">
                      <div className="flex items-center gap-2 mb-2">
                        <ChefHat className="w-5 h-5 text-amber-600" />
                        <span className="font-semibold text-amber-800">
                          Handcrafted
                        </span>
                      </div>
                      <p className="text-amber-700">Made Fresh</p>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col gap-4">
                  <button
                    onClick={() => {
                      addToCart(selectedProduct);
                      setSelectedProduct(null);
                    }}
                    className="w-full bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white py-4 rounded-2xl font-bold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3"
                  >
                    <ShoppingCart size={22} />
                    Add to Cart - Rs. {selectedProduct.price}
                  </button>

                  <div className="flex gap-3">
                    <button
                      onClick={() => setSelectedProduct(null)}
                      className="flex-1 px-6 py-3 border-2 border-gray-300 hover:border-gray-400 text-gray-700 rounded-2xl font-semibold transition-all duration-300 hover:bg-gray-50"
                    >
                      Close
                    </button>
                    <button
                      onClick={() => toggleFavorite(selectedProduct.id)}
                      className={`px-6 py-3 rounded-2xl font-semibold transition-all duration-300 flex items-center gap-2 ${
                        favorites.has(selectedProduct.id)
                          ? "bg-red-100 text-red-600 border-2 border-red-200 hover:bg-red-50"
                          : "bg-gray-100 text-gray-600 border-2 border-gray-200 hover:bg-gray-50"
                      }`}
                    >
                      <Heart
                        className={`w-5 h-5 ${
                          favorites.has(selectedProduct.id)
                            ? "fill-red-600"
                            : ""
                        }`}
                      />
                      {favorites.has(selectedProduct.id)
                        ? "Favorited"
                        : "Add to Favorites"}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Enhanced Add Product Modal */}
      {/* Removed addModal and related code */}

      {/* Cart Indicator */}
      {cart.length > 0 && (
        <div className="fixed bottom-8 right-8 bg-gradient-to-r from-teal-500 to-cyan-500 text-white p-4 rounded-full shadow-2xl">
          <div className="flex items-center gap-2">
            <ShoppingCart size={24} />
            <span className="font-bold">{cart.length}</span>
          </div>
        </div>
      )}
    </div>
  );
}
