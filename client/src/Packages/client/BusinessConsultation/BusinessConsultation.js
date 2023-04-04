import React from "react";
import './businessconsultation.css'

const BusinessConsultation = () => {
  return (
    <div className="mainBsns reveal" id="consulting">
      <h1><span style={{ borderBottom: '1px solid black' }}>Con</span><span>sulting</span></h1>
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
            <a href="https://payhip.com/AltitudeMgmtIntl" target="_blank">Learn More</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default BusinessConsultation;