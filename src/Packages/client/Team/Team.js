import React from "react";
import './team.css'
const OurTeam = () => {
  return (
    
    <section>
    <div className="row_1">
        <h1>Our Team</h1>
      </div>
      <div className="row_2">
        <div className="column">
          <div className="card">
            <div className="img-container">
              <img src="/Pictures/pedro.jpg" alt="3.avif" />
            </div>
            <h3>Pedro De Freitas Cedeno</h3>
            <p>Founder and CEO</p>
            <div className="icons">
              {/* // need to import React icons */}
              {/* <a href="">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="">
                <i className="fab fa-github"></i>
              </a>
              <a href="">
                <i className="fas fa-envelope"></i> */}
              {/* </a> */}
              </div>
            </div>
            </div>
        <div className="column">
          <div className="card">
            <div className="img-container">
               <img src="/Pictures/marko.jpg" alt="Marko">
               </img>
            </div>
            <h3>Marko Jakovljevic</h3>
            <p>Web Developer</p>
            <div className="icons">
              {/* <a href="#">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="#">
                <i className="fab fa-github"></i>
              </a>
              <a href="#">
                <i className="fas fa-envelope"></i>
              </a>
              <a href="">
                <i className="fas fa-envelope"></i> 
              </a>
              <a href="">
                <i className="fas fa-envelope"></i> 
              </a>
            */}
          </div>
        </div>
        </div>
        <div className="column">
          <div className="card">
            <div className="img-container">
               <img src="/Pictures/MicrosoftTeams-image (4).png" alt="Mat"></img>
            </div>
            <h3>Matthew Wakumoto</h3>
            <p>Social Media Manager</p>
            <div className="icons">
              <a href="#">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="#">
                <i className="fab fa-github"></i>
              </a>
              <a href="#">
                <i className="fas fa-envelope"></i>
              </a>
            </div> 
            </div>
          </div>
        </div>
      </section>
    
    
    
  );
};

export default OurTeam
