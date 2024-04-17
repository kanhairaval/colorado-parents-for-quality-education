import React, { useState } from "react";
import { Link } from "react-scroll";
import "../style/NavBar.css";

const NavBar = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  return (
    <nav className={`navbar ${isActive ? "active" : ""}`}>
      <div className="navbar-logo">
        <img src="/logo.png" alt="Logo" />
      </div>
      <ul className={`navbar-links ${isActive ? "active" : ""}`}>
        <li className="nav-item">
          <Link
            to="home"
            smooth={true}
            duration={500}
            spy={true}
            offset={-70}
            onClick={() => setIsActive(false)}
          >
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="get-involved"
            smooth={true}
            duration={500}
            spy={true}
            offset={-70}
            onClick={() => setIsActive(false)}
          >
            Get Involved
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="donate"
            smooth={true}
            duration={500}
            spy={true}
            offset={-70}
            onClick={() => setIsActive(false)}
          >
            Donate
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="about"
            smooth={true}
            duration={500}
            spy={true}
            offset={-70}
            onClick={() => setIsActive(false)}
          >
            About Us
          </Link>
        </li>
      </ul>
      <button className="navbar-toggle" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </button>
    </nav>
  );
};

export default NavBar;