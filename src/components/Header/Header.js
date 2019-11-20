import React from 'react';
import { withRouter } from "react-router-dom";
import './Header.css';
import Logo from './Logo';
import Navbar from './Navbar';

const Header = ({
  match
}) => {

  const onClickNavToggle = () => {
    let mainNav = document.getElementById('js-menu');
    mainNav.classList.toggle('active');
  }

  return (
    <div className={match.path === "/" || match.path === "/contact" ? "navbar" : "navbar bg-weak-black"}>
      <span className="navbar-toggle" id="js-navbar-toggle" onClick={onClickNavToggle.bind()}>
        <i className="fa fa-bars"></i>
      </span>
      {match.path !== "/" ? <Logo /> : ""}
      <Navbar />
    </div>
  );
}

export default withRouter(Header);
