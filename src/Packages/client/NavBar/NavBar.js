import React from 'react';
// import { Link } from 'react-router-dom';
import './navbar.css'
const NavBar = () => {
  return (
    <div className='container'>
      <nav className='navbar'>
        <div className='navbar_container'>
          <img src='public/Pictures/fit logo.png' alt='logo' id='navbar_logo'/>
          <div className='navbar_toggle' id='mobile-menu'>
            <span className='bar'></span>
            <span className='bar'></span>
            <span className='bar'></span>
          </div>
          <ul className='navbar_menu'>
            <li className='navbar_item'>
              <a href='home' className='navbar_links' id='home-page'>Home</a>
            </li>
            <li className='navbar_item'>
              <a href='about' className='navbar_links' id='about-page'>About</a>
            </li>
            <li className='navbar_item'>
              <a href='services' className='navbar_links' id='services-page'>Services</a>
            </li>
            <li className='navbar_item'>
              <a href='podcast' className='navbar_links' id='podcast'>Podcast</a>
            </li>
            <li className='navbar_item'>
              <a href='businessconsultation' className='navbar_links' id='bussniess'>Schedule a Consultation</a>
            </li>
            <li className='navbar_item'>
              <a href='ourteam' className='navbar_links' id='ourteam'>Our Team</a>
            </li>
          </ul>
        </div>
      </nav>
      <div className='wrapper'>
        <div className='cols cols0'>
          <h1 className='test'>
            <span className='multiText blue'></span>
          </h1>
          <p className='text'>
            <span className='multiText_2'></span>
          </p>
        </div>
      </div>
    </div>
  )
}
 export default NavBar;