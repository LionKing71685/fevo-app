import React from 'react';
import './Home.css';
import HomeLogo from '../../assets/img/home/lg-logo.png';

const Home = () => {
  return (
    <div className="page-wrapper">
      <div className="page-content ml-home-content">
        <div className="home-logo-wrapper">
          <img src={HomeLogo} />
        </div>
        <div>
          <span className="the-buyflow">THE<br />BUYFLOW</span>
          <span className="of-the-experience-ec">OF THE EXPERIENCE ECONOMY</span>
          <span className="coming-soon">COMING SOON!</span>
        </div>
      </div>
    </div>
  );
}

export default Home;
