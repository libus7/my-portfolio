"use client";

import React from 'react'
import SectionHeading from './section-heading';
import { useSectionInView } from '@/lib/hooks';
import { motion } from 'framer-motion';
import { sendEmail } from "@/actions/sendEmail";
import SubmitBtn from './submit-btn';
import toast from 'react-hot-toast';

export default function Contact() { 
  const { ref } = useSectionInView("Contact");

  return (
    <motion.section 
      className="scroll-mt-28 mb-20 sm:mb-28 w-[min(100%, 38rem)] text-center" 
      id="contact"
      ref={ref}
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading>Contact me</SectionHeading>
      <p className="text-gray-700 -mt-6 dark:text-white/80 w-full">
        You can reach me at:{" "}
        <a className="underline" href="mailto:example@gmail.com">matthew.libby7@gmail.com</a>{" "}
        or through this form.
      </p>

      <form 
        className="mt-10 flex flex-col items-center dark:text-black"
        action={async(formData) => {
          const { data, error} = await sendEmail(formData);

          if (error) {
            toast.error(error);
            return;
          }
          toast.success("Email sent successfully!");
        }}
      >
        <div>
          <input 
          className="h-14 w-full px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none" 
          name="senderEmail" 
          type="email"
          required
          maxLength={500}
          placeholder="Your email"
          />
          <textarea 
            className="h-52 my-3 w-full rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none" 
            name="message"
            placeholder="Your message"
            required
            maxLength={5000}
          />
        </div>
        
        <SubmitBtn />
      </form>
    </motion.section>
  );
}