import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import '../Css/home.css';
import girl from '../Images/girl.png';
import pencil from '../Images/pencil.png';
import school from '../Images/school.png'
import dotline from '../Images/dotline.png'
import About from "./about";
import Services from "./services";
import Youtube from "./youtube";
import WhyChooseUs from "./whychooseus";
import ClientSays from "./clientsays";
import ContactForm from "./contact";

const Home = () => { 
    return (
        <>
        <div className="home-bg bg-light w-100 d-flex align-items-center justify-content-center ">
            <Container className="p-0 home-container">
                <Row className=" m-0 p-0">
                    <Col xxl={5} xl={5} lg={5} md={12} sm={12} xs={12} className="home-col">
                        <div className="d-flex justify-content-center align-items-center">
                            <div>
                                <h1 className="home-h1 fw-bold">We are your
                                    Business
                                </h1>
                                <h2 className="home-h2">ADVISOR</h2>
                            </div>
                            <div>
                                <img src={dotline} alt="dotline"/>
                            </div>
                        </div>
                        <div className="btn-div ">
                        <button className="home-btn px-5 py-3 g-2 fw-bold" style={{backgroundColor:"#ca9442", color:"#1f3c15"}}>CONSULT</button>
                        <button className="home-btn px-5 py-3 g-2 fw-bold" style={{backgroundColor:"#1f3c15", color:"#dfdcd6"}}>EXPLORE</button>
                        </div>
                    </Col>
                    <Col xxl={3} xl={3} lg={3} md={12} sm={12} xs={12} className="pencils-container p-0 m-0">
                        <img className="school" src={school} height={"45%"} alt=""/>
                        <img className="pencil" src={pencil} height={"45%"} alt=""/>
                    </Col>
                    <Col xxl={4} xl={4} lg={4} md={12} sm={12} xs={12} className="girl-container p-o m-0">
                        <img className="girl" src={girl} alt=""/>
                    </Col>
                </Row>
            </Container>
        </div>
        {/* <About/>
        <Services/>
        <Youtube/>
        <WhyChooseUs/>
        <ClientSays/>
        <ContactForm/> */}

        </>
    );
}
export default Home;




   // xxl={6} xl={6} lg={6} md={12} sm={12} xs={12}
    // className={`${
        // window?.innerWidth > 834.98 ? 'fs-18' : window?.innerWidth < 375 ? 'fs-16' : 'fs-16'
    // } fw-400 text-dark mb-4`}