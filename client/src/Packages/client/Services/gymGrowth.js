import React from "react";
import "./gymgrowth.css";

function GymGrowth() {
  return (
    <div class="card-container">
      <div class="card">
        <div
          class="card-header"
          style={{ height: "400px", overflow: "hidden" }}
        >
          <img src="/Pictures/gym.photo.png" alt="" />
        </div>
        <div class="card-body">
          <h1>
            <span style={{ borderBottom: "1px solid black" }}>Gym</span>
            <span>Growth Management</span>
          </h1>

          <p class="text">
            <strong>
              Our gym growth management program is handcrafted to provide the
              best results for your sales and development. Featuring our unique
              sales training program and on-demand marketing services, we ensure
              steady and sustainable membership growth. Our services not only
              provide growth in the hard metrics like signups but also the
              development of a healthy culture and quality member experience
              that minimizes turnover and builds a community.
            </strong>
          </p>
        </div>
      </div>

      <div class="card">
        <div class="card-header">
          <h2 class="subheading">Our Gym Growth Management Includes:</h2>
        </div>
        {/* This is the section where we want to make sure we have the three main highlights */}
        <div class="card-body">
          <ul class="list">
            <li>A sales training program enhanced to boost membership sales</li>
            <li>
              Consultation with professional gym managers with years of
              leadership experience
            </li>
            <li>
              An on-demand marketing team
              <div class="boxes-container">
                <div class="box">
                  <h3>Box 1</h3>
                  <ul>
                    <li>SEO management</li>
                    <li>Pay-Per-Click advertising</li>
                  </ul>
                </div>
                <div class="box">
                  <h3>Box 2</h3>
                  <ul>
                    <li>Social media management</li>
                  </ul>
                </div>
                <div class="box">
                  <h3>Box 3</h3>
                  <ul>
                    <li>Web development</li>
                    <li>IT</li>
                  </ul>
                </div>
              </div>
            </li>
            {/* this will be condenced to fix into each of the boxes above */}
            <li>
              Customized gym management software to streamline your operations
              and save time
            </li>
            <li>
              Facility design and layout services to optimize your space for
              maximum revenue
            </li>
            <li>
              Equipment selection and maintenance support to ensure your
              equipment is always in top condition
            </li>
            <li>
              Customer retention programs to keep members engaged and motivated
            </li>
            <li>
              Ongoing support and consultation to help you achieve your goals
              and overcome any challenges that may arise
            </li>
          </ul>
        </div>
      </div>
      {/* Centerd howizontal line with that h1 */}
      <div class="card">
        <div class="card-header">
          <h2>About Our Gym Growth Management Program</h2>
        </div>
        {/* this will begin section three */}
        <div class="card-body">
          <p class="text">
            Our Gym Growth Management program is designed to provide a
            comprehensive solution for gym owners who want to take their
            business to the next level. We understand the challenges and
            opportunities that come with running a gym, and we are committed to
            helping you achieve your goals and make a positive impact on your
            community.
          </p>
          <p class="text">
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
