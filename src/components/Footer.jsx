import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaFacebookF, FaTwitter } from 'react-icons/fa'; // Assuming the 'o' icon represents Twitter/X; adjust if needed

const Footer = () => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.3, duration: 0.5 },
    }),
  };

  return (
    <footer className="bg-[#ED6A2C] text-white py-8"> {/* Orange background matching the design */}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Information Section: Contains logo, description, and social icons */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={sectionVariants}
            custom={0}
            className="space-y-4"
          >
            <h1 className="text-3xl font-[cursive] tracking-wide">Fashly</h1> {/* Cursive font for logo */}
            <p className="text-sm leading-relaxed">
              Where modern design meets with effortless style designed for everyday comfort and confidence to express your individuality.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-gray-300">
                <div className="w-8 h-8 flex items-center justify-center border border-white rounded-full"> {/* Circle (ellipse approximation) for icons */}
                  <FaLinkedin size={20} />
                </div>
              </a>
              <a href="#" className="text-white hover:text-gray-300">
                <div className="w-8 h-8 flex items-center justify-center border border-white rounded-full">
                  <FaFacebookF size={20} />
                </div>
              </a>
              <a href="#" className="text-white hover:text-gray-300">
                <div className="w-8 h-8 flex items-center justify-center border border-white rounded-full">
                  <FaTwitter size={20} />
                </div>
              </a>
            </div>
          </motion.div>

          {/* Quick Links Section: List of navigation links */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={sectionVariants}
            custom={1}
            className="space-y-4"
          >
            <h2 className="text-lg font-semibold">Quick Links</h2>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:underline">Home</a></li>
              <li><a href="#" className="hover:underline">About Us</a></li>
              <li><a href="#" className="hover:underline">Offers & Deals</a></li>
              <li><a href="#" className="hover:underline">Contact Us</a></li>
            </ul>
          </motion.div>

          {/* Help Section: List of support-related links */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={sectionVariants}
            custom={2}
            className="space-y-4"
          >
            <h2 className="text-lg font-semibold">Help</h2>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:underline">Delivery Information</a></li>
              <li><a href="#" className="hover:underline">Payment Methods</a></li>
              <li><a href="#" className="hover:underline">Contact Us</a></li>
              <li><a href="#" className="hover:underline">Return & Refund Policy</a></li>
            </ul>
          </motion.div>

          {/* Contact Info Section: Phone, email, and address details */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={sectionVariants}
            custom={3}
            className="space-y-4"
          >
            <h2 className="text-lg font-semibold">Contact Info</h2>
            <ul className="space-y-2 text-sm">
              <li>+123-345-678</li>
              <li>fahlyll@gmail.com</li>
              <li>12 Kingtown rd. New Haven</li>
            </ul>
          </motion.div>
        </div>

        {/* FAQs Section: Header for frequently asked questions */}
        <motion.h2
          initial="hidden"
          animate="visible"
          variants={sectionVariants}
          custom={4}
          className="text-lg font-semibold text-center mt-8"
        >
          FAQs
        </motion.h2>

        <hr className="my-4 border-white/30" /> {/* Thin horizontal line matching the design */}

        {/* Copyright Section: Footer copyright notice */}
        <motion.p
          initial="hidden"
          animate="visible"
          variants={sectionVariants}
          custom={5}
          className="text-center text-sm"
        >
          Copyright 2026 Fashion Website Design. All Rights Reserved.
        </motion.p>
      </div>
    </footer>
  );
};

export default Footer;