import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/podcast">Podcast</Link></li>
        <li><Link to="/busniessconsultation">Business Consultation</Link></li>
        <li><button type="button">Schedule a Consultation</button></li> 
      </ul> 
    </nav> 

  ); 
}; 

 export default NavBar;