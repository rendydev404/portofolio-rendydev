'use client';

import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard from '../ui/ProjectCard';

const projects = [
  {
    title: 'E-commerce Website',
    description: 'A full-featured e-commerce website built with Next.js, Stripe, and Sanity.',
    link: 'https://github.com/example/ecommerce-website',
  },
  {
    title: 'Portfolio Website',
    description: 'A personal portfolio website to showcase my skills and projects.',
    link: 'https://github.com/example/portfolio-website',
  },
  {
    title: 'Blog Platform',
    description: 'A content-rich blog platform with a modern design and a powerful CMS.',
    link: 'https://github.com/example/blog-platform',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-center mb-8"
        >
          My Projects
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
