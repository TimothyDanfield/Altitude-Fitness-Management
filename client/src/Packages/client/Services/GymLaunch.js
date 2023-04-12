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
              <span style={{ borderBottom: "1px solid black" }}>Gym</span>
              <span>Launch Facility Consultation</span>
            </h1>
          </div>
          {/* This is the section where we want to make sure we have the three main highlights */}
          <div className="">
            <ul className="growth-list">
              <li className="growth-list-item">
              <div className='line-item-logo'></div>
                It's no secret that opening a gym can be difficult. Our
                consultation services are designed to help you navigate the
                tricky process and make informed decisions about every aspect of
                your facility. Our experienced consultants will work with you to
                develop a customized plan that takes into account your budget,
                goals, and timeline.
              </li>
              <li className="growth-list-item">
              <div className='line-item-logo'></div>
                Facility Design and Layout - The design and layout of your
                facility play a crucial role in attracting and retaining
                members. Our facility design and layout services are designed to
                help you create a space that is functional, attractive, and
                optimized for maximum revenue. We work with clients to identify
                your target demographics, evaluate your space, and develop a
                design that meets your needs and preferences.
              </li>
              <li className="growth-list-item">
              <div className='line-item-logo'></div>
                Equipment Selection and Installation - Choosing the right
                equipment is essential to the success of your fitness facility.
                Our equipment selection and installation services are designed
                to help you choose the right equipment for your space, budget,
                and target market. We work with top equipment manufacturers to
                provide you with high-quality equipment that is reliable and
                durable.
              </li>
              <li className="growth-list-item">
              <div className='line-item-logo'></div>
                Marketing and Advertising - Need to fill your pristine new gym?
                Our marketing and advertising services are designed to help you
                create a strong brand identity and reach your target market. We
                offer a range of services, including social media management,
                search engine optimization, pay-per-click advertising, and more.
              </li>
              <li className="growth-list-item">
              <div className='line-item-logo'></div>
                Staffing and Training - Hiring and training the right staff is
                critical to the success of your fitness facility. Our staffing
                and training services are designed to help you find and develop
                top talent. We offer recruitment services, employee training and
                development programs, and employee retention programs to help
                you build a strong and stable team.
              </li>
              <li className="growth-list-item">
              <div className='line-item-logo'></div>
                At Altitude Fitness Management Group, we have the expertise and
                experience to help you open a successful fitness facility.
                Contact us to learn more about our consultation and other
                services and how we can help you achieve your goals.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default GymLaunch;
