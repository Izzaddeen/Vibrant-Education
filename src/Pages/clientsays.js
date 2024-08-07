import React from "react";
import { Carousel } from "antd";
import { Container, Row, Col } from "react-bootstrap";
import Hero1 from '../Images/Vibrant Education Design Consulting.png';
import '../Css/clientsays.css';
import dot from '../Images/dot.png'

const ClientSays = () => {
  return (
    // <div className="client-says bg-light">
    // <img className="dot" src={dot}height={"20%"} alt=""/>
    //   <Container>
    //     <h2>What Our Clients Say?</h2>
    //     <Carousel style={{ height: "100%" }} autoplay>
    //       <div>
    //         <Row className="mx-0 px-0">
    //           <Col md={5}>
    //             <img src={Hero1} alt="Client 1" className="client-image" />
    //           </Col>
    //           <Col md={6} className="para-column">
    //             <p>
    //               The decision to franchise our school with <b>Your School Franchise</b> has been transformative. Their leadership courses have not only enhanced our management skills but have also elevated the overall educational experience at Blossom High School.
    //             </p>
    //           </Col>
    //         </Row>
    //       </div>
    //       <div>
    //         <Row className="mx-0 px-0">
    //           <Col md={5}>
    //             <img src={Hero1} alt="Client 2" className="client-image" />
    //           </Col>
    //           <Col md={6} className="para-column">
    //             <p>
    //               Another testimonial from a satisfied client goes here. Their feedback highlights the impact and positive changes brought about by the services.
    //             </p>
    //           </Col>
    //         </Row>
    //       </div>
    //       <div>
    //         <Row className="px-0 mx-0">
    //           <Col md={5}>
    //             <img src={Hero1} alt="Client 3" className="client-image" />
    //           </Col>
    //           <Col md={6} className="para-column">
    //             <p>
    //               Another testimonial from a satisfied client goes here. Their feedback highlights the impact and positive changes brought about by the services.
    //             </p>
    //           </Col>
    //         </Row>
    //       </div>
    //     </Carousel>
    //   </Container>
    // </div>

    <>
    <div className="client-says bg-light w-100 h-100">
      <h2 className="text-center">What Our Client Say?</h2>
      <Row className="mx-0 px-0">
        <Col xxl={1} xl={1} lg={1} md={12} sm={12} xs={12} className="col-1 mx-0 px-0">
          <img className="dot" src={dot}height={"20%"} alt=""/> 
        </Col>
        <Col xxl={5} xl={5} lg={5} md={12} sm={12} xs={12} className="col-1 mx-0 px-0">
          <img src={Hero1} alt="Client 1" className="client-image" />
        </Col>
        <Col xxl={6} xl={6} lg={6} md={12} sm={12} xs={12} className="col-3 d-flex align-items-center mx-0">
        <p style={{fontSize:'1rem'}}>
          The decision to franchise our school with <b>Your School Franchise</b> has been transformative. Their leadership courses have not only enhanced our management skills but have also elevated the overall educational experience at Blossom High School.
        </p>
        </Col>
      </Row>
    </div>
    </>
  );
};

export default ClientSays;




