import React from "react";
import './services.css'


const Services = () => {
  return (
    <div class="services reveal" id="services">
      <h1>Our Services</h1>
      <div class="services__wrapper">



        <div class="services__card" onClick={() => window.location.href = "/gymgrowth"}>
          <div class="imageContainer">
            <h2>Gym Growth Management</h2>
            <p>
              Our gym growth management program is hand crafted to provide the best results for your sales and development.
            </p>
          </div>
        </div>



        <div class="services__card" onClick={() => window.location.href = "/automation"}>
          <h2>Automation Services</h2>
          <p>
            Our automation services feature cutting-edge software in fitness technology which function to ensure that your gym is not wasting any time pushing papers.
          </p>
        </div>


        <div class="services__card" onClick={() => window.location.href = "/employee"}>
          <h2>Employee Services</h2>
          <p>
            Struggling to staff your gym? We offer both on-demand employees to help with custodial and administrative duties, as well as a professional recruiter who can handle all your hiring needs.
          </p>
        </div>


        <div class="services__card" onClick={() => window.location.href = "/gymlaunch"}>
          <h2>Gym Launch Facility Consultation</h2>
          <p>
            Our consultation services are designed to help you navigate the tricky process and make informed decisions about every aspect of your facility.
          </p>
        </div>

      </div>
    </div>
  );
};
export default Services;
