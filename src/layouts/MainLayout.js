import React from 'react';
import Header from '../components/Header';
import './MainLayout.css';
// import HomeBg from '.'

const mainLayout = ({children}) => {
  return (
    <div className="main-container img-page">
      {/* <img src="" /> */}
      <Header />
      {children}
    </div>
  );
}

export default mainLayout;
