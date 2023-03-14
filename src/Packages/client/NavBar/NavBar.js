import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

const NavBar = () => {
  return (
    <div>
      <img
        className="logo"
        src="public/Pictures/MicrosoftTeams-image(3).png"
      ></img>
      <div className="container">
        <Link to="/" className="navbar_menu">
          
        </Link>
        <Link to="/home" className="navbar_menu">
          
        </Link>
        <Link to="/aboutus" className="navbar_menu">
          AboutUs
        </Link>
        <Link to="/services" className="navbar_menu">
          Services
        </Link>
        <Link to="/podcast">
          Podcast
        </Link>
        <Link to="/businessconsultation" className="navbar_menu">
          Business Consultation
        </Link>
        <Link to="/ourteam" className="navbar_menu">
          Our Team
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
