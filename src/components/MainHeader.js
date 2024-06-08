import React from 'react';
import './MainHeader.css';

const MainHeader = () => {
  return (
    <header className="main-header">
      <div className="search-bar">
        <input type="text" placeholder="SEARCH" />
      </div>
      <div className="logo">
        <h1>HOUSE OF ORIGIN</h1>
      </div>
      <nav className="nav-links">
        <a href="#">LOGIN</a>
        <a href="#">HELP</a>
        <a href="#">SHOPPING BAG (0)</a>
      </nav>
    </header>
  );
};

export default MainHeader;
