import React from "react";

import { Container, Row, Col, Image } from "react-bootstrap";

function GymLaunch() {
  return (
    <>
      <div className="card-container">
        <div
          className="gym-growth-header-container"
          style={{ backgroundImage: "url('/Pictures/design2.png')" }}
        ></div>
        <div>
          <div>
            <h1 class="gym-growth-includes-heading">
              <span style={{ borderBottom: "1px solid rgba(214, 37, 37, 255)" }}>Gym</span>
              <span>Launch Facility Consultation</span>
            </h1>
          </div>
          {/* This is the section where we want to make sure we have the three main highlights */}
         
            <ul className="growth-list">
              <li className="growth-list-item">
              <div className='line-item-logo'></div>
                It's no secret that opening a gym can be difficult. Our
                consultation services are designed to help you navigate the
                tricky process and make informed decisions about every aspect of
                your facility. 
              </li>
              <li className="growth-list-item">
              <div className='line-item-logo'></div>
                Facility Design and Layout - The design and layout of your
                facility play a crucial role in attracting and retaining
                members. Our facility design and layout services are designed to
                help you create a space that is functional, attractive, and
                optimized for maximum revenue. 
              </li>
              <li className="growth-list-item">
              <div className='line-item-logo'></div>
                Equipment Selection and Installation - Choosing the right
                equipment is essential to the success of your fitness facility.
                Our equipment selection and installation services are designed
                to help you choose the right equipment for your space, budget,
                and target market.
              </li>
              <li className="growth-list-item">
              <div className='line-item-logo'></div>
                Need to fill your pristine new gym? We
                offer a range of services, including social media management,
                search engine optimization, pay-per-click advertising, and more.
              </li>
              <li className="growth-list-item">
              <div className='line-item-logo'></div>
                Staffing and Training - Hiring and training the right staff is
                critical to the success of your fitness facility. Our staffing
                and training services are designed to help you find and develop
                top talent. 
              </li>
              <li className="growth-list-item">
              <div className='line-item-logo'></div>
                At Altitude Fitness Management Group, we have the expertise and
                experience to help you open a successful fitness facility.
              
              </li>
            </ul>
          </div>
        </div>
     
    </>
  );
}

export default GymLaunch;
