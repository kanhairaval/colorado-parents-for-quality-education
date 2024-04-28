import React from 'react';
import "../style/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-links">
        <a href="#">About Us</a>
        <a href="#">Privacy Policy</a>
        <a href="#">Contact Us</a>
        <a href="#">Donate</a>
      </div>
      <div className="footer-info">
        <p>© 2024 CPQE™. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;