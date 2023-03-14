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
            In today's fast-paced world, managing your fitness routine can be
            challenging. With so many distractions and demands on your time,
            it's easy to put your health and fitness on the back burner.
            However, taking care of your physical and mental health is crucial
            to living a happy and fulfilling life. That's where fitness
            management comes in.
          </p>
        </div>

        <div className="services__card">
          <h2>People Management</h2>
          <p>
            Managing people can be both rewarding and challenging. As a manager
            or leader, you're responsible for creating a positive work
            environment and ensuring that your team is motivated to achieve its
            goals. Effective people management is the key to achieving these
            objectives. In this article, we'll explore the key components of
            people management and provide you with strategies to help you lead
            and motivate your team to success.
          </p>
        </div>

        <div className="services__card">
          <h2>Employee Management</h2>
          <p>
            As a manager, one of your primary responsibilities is to manage your
            team effectively. Effective employee management involves a range of
            tasks, including recruitment, training, performance management, and
            employee engagement. In this article, we'll explore the key
            components of employee management and provide you with tips and
            strategies to help you succeed in your role.
          </p>
        </div>

        <div className="services__card">
          <h2>Individual Management</h2>

          <p>
            Individual management is a crucial skill that can help you achieve
            success in all areas of your life. Whether you're looking to advance
            in your career, improve your relationships, or achieve personal
            goals, effective individual management can help you get there. In
            this article, we'll explore the key components of individual
            management and provide you with strategies to help you succeed.
          </p>
        </div>
      </div>
    </div>
  );
};
export default Services;
