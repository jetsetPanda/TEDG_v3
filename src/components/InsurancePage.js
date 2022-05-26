import React, {useEffect, useState} from 'react';
import sanityClient from "../client";
import {Breadcrumb, BreadcrumbItem, Button, Card, Col, Container, Image, Row, Stack} from "react-bootstrap";
import {LinkContainer} from "react-router-bootstrap";
import PortableText from "@sanity/block-content-to-react";
import styled from "styled-components";
import TestimonialSection from "./TestimonialSection";
import PreFooter from "./PreFooter";
import Footer from "./Footer";
import insurance1 from "../assets/images/insurance 1.png";
import insurance2 from "../assets/images/insurance 2.jpg";
import insurance3 from "../assets/images/insurance 3.png";
import insurance4 from "../assets/images/insurance 4.png";
import insurance5 from "../assets/images/insurance 5.png";
import insurance6 from "../assets/images/insurance 6.png";
import insurance7 from "../assets/images/insurance 7.jpg";
import card1 from "../assets/images/card1.png";
import card2 from "../assets/images/card 2.png";
import card3 from "../assets/images/card3.png";
import card4 from "../assets/images/card 4.png";
import card0 from "../assets/images/card 0.png";
import apple from "../assets/images/apple-pay-icon.png";
import payment1 from "../assets/images/payment 1.png";
import payment2 from "../assets/images/payment 2.png";
import careCreditLogo from '../assets/images/carecreditlogo.png';
import {SubHeaderCopy} from "./UXElements/UiModules";


const CareCreditImg = styled(Image)`
    width: 230px;
    margin-left: 60px;
      @media (max-width: 768px) {
        width: 250px;
        margin: 10px 40px;
      }
`

const Div85WidthCentered = styled.div`
  width: 85%;
  margin: 0 auto;
  align-items: center;
`

const IconRowImage = styled(Image)`
  height: 50px;
`

const StyledH1 = styled.h1`
  font-size: 3rem;
  @media (max-width: 768px) {
    font-size: 2rem;
    margin-top: 2rem;
  }
`

function InsurancePage(props) {


    const [patientInfoContent, setPatientContent] = useState(null);

    useEffect(() => {
        sanityClient.fetch(`*[_type == "patientInfoContent"] {
            pageName,
            headliner,
            subHeadline,
            bannerImage{
                asset->{
                    _id,
                    url
                },
                alt
            },
            newPatientCopy,
            firstVisitCopy
        }`)
            .then((data) => setPatientContent(data))
            .catch(console.error);
    }, []);

    return (
        <>
            <Container fluid>
                <Stack gap={5}>
                {patientInfoContent && patientInfoContent.map((content,index) => {
                    console.log("CONTENT IS: ", content);
                    return (
                        <span key={index}>


                                {/*<div>*/}
                                {/*    <Image*/}
                                {/*        src={content.bannerImage.asset.url}*/}
                                {/*        alt=""*/}
                                {/*        className=""*/}
                                {/*        fluid*/}
                                {/*    />*/}
                                {/*</div>*/}


                                <Breadcrumb className="mt-4">
                                    <LinkContainer to="/">
                                        <BreadcrumbItem>
                                          <a href="home">
                                            Home
                                          </a>
                                        </BreadcrumbItem>
                                    </LinkContainer>
                                                                    <LinkContainer to="/patient-info">
                                    <BreadcrumbItem>
                                      <a href="home">
                                        Patient Information
                                      </a>
                                    </BreadcrumbItem>
                                </LinkContainer>
                                    <BreadcrumbItem active>
                                    Insurance &amp; Financial Information
                                        {/*{content.pageName}*/}
                                    </BreadcrumbItem>
                                </Breadcrumb>

                                <section>
                                    <h1 className="text-center mt-4 mb-4 pb-md-3 pb-2">
                                    Insurance &amp; Financial Information
                                        {/*{content.headliner}*/}
                                    </h1>
                                </section>
                            <div>
                                <h2>
                                    <strong>Accepted Insurance</strong>
                                    {/*{content.headliner}*/}
                                </h2>
                            </div>

                            <div className="text-left mt-4 mb-4 mb-md-1">
                                <h5 >
                            One of the many aspects of our practice that has endeared us to our patients over the years is that while we are a modern, beautiful, and inviting dental practice, we accept a multitude of PPO insurance plans. <br/><br/> <strong>Please note that we are not affiliated with any HMO or DMO plans.</strong></h5>
                                
                            </div>

                            <Row className="mt-md-1">
                                <Col md={12} className="mt-md-5">

                                    <div className="d-flex flex-md-nowrap flex-wrap align-content-center align-items-center justify-content-around mt-2 mb-5">
                                        <IconRowImage
                                            alt=""
                                            className="insurance"
                                            src={insurance1}
                                            fluid
                                        />
                                        <IconRowImage
                                            alt=""
                                            className="insurance"
                                            src={insurance2}
                                            fluid

                                        />
                                        <IconRowImage
                                            alt=""
                                            className="insurance"
                                            src={insurance3}
                                            fluid
                                        />
                                        <IconRowImage
                                            alt=""
                                            className="insurance"
                                            src={insurance4}
                                            fluid
                                        />
                                        <IconRowImage
                                            alt=""
                                            className="insurance"
                                            src={insurance5}
                                            fluid
                                        />
                                        <IconRowImage
                                            alt=""
                                            className="insurance"
                                            src={insurance6}
                                            fluid
                                        />
                                        <IconRowImage
                                            alt=""
                                            className="insurance"
                                            src={insurance7}
                                            fluid
                                        />

                                    </div>
                                </Col>
                                <Col md={6}>
                                    <h5>
                                       <ul>
                                            <li>Aetna</li>
                                            <li>Always Care</li>
                                            <li>Assurant</li>
                                            <li>Blue Cross Blue Shield</li>
                                            <li>Careington</li>
                                            <li>Cigna</li>
                                            <li>Colonial Life</li>
                                            <li>Delta</li>
                                            <li>Dental Health Alliance (DHA)</li>
                                            <li>First Fortis</li>
                                            <li>First Reliance</li>
                                            <li>Guardian</li>
                                            <li>Healthplex with the Management Benefit Fund</li>
                                            <li>Humana</li>
                                        </ul>
                                    </h5>

                                </Col>
                                <Col md={6}>
                                    <h5>
                                        <ul>
                                            <li>Lincoln</li>
                                            <li>MetLife</li>
                                            <li>Nippon</li>
                                            <li>Physicians Mutual</li>
                                            <li>Principal</li>
                                            <li>Renaissance</li>
                                            <li>Standard of NY </li>
                                            <li>Starmount</li>
                                            <li>Sunlife Financial</li>
                                            <li>Unicare</li>
                                            <li>United Concordia</li>
                                            <li>United Healthcare</li>
                                            <li>Unum</li>
                                            <li>& More</li>
                                        </ul>
                                    </h5>

                                </Col>
                            {/*}    <Col md={12} className="mt-md-5">
                                    <strong>
                                        <h5><strong>Please note that we are not affiliated with any HMO or DMO plans.</strong></h5>
                                    </strong>
                    </Col>*/}

                            </Row>

                            <div>
                                <h2 className="mt-md-5 mt-5">
                                    <strong>Payment Options</strong>
                                </h2>
                            </div>
                            <div className="text-left mt-4">
                                <h5 >
                            We accept the following payment options:</h5>
                                
                            </div>
                            <Row>
                                <Col md={12} className="mt-md-5">

                                    <div className="d-flex flex-md-nowrap flex-wrap align-content-center align-items-center justify-content-around mt-2 mb-5">
                                        <Card border="light" style={{ width: '10rem' }} className="text-center">
                                          <Card.Img variant="top" src={payment1} />
                                          <Card.Body>
                                            <Card.Title>Cash</Card.Title>
                                          </Card.Body>
                                        </Card>
                                        <Card border="light" style={{ width: '10rem' }} className="text-center">
                                          <Card.Img variant="top" src={apple} />
                                          <Card.Body>
                                            <Card.Title>Apple Pay</Card.Title>
                                          </Card.Body>
                                        </Card>
                                        <Card border="light" style={{ width: '10rem' }} className="text-center">
                                          <Card.Img variant="top" src={card0} />
                                          <Card.Body>
                                            <Card.Title>FSA & HSA</Card.Title>
                                          </Card.Body>
                                        </Card>
                                        <Card border="light" style={{ width: '10rem' }} className="text-center">
                                          <Card.Img variant="top" src={card1} />
                                          <Card.Body>
                                            <Card.Title>Visa</Card.Title>
                                          </Card.Body>
                                        </Card>
                                        <Card border="light" style={{ width: '10rem'}} className="text-center">
                                          <Card.Img variant="top" src={card3} />
                                          <Card.Body>
                                            <Card.Title>MasterCard</Card.Title>
                                          </Card.Body>
                                        </Card>
                                        <Card border="light" style={{ width: '10rem' }} className="text-center">
                                          <Card.Img variant="top" src={card2} />
                                          <Card.Body>
                                            <Card.Title>Discover</Card.Title>
                                          </Card.Body>
                                        </Card>
                                        <Card border="light" style={{ width: '10rem' }} className="text-center">
                                          <Card.Img variant="top" src={card4} />
                                          <Card.Body>
                                            <Card.Title>Amex</Card.Title>
                                          </Card.Body>
                                        </Card>
                                    </div>
                                </Col>
                            </Row>


                            <div>
                                <h2 className="mt-md-4 mt-4">
                                    <strong>Financing Options</strong>
                                </h2>
                            </div>

                            <Row className="text-left mt-4">
                                <Col md={6}>
                                    <div className="text-start pt-md-3">
                                        <h5>
        <em>CareCredit</em> offers special financing and low monthly payment options, no annual fees, setup costs, or prepayment penalties. Whether you have dental insurance or not, many services aren’t covered. CareCredit can help you get the healthy, radiant smile you’ve always wanted with low monthly dental payment plans.
                                        </h5>
                                    </div>

                                </Col>
                                <Col md={6} className="px-md-5">
                                    <CareCreditImg
                                        src={careCreditLogo}
                                        alt="care credit logo"
                                        // className="px-md-5"

                                    />
                                </Col>

                            </Row>




                        </span>
                    )


                })}


                {/*   <TestimonialSection/> */}
                <PreFooter/>
                <Footer/>

                </Stack>
            </Container>
        </>
    );
}

export default InsurancePage;