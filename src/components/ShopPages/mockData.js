// src/mock/mockData.js

export const categories = [
  {
    id: "clothing",
    name: "Clothing",
    subcategories: [
      { id: "men", name: "Men" },
      { id: "women", name: "Women" },
      { id: "kids", name: "Kids" },
      { id: "accessories", name: "Accessories" },
    ],
  },
  {
    id: "skincare",
    name: "Skincare",
    subcategories: [
      { id: "cleansers", name: "Cleansers" },
      { id: "toners", name: "Toners" },
      { id: "serum", name: "Serum & Oil" },
      { id: "moisturizers", name: "Moisturizers" },
    ],
  },
];

export const products = [
  {
    id: "1",
    name: "Classic Men's Suit",
    price: 150,
    category: "clothing",
    subcategory: "men",
    description:
      "Expertly tailored from premium fabric, perfect for business and formal events.",
    images: [
      "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7",
      "https://images.unsplash.com/photo-1520975922284-8b456906c813",
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
  },
  {
    id: "2",
    name: "Short Sleeve T-Shirt",
    price: 80,
    category: "clothing",
    subcategory: "men",
    description: "Comfortable cotton T-shirt for everyday wear.",
    images: [
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab",
    ],
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: "3",
    name: "Mist Toner",
    price: 120,
    category: "skincare",
    subcategory: "toners",
    description: "Hydrating facial mist toner for glowing skin.",
    images: [
      "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519",
    ],
    sizes: [],
  },
];