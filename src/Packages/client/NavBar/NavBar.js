import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css'
const NavBar = () => {
  return (

    <div>
      {/* <img
        className="logo"
        src="public/Pictures/MicrosoftTeams-image(3).png"
      ></img> */}
      <div className="container">
      {/* <nav class="navbar">
      <div class="navbar__container">
      <ul class="navbar__menu"> */}
        <Link to="/" className="navbar__item">
        </Link>
        <Link to="/home" className="navbar__item">
          Home
        </Link>
        <Link to="/services" className="navbar__item">
          Services
        </Link>
        <Link to="/podcast" className="navbar__item">
          Podcast
        </Link>
        <Link to="/businessconsultation" className="navbar__item">
          Business Consultation
        </Link>
        <Link to="/ourteam" className="navbar__item">
          Our Team
        </Link>
        {/* </ul>
        </div>
        </nav> */}
      </div>
    </div>
  )
}
 export default NavBar;