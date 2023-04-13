import React from "react";
import Services from "../Services/Services";
import PodCast from "../PodCast/PodCast";
import BusinessConsultation from '../BusinessConsultation/BusinessConsultation'
import Affiliations from '../Affiliations/Affiliations'
import Blog from '../Blog/Blog'
import "./home.css";
import Team from '../Team/Team'

const Home = () => {


  


  return (
    <div className="wrapper">
      <div className="cols cols0">
        <div className='video-text'>
          <h1 className="home-header-text">
            <span className="alt-text">ALTITUDE</span>
          </h1>
          <p className="home-header-text">
            <span className="fit-text">FITNESS MANAGEMENT</span>
          </p>
          <li class="navbar__btn">
          <a href="https://outlook.office365.com/owa/calendar/AltitudeFitnessManagementGroup@altitudemgmtintl.com/bookings/"  class="button" id="signin" target="_blank" rel="noopener noreferrer">Schedule online</a>
        </li>
        </div>
        <div className="video-container">
          <video className="video" autoPlay loop muted>
            <source
              src="/Pictures/Gym Example Compressed mp4.mp4"
              type="video/mp4"
            />
          </video>

        </div>
        
      </div>
      
      <div className="layout">
        <Services />
        <BusinessConsultation />
        <Team />
        <Affiliations />
      </div>
      <Blog />
    </div>
  );
};

export default Home;
