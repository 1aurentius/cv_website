// import NavLinks from '../navigation/NavLinks'
// import '../navigation/Navbar.css'
// import { GiHamburgerMenu } from 'react-icons/gi'
// import { IoMdClose } from 'react-icons/io'
// import { useState } from 'react'

// const Hamburger = () => {

//     const [open, setOpen] = useState(false);

//     const hamburgerIcon = <GiHamburgerMenu className='hamburger-icon' size='40px' color='#5D2E46'
//     onClick={() => setOpen(!open)} />
    
//     const closeIcon = <IoMdClose className='close-icon' size='40px' color='#5D2E46'
//     onClick={() => setOpen(!open)} />

//     return ( 
//       <nav className='Hamburger'> 
//         {open ? closeIcon : hamburgerIcon}
//         {open && <NavLinks />}
//       </nav>
//      );
// }

// export default Hamburger;