import NavLinks from '../navigation/NavLinks'
import React, { useState } from 'react';
// import classes from '../navigation/Navbar.css'

const Navigation = () => {

    // const [highlight, setHighlight] = useState(false)
    // con

    return ( 
        <nav className='multi-button'>
            <a href='#about'>about</a>
            <a href='#work'>work</a>
            <a href='#contact'>contact</a>
        </nav>
    );
}

export default Navigation;