import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import "./Navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";
import Logo from '../images/logo.png'

const NavBar = () => {
  const [click, setClick] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false); // Step 1

  const handleClick = () => setClick(!click);

  const handleLogout = () => {
    // Handle logout logic here
    setLoggedIn(false);
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <NavLink exact to="/" className="nav-logo">
          <Link to="/">
            <img src={Logo} alt="" className="nav-logo-img" />
          </Link>
        </NavLink>
        <div className="hamburger-menu" onClick={handleClick}>
          <GiHamburgerMenu />
        </div>
        {loggedIn ? ( // Step 2
          <div className="nav-menu">
            <div className="nav-item account-logo">
              <img alt="Account" />
              <div className="account-popup">
                <NavLink
                  exact
                  to="/Profile"
                  activeClassName="nav-active"
                  className="nav-links"
                  onClick={() => setClick(false)}
                >
                  Profile
                </NavLink>
                <NavLink
                  exact
                  to="/Orders"
                  activeClassName="nav-active"
                  className="nav-links"
                  onClick={() => setClick(false)}
                >
                  Orders
                </NavLink>
                <NavLink
                  exact
                  to="/Coupons"
                  activeClassName="nav-active"
                  className="nav-links"
                  onClick={() => setClick(false)}
                >
                  Coupons
                </NavLink>
                <button onClick={handleLogout}>Logout</button>
              </div>
            </div>
          </div>
        ) : (
          // Step 3
          <ul className={`nav-menu ${click ? "active" : ""}`}>
            <li className="nav-item">
              <NavLink
                exact
                to="/"
                activeClassName="nav-active"
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
                activeClassName="nav-active"
                className="nav-links"
                onClick={() => setClick(false)}
              >
                Restaurants
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/Coupons"
                activeClassName="nav-active"
                className="nav-links"
                onClick={() => setClick(false)}
              >
                Coupons
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/About"
                activeClassName="nav-active"
                className="nav-links"
                onClick={() => setClick(false)}
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/Login"
                activeClassName="nav-active"
                className="nav-links"
                onClick={() => setClick(false)}
              >
                Login
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/Signup"
                activeClassName="nav-active"
                className="nav-links"
                onClick={() => setClick(false)}
              >
                Signup
              </NavLink>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
