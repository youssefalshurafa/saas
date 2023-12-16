'use client';
import React from 'react';
import { motion } from 'framer-motion';

export default function SectionDivider() {
  return (
    <motion.div
      className=" bg-gray-200 my-24 h-16 w-1 rounded-full hidden sm:block"
      initial={{ y: 100, x: '-50%', opacity: 0 }}
      animate={{ y: 0, x: '-50%', opacity: 1 }}
      transition={{
        delay: 0.15,
      }}
    ></motion.div>
  );
}
