import React from 'react';
import { Link } from 'react-router-dom';
import insta from '../Footer/instagram.png';
import mail from '../Footer/gmail.png';
import link from '../Footer/linkedin.png';

// import pizza from '../images/pizza.gif';
// import nug from '../images/nug.gif';
// import sp from '../images/sp.gif';

const Footer = () => {
  return (
    <footer className="bg-coffee p-8 w-full">
      <div className="relative w-[94%] sm:w-[99%] mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-1">
          <div className="flex flex-col ml-10 space-y-4 md:space-y-4 sm:ml-3">
            <Link to="/" className="text-white hover:text-yellow">Home</Link>
            <Link to="/restaurants" className="text-white hover:text-yellow">Restaurants</Link>
            <Link to="/about" className="text-white hover:text-yellow">About</Link>
            <Link to="/contact" className="text-white hover:text-yellow">Contact Us</Link>
          </div>

          {/* <img src={nug} alt="" className="absolute -left-12 -bottom-8 h-[120px] w-[120px] z-1" />
          <img src={pizza} alt="" className="absolute left-[44%] h-[130px] w-[130px] z-1" />
          <img src={sp} alt="" className="absolute -right-12 -bottom-8 h-[120px] w-[120px] z-1" /> */}

          <div className="flex flex-col absolute right-12 space-y-5 mt-4 md:mt-0 sm:right-2">
            <div className='flex'>
              <img src={insta} className='w-10 h-10' alt=''></img>
              <Link to="https://www.instagram.com" className="text-white self-center pl-3 hover:text-gray-300">
              Instagram </Link>
            </div>

            <div className='flex '>
              <img src={link} className='w-9 h-9' alt=''></img>
             <Link to="https://www.linkedin.com" className="text-white self-center pl-3 hover:text-gray-300">
              LinkedIn</Link>
            </div>

            <div className='flex '>
                <img src={mail} className='w-9 h-9' alt=''></img>
                <Link to="mailto:contact@bitebliss.com" className="text-white self-center pl-3 hover:text-gray-300">
                Email</Link>
            </div>
       </div>
        </div>
        <div className="text-center mt-10 text-white">
          ©2023 BiteBliss | Shivang Patel
        </div>
      </div>
    </footer>
  );
};

export default Footer;

