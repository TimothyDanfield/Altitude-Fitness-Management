import React from "react";
import './podcast.css'

const PodCast = () => {
  return (
    <div className="mainPod reveal">
        <h1 className='podcast-h1'><span style={{ borderBottom: '1px solid rgba(214, 37, 37, 255)', fontSize: '3rem' }}>Edu</span><span style={{ fontSize: '3rem' }}>cation</span></h1>
        <div className="main__container_3">
          <div className="main__img--container_3">
            <div className="main__img--card_3" id="card-2">
              
            </div>
          </div>
          <div className="main__content_3">
            <h1>Advice from Experienced Business Training Coach</h1>
            <p>
              Discover a new way to achieve success in all aspects of your life
              through the power of fitness with the podcast introducing a
              transformative approach to lifestyle change.
            </p>
            <button className="main__btn_3">
              <a href="https://www.fitmolife.com/" target="_blank" rel="noopener noreferrer">See More</a>
            </button>
          </div>
          
        </div>
    </div>

  );
};
export default PodCast;