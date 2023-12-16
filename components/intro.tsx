'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { BsArrowRight, BsLinkedin } from 'react-icons/bs';
import { FaGithubSquare, FaFacebook, FaInstagramSquare } from 'react-icons/fa';
import { RiTwitterXFill } from 'react-icons/ri';
export default function Intro() {
  return (
    <section className=" mb-28 max-w-[50rem] text-center sm:mb-0">
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: 'tween',
              duration: 0.2,
            }}
          >
            <Image
              src="/profile-image.jpg"
              alt="profile picture"
              width="192"
              height="192"
              quality="95"
              priority={true}
              className="h-24 w-24 rounded-full border-[0.35rem] border-white object-cover shadow-xl"
            />
          </motion.div>

          <motion.span
            className=" absolute text-3xl bottom-0 right-0"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: 'spring',
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            👋
          </motion.span>
        </div>
      </div>
      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <span>
          <span className="font-bold">"Web developer </span>
          transforming ideas into engaging online experiences. Proficient in
          <span className=" italic underline"> HTML, CSS, JavaScript, </span>
          and more. Committed to delivering modern, efficient solutions."
        </span>
      </motion.h1>
      <motion.div
        className="flex justify-center "
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <Link
          href="#contact"
          className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition "
        >
          Contact me here{' '}
          <BsArrowRight className=" opacity-70 group-hover:translate-x-1 transition" />
        </Link>
      </motion.div>
      <motion.div
        className="flex justify-center text-3xl gap-4 mt-4"
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <a
          href=""
          className="outline-none focus:scale-110  hover:scale-150  active:scale-105 transition bg-gray-white p-4 text-gray-700 flex items-center gap-2 rounded-full "
        >
          <FaFacebook />
        </a>
        <a
          href=""
          className="outline-none focus:scale-110 hover:scale-150  active:scale-105 transition bg-gray-white p-4 text-gray-700 flex items-center gap-2 rounded-full "
        >
          <BsLinkedin />
        </a>
        <a
          href=""
          className="outline-none focus:scale-110 hover:scale-150  active:scale-105 transition bg-gray-white p-4 text-gray-700 flex items-center gap-2 rounded-full "
        >
          <FaGithubSquare />
        </a>
        <a
          href=""
          className="outline-none focus:scale-110 hover:scale-150  active:scale-105 transition bg-gray-white p-4 text-gray-700 flex items-center gap-2 rounded-full "
        >
          <RiTwitterXFill />
        </a>
        <a
          href=""
          className="outline-none focus:scale-110 hover:scale-150  active:scale-105 transition bg-gray-white p-4 text-gray-700 flex items-center gap-2 rounded-full "
        >
          <FaInstagramSquare />
        </a>
      </motion.div>
    </section>
  );
}
