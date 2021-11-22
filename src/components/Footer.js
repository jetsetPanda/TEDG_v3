import React from 'react';
import {Card, Col, Row, Stack} from "react-bootstrap";
import styled from "styled-components";

import footerImage from "../assets/images/footerImage.png";
import footerRight from "../assets/images/footerRight.png";
import facebookLogo from '../assets/images/facebookLogo.png';
import instagramLogo from '../assets/images/instagramLogo.png';
import igLogo from "../assets/images/instagramLogo.png";
import fbLogo from "../assets/images/facebookLogo.png";

const H1px40 = styled.h1`
  font-size: 40px;
  font-weight: bold;
  @media (max-width: 768px) {
  font-size: 18px;
    text-align: left;
}
`
const PreFB = styled.h5`
  &:before {
    content: " 🦄"
  }
`

const H5Left60 = styled.h5`
  padding-left: 60%;
  
  @media (max-width: 768px) {
    padding-left: 0;
  }
`

const FooterCardBackground = styled(Card.Img)`
    opacity: 0.3;
    height: 646px;

    @media (max-width: 768px) {
    height: 500px;
    }
    
`

const InstagramDiv = styled.div`
  padding-left: 20px;
  display: inline-flex;
 &&::before {
   background-image: url(${igLogo});
   background-size: 25px 25px;
   display: inline-block;
   width: 25px;
   height: 25px;
   content:"";
   margin-right: 10px;
 }
  @media (max-width: 768px ) {
    padding-left: 0px;
    margin-right: 70px;
  }
`
const FacebookDiv = styled.div`
  display: inline-flex;
  &&::before {
    background-image: url(${fbLogo});
    background-size: 27px 27px;
    display: inline-block;
    width: 27px;
    height: 27px;
    content:"";
    margin-right: 10px;
  }
`

const StyledLink = styled.a`
  text-decoration: none;
  color: #1C2430;

  &&:hover {
    color: #5e78a8;
    transition: color 1s;
  }
`
const DivFlex = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: row;
    justify-content: start;
  }

`
const Footer = (props) => {

    return (
    <>
        <Row className="mb-4 mt-5 pt-md-5">
            <Col md={6} sm={12} className="px-0">
                <Card className="bg-light text-dark" border="light" >
                    <Card.Img src={footerImage} alt="Card image" />
                </Card>
            </Col>

            <Col md={6} sm={12}  className="px-0 ">
                <Card className="bg-light text-dark" border="light" >
                    <FooterCardBackground variant="bottom" src={footerRight}/>
                    <Card.ImgOverlay>

                        <Stack className="text-md-center">
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
                                    <H5Left60>
                                        Monday <br/>
                                        Tuesday <br/>
                                        Wednesday <br/>
                                        Thursday <br/>
                                        Friday <br/>
                                        Saturday <br/>
                                        Sunday <br/>
                                    </H5Left60>

                                </Col>
                                <Col>
                                    <h5 style={{paddingLeft: "10%"}}>
                                        7:45 AM - 7 PM <br/>
                                        7:45 AM - 7 PM <br/>
                                        7:45 AM - 7 PM <br/>
                                        7:45 AM - 7 PM <br/>
                                        7:45 AM - 4 PM <br/>
                                        Closed <br/>
                                        9:15 AM - 5 PM
                                    </h5>

                                </Col>
                            </Row>

                            <H1px40 style={{marginTop: "25px"}}>Follow Us</H1px40>
                            {/*<Row className="ml-0 mr-auto text-start" style={{marginTop: "5px"}}>*/}
                            {/*    <Col>*/}
                            {/*        <H5Left60>*/}
                            {/*            Instagram*/}
                            {/*        </H5Left60>*/}

                            {/*    </Col>*/}
                            {/*    <Col>*/}
                            {/*        <PreFB style={{paddingLeft: "10%"}}>*/}
                            {/*            Facebook*/}
                            {/*        </PreFB>*/}

                            {/*    </Col>*/}
                            {/*</Row>*/}

                            <DivFlex className="d-flex justify-content-md-center ">
                                <StyledLink href='https://www.instagram.com/theexchangedentalgroup' target="_blank">
                                    <InstagramDiv className="mx-md-5 mx-sm-4">
                                        <h5>Instagram</h5>
                                    </InstagramDiv>
                                </StyledLink>

                                <StyledLink href="https://www.instagram.com/theexchangedentalgroup" target="_blank">
                                    <FacebookDiv className="mx-md-5 mx-sm-4">
                                        <h5>Facebook</h5>
                                    </FacebookDiv>
                                </StyledLink>

                            </DivFlex>

                        </Stack>

                    </Card.ImgOverlay>
                </Card>

            </Col>
        </Row>
    </>
)};

export default Footer;