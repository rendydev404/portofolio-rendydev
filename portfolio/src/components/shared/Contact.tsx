'use client';

import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    console.log(data);
    alert('Message sent successfully!');
    e.currentTarget.reset();
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-center mb-8"
        >
          Contact Me
        </motion.h2>
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-xl mx-auto"
        >
          <div className="mb-4">
            <label htmlFor="name" className="block text-lg mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full bg-white/10 backdrop-blur-lg rounded-lg p-3"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-lg mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full bg-white/10 backdrop-blur-lg rounded-lg p-3"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-lg mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              className="w-full bg-white/10 backdrop-blur-lg rounded-lg p-3"
            ></textarea>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            type="submit"
            className="bg-primary-600 hover:bg-primary-700 text-white font-bold py-3 px-6 rounded-full"
          >
            Send Message
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
