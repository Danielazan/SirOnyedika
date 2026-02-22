import React from 'react'
import { motion } from 'framer-motion';
import Bg from "../../assets/FlashSalesBg.png"
import flashwoman from "../../assets/flasfSalesImg.png"
import { ArrowRight } from 'lucide-react';

// Flash Sales Images
import Flash1 from "../../assets/Flash1.png"
import Flash2 from "../../assets/Flash2.png"
import Flash3 from "../../assets/Flash3.png"
import Flash4 from "../../assets/Flash4.png"

const flashSales = [
  {
    name: 'Classic Tailored Blazer',
    price: 95.00,
    itemsLeft: 85,
    totalStock: 100, // example – used to calculate percentage
    image: Flash1, // placeholder from search
  },
  {
    name: 'Lounge Set',
    price: 95.00,
    itemsLeft: 85,
    totalStock: 100,
    image: Flash2,
  },
  {
    name: 'Ankle Boot',
    price: 95.00,
    itemsLeft: 60,
    totalStock: 100,
    image: Flash3, // placeholder boot
  },
  {
    name: 'Classic Tailored Blazer',
    price: 95.00,
    itemsLeft: 85,
    totalStock: 100,
    image: Flash4, // another blazer variant
  },
];

const FlashSales = () => {

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.35,
        delayChildren: 0.3,
      },
    },
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.9, ease: 'easeOut' },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
  };

  // "See All" link animation
  const seeAllVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, delay: 0.4 } },
  };

  // Grid / list container – staggers children cards
  const listVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.16,
        delayChildren: 0.7,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.96 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.65, ease: 'easeOut' },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      className="h-auto w-full relative overflow-hidden bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${Bg})` }}
    >
      <div className="bg-[#FF7826]/5 h-full w-full flex flex-col md:flex-row items-start justify-center px-6 mb-2 md:mb-0">
        <img
          src={flashwoman}
          alt="woman with a hat"
          className="w-120 h-120 object-cover object-center group-hover:scale-105 transition-transform duration-500"
        />

        <div className='flex flex-col h-auto md:h-20 justify-between gap-3 mt-1 md:mt-20'>
          <h3 className="font-[Pacifico] font-semibold text-lg text-black">
            Special Offer
          </h3>
          <h1 className='font-[poppins] font-semibold text-black text-4xl leading-relaxed'>
            Fashion Sale  <br />
            <span>30% Off</span>
          </h1>
          <p className='font-[poppins] leading-relaxed font-gray text-sm '>
            Dont miss out. Refresh your wardrobe with our carefully <br /> curated pieces now at special prices
          </p>
          <button className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-lg font-medium flex items-center gap-2 transition-all duration-300 shadow-lg hover:shadow-xl  md:w-50 w-50  justify-center">
            Shop Now
            <ArrowRight />
          </button>
        </div>
      </div>
      <div className="bg-white pb-12 md:pb-20">
        {/* ==================== ORANGE HEADER BAR ==================== */}
        {/* Contains title + "See All" link – full-width orange strip */}
        <div className="w-full bg-orange-600 px-5 sm:px-5 py-5 md:py-6">
          <div className="w-full mx-auto flex items-center justify-between">
            <motion.h2
              initial="hidden"
              animate="visible"
              variants={titleVariants}
              className="text-white text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight"
            >
              Flash Sales
            </motion.h2>

            <motion.a
              href="#"
              variants={seeAllVariants}
              initial="hidden"
              animate="visible"
              className="text-white text-sm sm:text-base font-medium underline underline-offset-4 hover:no-underline transition-all"
            >
              See All
            </motion.a>
          </div>
        </div>

        {/* ==================== PRODUCT CARDS GRID ==================== */}
        {/* Mobile: vertical stack → sm+: 2 col → lg: 4 col */}
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 mt-2 relative z-10">
          <motion.div
            variants={listVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-18 "
          >
            {flashSales.map((item, index) => {
              const progress = (item.itemsLeft / item.totalStock) * 100;
              const progressColor = progress > 30 ? 'bg-gradient-to-r from-orange-500 to-orange-300' : 'bg-gradient-to-r from-red-500 to-orange-400';

              return (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
                >
                  {/* ==================== PRODUCT IMAGE ==================== */}
                  <div className="bg-gray-50 overflow-hidden flex items-center justify-center bg-contain bg-center bg-no-repeat aspect-square"style={{ backgroundImage: `url(${item.image})` }}>
                    {/* <img
                      src={item.image}
                      alt={item.name}
                      className="w-50 h-70 object-cover object-center hover:scale-105 transition-transform duration-500"
                    /> */}
                  </div>

                  {/* ==================== DETAILS + PROGRESS BAR ==================== */}
                  <div className="p-5 space-y-3">
                    <h3 className="text-base md:text-lg font-semibold text-gray-900 line-clamp-2 min-h-[2.5rem]">
                      {item.name}
                    </h3>

                    <div className="text-2xl font-bold text-gray-900">
                      ${item.price.toFixed(2)}
                    </div>

                    <div className="text-sm text-gray-600">
                      {item.itemsLeft} Items Left
                    </div>

                    {/* ==================== CUSTOM PROGRESS BAR ==================== */}
                    {/* Rounded ends, gradient fill, background peach/orange fade */}
                    <div className="h-2.5 bg-orange-100 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${progress}%` }}
                        transition={{ duration: 1.2, ease: 'easeOut', delay: 1 + index * 0.15 }}
                        className={`h-full ${progressColor} rounded-full`}
                      />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>

    </motion.div>
  )
}

export default FlashSales
