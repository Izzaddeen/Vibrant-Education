import React from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import '../Css/services.css';

const Services = () => {
  return (
    <>
    
    <div className='bg-light'>
    <Container className='py-5 d-block'>
      <Row className="align-items-center mb-4 px-5 pt-5 pb-4">
        <Col md={8}>
          <h2>Services You Need To Make Your Business Grow</h2>
        </Col>
        <Col md={4} className="text-md-end">
          <Button className="consult-button">CONSULT WITH US</Button>
        </Col>
      </Row>
      <Row>
        <Col md={3} style={{paddingTop:"5%"}}>
          <Card className="custom-card">
            <Card.Body className="card-content">
              <Card.Title className='text-center pt-3'>SCHOOL CONSULTING</Card.Title>
              <Card.Text>
                Elevate your school's success with expert guidance from our education consulting – shaping institutions for excellence and innovation
              </Card.Text>
              <Button className="custom-button mb-3">Read More</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3} style={{paddingTop:"5%"}}>
          <Card className="custom-card">
            <Card.Body className="card-content">
              <Card.Title className='text-center pt-3'>SCHOOL ON LEASE</Card.Title>
              <Card.Text>
                Empower your educational vision - we step in as stewards, leasing schools with expertise and commitment for 5 to 10 years
              </Card.Text>
              <Button className="custom-button mb-3">Read More</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3} style={{paddingTop:"5%"}}>
          <Card className="custom-card">
            <Card.Body className="card-content">
              <Card.Title className='text-center pt-3'>LEADERSHIP TRAINING</Card.Title>
              <Card.Text>
                Transform potential into performance through our dynamic leadership training programs
              </Card.Text>
              <Button className="custom-button mb-3">Read More</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3} style={{paddingTop:"5%"}}>
          <Card className="custom-card">
            <Card.Body className="card-content">
              <Card.Title className='text-center pt-3'>INVESTORS CONNECT</Card.Title>
              <Card.Text>
                Bridge the gap between vision and investment with our dedicated Investor Connect platform
              </Card.Text>
              <Button className="custom-button mb-3">Read More</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
    </div>
    </>
  );
};

export default Services;
