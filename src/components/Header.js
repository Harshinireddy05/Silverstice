import React from 'react';
import whiteLogo from '../assets/white.PNG'; 

function Header() {
    const logoStyle = {
        width: '240px',
        height: '80px',
        objectFit: 'contain',
      };
  return (
    <header className="header">
      <nav>
        <div className="logo">
          <img src={whiteLogo} alt="VirtueTech Logo" style={logoStyle}/>
        </div>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#team">Team</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
