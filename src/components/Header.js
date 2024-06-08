import React from 'react';
import './Header.css';
import headerWomenmen from '../images/header-women-men.jpg';

const Header = () => {
  return (
    <div className="header">
      <div className="header-item">
        <img src={headerWomenmen} alt="Women" className="header-image" />
      </div>
    </div>
  );
};

export default Header;
