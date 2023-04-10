import React from "react";
import "./gymgrowth.css";

function GymGrowth() {
  return (
    <div className="card-container" >
      <div className="gym-growth-header-container" style={{ backgroundImage: "url('/Pictures/gym.photo.png')" }}>
          <div className='gym-growth-header-content'>
            {/*<div className="gym-growth-header">
              <h1>
                <span style={{ borderBottom: "1px solid black" }}>Gym</span>
                <span> Growth Management</span>
              </h1>
            </div>
            <p className="gym-growth-body">
              <strong>
                Our gym growth management program is handcrafted to provide the
                best results for your sales and development. Featuring our unique
                sales training program and on-demand marketing services, we ensure
                steady and sustainable membership growth. Our services not only
                provide growth in the hard metrics like signups but also the
                development of a healthy culture and quality member experience
                that minimizes turnover and builds a community.
              </strong>
  </p>*/}
          </div>
       
      </div>


      <div className="">
        <div className="">
          <h2 className="gym-growth-includes-heading">Our Gym Growth Management Includes:</h2>
        </div>
        {/* This is the section where we want to make sure we have the three main highlights */}
        <div className="">
          <ul className="growth-list">
            <li className='growth-list-item'>A sales training program enhanced to boost membership sales</li>
            <li className='growth-list-item'>
              Consultation with professional gym managers with years of
              leadership experience
            </li>
            <li className='growth-list-item'>
              An on-demand marketing team
            </li>
            {/* this will be condenced to fix into each of the boxes above */}
            <li className='growth-list-item'>
              Customized gym management software to streamline your operations
              and save time
            </li>
            <li className='growth-list-item'>
              Facility design and layout services to optimize your space for
              maximum revenue
            </li>
            <li className='growth-list-item'>
              Equipment selection and maintenance support to ensure your
              equipment is always in top condition
            </li>
            <li className='growth-list-item'>
              Customer retention programs to keep members engaged and motivated
            </li>
            <li className='growth-list-item'>
              Ongoing support and consultation to help you achieve your goals
              and overcome any challenges that may arise
            </li>
          </ul>
        </div>
      </div>
      {/* Centerd howizontal line with that h1 */}
      <div className="growth-card">
        <div className="growth-card-header">
          <h2>About Our Gym Growth Management Program</h2>
        </div>
        {/* this will begin section three */}
        <div className="card-body">
          <p className="growth-text">
            Our Gym Growth Management program is designed to provide a
            comprehensive solution for gym owners who want to take their
            business to the next level. We understand the challenges and
            opportunities that come with running a gym, and we are committed to
            helping you achieve your goals and make a positive impact on your
            community.
          </p>
          <p className=" ">
            Our team of experienced gym management professionals and marketing
            experts work with all clients to develop and curate a customized
            plan that meets your specific needs and preferences. With
            data-driven systems, our consultants ensure that your business is
            functioning at peak efficiency.
          </p>
        </div>
      </div>
    </div>
  );
}

export default GymGrowth;
