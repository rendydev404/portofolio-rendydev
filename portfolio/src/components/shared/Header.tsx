'use client';

import React, { useState } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/10 backdrop-blur-lg">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Portfolio</h1>
        <nav className="hidden md:block">
          <ul className="flex space-x-4">
            <li><a href="#about" className="hover:text-primary-400">About</a></li>
            <li><a href="#projects" className="hover:text-primary-400">Projects</a></li>
            <li><a href="#contact" className="hover:text-primary-400">Contact</a></li>
          </ul>
        </nav>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}
              />
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-white/10 backdrop-blur-lg">
          <ul className="flex flex-col items-center space-y-4 py-4">
            <li><a href="#about" className="hover:text-primary-400" onClick={() => setIsOpen(false)}>About</a></li>
            <li><a href="#projects" className="hover:text-primary-400" onClick={() => setIsOpen(false)}>Projects</a></li>
            <li><a href="#contact" className="hover:text-primary-400" onClick={() => setIsOpen(false)}>Contact</a></li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
