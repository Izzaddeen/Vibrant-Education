import React from "react";
import './mobileNav.css';

const MobileNav = ({ isOpen, toggleMenu }) => {
  return (
    <>
      <div className={`mobile-menu ${isOpen ? "active" : ""}`} onClick={toggleMenu}>
        <div className="mobile-menu-container">
          <img className="nav-logo" src="" alt="" />
          <ul>
            <li>
              <a className='menu-item'>Home</a>
            </li>
            <li>
              <a className='menu-item'>About</a>
            </li>
            <li>
              <a className='menu-item'>Skills</a>
            </li>
            <li>
              <a className='menu-item'>Projects</a>
            </li>
            <button className='contact-btn' onClick={() => {}}>Hire me</button>
          </ul>
        </div>
      </div>
    </>
  );
};

export default MobileNav;
