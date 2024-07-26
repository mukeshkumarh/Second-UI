import React from 'react';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <a href="#vin-summary">VIN Summary</a>
      <a href="#tracking">Tracking</a>
      <a href="#safety">Safety</a>
      <a href="#sustainability">Sustainability</a>
      <a href="#maintenance">Maintenance</a>
      <a href="#compliance">Compliance</a>
      <a href="#tco">TCO</a>
    </div>
  );
};

export default Sidebar;
