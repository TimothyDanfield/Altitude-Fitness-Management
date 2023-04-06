import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faInstagram, faYoutube, faLinkedin,} from '@fortawesome/free-brands-svg-icons'
import './team.css'

const OurTeam = () => {
  return (
    <div className='team-section'>
      <div>


        <div className="row_1">
          <h1 ><span style={{ borderBottom: '1px solid black', fontSize: '3rem' }}>Our</span><span style={{ fontSize: '3rem' }}> Team</span></h1>
        </div>
        <div className="row_2">
          <div className="column">
            <div className="team-card">
              <div className="img-container">
                <img src="/Pictures/pedro.jpg" alt="3.avif" />
              </div>
              <h3>Pedro De Freitas Cedeno</h3>
              <p>Founder and CEO</p>
              <div className="icons">
              <a href="https://www.instagram.com/altitudefitmgmt/" target="_blank" rel="noopener noreferrer">
    <FontAwesomeIcon icon={faInstagram} className='social__icon--link' />
  </a>
  <a href="https://www.youtube.com/@fitmolife" target="_blank" rel="noopener noreferrer">
  <FontAwesomeIcon icon={faYoutube} className='social__icon--link' />
</a>
<a href="https://www.linkedin.com/company/altitudefitlife-mgmt/people/" target="_blank" rel="noopener noreferrer">
  <FontAwesomeIcon icon={faLinkedin} className='social__icon--link' />
</a>
      <a href="https://twitter.com/AltitudeMgmtInt" target="_blank" rel="noopener noreferrer">
  <FontAwesomeIcon icon={faTwitter}  className='social__icon--link'/>
</a> 
              </div>
            </div>
          </div>
          <div className="column">
            <div className="team-card">
              <div className="img-container">
                <img src="/Pictures/Tim.png" alt="Marko" />
              </div>
              <h3>Timothy Danfield</h3>
              <p>Executive Manager of Technology</p>
              <div className="icons">
              <a href="https://www.instagram.com/altitudefitmgmt/" target="_blank" rel="noopener noreferrer">
    <FontAwesomeIcon icon={faInstagram} className='social__icon--link' />
  </a>
  <a href="https://www.youtube.com/@fitmolife" target="_blank" rel="noopener noreferrer">
  <FontAwesomeIcon icon={faYoutube} className='social__icon--link' />
</a>
<a href="https://www.linkedin.com/company/altitudefitlife-mgmt/people/" target="_blank" rel="noopener noreferrer">
  <FontAwesomeIcon icon={faLinkedin} className='social__icon--link' />
</a>
      <a href="https://twitter.com/AltitudeMgmtInt" target="_blank" rel="noopener noreferrer">
  <FontAwesomeIcon icon={faTwitter}  className='social__icon--link'/>
</a> 
              </div>
            </div>
          </div>
          <div className="column">
            <div className="team-card">
              <div className="img-container">
                <img src="/Pictures/mattnew.png" alt="Mat" />
              </div>
              <h3>Matthew Wakumoto</h3>
              <p>Executive Manager of Media and Marketing Engagement</p>
              <div className="icons">
              <a href="https://www.instagram.com/altitudefitmgmt/" target="_blank" rel="noopener noreferrer">
    <FontAwesomeIcon icon={faInstagram} className='social__icon--link' />
  </a>
  <a href="https://www.youtube.com/@fitmolife" target="_blank" rel="noopener noreferrer">
  <FontAwesomeIcon icon={faYoutube} className='social__icon--link' />
</a>
<a href="https://www.linkedin.com/company/altitudefitlife-mgmt/people/" target="_blank" rel="noopener noreferrer">
  <FontAwesomeIcon icon={faLinkedin} className='social__icon--link' />
</a>
      <a href="https://twitter.com/AltitudeMgmtInt" target="_blank" rel="noopener noreferrer">
  <FontAwesomeIcon icon={faTwitter}  className='social__icon--link'/>
</a> 
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="button-container">
        <Link to="/allteam">
          <button className="team-button">
            <p>View All</p>
          </button>
        </Link>
      </div>

    </div>
  );
};

export default OurTeam;

