import React, { useState } from "react";
import "../style/NavBar.css";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  const closeMenu = () => {
    setIsActive(false);
  };

  return (
    <nav className={`navbar ${isActive ? "active" : ""}`}>
      <div className="logo">
        <img src="/logo.png" alt="Logo" />
      </div>
      <div className="nav-links">
        <ul>
          <li>
            <Link to="/" onClick={closeMenu}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/get-involved" onClick={closeMenu}>
              Get Involved
            </Link>
          </li>
          <li>
            <Link to="/donate" onClick={closeMenu}>
              Donate
            </Link>
          </li>
          <li>
            <Link to="/about-us" onClick={closeMenu}>
              About Us
            </Link>
          </li>
        </ul>
      </div>
      <button className="navbar-toggle" onClick={toggleMenu}>
        {isActive ? <FaTimes /> : <FaBars />}
      </button>
      {isActive && (
        <div className="burger-menu">
          <ul>
            <li>
              <Link to="/" onClick={closeMenu}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/get-involved" onClick={closeMenu}>
                Get Involved
              </Link>
            </li>
            <li>
              <Link to="/donate" onClick={closeMenu}>
                Donate
              </Link>
            </li>
            <li>
              <Link to="/about-us" onClick={closeMenu}>
                About Us
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default NavBar;