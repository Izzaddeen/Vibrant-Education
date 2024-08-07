import React from 'react';
import './footer.css';
import logo from '../Images/logo.png'
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
    return (
        <>
        <footer className='footer-container'>
                <div className='footer-row-1 px-5 m-0'>
                    <img className='vib-logo' src={logo} alt='vibrant-logo'/>
                </div>

                <Row className='footer-row-2 px-5 py-3'>
                    <p style={{fontSize:"1.2rem", padding:"1% 14%"}}>In the spirit of lifelong learning, we believe education is the cornerstone of progress. Together, let's nurture
                       minds, inspire innovation, and cultivate a future where knowledge knowa no bounds. Join us on this journey of
                       growth, where every step taken together shapes a brighter and more enlightened world
                    </p>
                </Row>
                <Row className='mx-0 footer-row-3'>
                    <Col xxl={4} xl={4} lg={4} md={12} sm={12} xs={12}>
                        <h1>About Us</h1>
                        <p style={{fontSize:"1.3rem", fontWeight:"600", textAlign:"justify", paddingTop:"3%"}}>Vibrant Education Learning Technologies Pt Ltd,
                           ventured at Malaysia with pool of expertise into
                           various verticals of the Global education system from<br></br>
                           2018
                        </p>
                    </Col>
                    <Col xxl={4} xl={4} lg={4} md={12} sm={12} xs={12}>
                        <ul className='ul-1'>
                            <div>
                                <li>HOME</li>
                                <li>ABOUT US</li>
                                <li>SERVICES</li>
                            </div>
                            <div>
                                <li>BLOG</li>
                                <li>CONTACT US </li>
                            </div>
                            
                        </ul>
                    </Col>
                    <Col xxl={4} xl={4} lg={4} md={12} sm={12} xs={12}>
                        <ul className='ul-2'>
                            <li>+91 98427 44441</li>
                            <li>info@vibranteducation.in</li>
                            <li>No.147 Chandrasekaran Avenue Main Road
                                Thoraipakkam Chennai 600097
                            </li>
                        </ul>
                    </Col>
                </Row>
                <hr></hr>


                <div class="container">
                <div class="column empty-column"></div>
                <div class="column-1">
                    <p style={{fontSize:"1.5rem"}} className='fw-bold '>FOLLOW US ON</p>
                </div>
                <div class="column-2" style={{paddingRight:"-10%"}}>
                    <p className='fw-bold'>..............  <i style={{fontSize:"2rem", color:"black"}} class="fa-brands fa-facebook"></i><i style={{fontSize:"2rem", color:"black"}} class="fa-brands fa-twitter"></i><i style={{fontSize:"2rem", color:"black"}} class="fa-brands fa-square-instagram"></i></p>
                </div>
                </div>


                <p style={{fontSize:"1.4rem", fontWeight:"500"}} className='text-center p-0 m-0'>Copyright &copy;Brassy Technologies Private Limited. All Rights Reserved.</p>
        </footer>
        </>
    );
}

export default Footer;
