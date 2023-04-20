import React from "react";
import './businessconsultation.css'
import { useMediaQuery } from 'react-responsive';


const BusinessConsultation = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });

  return (
    <div className= {`mainBsns reveal ${isMobile ? 'mobile' : ''}`} id="consulting">
      <h1 className="buscon"><span style={{ borderBottom: '1px solid rgba(214, 37, 37, 255)' }}>Con</span><span>sulting</span></h1>
      <div className="main_bsns_1">

        <div className="bsns_img--container_1">
          <div className="bsns_img--card_1">
            <img src="/Pictures/wallpaperflare.com_wallpaper.jpg" alt="123addw"></img>
          </div>
        </div>
        <div className="main__content_1">
          <h1>Business consulting</h1>
          <p>
            Discover how business consulting services can improve your company's success. Get expert advice and tips from experienced business consultants. By working with a consultant, you can get expert guidance on everything from financial management to marketing strategies, helping you take your business to the next level.
          </p>
          <button className="main__btn_1">
            <a href="https://payhip.com/AltitudeMgmtIntl" target="_blank" rel="noopener noreferrer">Learn More</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default BusinessConsultation;