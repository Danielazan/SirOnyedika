

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react'; // or your icon library
// Images
import img1 from "../../assets/hero1.png"
import img2 from "../../assets/hero2.png"
import img3 from "../../assets/hero3.png"
import img4 from "../../assets/hero4.png"
import img5 from "../../assets/hero5.png"
import img6 from "../../assets/hero6.png"
// Icons
import Ship from "../../assets/shipicon.png"
import MoneyBag from "../../assets/moneybagIcon.png"
import Wallet from "../../assets/walletIcon.png"
import Support from "../../assets/supportIcon.png"

// Main Hero Section Component
const Hero = () => {
  const features = [
    {
      id: 1,
      icon: Ship,
      title: 'Free Shipping',
      description: 'Free shipping for order above $185',
      delay: 0.2
    },
    {
      id: 2,
      icon: MoneyBag,
      title: 'Members Discount',
      description: 'Discount for elite members',
      delay: 0.4
    },
    {
      id: 3,
      icon: Wallet,
      title: 'Flexible Payment',
      description: 'Secured payment options',
      delay: 0.6
    },
    {
      id: 4,
      icon: Support,
      title: 'Swift Support',
      description: '24/7 customer support',
      delay: 0.8
    }
  ];

  return (
    <div className="min-h-screen overflow-hidden mt-20 md:mt-10 rounded-bl-lg rounded-br-10xl relative">
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
        <button className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-lg font-medium flex items-center gap-2 transition-all duration-300 shadow-lg hover:shadow-xl  md:w-50 w-50  justify-center">
          Shop Now
          <ArrowRight />
        </button>

        {/* Secondary CTA Button */}
        <button className="bg-white hover:bg-gray-50 text-orange-600 border-2 border-orange-600 px-8 py-3 rounded-lg font-medium transition-all duration-300 md:w-50 w-50 ">
          Explore Collection
        </button>
      </motion.div>

      {/* Hero Images Container - Curved background with images */}

      {/* Curved Background - Animated third */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
        className="absolute inset-0  rounded-b-[100%] bg-gradient-to-t from-orange-300 to-orange-50 h-[400px] md:h-[550px] shadow-lg -z-1"
      />
      {/* Images Grid Container */}
       <div className=" hidden md:block z-10 max-w-7xl mx-auto px-4 pb-12  mb-20">
        

          {/* Left Image 1 - Woman with skincare (Top Left) - Animated fourth */}
          <motion.div
            initial={{ opacity: 0, x: -50, y: 20 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9, ease: "easeOut" }}
            className="col-span-1 md:col-span-1 justify-self-start"
          >
            <div className="absolute top-20 md:top-20 md:left-20 bg-white rounded-2xl shadow-xl overflow-hidden w-25 h-30 md:w-28 md:h-32">
              <img
                src={img1}
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
                src={img2}
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
                src={img3}
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
                src={img4}
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
                src={img5}
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
                src={img6}
                alt="Man with sunglasses"
                className="w-full h-full object-cover text-black"
              />
            </div>
          </motion.div>
        
      </div>
     
      {/* Mobile version */}
      <div className='w-full md:hidden h-100 mt-27'>
        <div className="grid grid-cols-3 grid-rows-4 h-full ">
          <motion.div
            initial={{ opacity: 0, x: -50, y: 20 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9, ease: "easeOut" }}
            className="col-start-1 row-start-1 justify-self-start"
          >
            <div className=" bg-white rounded-2xl shadow-xl overflow-hidden w-25 h-30 md:w-28 md:h-32">
              <img
                src={img1}
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
            className="col-start-2 row-start-2 justify-self-center md:mt-16"
          >
            <div className=" bg-white rounded-2xl shadow-xl overflow-hidden w-25 h-30 md:w-28 md:h-32">
              <img
                src={img2}
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
            className="col-start-3 row-start-1 justify-self-center  md:mt-24"
          >
            <div className=" bg-white rounded-2xl shadow-xl overflow-hidden w-25 h-30 md:w-28 md:h-32">
              <img
                src={img3}
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
            className="col-start-1 row-start-3 justify-self-center md:mt-16 "
          >
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden w-25 h-30 md:w-28 md:h-32">
              <img
                src={img4}
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
            className="col-start-2 row-start-4 justify-self-end "
          >
            <div className=" bg-white rounded-2xl shadow-xl overflow-hidden w-25 h-30 md:w-28 md:h-32">
              <img
                src={img5}
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
            className="col-start-3 row-start-3 justify-self-end "
          >
            <div className=" bg-white rounded-2xl shadow-xl overflow-hidden w-25 h-30 md:w-28 md:h-32">
              <img
                src={img6}
                alt="Man with sunglasses"
                className="w-full h-full object-cover text-black"
              />
            </div>
          </motion.div>
        </div>
      </div>
      {/* last section */}
      <div className="w-full bg-white py-6 md:py-8 px-4 md:mt-40">
        <div className="max-w-7xl mx-auto ">
          {/* Features Grid Container */}
          <div className="grid md:grid-cols-4 grid-cols-2 gap-10 md:gap-10 ">
            {features.map((feature) => (
              /* Individual Feature Card - Animates sequentially */
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.6,
                  delay: feature.delay,
                  ease: "easeOut"
                }}
                className="flex flex-row md:items-start items-center md:text-left text-center gap-3 "
              >
                {/* Icon Container */}
                <div className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-between ">
                  <img
                    src={feature.icon}
                    alt={`${feature.title} icon`}
                    className="w-full h-full object-contain"
                  />
                </div>

                {/* Feature Title */}
                <div className='w-full h-20  justify-between'>
                  <h3 className="text-lg md:text-xl font-semibold text-gray-900">
                    {feature.title}
                  </h3>

                  {/* Feature Description */}
                  <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;