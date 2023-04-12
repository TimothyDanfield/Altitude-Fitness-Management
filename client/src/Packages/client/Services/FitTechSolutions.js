import React from 'react';
import './fittechsolutions.css'

function Automation() {
  return (
    <div className="block">
      <div className="fit-design-header-container" style={{ backgroundImage: "url('/Pictures/fittech.png')" }}>
      </div>
      <h1 className='fit-design-header' ><span style={{borderBottom: '1px solid black'}}>Fit</span><span>Tech Solutions</span></h1>
      <br />
      <br />
      <h2 style={{textAlign:'center', padding:'30px'}}>Our automation services include:</h2>
      <br />
      <br />
      <ul>
  <li className="fit-list-item">
    <h4 className="fit-design-includes-heading">Automated billing:</h4>
    <p className="growth-list-item">Our gym management software allows you to automate your billing and payment processes, ensuring that you get paid on time and eliminating the need for manual invoicing and tracking.</p>
  </li>
  <li className="fit-list-item">
    <h4 className="fit-design-includes-heading">Automated scheduling:</h4>
    <p className="growth-list-item">Through Altitude Fitness software, we can help you streamline your scheduling process by automating class and appointment bookings, sending reminders to staff and clients, and managing waitlists and cancellations.</p>
  </li>
  <li className="fit-list-item">
    <h4 className="fit-design-includes-heading">Automated member management:</h4>
    <p className="growth-list-item">Our software can help you manage your member database, including signups, renewals, and cancellations. You can also track member attendance and preferences, and send personalized communications to members based on their interests and needs.</p>
  </li>
  <li className="fit-list-item">
    <p className="growth-list-item">Automated reporting: Not sure what in your gym is clicking? Our fitness software can generate customized reports on key metrics such as revenue, attendance, and retention, helping you to make informed decisions and monitor your progress towards your goals.</p>
  </li>
</ul> 
<div className='growth-card'>
     <div className="growth-card-header">
     <h2>FitTechSolutions</h2>
     </div>
     <div className='card-body'>
      <p className="growth-text">Our FitTechSolutions software is user-friendly, cloud-based, and customizable to meet the specific needs of your gym. We also provide training and support to ensure that you and your staff are fully equipped to use the software effectively. 
      By automating routine tasks and processes, our automation services can help you save time and focus on what really matters  providing a great experience for your members and growing your gym. Contact us to learn more about how we can help you streamline your operations and achieve your goals. </p>
      </div>
      </div>
    </div>
  );
}

export default Automation;