import React from "react";
import Services from "/client/src/Packages/client/Services/Services";
import "./home.css";

const Home = () => {
  return (
    <div class="wrapper">
      <div class="cols cols0">
        <h1 class="text">
          <span className="multiText">ALTITUDE</span>
        </h1>
        <p class="text">
          <span className="multiText_2">FITNESS MANAGEMENT</span>
        </p>
        <div className="video-container">
          <video className="video" autoPlay loop muted>
            <source
              src="/Pictures/Gym Example Compressed mp4.mp4"
              type="video/mp4"
            />
          </video>
          <Services />
        </div>
      </div>
    </div>
  );
};

export default Home;
