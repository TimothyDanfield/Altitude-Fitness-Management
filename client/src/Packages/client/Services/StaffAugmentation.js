import React from 'react';
import './staffaugmentation.css'

function Employee() {
  return (
    <div className="card-container-staff">
      <div className="staffImg">
        <img src="/Pictures/staffaugmentation.jpg" alt="" className="img-fluid" />
      </div>
      <div style={{ alignSelf: 'center', textAlign: 'center' }}>
        <div className='mb-4'>
          <h1 className="mb-4" ><span style={{ borderBottom: '1px solid black' }}>Sta</span><span>ff Augmentation</span></h1>
        </div>
        <div className="text-center">
          <p className="staff-body">
            <p className="font-weight-bold mb-0">
              Struggling to staff your gym? We offer both on-demand employees to help with custodial and administrative duties, as well as a professional recruiter who can handle all your hiring needs.
            </p>
            <br />
            <br />
            <p className='staff-includes-heading font-weight-bold'>
              Staff Augmentation includes:
            </p>
            <br />
            <br />
            <div class="row staff-augmentation-includes">
              <div class="col-md-12">
                <ol class="pl-3 augmentation-list-group">
                  <li className='augmentation-list-item'>
                    <div className="augmentation-item-logo"></div>
                    <h4 st>On-demand employee services:</h4>
                    <span className='augmentation-list-span'>We understand that staffing a gym can be a challenge, especially when it comes to custodial and administrative duties. That's why we offer on-demand employee services to help with tasks such as cleaning, front desk support, and member check-ins. Our on-demand employees are trained, reliable, and available when you need them, allowing you to focus on your core business.</span>
                  </li>
                  <li className='augmentation-list-item'>
                    <div className="augmentation-item-logo"></div>
                    <h4>Professional recruitment services:</h4>
                    <span className='augmentation-list-span'>Finding the right people to join your team can be a time-consuming and costly process. That's why we offer professional recruitment services to help you find qualified candidates for your gym. Our team of experienced recruiters will work with you to understand your needs and preferences and will identify and screen candidates who meet your criteria. We can handle all aspects of the hiring process, from posting job listings to conducting interviews and negotiating offers.</span>
                  </li>
                  <li className='augmentation-list-item'>
                    <div className="augmentation-item-logo"></div>
                    <h4>Employee training and development:</h4>
                    <span className='augmentation-list-span'>We believe in investing in your employees to help them grow and develop professionally. That's why we offer customized training and development programs to help your staff improve their skills and performance. Our programs cover a range of topics, including sales and customer service, leadership development, and industry-specific training.</span>
                  </li>
                  <li className='augmentation-list-item'>
                    <div className="augmentation-item-logo"></div>
                    <h4>Employee retention programs:</h4>
                    <span className='augmentation-list-span'>Keeping your employees motivated and engaged is key to building a strong and stable team. That's why we offer employee retention programs that focus on creating a positive and supportive workplace culture. Our programs include team-building activities, recognition and reward programs, and ongoing feedback and coaching.</span>
                  </li>
                </ol>
              </div>
            </div>

            <br />
            <br />
            <p className='staff-text'>
              At Altitude Fitness Management Group, we believe that your employees are your most valuable asset. That's why we are committed to providing comprehensive employee services that help you attract, retain, and develop a high-performing team. Contact us to learn more about how we can help you achieve your employee management goals.
            </p>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Employee;

