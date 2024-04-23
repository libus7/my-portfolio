"use client";

import React from 'react'
import SectionHeading from './section-heading';
import { motion } from 'framer-motion';
import { useSectionInView } from '@/lib/hooks';
import Image from 'next/image';

export default function About() {
  
  const { ref } = useSectionInView("About", 0.75);

  return (
      <motion.section 
        className="mb-28 mt-28 max-w-[45rem] leading-8 sm:mb-40 scroll-mt-28"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.175 }}
        id="about"
        ref={ref}
      >
        <SectionHeading>A Little About Me</SectionHeading>
        <motion.div 
          className='flex items-center justify-center my-8'
          initial={{ opacity: 0, y: 100, scale: 0.3 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.2 }}
        >  
          <Image 
            src="/img/profile-pic.jpg"
            alt="Matthew Portrait"
            width="192"
            height="192"
            quality="95"
            priority={true}
            className="h-36 w-36 rounded-full object-cover border-[0.35rem] border-white shadow-xl hover:scale-125"
          />
        </motion.div>
        <p className="mb-3">
          After working in a couple different fields since graduating college with an{" "}
          <span className="font-medium">Engineering</span> degree, I decided to make a career change. A friend reached out to me and asked if I wanted to learn <span className="text-blue-700 font-bold dark:text-blue-400">Drupal</span> with him. I decided to take a chance and started to learn, first hand, how a Drupal site worked and how to build one using the latest industry standards. I also continued my studies using a Udemy course on{" "}
          <span className="text-blue-700 font-bold dark:text-blue-400">full-stack web development</span> taught by Angela Yu.{" "}<span className="italic">My favorite part of programming</span> is the problem-solving aspect. I <span className="underline">love</span> the feeling of finally figuring out a solution to a problem. My core stack is{" "}<span className="text-blue-700 font-bold dark:text-blue-400">Drupal, PHP, React, Next.js, and Remix</span>. I am also familiar with TypeScript. I am always looking to learn new technologies. I am currently looking for a{" "}
          <span className="text-blue-700 font-bold dark:text-blue-400">full-time position</span> as a software/web
          developer.
        </p>

        <p className="">
          <span className="italic">When I'm not coding</span>, I enjoy going on <span className="text-blue-700 font-bold dark:text-blue-400">hikes</span> with my family and playing <span className="text-blue-700 font-bold dark:text-blue-400">guitar</span>.
        </p>
      </motion.section>
  );
}
function setActiveSection(arg0: string) {
  throw new Error("Function not implemented.");
}

