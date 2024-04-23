import React from "react";
import { FaDrupal, FaKeyboard, FaLaptopCode } from "react-icons/fa6";
import flyontarioImage from "@/public/img/projects/flyontario.png";
import nexusImage from "@/public/img/projects/nexus.webp";
import portfolioImage from "@/public/img/projects/portfolio.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Intern",
    location: "Remote",
    description:
      "I finished a 6-month internship with Aspiring Web where I learned the basics of web development using the Drupal CMS. I immediately found a job as a Junior Drupal Developer following this internship.",
    icon: React.createElement(FaKeyboard),
    date: "2021",
  },
  {
    title: "Junior Drupal Developer/Intern",
    location: "Remote",
    description:
      "I worked as a Junior Drupal Developer/Intern with Fruition for 6 months. This was a great experience where my team created a new half million dollar website from the ground up where information was migrated over from an older website.",
    icon: React.createElement(FaDrupal),
    date: "2022",
  },
  {
    title: "Junior Developer",
    location: "Remote",
    description:
      "I'm currently working as a Junior Developer where my team and I are building a healthcare app that is hosted on the web. I focus on both the backend (Drupal/PHP) and the frontend (React/Remix, Tailwind/CSS). We use many other technologies for developing the best customer experience possible.",
    icon: React.createElement(FaLaptopCode),
    date: "2022 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Fly Ontario",
    description:
      "As an integral member of a collaborative team, I contributed to the development of a dynamic Drupal 9 website, seamlessly integrating migrated data from a legacy platform. Our efforts transformed the website, enriching its functionality and ensuring a smooth transition for users from the older version.",
    tags: [{tag: "Drupal"}, {tag: "Tailwind"}],
    imageUrl: "./img/projects/flyontario.png",
    site: "https://www.flyontario.com/",
  },
  {
    title: "Encore Nexus",
    description:
      "Collaborating closely, our team spearheaded a comprehensive overhaul of the Nexus app, revamping both its backend and frontend codebase. Through meticulous redesign and optimization efforts, we breathed new life into the app, enhancing its performance, scalability, and user experience.",
    tags: [{tag: "Drupal"}, {tag: "Remix/React"}, {tag: "TypeScript"}, {tag: "Tailwind"}],
    imageUrl: "./img/projects/nexus.webp",
    site: "https://app.encorenexus.com",
  },
  {
    title: "Ricardo Porfolio",
    description:
      "Crafted a dynamic portfolio website leveraging cutting-edge technologies such as Next.js, React, Tailwind, and Framer Motion, ensuring a seamless user experience and heightened functionality. From sleek design elements to lightning-fast performance, this website stands out as a testament to innovation and creativity in web development.",
    tags: [{tag: "React"}, {tag: "Next.js"}, {tag: "TypeScript"}, {tag: "Tailwind"}, {tag: "Framer"}],
    imageUrl: "./img/projects/portfolio.png",
    site: "https://ricardo-portfolio-website-project.vercel.app/",
  },
] as const;

export const skillsData = [
  {"sname": "drupal", "Type": "png", "Title": "Drupal"},
  {"sname": "php", "Type": "jpeg", "Title":  "PHP"},
  {"sname": "bash", "Type": "png", "Title":  "Bash"},
  {"sname": "github", "Type":  "png", "Title":  "Git"},
  {"sname": "jenkins", "Type":  "jpeg", "Title":  "Jenkins"},
  {"sname": "jira", "Type":  "png", "Title":  "Jira"},
  {"sname": "twig", "Type":  "png", "Title":  "Twig"},
  {"sname": "tailwind", "Type":  "png", "Title":  "Tailwind"},
  {"sname": "html", "Type":  "jpeg", "Title":  "HTML"},
  {"sname": "css", "Type":  "png", "Title":  "CSS"},
  {"sname": "react", "Type":  "png", "Title":  "React"},
  {"sname": "next.js", "Type":  "png", "Title":  "Next.js"},
  {"sname": "typeScript", "Type":  "jpeg", "Title":  "TypeScript"},
  {"sname": "remix", "Type":  "png", "Title":  "Remix"},
  {"sname": "js", "Type":  "jpeg", "Title":  "JavaScript"},
  {"sname": "mySQL", "Type":  "png", "Title":  "mySQL"},
  {"sname": "node", "Type":  "png", "Title":  "Node"},
  {"sname": "bootstrap", "Type":  "png", "Title":  "Bootstrap"},
  {"sname": "linux", "Type":  "png", "Title":  "Linux"},
  {"sname": "mongodb", "Type":  "png", "Title":  "MongoDB"},
  {"sname": "framer", "Type":  "png", "Title":  "Framer Motion"},
] as const;