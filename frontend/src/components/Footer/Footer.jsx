import React from 'react';
import { Link } from 'react-router-dom';
import nug from '../images/nug.gif';
import pizza from '../images/pizza.gif';
import sp from '../images/sp.gif';

const Footer = () => {
  return (
    <footer className="bg-coffee py-8">
      <div className="relative container mx-auto">
        <div className="flex flex-row md:flex-col justify-between items-center">
          <div className="flex flex-col md:flex-row ml-10 space-y-4 md:space-y-0 md:space-x-8">
            <Link to="/" className="text-white hover:text-yellow">Home</Link>
            <Link to="/restaurants" className="text-white hover:text-yellow">Restaurants</Link>
            <Link to="/about" className="text-white hover:text-yellow">About</Link>
            <Link to="/contact" className="text-white hover:text-yellow">Contact Us</Link>
          </div>
          <div className="absolute right-10 space-x-4 mt-4  md:mt-0">
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300">
              <img src={nug} alt="Instagram" className="h-6 w-6" />
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300">
              <img src={pizza} alt="LinkedIn" className="h-6 w-6" />
            </a>
            <a href="mailto:contact@bitebliss.com" className="text-white hover:text-gray-300">
              <img src={sp} alt="Email" className="h-6 w-6" />
            </a>
          </div>
        </div>
        <div className="text-center mt-4 text-white">
          ©2023 BiteBliss | Shivang Patel
        </div>
      </div>
    </footer>
  );
};

export default Footer;
