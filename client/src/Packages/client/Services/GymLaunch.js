import React from 'react';

import { Container, Row, Col, Image } from 'react-bootstrap';

function GymLaunch() {
  return (
    <div className="block">
      <Container>
        <Row>
          <Col md={6} className="gymImg">
            <Image src="/Pictures/design2.png" fluid />
          </Col>
          <Col md={6}>
            <h1><span style={{ borderBottom: '1px solid black' }}>Gym</span><span>Launch Facility Consultation</span></h1>
            <p className="text">
              <b>
                It's no secret that opening a gym can be difficult. Our consultation services are designed to help you navigate the tricky process and make informed decisions about every aspect of your facility. Our experienced consultants will work with you to develop a customized plan that takes into account your budget, goals, and timeline.
              </b>
              <br />
              <br />

              Facility Design and Layout - The design and layout of your facility play a crucial role in attracting and retaining members. Our facility design and layout services are designed to help you create a space that is functional, attractive, and optimized for maximum revenue. We work with clients to identify your target demographics, evaluate your space, and develop a design that meets your needs and preferences.
              <br />
              <br />

              Equipment Selection and Installation - Choosing the right equipment is essential to the success of your fitness facility. Our equipment selection and installation services are designed to help you choose the right equipment for your space, budget, and target market. We work with top equipment manufacturers to provide you with high-quality equipment that is reliable and durable.
              <br />
              <br />

              Marketing and Advertising - Need to fill your pristine new gym? Our marketing and advertising services are designed to help you create a strong brand identity and reach your target market. We offer a range of services, including social media management, search engine optimization, pay-per-click advertising, and more.
              <br />
              <br />

              Staffing and Training - Hiring and training the right staff is critical to the success of your fitness facility. Our staffing and training services are designed to help you find and develop top talent. We offer recruitment services, employee training and development programs, and employee retention programs to help you build a strong and stable team.
              <br />
              <br />

              At Altitude Fitness Management Group, we have the expertise and experience to help you open a successful fitness facility. Contact us to learn more about our consultation and other services and how we can help you achieve your goals.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default GymLaunch;

