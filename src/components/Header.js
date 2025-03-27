
import React from 'react';
import './Header.css'; 

const Header = () => {

 
  return (
    <header className="header" >
     <div className="nav">
     <div className="logo-container">
        <img src="./img/logo.png" alt="Logo" className="logo" />
        <span className="logo-name">Dalle-4</span>
      </div>
      <nav className="nav">
        <ul className="nav-list">
          <li className='feature-link'><a href="#feature" >Feature</a></li>
          <li><a href="#about-us">About Us</a></li>
        </ul>
      </nav>
     </div>
    </header>
  );
};

export default Header;
