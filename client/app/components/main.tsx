"use client";

import React from 'react';
import { Flower } from 'lucide-react';
import { montserrat, outfit } from '../fonts/font';
import { motion, Variants, cubicBezier } from "framer-motion";

// --- Animation Variants ---

// 1. The Main Card Container (Scale and fade in slowly)
const cardVariants: Variants = {
  hidden: { 
    opacity: 0, 
    scale: 0.95, 
    y: 20 
  },
  visible: { 
    opacity: 1, 
    scale: 1, 
    y: 0,
    transition: { 
      duration: 1.2,
      ease: cubicBezier(0.25, 0.1, 0.25, 1), // A sophisticated cubic-bezier ease
      when: "beforeChildren", // Start this before animating the insides
    }
  }
};

// 2. The Content Wrapper (Staggers the items inside)
const contentStaggerVariants: Variants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.2, // Wait a split second after card appears
      staggerChildren: 0.1 // Delay between each item (icon, title, text, button)
    }
  }
};

// 3. The individual items (Slide up and fade in)
const fadeInUpVariants = {
  hidden: { 
    opacity: 0, 
    y: 40 
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.4, 
      ease: cubicBezier(0.25, 0.46, 0.45, 0.94)
    }
  }
};


const Main = () => {
  // Assuming this path exists in your public folder
  const backgroundImage = "/images/ashvini_main.jpg"; 

  return (
    <div className="flex justify-center items-center w-full min-h-screen p-2 sm:p-4 mt-20">
      {/* --- Animated Card Container --- */}
      <motion.div
        className="relative flex flex-col items-center justify-start sm:justify-center w-full sm:w-[95%] lg:w-[85%] h-[85vh] sm:h-[90vh] md:h-[95vh] bg-cover bg-center rounded-2xl overflow-hidden shadow-2xl"
        style={{ backgroundImage: `url(${backgroundImage})` }}
        variants={cardVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="absolute inset-0 bg-black/30 rounded-2xl"></div>

        {/* --- Animated Content Wrapper --- */}
        {/* This motion.div orchestrates the stagger effect */}
        <motion.div 
          className="relative z-10 w-full flex flex-col items-center pt-20 sm:pt-0 text-white px-4"
          variants={contentStaggerVariants}
        >
          
          {/* 1. Icon */}
          <motion.div className="mb-6 sm:mb-8" variants={fadeInUpVariants}>
            <Flower className="w-10 h-10 sm:w-12 sm:h-12" />
          </motion.div>

          <div className="w-full flex flex-col items-center">
            {/* 2. Headline */}
            <motion.h3 
              className={`${montserrat.className} text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold w-full text-center leading-tight`}
              variants={fadeInUpVariants}
            >
              Seamless Solutions.
            </motion.h3>

            {/* 3. Paragraph Text */}
            {/* Note: We apply motion to the container div for cleaner layout animation */}
            <motion.div className="text-center w-full flex justify-center" variants={fadeInUpVariants}>
              <p className={`my-4 sm:my-6 w-[95%] sm:w-[80%] lg:w-[60%] text-sm sm:text-base md:text-lg opacity-90`}>
                Our team brings extensive expertise in full-stack web development, with a strong focus on building intuitive applications that address real-world challenges.
              </p>
            </motion.div>
          </div>

          {/* 4. Button */}
          {/* Note: Added a 'whileHover' and 'whileTap' scale effect for extra polish */}
          <motion.div 
            className={`${outfit.className} mt-10 sm:mt-16 lg:mt-24`}
            variants={fadeInUpVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <button className="bg-white text-black px-6 py-3 sm:px-8 sm:py-3 text-sm sm:text-base rounded-full hover:bg-gray-100 transition-colors duration-300">
              CONNECT WITH US
            </button>
          </motion.div>

        </motion.div>
      </motion.div>
    </div>
  );
};

export default Main;