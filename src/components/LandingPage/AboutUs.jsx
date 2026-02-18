import React from 'react';
import { motion } from 'framer-motion';
import AboutBg from "../../assets/AboutBg.png"

const AboutUs = () => {
    // Stagger parent for sequential animation of major blocks
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

    // Fade + slide up for each major section
    const sectionVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.9, ease: 'easeOut' },
        },
    };

    return (
        <section className="bg-red-800 h-auto">
            <div className="max-w-7xl mx-auto ">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    className="flex item-center w-full justify-between"
                >
                    <div className='w-full'>
                        <p className="text-orange-500 text-xl md:text-2xl font-medium tracking-wide">
                            About <span className="text-gray-900">Us</span>
                        </p>
                    </div>

                    <motion.div
                        variants={sectionVariants}
                        className="w-full relative overflow-hidden lg:h-[520px] bg-cover bg-center bg-no-repeat flex items-end justify-end" style={{ backgroundImage: `url(${AboutBg})` }}
                    >

                        <motion.div variants={sectionVariants} className="w-3/4 h-full bg-white rounded-tl-[100%] rounded-bl-[100%] space-y-8 lg:space-y-10">
                            {/* ==================== SMALL LABEL "About Us" ==================== */}


                            {/* ==================== MAIN HEADING ==================== */}
                            {/* Split line + emphasis on "everyday confidence" */}
                            <h2 className="text-2xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 leading-tight">
                                Designed for your
                                <br />
                                <span className="text-gray-900">everyday confidence</span>
                            </h2>

                            {/* ==================== BODY TEXT ==================== */}
                            {/* Exact paragraph spacing, neutral color, readable line height */}
                            <div className="space-y-6 text-lg md:text-xl text-gray-700 leading-relaxed">
                                <p>
                                    Our brand brings fashion and self-care together in one seamless shopping experience. From
                                    stylish outfits to skincare and haircare essentials, every product is carefully selected to
                                    help you look and feel your best.
                                </p>

                                <p>
                                    We believe confidence starts with how you care for yourself. That's why we focus on quality,
                                    simplicity, and pieces that fit effortlessly into your lifestyle. Whether you're updating
                                    your wardrobe or refreshing your routine, we're here to make self-expression easy,
                                    accessible, and enjoyable.
                                </p>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* ==================== TEXT CONTENT SECTION ==================== */}

                </motion.div>
            </div>
        </section>
    );
};

export default AboutUs;