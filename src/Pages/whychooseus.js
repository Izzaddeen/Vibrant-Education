import React from "react";
import '../Css/whychooseus.css'
import dot from '../Images/dot.png'
import { Container, Row, Col } from "react-bootstrap";

const WhyChooseUs = () => {
    return(
        <>
        <div className="wcu bg-light" style={{padding:"8%"}}>
        <Container>
            <Row className="mx-0 px-0">
                <Col md={5} className="image-section">
                <div className="image-wrapper">
                    <img
                        src="https://source.unsplash.com/random/200x200?person"
                        alt="Profile"
                        className="profile-image"
                    />
                </div>
                </Col>
                <Col md={6} style={{paddingLeft:"10%"}}>
                    <div className="content">
                        <h2>Why Choose Us?</h2>
                        <div className="points">
                            <div className="point">
                                <h3>PROVEN EXPERTISE</h3>
                                <p>Benefit from our industry-leading experience and a track record of successful outcomes</p>
                            </div>
                            <div className="point">
                                <h3>CLIENT CENTRIC APPROACH</h3>
                                <p>Benefit from our industry-leading experience and a track record of successful outcomes</p>
                            </div>
                            <div className="point">
                                <h3>INNOVATION AT CORE</h3>
                                <p>Stay ahead with our commitment to continuous innovation, integrating the latest technologies for optimal results</p>
                            </div>
                        </div>
                    </div>

                </Col>
                <Col md={1} className="px-0">
                <div className="dot-pattern">
                    <img className="dot-wcu" src={dot} alt="dot" />
                </div>
                </Col>
            </Row>
        </Container>
        </div>
        </>
    )
}
export default WhyChooseUs

