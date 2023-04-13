import React from "react";
import './podcast.css'

const PodCast = () => {
  return (
    <div className="mainPod reveal">
        <h1 className='podcast-h1'><span style={{ borderBottom: '1px solid black', fontSize: '3rem' }}>Edu</span><span style={{ fontSize: '3rem' }}>cation</span></h1>
        <div className="main__container_3">
          <div className="main__img--container_3">
            <div className="main__img--card_3" id="card-2">
              <iframe src="https://www.youtube.com/embed/Kl-KAxy1WTU?autoplay=1&rel=0&fs=0&controls=0&disablekb=1&mute=1" width="560" height="315" title="A YouTube video" frameborder="0"></iframe>
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