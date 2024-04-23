import { projectsData } from '@/lib/data'
import { motion } from 'framer-motion'
import React from 'react'

export default function Card() {
  return (
    <motion.div 
      className="flex flex-col items-center justify-center md:flex-wrap sm:flex-row gap-6 w-full"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ 
        type: 'spring',
        stiffness: 125,
        delay: 0.2,
        duration: 0.7,
        }}
    >
      {
        projectsData.map((data, index) => (
            <div 
              className="flex flex-col items-center justify-center border border-black/10 border-width-4 rounded-md p-4  bg-white dark:text-black/70 dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none w-full lg:w-96"
              key={index}
              onClick={() => {window.open(data.site)}}
            >
              <h1
                className="font-bold pt-4"
                key={index}
              >{data.title}</h1>
              <img 
                src={data.imageUrl}
                width="300"
                height="250"
                alt={data.title}
                className="py-4"
                key={index} 
              />
              <p
                className="sm:line-clamp-3 sm:hover:line-clamp-none"
                key={index}
              >{data.description}</p>
              <div 
                className="flex flex-row flex-wrap items-center justify-center gap-2 m-4"
                key={index}
              >
                { 
                  data.tags.map((tag, tagIndex) => (
                    <p key={tagIndex} className="bg-blue-200 border border-black/70 border-width-4 rounded-full px-2 py-1">{tag.tag}</p>  
                    ))
                }
              </div>
            </div>
        ))
      }
  </motion.div>
  )
}
