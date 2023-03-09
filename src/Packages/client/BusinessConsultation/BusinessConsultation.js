import React from "react";
import './businessconsultation.css'
const BusinessConsultation = () => {
  return (
    <div className="mainBsns reveal" id="about">
      <div className="main__container_1">
        <div className="main__img--container_1">
          <div className="main__img--card_1">
            {/* <img src="public/Pictures/wallpaperflare.com_wallpaper.jpg"></img> */}
          </div>
        </div>
        <div className="main__content_1">
          <h1>Business consulting</h1>
          <p>
            Discover how business consulting services can improve your company's success. Get expert advice and tips from experienced business consultants. By working with a consultant, you can get expert guidance on everything from financial management to marketing strategies, helping you take your business to the next level. 
          </p>

          <button className="main__btn"> 
            <a href="https://payhip.com/AltitudeMgmtIntl">Learn More</a> 
          </button>

        </div>

      </div>

    </div>

  );  
};  

 export default BusinessConsultation;