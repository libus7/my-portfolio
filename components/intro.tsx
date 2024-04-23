"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useSectionInView } from '@/lib/hooks';
import { FaChevronDown } from 'react-icons/fa6';

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);

  function setActiveSection(arg0: string) {
    throw new Error('Function not implemented.');
  }

  function setTimeOfLastClick(arg0: number) {
    throw new Error('Function not implemented.');
  }
  return (
    <section 
      className="relative mb-28 w-full text-center sm:mb-0"
      id="home"
      ref={ref}
    >
      <div className="brightness-[0.45] bg-no-repeat"
        style={{ 
          backgroundImage: "url(./img/Landscape.jpg)",
          height: '57rem',
        }}
      ></div> 
      <div className='flex items-center justify-center'>
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          ></motion.div>
          <motion.span 
            className="absolute bottom-0 right-0 text-4xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ 
              type: 'spring',
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
             }}
          >
          </motion.span>
        </div>
      </div>
      <div className="w-full absolute top-[10%] flex flex-col items-center justify-center mt-72">
        <motion.h1 
          className="mb-4 mt-4 px-4 text-2xl text-white font-normal !leading-[1.5] sm:text-4xl"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <span className="font-bold">Hi, I'm Matthew.</span>
        </motion.h1>
        <motion.h3 
          className="mb-10 mt-1 px-4 text-md text-white font-normal sm:text-2xl"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <span className="font-bold">Web developer{" "}</span><span>and{" "}</span><span className="font-bold">UI enthusiast</span>
        </motion.h3>

      </div>
     

      <motion.div 
        className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          delay: 0.1,
         }}
      >
        <Link 
          href="#about"
          className="group text-white text-3xl px-7 py-3 -mt-20 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:blur-sm active:scale-105 transition"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now()); 
          }}
        >
          <FaChevronDown className="opacity-90 group-hover:translate-y-1 transition" />
        </Link>
      </motion.div>

    </section>
  );
}