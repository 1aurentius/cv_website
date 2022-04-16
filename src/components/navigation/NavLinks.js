import { Link } from 'react-router-dom';

const NavLinks = () => {
    return (
        <ul className='navbar-menu'>
            <li className='navbar-list-item'><Link to="/work">work</Link></li>
            <li className='navbar-list-item'><Link to="/projects">projects</Link></li>
            <li className='navbar-list-item'><Link to="/about">about</Link></li>
            <li className='navbar-list-item'><Link to="/contact">contact</Link></li>
        </ul>
    );
}

export default NavLinks;