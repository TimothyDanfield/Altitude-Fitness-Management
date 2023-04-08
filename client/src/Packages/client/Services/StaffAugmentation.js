import React from 'react';
import './staffaugmentation.css'

function Employee() {
  return (
    <div className="card-container-staff">
      <div className="staff-augmentation-header-container">
        <img src="/Pictures/staffaugmentation.jpg" alt="" />
      </div>
      <div className='test'>
      <div className='staff-header-content'>
      <h1 className="staff-header" ><span style={{borderBottom: '1px solid black'}}>Sta</span><span>ff Augmentation</span></h1>
      </div>
      <p className="staff-body">
      <p>
        <strong>
          Struggling to staff your gym? We offer both on-demand employees to help with custodial and administrative duties, as well as a professional recruiter who can handle all your hiring needs.{' '}
        </strong>
        </p>
        <br />
        <br />
        <p className='staff-includes-heading'>
        Staff Augmentation includes:
        </p>
        <br />
        <br />
        1. On-demand employee services: We understand that staffing a gym can be a challenge, especially when it comes to custodial and administrative duties. That's why we offer on-demand employee services to help with tasks such as cleaning, front desk support, and member check-ins. Our on-demand employees are trained, reliable, and available when you need them, allowing you to focus on your core business.
        <br />
        <br />
        2. Professional recruitment services: Finding the right people to join your team can be a time-consuming and costly process. That's why we offer professional recruitment services to help you find qualified candidates for your gym. Our team of experienced recruiters will work with you to understand your needs and preferences and will identify and screen candidates who meet your criteria. We can handle all aspects of the hiring process, from posting job listings to conducting interviews and negotiating offers.
        <br />
        <br />
        3. Employee training and development: We believe in investing in your employees to help them grow and develop professionally. That's why we offer customized training and development programs to help your staff improve their skills and performance. Our programs cover a range of topics, including sales and customer service, leadership development, and industry-specific training.
        <br />
        <br />
        4. Employee retention programs: Keeping your employees motivated and engaged is key to building a strong and stable team. That's why we offer employee retention programs that focus on creating a positive and supportive workplace culture. Our programs include team-building activities, recognition and reward programs, and ongoing feedback and coaching.
        <br />
        <br />
        <br />
        <p className='staff-text'>
        At Altitude Fitness Management Group, we believe that your employees are your most valuable asset. That's why we are committed to providing comprehensive employee services that help you attract, retain, and develop a high-performing team. Contact us to learn more about how we can help you achieve your employee management goals.
        </p>
      </p>
      </div>
    </div>
  );
}

export default Employee;