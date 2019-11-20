import React from 'react';
import { NavLink } from "react-router-dom";
import './Logo.css';
import Logo from './logo.png';

const logo = () => {
  return (
    <NavLink className="logo" to="/" exact>
      <img src={Logo} />
    </NavLink>
  );
}

export default logo;