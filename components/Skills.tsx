"use client";

import React, { useState } from 'react'
import SectionHeading from './section-heading'
import { skillsData } from '@/lib/data'
import { useSectionInView } from '@/lib/hooks';
import { motion } from 'framer-motion';

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    }}),
};

export default function Skills() {

  const { ref } = useSectionInView("Skills");

  return (
    <section 
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
      id="skills"
      ref={ref}
    >
      <SectionHeading>My Skills</SectionHeading>
      <ul 
        className="flex flex-wrap justify-center gap-2 text-lg text-gray-800"
      > 
        {skillsData.map((skill, index) => (
          <div 
            className="relative block group h-20 w-20 md:h-32 md:w-32"
            key={index}
          >
            <motion.img 
              src={`./img/skills/${skill.sname}.${skill.Type}`}
              alt={skill.Title}
              className="absolute inset-0 w-full 
              h-full rounded-full object-cover border-[0.35rem] border-white shadow-xl group-hover:brightness-[0] group-hover:blur-sm group-hover:-z-20 dark:brightness-[0.8]"
              width="180"
              height="180"
              key={index}
              variants={fadeInAnimationVariants}
              initial="initial"
              whileInView="animate"
              viewport={{
                once: true,
              }}
              custom={index}
            />
            <p className="relative h-20 w-20 -z-10 rounded-full text-white/90 text-sm sm:text-lg font-bold flex justify-center items-center hover:scale-105 sm:h-32 sm:w-32 dark:text-black dark:bg-white/70">{skill.Title}</p>
          </div>
            
        ))}
      </ul>
    </section>
  )
}