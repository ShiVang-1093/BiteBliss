import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router
import './Footer.css'; // Import your stylesheet

const Footer = () => {
  return (
    <div className="main">
      <div className="footer">
        <div className="bubbles">
          {Array.from({ length: 128 }).map((_, i) => (
            <div
              className="bubble"
              style={{
                '--size': `${2 + Math.random() * 4}rem`,
                '--distance': `${6 + Math.random() * 4}rem`,
                '--position': `${-5 + Math.random() * 110}%`,
                '--time': `${2 + Math.random() * 2}s`,
                '--delay': `-${2 + Math.random() * 2}s`,
              }}
              key={i}
            ></div>
          ))}
        </div>
        <div className="content">
          <div>
            <div>
              <Link to="/">Home</Link>
              <Link to="/Restaurants">Restaurant</Link>
              <Link to="/About">About</Link>
              <Link to="/About">Contact Us</Link>
            </div>
          </div>
          <div>
            <p>©2023 BiteBliss | Shivang Patel</p>
            <div className="social-icons">
              <a href="#">
                <img src="instagram-icon.png" alt="Instagram" className="image pizza-image" />
              </a>
              <a href="#">
                <img src="linkedin-icon.png" alt="LinkedIn" className="image utensil-spoon-image" />
              </a>
              <a href="mailto:your.email@example.com">
                <img src="email-icon.png" alt="Email" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
