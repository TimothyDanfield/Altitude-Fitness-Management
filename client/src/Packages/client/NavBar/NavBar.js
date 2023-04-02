import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './navbar1.css';


function NavBar() {
  const [showServicesDropDown, setShowServicesDropDown] = useState(false);
  
  const [showOurDriveDropDown, setShowOurDriveDropDown] = useState(false);
  

  const toggleServicesDropDown = () => {
    setShowServicesDropDown(!showServicesDropDown);
  };

  
  const toggleOurDriveDropDown = () => {
    setShowOurDriveDropDown(!showOurDriveDropDown);
  };

  return (
    <nav className="navbar">
    <img src='/Pictures/Altitude Fitness Management SD1 Logo.png' className='navbar-logo'></img>
      <Link to="/" className="navbar__item">HOME</Link>
      <Link to='/services' className="navbar__item" onMouseEnter={toggleServicesDropDown} onMouseLeave={toggleServicesDropDown}>
        SERVICES
        {showServicesDropDown && (
          <div className="navbar__dropdown">
            <Link to="/gymgrowth" className="navbar__dropdown-item">Gym Growth</Link>
            <Link to="/automation" className="navbar__dropdown-item">Automation</Link>
            <Link to="/employee" className="navbar__dropdown-item">Employee</Link>
            <Link to="/gymlaunch" className="navbar__dropdown-item">Gym Launch</Link>
          </div>
        )}
      </Link>
      <div className="navbar__item" onMouseEnter={toggleOurDriveDropDown} onMouseLeave={toggleOurDriveDropDown}>
        Our Drive
        {showOurDriveDropDown && (
          <div className="navbar__dropdown">
            <Link to="/allteam" className="navbar__dropdown-item">Partners</Link>
           
          </div>
        )}
      </div>
      
      <Link to="/businessconsultation" className="navbar__item">CONSULTATION</Link>
      <Link to="/podcast" className="navbar__item">FITMOLIFE</Link>
      <Link to="/affiliations" className="navbar__item">Affiliations</Link>
      
    </nav>
  );
}

export default NavBar;
