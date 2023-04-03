import React from "react";
import { Link } from "react-router-dom";
import './team.css'

const OurTeam = () => {
  return (
    <div className='team-section'>
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
              </div>
            </div>
          </div>
          <div className="column">
            <div className="card">
              <div className="img-container">
                <img src="/Pictures/Tim.png" alt="Marko" />
              </div>
              <h3>Timothy Danfield</h3>
              <p>Executive Techlogy Manager</p>
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
                <img src="/Pictures/matt.png" alt="Mat" />
              </div>
              <h3>Matthew Wakumoto</h3>
              <p>Executive Media Manager</p>
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
      <div className="button-container">
        <Link to="/allteam">
          <button className="button">See All Team Members</button>
        </Link>
      </div>
    </div>
  );
};

export default OurTeam;

