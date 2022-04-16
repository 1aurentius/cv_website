import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'
// import NavLinks from './NavLinks'
import Navigation from './Navigation.jsx';
import Hamburger from './Hamburger.jsx';

function Navbar() {
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Navigation />
        </div>
      </nav>
    </>
  )
}

export default Navbar;