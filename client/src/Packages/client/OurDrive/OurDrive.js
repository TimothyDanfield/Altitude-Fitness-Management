import React from "react";
import './ourdrive.css'
import { useMediaQuery } from 'react-responsive';


const OurDrive = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });

  return (
    <div className= {`mainBsns reveal ${isMobile ? 'mobile' : ''}`} id="about">
     <h1 ><span style={{ borderBottom: '1px solid rgba(214, 37, 37, 255)', fontSize: '3rem' }}>Our</span><span style={{ fontSize: '3rem' }}>Drive</span></h1>
      <div className="ourdrivemain__container_1">
        <div className="main__img--container_1">
          <div className="ourdrivemain__img--card_1">
            <img className="ourdriveimg"
              src="/Pictures/ourdrive.jpg"
              alt="Business consulting services"
            />
          </div>
        </div>
        <div className="main__content_1">
          <h1>The Why Behind You</h1>
          <p>
            At Altitude Fitness Management Group, we are passionate about
            helping fitness professionals and entrepreneurs achieve their goals
            and make a positive impact on the communities they serve. Our team
            consists of experienced fitness industry experts who have worked in
            various roles, from personal trainers and group fitness instructors
            to gym owners and executives.
          </p>
          <button className="main__btn_1">
            <a
              href="https://payhip.com/AltitudeMgmtIntl"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn More
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default OurDrive;
