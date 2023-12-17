'use client';
import React, { useRef } from 'react';
import { reviewsData } from '@/lib/data';
import { useScroll, useTransform, motion } from 'framer-motion';
export default function ReviewCard() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['0 1', '1.33 1'],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.7, 1]);
  return (
    <motion.div
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
      ref={ref}
      className=" grid grid-cols-1 sm:grid-cols-2  gap-4 text-center px-5 max-w-[52rem] border-black/5 "
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
    >
      {reviewsData.map((review, index) => (
        <div
          key={index}
          className="flex cursor-default flex-col gap-3 bg-gray-200 hover:bg-gray-300 p-8 rounded-lg shadow-md transition "
        >
          <div>
            <h3 className=" text-2xl font-poppins">{review.name}</h3>
            <p className="  font-poppins italic text-sm font-light text-gray-400">
              {review.job}
            </p>
          </div>
          <div>
            <p className=" font-indieFlower text-lg hover:text-xl">
              {review.review}
            </p>
          </div>
        </div>
      ))}
    </motion.div>
  );
}
