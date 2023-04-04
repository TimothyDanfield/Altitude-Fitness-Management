import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './navbar1.css';


function NavBar() {
  const [showServicesDropDown, setShowServicesDropDown] = useState(false);

  const [showOurDriveDropDown, setShowOurDriveDropDown] = useState(false);
  const [showAffiliationsDropDown, setShowAffiliationsDropDown] = useState(false);


  const toggleServicesDropDown = () => {
    setShowServicesDropDown(!showServicesDropDown);
  };


  const toggleOurDriveDropDown = () => {
    setShowOurDriveDropDown(!showOurDriveDropDown);
  };
  const toggleAffiliationsDropDown = () => {
    setShowAffiliationsDropDown(!showAffiliationsDropDown);
  };

  return (
    <nav className="navbar">
      <img src='/Pictures/Altitude Fitness Management SD1 Logo.png' className='navbar-logo' alt='navlogo'></img>
      <Link to="/" className="navbar__item">HOME</Link>

      <div className='nav-dropdown'>
        <Link to='/services' className="navbar__item" onMouseEnter={toggleServicesDropDown} onMouseLeave={toggleServicesDropDown}>
          SERVICES
        </Link>
        <div className="nav-dropdown-content">
          <Link to="/gymgrowth" className="nav-dropdown-item">Gym Growth</Link>
          <Link to="/automation" className="nav-dropdown-item">Automation</Link>
          <Link to="/employee" className="nav-dropdown-item">Employee</Link>
          <Link to="/gymlaunch" className="nav-dropdown-item">Gym Launch</Link>
        </div>
      </div>

      <div className='nav-dropdown'>
        <div className="navbar__item" onMouseEnter={toggleOurDriveDropDown} onMouseLeave={toggleOurDriveDropDown}>
          Our Drive
        </div>
        <div className="nav-dropdown-content">
          <Link to="/allteam" className="nav-dropdown-item">Partners</Link>
        </div>
      </div>



      <Link to="/businessconsultation" className="navbar__item">CONSULTATION</Link>
      <Link to="/podcast" className="navbar__item">FITMOLIFE</Link>

      <div className='nav-dropdown'>
        <Link className="navbar__item" onMouseEnter={toggleAffiliationsDropDown} onMouseLeave={toggleAffiliationsDropDown}>
          AFFILIATIONS
        </Link>
        <div className="nav-dropdown-content">
          <a
            className="nav-dropdown-item"
            href="https://www.elekio.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Elekio
          </a>
          <a
            className="nav-dropdown-item"
            href="https://www.fbafitness.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            FBA
          </a>
          <a
            className="nav-dropdown-item"
            href="https://www.ihrsa.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            IHRSA
          </a>
          <a
            className="nav-dropdown-item"
            href="https://www.lifefitness.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Life Fitness
          </a>
          <a
            className="nav-dropdown-item"
            href="https://www.ncsf.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            NCSF
          </a>
          <a
            className="nav-dropdown-item"
            href="https://www.precor.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Precor
          </a>
          <a
            className="nav-dropdown-item"
            href="https://www.roguefitness.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Rogue
          </a>
        </div>
      </div>




    </nav>
  );
}

export default NavBar;
