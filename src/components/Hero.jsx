

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react'; // or your icon library

// Main Hero Section Component
const Hero = () => {
  return (
    <div className="min-h-screen  overflow-hidden mt-10 rounded-bl-lg rounded-br-10xl relative">
      {/* Header Section - Animated first */}
      {/* bg-gradient-to-b from-white from-[30%] via-[#DA5605]/0 to-[#DA5605] */}
      <motion.header
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-center pt-8 md:pt-12 px-4"
      >
        {/* Tagline */}
        <p className="text-sm md:text-base font-bold text-gray-700 mb-2 font-['Pacifico']">
          New Season. New Style
        </p>

        {/* Main Heading */}
        <h1 className="text-2lg md:text-2lg lg:text-4xl font-bold text-gray-900 mb-4 font-[Poppins]">
          Elevate Your Everyday Look
        </h1>

        {/* Subheading */}
        <p className="text-sm md:text-base text-gray-600 max-w-2xl mx-auto mb-6 font-[Poppins]">
          Shop stylish outfits and accessories, skincare and hair essentials <br />you'll love.
        </p>
      </motion.header>

      {/* CTA Buttons Section - Animated second */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
        className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4 mb-12"
      >
        {/* Primary CTA Button */}
        <button className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-lg font-medium flex items-center gap-2 transition-all duration-300 shadow-lg hover:shadow-xl w-full sm:w-auto justify-center">
          Shop Now
          <ArrowRight />
        </button>

        {/* Secondary CTA Button */}
        <button className="bg-white hover:bg-gray-50 text-orange-600 border-2 border-orange-600 px-8 py-3 rounded-lg font-medium transition-all duration-300 w-full sm:w-auto">
          Explore Collection
        </button>
      </motion.div>

      {/* Hero Images Container - Curved background with images */}

        {/* Curved Background - Animated third */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="absolute inset-0  rounded-b-[100%] bg-gradient-to-t from-orange-300 to-orange-50md:rounded-[100%] h-[500px] md:h-[550px] shadow-lg "
        />
      {/* Images Grid Container */}
      <div className=" z-10 max-w-7xl mx-auto px-4 pb-12 ">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-8 items-end pt-12">

          {/* Left Image 1 - Woman with skincare (Top Left) - Animated fourth */}
          <motion.div
            initial={{ opacity: 0, x: -50, y: 20 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9, ease: "easeOut" }}
            className="col-span-1 md:col-span-1 justify-self-start"
          >
            <div className="absolute md:top-20 md:left-20 bg-white rounded-2xl shadow-xl overflow-hidden w-25 h-30 md:w-28 md:h-32">
              <img
                src="https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=400&h=500&fit=crop"
                alt="Woman applying skincare"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Left Image 2 - Fashion model (Bottom Left) - Animated fifth */}
          <motion.div
            initial={{ opacity: 0, x: -30, y: 30 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.6, delay: 1.1, ease: "easeOut" }}
            className="col-span-1 md:col-span-1 justify-self-center mt-8 md:mt-16"
          >
            <div className="absolute md:top-65 md:left-65 bg-white rounded-2xl shadow-xl overflow-hidden w-32 h-40 md:w-28 md:h-32">
              <img
                src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=400&h=500&fit=crop"
                alt="Fashion model"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Center Image - Group of people - Animated sixth */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.3, ease: "easeOut" }}
            className="col-span-2 md:col-span-1 justify-self-center mt-0 md:mt-24"
          >
            <div className="absolute md:top-98 md:left-120 bg-white rounded-2xl shadow-xl overflow-hidden w-full md:w-28 md:h-32">
              <img
                src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=500&h=400&fit=crop"
                alt="Group of stylish people"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Right Image 1 - Accessories (Bottom Right) - Animated seventh */}
          <motion.div
            initial={{ opacity: 0, x: 30, y: 30 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.6, delay: 1.5, ease: "easeOut" }}
            className="col-span-1 md:col-span-1 justify-self-center mt-8 md:mt-16 hidden md:block"
          >
            <div className="absolute md:top-98 md:right-120 bg-white rounded-2xl shadow-xl overflow-hidden w-48 h-56 md:w-28 md:h-32">
              <img
                src="https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=400&h=500&fit=crop"
                alt="Fashion accessories"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Right Image 2 - Beauty portrait (Top Right) - Animated eighth */}
          <motion.div
            initial={{ opacity: 0, x: 50, y: 20 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.6, delay: 1.7, ease: "easeOut" }}
            className="col-span-1 md:col-span-1 justify-self-end hidden md:block"
          >
            <div className="absolute md:top-65 md:right-65 bg-white rounded-2xl shadow-xl overflow-hidden w-48 h-56 md:w-28 md:h-32">
              <img
                src="https://images.unsplash.com/photo-1531891437562-4301cf35b7e4?w=400&h=500&fit=crop"
                alt="Beauty portrait"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Mobile Right Image - Man in sunglasses - Animated for mobile */}
          <motion.div
            initial={{ opacity: 0, x: 50, y: 20 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.6, delay: 1.5, ease: "easeOut" }}
            className="col-span-1 md:col-span-1 justify-self-end hidden md:block"
          >
            <div className="absolute md:top-20 md:right-20 bg-white rounded-2xl shadow-xl overflow-hidden w-32 h-40 md:w-28 md:h-32">
              <img
                src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=500&h=400&fit=crop"
                alt="Man with sunglasses"
                className="w-full h-full object-cover text-black"
              />
            </div>
          </motion.div>
        </div>
      </div>
    {/* last section */}
      <div className="w-full bg-white py-12 md:py-10 px-0 ">
        <div className="max-w-7xl mx-auto ">
          {/* Features Grid - 4 columns on desktop, stacked on mobile */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-46 bcd ">

            {/* Feature 1 - Free Shipping - Animated first */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0, ease: "easeOut" }}
              className="flex flex-col items-center text-center md:items-start md:text-left"
            >
              {/* Icon Container */}
              <div className="w-12 h-12 md:w-10 md:h-10 mb-4 flex items-center justify-center">
                <svg
                  className="w-full h-full text-orange-600"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"
                  />
                </svg>
              </div>

              {/* Title */}
              <h3 className="text-lg md:text-base font-bold text-gray-900 mb-2">
                Free Shipping
              </h3>

              {/* Description */}
              <p className="text-sm md:text-sm text-gray-600">
                Free shipping for order above $185
              </p>
            </motion.div>

            {/* Feature 2 - Members Discount - Animated second */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              className="flex flex-col items-center text-center md:items-start md:text-left"
            >
              {/* Icon Container */}
              <div className="w-12 h-12 md:w-10 md:h-10 mb-4 flex items-center justify-center">
                <svg
                  className="w-full h-full text-orange-600"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>

              {/* Title */}
              <h3 className="text-lg md:text-base font-bold text-gray-900 mb-2">
                Members Discount
              </h3>

              {/* Description */}
              <p className="text-sm md:text-sm text-gray-600">
                Discount for elite members
              </p>
            </motion.div>

            {/* Feature 3 - Flexible Payment - Animated third */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
              className="flex flex-col items-center text-center md:items-start md:text-left"
            >
              {/* Icon Container */}
              <div className="w-12 h-12 md:w-10 md:h-10 mb-4 flex items-center justify-center">
                <svg
                  className="w-full h-full text-orange-600"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                  />
                </svg>
              </div>

              {/* Title */}
              <h3 className="text-lg md:text-base font-bold text-gray-900 mb-2">
                Flexible Payment
              </h3>

              {/* Description */}
              <p className="text-sm md:text-sm text-gray-600">
                Secured payment options
              </p>
            </motion.div>

            {/* Feature 4 - Swift Support - Animated fourth */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
              className="flex flex-col items-center text-center md:items-start md:text-left"
            >
              {/* Icon Container */}
              <div className="w-12 h-12 md:w-10 md:h-10 mb-4 flex items-center justify-center">
                <svg
                  className="w-full h-full text-orange-600"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              </div>

              {/* Title */}
              <h3 className="text-lg md:text-base font-bold text-gray-900 mb-2">
                Swift Support
              </h3>

              {/* Description */}
              <p className="text-sm md:text-sm text-gray-600">
                24/7 customer support
              </p>
            </motion.div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;