import React from "react";
import '../Css/about.css';
import { Col, Container, Row } from "react-bootstrap";
import dots from '../Images/dot.png';

const About = () => {
    return(
        <div className="container-fullwidth">
            <Row className="m-0 p-0">
                <Col xxl={2} xl={2} lg={2} md={12} sm={12} xs={12}>
                    <img className="dots" src={dots} alt=""/>
                </Col>
                <Col className="pt-5" xxl={5} xl={5} lg={5} md={12} sm={12} xs={12}>
                    <h2 className="about-head">30 Years of Successful Education & Leadership Consulting</h2>
                    <p className="pt-3">
                        Vibrant Education Learning Technologies Pvt Ltd, ventured in Malaysia with
                        a pool of expertise in various verticals of the Global education system since
                        2018, marking footprints in various countries led by experienced business
                        and educational professionals.
                    </p>
                    <p className="pt-3">Vibrant Education will ensure that the school system runs successfully with
                        a team of experts in the field of education. Vibrant Education has the option to
                        help schools create a Paradigm Shift.
                    </p>
                    <ul className="pt-3">
                        <li>School Consulting</li>
                        <li>School On Lease</li>
                        <li>Leadership Training</li>
                        <li>Franchise Consulting</li>
                        <li>Investor Connect</li>
                    </ul>
                    <button className="about-btn mt-4">Download Brochure <i className="fa-solid fa-download"></i></button>
                </Col>
                <Col xxl={5} xl={5} lg={5} md={12} sm={12} xs={12}>
                    <div className="about-col3"></div>
                </Col>
            </Row>
        </div>
    )
}

export default About;
