'use client';

import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-center mb-8"
        >
          About Me
        </motion.h2>
        <div className="flex flex-col md:flex-row items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:w-1/3 mb-8 md:mb-0"
          >
            <img
              src="https://avatars.githubusercontent.com/u/12345678?v=4"
              alt="Profile"
              className="rounded-full mx-auto"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="md:w-2/3 md:pl-8"
          >
            <p className="text-lg">
              I am a passionate and creative developer with a strong background in building modern, responsive, and user-friendly web applications. I have experience working with a variety of technologies, including React, Next.js, and Tailwind CSS. I am always eager to learn new things and take on new challenges.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
