import React from 'react';
import { HiDownload } from 'react-icons/hi';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithubSquare } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function Social() {
  return (
    <section className="sm:top-[1.7rem] sm:h-[initial] sm:py-0 flex sm:flex-col gap-4">
        <a 
          className="text-black bg-white w-[3rem] h-[3rem] flex items-center justify-center rounded-full outline-none focus:scale-[1.15] hover:scale-110 active:scale-105 transition cursor-pointer border borderBlack " href="./img/Resume-Matt-Libby-1-22-2024.pdf" 
          download
        >
          <HiDownload className="opacity-70 group-hover:translate-y-1 transition"/> 
        </a>
        <a className=" bg-white p-4 text-gray-700 w-[3rem] h-[3rem] flex items-center gap-2 rounded-full focus:scale-[1.15] hover:text-gray-950 hover:scale-[1.15] active:scale-105 transition cursor-pointer border borderBlack " href="https://www.linkedin.com/in/matthewlibby/" target="_blank">
            <BsLinkedin />
        </a>
        <a className=" bg-white p-4 text-gray-700 w-[3rem] h-[3rem] flex items-center gap-2 text-[1.25rem] rounded-full focus:scale-[1.25] hover:text-gray-950 hover:scale-[1.15] active:scale-105 transition cursor-pointer border borderBlack " href="https://github.com/libus7" target="_blank">
            <FaGithubSquare />
        </a>
      
    </section>
  )
}
