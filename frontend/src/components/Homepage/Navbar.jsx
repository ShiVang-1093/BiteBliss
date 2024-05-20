// NavBar.js
import React, { useState } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import "./Navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";
import Logo from '../images/logo.png';
import isLoggedin from "../Auth/isLoggedin";
import usericon from "../images/user_logo.png";
// import Logout from "../User account/Logout";

const NavBar = () => {
  const [click, setClick] = useState(false);

  const loggedIn = isLoggedin();

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('jwt');
    sessionStorage.clear();
    navigate('/');
    window.alert("Logout Successful");
  };


  const handleClick = () => setClick(!click);

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
              to="/About"
              activeClassName="nav-active"
              className="nav-links"
              onClick={() => setClick(false)}
            >
              About
            </NavLink>
          </li>
          {loggedIn ? (
            <>
              <li className="">
                <div className="nav-menu">
                  <div className="account-logo">
                    <div className="relative group">
                      <img src={usericon} alt="Account" className="w-10 h-10 cursor-pointer" onClick={() => setClick(!click)} />
                      {click && (
                        <div className="absolute right-0 mt-2 p-2 bg-coffee border rounded shadow-lg">
                          <li className="nav-item">
                            <NavLink
                            to="/Profile"
                            activeClassName="nav-active"
                            className="nav-links text-skin"
                            onClick={() => setClick(false)}
                          >    Profile
                          </NavLink>
                          </li>
                          
                          <li className="nav-item">
                          <NavLink
                            to="/mycoupons"
                            activeClassName="nav-active"
                            className="nav-links text-skin"
                            onClick={() => setClick(false)}
                          >Coupons
                          </NavLink>
                          </li>
                          
                          <li className="nav-item">
                          <NavLink
                            to="/"
                            activeClassName="nav-active"
                            className="nav-links text-skin"
                            onClick={handleLogout}
                          >   Logout
                          </NavLink>
                          </li>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </li>
            </>
          ) : (
            <>
              <li className="nav-item">
                <NavLink
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
                  to="/Signup"
                  activeClassName="nav-active"
                  className="nav-links"
                  onClick={() => setClick(false)}
                >
                  Signup
                </NavLink>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
