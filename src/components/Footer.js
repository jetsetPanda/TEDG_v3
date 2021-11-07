import React from 'react';
import {Card, Col, Row, Stack} from "react-bootstrap";
import styled from "styled-components";

import footerImage from "../assets/images/footerImage.png";
import footerRight from "../assets/images/footerRight.png";
import facebookLogo from '../assets/images/facebookLogo.png';
import instagramLogo from '../assets/images/instagramLogo.png';

const H1px40 = styled.h1`
  font-size: 40px;
  font-weight: bold;
`
const PreFB = styled.h5`
  &:before {
    content: " 🦄"
  }
`
const Footer = (props) => {

    return (
    <>
        <Row className="mb-4">
            <Col className="px-0">
                <Card className="bg-light text-dark" border="light" >
                    <Card.Img src={footerImage} alt="Card image" />
                </Card>
            </Col>

            <Col className="px-0">
                <Card className="bg-light text-dark" border="light" >
                    <Card.Img variant="bottom" src={footerRight} style={{opacity: "0.3", maxHeight: "646px"}}/>
                    <Card.ImgOverlay>

                        <Stack className="text-center">
                            <br/>
                            <H1px40>Location</H1px40>
                            <h5 style={{marginTop: "15px"}}>
                                39 Broadway Suite 2115 <br/>
                                Financial District <br/>
                                New York, NY 10006 <br/><br/>
                                T: (212) 422-9229
                            </h5>


                            <H1px40 style={{marginTop: "25px"}}>Hours</H1px40>
                            <Row className="ml-0 mr-auto text-start" style={{marginTop: "20px"}}>
                                <Col>
                                    <h5 style={{paddingLeft: "60%"}}>
                                        Monday <br/>
                                        Tuesday <br/>
                                        Wednesday <br/>
                                        Thursday <br/>
                                        Friday <br/>
                                        Saturday <br/>
                                        Sunday <br/>
                                    </h5>

                                </Col>
                                <Col>
                                    <h5 style={{paddingLeft: "10%"}}>
                                        8 AM - 6PM <br/>
                                        8 AM - 6PM <br/>
                                        8 AM - 6PM <br/>
                                        8 AM - 6PM <br/>
                                        8 AM - 4PM <br/>
                                        Closed <br/>
                                        9 AM - 5PM
                                    </h5>

                                </Col>
                            </Row>

                            <H1px40 style={{marginTop: "25px"}}>Follow Us</H1px40>
                            <Row className="ml-0 mr-auto text-start" style={{marginTop: "5px"}}>
                                <Col>
                                    <h5 style={{paddingLeft: "60%"}}>
                                        Instagram
                                    </h5>

                                </Col>
                                <Col>
                                    <PreFB style={{paddingLeft: "10%"}}>
                                        Facebook
                                    </PreFB>

                                </Col>
                            </Row>
                        </Stack>

                    </Card.ImgOverlay>
                </Card>

            </Col>
        </Row>
    </>
)};

export default Footer;