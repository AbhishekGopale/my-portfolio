import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li><NavLink exact to="/" activeClassName="active-link">Home</NavLink></li>
        <li><NavLink to="/projects" activeClassName="active-link">Projects</NavLink></li>
        <li><NavLink to="/resume" activeClassName="active-link">Resume</NavLink></li>
        <li><NavLink to="/certifications" activeClassName="active-link">Certifications</NavLink></li>
        <li><NavLink to="/contact" activeClassName="active-link">Contact</NavLink></li>
      </ul>
    </nav>
  );
};

export default Navbar;
