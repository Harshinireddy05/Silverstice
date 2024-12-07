import React from 'react';
import { Link } from 'react-router-dom';
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
          <a href="/">
            <img src={whiteLogo} alt="VirtueTech Logo" style={logoStyle} />
          </a>
        </div>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/team">Team</Link></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
