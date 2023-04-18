import React from 'react';
import './fittechsolutions.css'

function Automation() {
  return (
    <div className="card-container">
      <div className="fit-design-header-container" style={{ backgroundImage: "url('/Pictures/fittech.png')" }}></div>
      <h1 className='fit-design-header' ><span style={{ borderBottom: '1px solid rgba(214, 37, 37, 255)' }}>Fit</span><span>Tech Solutions</span></h1>

      <div className='fit-card-body'>
        <p className="growth-text">Our FitTechSolutions software is user-friendly, cloud-based, and customizable to meet the specific needs of your gym. We also provide training and support to ensure that you and your staff are fully equipped to use the software effectively.
          By automating routine tasks and processes, our automation services can help you save time and focus on what really matters  providing a great experience for your members and growing your gym. Contact us to learn more about how we can help you streamline your operations and achieve your goals. </p>
      </div>

      <ul className='growth-list'>
        <li className="growth-list-item">
          <div className='line-item-logo'></div>
          Our FitTech software allows you to automate your billing and payment processes, ensuring that you get paid on time and eliminating the need for manual invoicing and tracking.
        </li>
        <li className="growth-list-item">
          <div className='line-item-logo'></div>
          Through Altitude Fitness software, we can help you streamline your scheduling process by automating class and appointment bookings, sending reminders to staff and clients, and managing waitlists and cancellations.
        </li>
        <li className="growth-list-item">
          <div className='line-item-logo'></div>
          Our software can help you manage your member database, including signups, renewals, and cancellations. You can also track member attendance and preferences, and send personalized communications to members based on their interests and needs.
        </li>
        <li className="growth-list-item">
          <div className='line-item-logo'></div>
          Not sure what in your gym is clicking? Our fitness software can generate customized reports on key metrics such as revenue, attendance, and retention, helping you to make informed decisions and monitor your progress towards your goals.
        </li>
      </ul>
    </div>
  );
}

export default Automation;