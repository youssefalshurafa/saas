'use client';
import React from 'react';
import SectionHeading from './section-heading';
import { motion } from 'framer-motion';
export default function About() {
  return (
    <motion.section
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        "Hello, I'm John Doe, a passionate web developer on a mission to create
        seamless and captivating digital experiences. With a keen eye for design
        and a love for clean code, I specialize in crafting responsive websites
        that leave a lasting impression. My journey in web development is fueled
        by a constant curiosity to learn and adapt to emerging technologies.
        Let's build something extraordinary together!"
      </p>
      <p></p>
    </motion.section>
  );
}
