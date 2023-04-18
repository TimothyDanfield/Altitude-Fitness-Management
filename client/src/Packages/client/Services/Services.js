import React from "react";
import './services.css';
import { useMediaQuery } from 'react-responsive';

const Services = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });

  return (
    <div className={`services reveal ${isMobile ? 'mobile' : ''}`} id="services">
      <h1 ><span style={{ borderBottom: '1px solid rgba(214, 37, 37, 255)' }}>Our</span><span> Services</span></h1>
      <div className="services__wrapper">
        <div className="services__card" onClick={() => window.location.href = "/gymgrowth"}>
          <h2>Gym Growth</h2>
          <div className="imageContainer" style={{ backgroundImage: "url('/Pictures/gym.photo.png')", backgroundPosition: "center", backgroundSize: "cover" }}></div>
          <p className="pgym">
            Our gym growth solutions program is hand crafted to provide the best results for your sales and development.
          </p>
        </div>
        <div className="services__card" onClick={() => window.location.href = "/fittechsolutions"}>
          <h2>Fit Tech Solutions</h2>
          <div className="imageContainerfit" style={{ backgroundImage: "url('/Pictures/fittech.png')", backgroundPosition: "center", backgroundSize: "cover" }} ></div>
          <p className="pfit">
            Our tech solutions feature cutting-edge software in fitness technology which function to ensure that your gym is not wasting any time pushing papers.
          </p>
        </div>
        <div className="services__card" onClick={() => window.location.href = "/staffaugmentation"}>
          <h2>Staffing Augmentation</h2>
          <div className="imageContainerstaff" style={{ backgroundImage: "url('/Pictures/staffaugmentation.jpg')", backgroundPosition: "center", backgroundSize: "cover" }}></div>
          <p className="pstaff">
            Struggling to staff your gym? We offer both on-demand employees to help with custodial and administrative duties, as well as a professional recruiter who can handle all your hiring needs.
          </p>
        </div>
        <div className="services__card" onClick={() => window.location.href = "/gymlaunch"}>
          <h2>Facility Design and Launch</h2>
          <div className="imageContainerdesign" style={{ backgroundImage: "url('/Pictures/design2.png')", backgroundPosition: "center", backgroundSize: "cover" }}></div>
          <p className="pdesign">
            Our consultation services are designed to help you navigate the tricky process and make informed decisions about every aspect of your facility.
          </p>
        </div>

      </div>
    </div>
  );
};
export default Services;
