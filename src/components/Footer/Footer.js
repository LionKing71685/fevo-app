import React from 'react';
import { NavLink } from "react-router-dom";
import './Footer.css';

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <p className="footer-label">
        <NavLink to="/privacy">Privacy Policy</NavLink>
      </p>
      <p className="footer-label">
        <NavLink to="/terms">Terms</NavLink>
      </p>
      <p className="footer-label">©Fevo 2019</p>
    </div>
  );
}

export default Footer;
