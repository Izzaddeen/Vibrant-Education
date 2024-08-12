import React, { useState } from 'react';
import '../Components/navbar.css'
import { FaBars, FaTimes } from 'react-icons/fa';
import vibee from '../Images/logo.png';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="navbar bg-light">
            <div className="nav-logo">
                <img src={vibee} alt="Logo" style={{ height: '40px' }} />
            </div>
            <div className={`nav-menu ${isOpen ? 'open' : ''}`}>
                <a href="#home" onClick={() => setIsOpen(false)}>Home</a>
                <a href="#about" onClick={() => setIsOpen(false)}>About Us</a>
                <a href="#services" onClick={() => setIsOpen(false)}>Services</a>
                <a href="#blog" onClick={() => setIsOpen(false)}>Blog</a>
                <a href="#contact" onClick={() => setIsOpen(false)}>Contact Us</a>
            </div>
            <div className="nav-toggle" onClick={handleToggle}>
                {isOpen ? <FaTimes /> : <FaBars />}
            </div>
        </nav>
    );
};

export default Navbar;
