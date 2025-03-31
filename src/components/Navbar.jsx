import React, { useState } from 'react';
import './Navbar.css';
import logo from '../images/logo.png';
import { Link } from 'react-scroll';
import resume from '../cv/Resume.pdf'

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false); // Fixed camelCase for state

  return (
    <nav className='navbar'>
      <img src={logo} alt="Logo" className='logo' />

      {/* Desktop Menu */}
      <div className='menu'>
        <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className='menu-items'>Home</Link>
        <Link activeClass='active' to='about' spy={true} smooth={true} offset={-100} duration={500} className='menu-items'>About</Link>
        <Link activeClass='active' to='portfolio' spy={true} smooth={true} offset={-100} duration={500} className='menu-items'>Portfolio</Link>
        <Link activeClass='active' to='services' spy={true} smooth={true} offset={-100} duration={500} className='menu-items'>Services</Link>
        <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-100} duration={500} className='menu-items'>Contact</Link>
      </div>
<a href={resume} download="MyResume" target='_blank'>
        <button className='menubtn'>Download CV</button>
        </a>


      {/* Hamburger Menu Icon */}
      <i className="fa-solid fa-bars fa-lg" id='hamburgermenu' onClick={() => setShowMenu(!showMenu)}></i>

      {/* Mobile Menu */}
      <div className='mobmenu' style={{display: showMenu? 'flex':'none'}}>
        <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className='mobmenu-items' onClick={() => setShowMenu(false)}>Home</Link>
        <Link activeClass='active' to='about' spy={true} smooth={true} offset={-100} duration={500} className='mobmenu-items' onClick={() => setShowMenu(false)}>About</Link>
        <Link activeClass='active' to='portfolio' spy={true} smooth={true} offset={-100} duration={500} className='mobmenu-items' onClick={() => setShowMenu(false)}>Portfolio</Link>
        <Link activeClass='active' to='services' spy={true} smooth={true} offset={-100} duration={500} className='mobmenu-items' onClick={() => setShowMenu(false)}>Services</Link>
        <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-100} duration={500} className='mobmenu-items' onClick={() => setShowMenu(false)}>Contact</Link>
        <a href={resume} download="MyResume" target='_blank'>
        <button className='mobmenu-items'>Download CV</button>
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
