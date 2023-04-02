import React from "react";
import Services from "../Services/Services";
import PodCast from "../PodCast/PodCast";
import BusinessConsultation from '../BusinessConsultation/BusinessConsultation'
import Affiliations from '../Affiliations/Affiliations'
import "./home.css";
import Team from '../Team/Team'

const Home = () => {
  const renderServices = () => {
    return (
      <div>
        <Services />
      </div>
    );
  };

  const renderPodCast = () => {
    return (
      <div>
        <PodCast />
      </div>
    );
  };
  const renderConsultation = () => {
    return (
      <div>
        <BusinessConsultation />
      </div>
    );
  };


  return (
    <div className="wrapper">
      <div className="cols cols0">
        <div className='video-text'>
          <h1 className="text">
            <span className="alt-text">ALTITUDE</span>
          </h1>
          <p className="text">
            <span className="fit-text">FITNESS MANAGEMENT</span>
          </p>
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
        <PodCast />
        <BusinessConsultation />
        <Team />
        <Affiliations />
      </div>
    </div>
  );
};

export default Home;
