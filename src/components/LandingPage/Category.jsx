import React from 'react';
import { motion } from 'framer-motion';
import Cat1 from "../../assets/Cat1.png"
import Cat2 from "../../assets/Cat2.png"
import Cat3 from "../../assets/Cat3.png"
import Cat4 from "../../assets/Cat4.png"
import Cat5 from "../../assets/Cat5.png"
import Cat6 from "../../assets/Cat6.png"


const Category = () => {
  // Data for each category card - replace image URLs with your actual assets if needed
  const categories = [
    {
      name: 'Men',
      image: Cat1, // Stylish man in beige jacket + sunglasses
      rotate: '-8deg',
    },
    {
      name: 'Women',
      image: Cat2, // Two women in casual chic outfits
      rotate: '4deg',
    },
    {
      name: 'Kids',
      image: Cat3, // Group of kids in fashion
      rotate: '8deg',
    },
    {
      name: 'Accessories',
      image: Cat4, // Handbag + hat + sunglasses flatlay
      rotate: '-8deg',
    },
    {
      name: 'Skincare',
      image: Cat5, // Skincare products & box
      rotate: '0deg',
    },
    {
      name: 'Haircare',
      image: Cat6, // Keratin haircare bottles
      rotate: '8deg',
    },
  ];

  // Stagger animation container (triggers on scroll)
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.18,     // Cards appear one after another
        delayChildren: 0.1,
      },
    },
  };

  // Individual card entrance
  const item = {
    hidden: { opacity: 0, y: 80, scale: 0.92 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.75, ease: 'easeOut' },
    },
  };

  return (
    <div className="bg-white min-h-screen py-16 px-5 font-sans">
      {/* HEADER SECTION */}
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex items-baseline gap-3 mb-14"
        >
          <h2 className="text-2xl md:text-2xl font-bold text-neutral-900 tracking-tighter">
            Category
          </h2>
          <span className="text-[#f97316] text-2xl md:text-2xl font-bold tracking-tighter">
            List
          </span>
        </motion.div>

        {/* GRID CONTAINER - Mobile first: 2 cols → 3 cols on larger screens */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-3 gap-x-10 gap-y-16 max-w-3xl mx-auto"
        >
          {categories.map((category, index) => (
            <motion.div
              key={index}
              variants={item}
              // Custom rotate applied via inline style (framer-motion respects it)
              style={{ rotate: category.rotate }}
              className="group relative bg-[#f9f0eb] rounded-3xl shadow-[0_20px_40px_-15px_rgb(0,0,0,0.15)] overflow-hidden hover:shadow-2xl transition-shadow duration-500"
            >
              {/* Card inner content */}
              <div className="p-6 pb-8">
                {/* Image container */}
                <div className="overflow-hidden rounded-2xl aspect-square">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>

                {/* Label */}
                <div className="mt-8 text-center">
                  <p className="text-xl font-medium text-neutral-800 tracking-wide">
                    {category.name}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Subtle footer note */}
      {/* <div className="text-center mt-20 text-neutral-400 text-sm">
        Scroll down to see the staggered entrance animation
      </div> */}
    </div>
  );
};

export default Category;