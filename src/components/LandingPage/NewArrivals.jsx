import React from 'react';
import { motion } from 'framer-motion';

// Placeholder images – replace with your real product images in production
// Selected close matches from design:
// 0: Couple in white tops + jeans
// 1: Wide yellow straw hat
// 2: Chunky red knit sweater
// 3: Navy luxury tote / handbag
const products = [
  {
    image: 'https://thumbs.dreamstime.com/b/couple-walks-hand-against-bright-yellow-background-fun-photo-session-two-people-walk-together-holding-hands-432640011.jpg',
    category: 'Unisex',
    name: 'Barel Jeans',
    rating: 4.5,
    price: 70.00,
  },
  {
    image: 'https://m.media-amazon.com/images/I/71Kfg02c0YS.jpg_BO30,255,255,255_UF750,750_SR1910,1000,0,C_QL100_.jpg',
    category: 'Accessories',
    name: 'Fashion Hat',
    rating: 3.5,
    price: 50.00,
  },
  {
    image: 'https://i.etsystatic.com/9402399/r/il/e6abd9/7349159157/il_fullxfull.7349159157_evom.jpg',
    category: 'Unisex',
    name: 'Knit Sweater',
    rating: 4.6,
    price: 65.00,
  },
  {
    image: 'https://m.media-amazon.com/images/I/81w9gI3imtL._AC_UY1000_.jpg',
    category: 'Accessories',
    name: 'Luxury Handbag',
    rating: 4.5,
    price: 65.00,
  },
];

const NewArrivals = () => {
  // Title entrance animation
  const titleVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
  };

  // Filter buttons container – appears after title
  const filtersVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.5 },
    },
  };

  const filterItemVariants = {
    hidden: { opacity: 0, scale: 0.92 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  };

  // Products grid – staggers each product card one after another
  const gridVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.18, delayChildren: 0.9 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 60, scale: 0.94 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.75, ease: 'easeOut' },
    },
  };

  return (
    <section className="bg-white py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* ==================== SECTION TITLE ==================== */}
        {/* "New Arrivals" with orange split styling */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={titleVariants}
          className="text-start mb-10 md:mb-14"
        >
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-gray-900 font-[poppins]">
            New <span className="text-orange-500">Arrivals</span>
          </h2>
        </motion.div>

        {/* ==================== FILTER TABS / CATEGORIES ==================== */}
        {/* Horizontal scroll on mobile, centered on larger screens */}
        <motion.div
          variants={filtersVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-wrap justify-center gap-3 md:gap-4 mb-12 md:mb-16 overflow-x-auto pb-2 scrollbar-hide"
        >
          {['All', 'Men', 'Women', 'Kids', 'Accessories', 'Skincare', 'Hair care'].map((tab, idx) => (
            <motion.button
              key={tab}
              variants={filterItemVariants}
              className={`
                px-6 py-2.5 text-sm md:text-base font-medium rounded-full transition-all
                ${idx === 0
                  ? 'bg-orange-500 text-white shadow-md'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200 active:bg-gray-300'}
              `}
            >
              {tab}
            </motion.button>
          ))}
        </motion.div>

        {/* ==================== PRODUCT GRID ==================== */}
        {/* Mobile: 1 col → sm: 2 col → lg: 4 col */}
        <motion.div
          variants={gridVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 "
        >
          {products.map((product, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="group flex flex-col bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 w-60"
            >
              {/* ==================== PRODUCT IMAGE ==================== */}
              <div className="relative aspect-square bg-gray-50 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* ==================== PRODUCT DETAILS ==================== */}
              <div className="p-5 flex flex-col flex-grow">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-500">{product.category}</span>
                  <div className="flex items-center text-sm">
                    <span className="text-yellow-500 mr-1">★</span>
                    <span className="font-medium text-gray-700">{product.rating}</span>
                  </div>
                </div>

                <h3 className="text-lg font-semibold text-gray-900 mb-3 line-clamp-2">
                  {product.name}
                </h3>

                <div className="mt-auto flex items-center justify-between">
                  <span className="text-xl font-bold text-gray-900">
                    ${product.price.toFixed(2)}
                  </span>

                  <button
                    className="
                      px-5 py-2.5 bg-orange-500 text-white text-sm font-medium
                      rounded-full hover:bg-orange-600 active:bg-orange-700
                      transition-colors duration-200 shadow-sm 
                    "
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default NewArrivals;