import React from "react";
import "../style/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-links">
        <a href="/privacy-policy">Privacy Policy</a>
        <a href="/contact-us">Contact Us</a>
        <a href="/donate">Donate</a>
      </div>
      <div className="rights-reserved">
        <p>© 2024 CPQE™. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;