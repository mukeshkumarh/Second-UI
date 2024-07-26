import React from 'react';
import './Navebar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">VIN Eligibility</div>
      <div className="navbar-menu">
        <a href="#overview">Overview</a>
        <a href="#onboarding">Onboarding</a>
        <a href="#signal-map">Signal Map</a>
        <a href="#developer-corner">Developer Corner</a>
      </div>
    </nav>
  );
};

export default Navbar;
