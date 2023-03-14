import React from "react";
import './services.css'

const Services = () => {
  return (
    <div className="services reveal" id="services">
      <h1>Our Services</h1>
      <div className="services__wrapper">
        <div className="services__card">
          <h2>Fitness Management</h2>
          <p>
          Achieving fitness goals requires effective fitness management. Learn the key strategies to succeed in your fitness journey and lead a healthy lifestyle.
          </p>
        </div>

        <div className="services__card">
          <h2>People Management</h2>
          <p>
          Find the key strategies for effective People Management, and learn how to create a positive work environment that encourages productivity, engagement, and growth.
          </p>
        </div>

        <div className="services__card">
          <h2>Individual Management</h2>
          <p>
          Learn why facility development is crucial for businesses, and discover strategies for creating effective spaces that enhance productivity, safety, and employee satisfaction.
          </p>
        </div>
      </div>
    </div>
  );
};
export default Services;
