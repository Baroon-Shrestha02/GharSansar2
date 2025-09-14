const data = [
  {
    id: "cement",
    name: "OPC Cement",
    quality: "Grade 53 OPC",
    description:
      "Premium Ordinary Portland Cement sourced from certified manufacturers. Ideal for foundations, columns, and all structural work.",
    price: 750,
    unit: "per 50kg bag",
    image:
      "https://images.unsplash.com/photo-1602595688353-8f02a9d6f5b9?auto=format&fit=crop&w=800&q=80",
    company: "Ghar Sansar",
    rating: 4.7,
    inStock: true,
  },
  {
    id: "rebar",
    name: "Steel Rebars",
    quality: "TMT Fe500",
    description:
      "High-strength Thermo-Mechanically Treated (TMT) rods for reinforced concrete work. Durable and corrosion-resistant.",
    price: 120,
    unit: "per kg",
    image:
      "https://images.unsplash.com/photo-1581092334903-49c04d3f2b1f?auto=format&fit=crop&w=800&q=80",
    company: "GS",
    rating: 4.8,
    inStock: true,
  },
  {
    id: "bricks",
    name: "Clay Bricks",
    quality: "Standard size",
    description:
      "Durable, kiln-fired clay bricks for walls and partitions. Ensures stability and longevity of your construction.",
    price: 15,
    unit: "per brick",
    image:
      "https://images.unsplash.com/photo-1615719413546-d8e9842a1a07?auto=format&fit=crop&w=800&q=80",
    company: "Delight",
    rating: 4.5,
    inStock: true,
  },
  {
    id: "sand",
    name: "River Sand",
    quality: "Washed & Fine",
    description:
      "Clean, natural river sand ideal for concrete, plastering, and masonry work. Free from silt and impurities.",
    price: 25,
    unit: "per cubic ft",
    image:
      "https://images.unsplash.com/photo-1620121692029-d31ffbc7f907?auto=format&fit=crop&w=800&q=80",
    company: "Ghar Sansar",
    rating: 4.6,
    inStock: true,
  },
  {
    id: "aggregate",
    name: "Crushed Aggregate",
    quality: "20mm Graded Stones",
    description:
      "Coarse aggregate for concrete, road base, and foundation works. Ensures structural strength and stability.",
    price: 40,
    unit: "per cubic ft",
    image:
      "https://images.unsplash.com/photo-1601701620989-92c1e99c8f28?auto=format&fit=crop&w=800&q=80",
    company: "GS",
    rating: 4.7,
    inStock: true,
  },
  {
    id: "tiles",
    name: "Ceramic Floor Tiles",
    quality: "Glossy Finish",
    description:
      "Premium ceramic tiles suitable for floors and walls. Easy to clean, durable, and available in multiple designs.",
    price: 95,
    unit: "per sq. ft",
    image:
      "https://images.unsplash.com/photo-1598300042247-3f92d5e76da0?auto=format&fit=crop&w=800&q=80",
    company: "Delight",
    rating: 4.8,
    inStock: true,
  },
  {
    id: "paint",
    name: "Exterior Wall Paint",
    quality: "Weather Resistant",
    description:
      "High-quality exterior paint that withstands sun, rain, and dust. Long-lasting and vibrant colors.",
    price: 3200,
    unit: "per 20L bucket",
    image:
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ef?auto=format&fit=crop&w=800&q=80",
    company: "Ghar Sansar",
    rating: 4.6,
    inStock: true,
  },
  {
    id: "wood",
    name: "Timber Planks",
    quality: "Seasoned Hardwood",
    description:
      "High-quality hardwood planks suitable for furniture, flooring, and structural purposes.",
    price: 1250,
    unit: "per cubic ft",
    image:
      "https://images.unsplash.com/photo-1567427013953-1a6b6e4d92b9?auto=format&fit=crop&w=800&q=80",
    company: "GS",
    rating: 4.7,
    inStock: true,
  },
  {
    id: "pvc-pipes",
    name: "PVC Pipes",
    quality: "Durable & Lightweight",
    description:
      "High-quality PVC pipes for water supply and plumbing. Corrosion-resistant and easy to install.",
    price: 90,
    unit: "per meter",
    image:
      "https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&w=800&q=80",
    company: "Delight",
    rating: 4.5,
    inStock: true,
  },
  {
    id: "doors",
    name: "Wooden Doors",
    quality: "Solid Teak Wood",
    description:
      "Premium solid panel wooden doors. Perfect for bedrooms, entrance, and interior partitions.",
    price: 8500,
    unit: "per door",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80",
    company: "Ghar Sansar",
    rating: 4.7,
    inStock: true,
  },
  {
    id: "windows",
    name: "Aluminium Windows",
    quality: "Sliding Glass",
    description:
      "Lightweight and durable aluminium windows with smooth sliding mechanism and premium finish.",
    price: 450,
    unit: "per sq. ft",
    image:
      "https://images.unsplash.com/photo-1617093727343-d675f4e43a83?auto=format&fit=crop&w=800&q=80",
    company: "GS",
    rating: 4.6,
    inStock: true,
  },
  {
    id: "roofing",
    name: "Corrugated Roofing Sheets",
    quality: "Galvanized Steel",
    description:
      "Durable roofing sheets suitable for homes, sheds, and commercial buildings. Resistant to weather and corrosion.",
    price: 2200,
    unit: "per sheet",
    image:
      "https://images.unsplash.com/photo-1620121788034-8c9c9b6b5f7c?auto=format&fit=crop&w=800&q=80",
    company: "Delight",
    rating: 4.7,
    inStock: true,
  },
];

export default data;
