import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'
import NavLinks from '../components/navigation/NavLinks'


function Footer() {
    return (
        <div className="main-footer">
            <div className='footer-container'>
                <div className="row">
                    {/* Column 1 */}
                    <div className="footer-socials">
                        <h4>my socials</h4>
                        <ul className='footer-list-item'>
                            <li>telegram</li>
                            <li>linkedin</li>
                            <li>twitter</li>
                        </ul>
                    </div>
                    {/* Column 2 */}
                    <div className="footer-navigation">
                        <h4>navigation</h4>
                        <ul className='footer-list-item'>
                            <li><Link to="/work">work</Link></li>
                            <li><Link to="/projects">projects</Link></li>
                            <li><Link to="/about">about</Link></li>
                            <li><Link to="/contact">contact</Link></li>
                        </ul>
                    </div>
                </div>
                <div classname="row">
                    <p className='footer-note'>
                        &copy; {new Date().getFullYear()} Krister Alasaarela | All rights reserved
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Footer;