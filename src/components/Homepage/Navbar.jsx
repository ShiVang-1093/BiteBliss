// NavBar.js
import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import './Navbar.css';
import Logo from '../images/reslogo.png';
import { GiHamburgerMenu } from 'react-icons/gi';

const NavBar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <nav className="navbar">
      <div className="nav-container">
        <NavLink exact to="/" className="nav-logo">
          <Link to="/">
            <img src={Logo} alt="" className="nav-logo-img" />
          </Link>
        </NavLink>
        {/* Hamburger menu icon for mobile screens */}
        <div className="hamburger-menu" onClick={handleClick}>
          <GiHamburgerMenu />
        </div>
        {/* Nav links for desktop screens */}
        <ul className={`nav-menu ${click ? 'active' : ''}`}>
          <li className="nav-item">
            <NavLink
              exact
              to="/"
              activeClassName="active"
              className="nav-links"
              onClick={() => setClick(false)}
            >
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              exact
              to="/Restaurants"
              activeClassName="active"
              className="nav-links"
              onClick={() => setClick(false)}
            >
              Restaurants
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              exact
              to="/About"
              activeClassName="active"
              className="nav-links"
              onClick={() => setClick(false)}
            >
              About
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              exact
              to="/Account"
              activeClassName="active"
              className="nav-links"
              onClick={() => setClick(false)}
            >
              Account
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
