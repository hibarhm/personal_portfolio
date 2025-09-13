'use client';

import { FaLocationArrow, FaArrowDown } from "react-icons/fa6";
import { motion } from 'framer-motion';
import { useRef, useCallback } from 'react';
import MagicButton from "./MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";

const Hero = () => {
  const aboutSectionRef = useRef<HTMLElement>(null);

  // Smooth scroll to #about section - now safe for SSR
  const handleScroll = useCallback(() => {
    if (aboutSectionRef.current) {
      aboutSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  // Animation variants for the arrow button
  const arrowVariants = {
    initial: { y: 0 },
    animate: {
      y: [0, 10, 0],
      transition: {
        repeat: Infinity,
        duration: 1.5,
        ease: 'easeInOut',
      },
    },
    hover: {
      scale: 1.2,
      rotate: 360,
      boxShadow: '0 0 15px rgba(59, 130, 246, 0.7)', // Blue neon glow
      transition: { duration: 0.3 },
    },
    tap: { scale: 0.9 },
  };

  return (
    <div className="pb-20 pt-36">
      
      {/**
       *  UI: grid
       *  change bg color to bg-black-100 and reduce grid color from
       *  0.2 to 0.03
       */}
      <div
        className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
       absolute top-0 left-0 flex items-center justify-center"
      >
        {/* Radial gradient for the container to give a faded look */}
        <div
          className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
         bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>

      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <TextGenerateEffect
            words="Building Interfaces That Speak Human"
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
          />
          <br></br><br></br>
          <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
           <small> Hello! I&apos;m </small> <br></br> <strong> Hiba Raheem </strong><br></br> <small> a Software Engineering Undergraduate </small>
          </p>

          <a href="mailto:hibaraheem10@gmail.com">
            <MagicButton
              title="HIRE ME"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>

          {/* Downward Arrow Button */}
          <motion.button
            onClick={handleScroll}
            variants={arrowVariants}
            initial="initial"
            animate="animate"
            whileHover="hover"
            whileTap="tap"
            className="mt-8 p-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-white
              shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/50
              flex items-center justify-center relative overflow-hidden
              transition-all duration-300 ease-in-out
              group"
            aria-label="Scroll to about section"
          >
            <FaArrowDown className="text-xl group-hover:scale-110 transition-transform" />
            {/* Subtle glow effect */}
            <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
          </motion.button>
        </div>
      </div>

      {/* Hidden target for scrolling - now using ref instead of document.getElementById */}
      <section 
        id="about" 
        ref={aboutSectionRef}
        className="hidden" // or style it appropriately for your layout
      />
    </div>
  );
};

export default Hero;