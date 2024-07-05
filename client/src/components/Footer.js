import React from "react";
import "../style/Footer.css";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-links">
        <a href="/privacy-policy">Privacy Policy</a>
        <a href="/contact-us">Contact Us</a>
        <Link to="/donate">
          <a href="/donate">Donate</a>
        </Link>
      </div>
      <div className="rights-reserved">
        <p>© 2024 CPQE™. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;