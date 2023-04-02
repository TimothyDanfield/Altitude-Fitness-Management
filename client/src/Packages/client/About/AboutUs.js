import React from "react";
import "./about.css";
const AboutUs = () => {
  return (
    <div className="main reveal" id="about">
      <div className="main__container_1">
        <div className="main__img--container">
          <div className="main__img--card_1aboutus">
            <img src="public/Pictures/wallpaperflare.com_wallpaper.jpg" alt="consaulting"></img>
          </div>
        </div>
        <div className="main__content_1">
          <h1>Business consulting</h1>
          <p>
            Discover how business consulting services can improve your company's
            success. Get expert advice and tips from experienced business
            consultants. By working with a consultant, you can get expert
            guidance on everything from financial management to marketing
            strategies, helping you take your business to the next level.
          </p>

          <button className="main__btn">
            <a href="https://payhip.com/AltitudeMgmtIntl">Learn More</a>
          </button>

          <div className="main reveal" id="sign-up">
            <div className="main__container_2">
              <div className="main__content_2">
                <h1>Business Marketing Strategies</h1>

                <p>
                  Marketing is an essential part of any business strategy. It
                  helps to reach out to potential customers, increase brand
                  awareness, and boost revenue. Business marketing involves a
                  set of activities that help to promote a product or service to
                  a target audience. It includes advertising, public relations,
                  sales promotions, and personal selling.
                </p>

                <button className="main__btn">
                  <a href="https://www.fitmolife.com/">See More</a>
                </button>
              </div>

              <div className="main__img--container">
                <div className="main__img--card_2aboutus">
                  <img src="/Pictures/AdobeStock_80447539 (1).jpeg" alt="podcast"/>
                </div>
              </div>
            </div>
          </div>
        </div> 
      </div>
    </div>
  );
};

export default AboutUs;