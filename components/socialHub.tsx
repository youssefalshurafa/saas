'use client';
import React from 'react';
import SectionHeading from './section-heading';
import { socialData } from '@/lib/data';
import { useSectionInView } from '@/lib/hooks';
import { motion } from 'framer-motion';

export default function SocialHub() {
  const { ref } = useSectionInView('SocialHub', 0.5);
  const fadeInAnimationVariants = {
    initial: {
      opacity: 0,
      y: 100,
    },
    animate: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.04 * index,
      },
    }),
  };
  return (
    <section
      ref={ref}
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
      id="socialHub"
    >
      <SectionHeading>My Social hub</SectionHeading>
      <ul className=" flex flex-wrap justify-center  text-4xl transition gap-2">
        {socialData.map((Icon, index) => (
          <motion.li
            className=" outline-none focus:scale-110 px-5 py-6  cursor-pointer  active:scale-105 transition bg-gray-white p-4 text-gray-700 flex items-center gap-2 rounded-full "
            key={index}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            custom={index}
          >
            <Icon className=" hover:scale-150" />
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
