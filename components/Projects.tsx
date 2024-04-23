"use client";

import React from 'react'
import SectionHeading from './section-heading'
import { useSectionInView } from '@/lib/hooks';
import Card from './card';

export default function Projects() {

  const { ref } = useSectionInView("Projects", 0.75); 

  return (
    <section
      className="mb-36 mt-28 leading-8 sm:mb-40 scroll-mt-28"
      id="projects"
    >
      <SectionHeading>Projects</SectionHeading>
      <Card />
    </section>
  )
}
