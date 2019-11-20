import React from 'react';
import { NavLink } from "react-router-dom";
import './Navbar.css';

const navbar = () => {
  const onClickNavItem = () => {
    let mainMenuEle = document.getElementsByClassName("main-nav");
    let activeState = mainMenuEle[0].className.includes("active");
    if(activeState) {
      mainMenuEle[0].className = "main-nav";
    }
  }

  return (
    <ul className="main-nav" id="js-menu">
      <li onClick={onClickNavItem.bind(this)}>
        <NavLink to="/" exact className="nav-links">
          HOME
        </NavLink>
      </li>
      <li onClick={onClickNavItem.bind(this)}>
        <NavLink to="/faqs" exact className="nav-links">
          FAQS
        </NavLink>
      </li>
      <li onClick={onClickNavItem.bind(this)}>
        <NavLink to="/contact" exact className="nav-links">
          CONTACT
        </NavLink>
      </li>
      <li onClick={onClickNavItem.bind(this)}>
        <NavLink to="/privacy" exact className="nav-links">
          PRIVACY POLICY
        </NavLink>
      </li>
      <li onClick={onClickNavItem.bind(this)}>
        <NavLink to="/terms" exact className="nav-links">
          TERMS OF SERVICE
        </NavLink>
      </li>
    </ul>
  );
}

export default navbar;
