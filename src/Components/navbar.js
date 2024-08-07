import React from "react";
import '../Components/navbar.css'
import { useState} from "react";
import MobileNav from "./mobileNav";
import { FaTimes, FaBars } from 'react-icons/fa';
import logo from '../Images/logo.png';
import { Link } from "react-router-dom";




const Navbar = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    };
  

    return (
        <>
        <div className="nav-section">
            <div className="nav-contents-1">
                <ul className="nav-ul">
                    <li className="nav-li">
                        <i className="fa-solid fa-phone"></i>
                        <p>+91 98427 44441 - India</p>
                    </li>
                    <li className="nav-li">
                        <i className="fa-solid fa-phone"></i>
                        <p>+603-7877 2553 - Malaysia</p>
                    </li>
                </ul>
            </div>
            <div className="nav-contents-2">
                <ul className="nav-ul">
                    <li className="nav-li">
                        <p>......................</p>
                    </li>
                    <li className="nav-li">
                        <i className="fa-brands fa-facebook"></i>
                        <i className="fa-brands fa-twitter"></i>
                        <i className="fa-brands fa-square-instagram"></i>
                    </li>
                </ul>
            </div>
        </div>
        <hr></hr>

        {/* NAVBAR */}

        <MobileNav isOpen={isMenuOpen} toggleMenu={toggleMenu} />
      <nav className='navbar-container'>
        <div className='navbar-content'>
          <img className='nav-logo' src={logo} alt='' />
          <ul>
            <li>
              <Link className='menu-item' to="/">HOME</Link>
            </li>
            <li>
              <Link className='menu-item' to="/about">ABOUT US</Link>
            </li>
            <li>
              <Link className='menu-item' to="/services">SERVICES</Link>
            </li>
            <li>
              <Link className='menu-item' to="/blog">BLOG</Link>
            </li>
            <li>
              <Link className='menu-item' to="/contact">CONTACT US</Link>
            </li>
          </ul>
          <button
            className='menu-btn'
            onClick={toggleMenu}
            style={{ color: 'white', background: 'none', border: 'none', cursor: 'pointer' }}
          >
            {isMenuOpen ? <FaTimes size="1.8rem" /> : <FaBars size="1.8rem" />}
          </button>
        </div>
      </nav>

        </>
    );
}

export default Navbar;



