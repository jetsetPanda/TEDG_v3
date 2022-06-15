import React, {useEffect, useState} from 'react';
import sanityClient from "../client";
import {Breadcrumb, BreadcrumbItem, Button, Card, Col, Container, Image, Row, Stack} from "react-bootstrap";
import {LinkContainer} from "react-router-bootstrap";
import smileVirtual from '../assets/images/smileVirtualMobile.png';
import contactBanner from '../assets/images/hero-contact-us.jpg';
import styled from "styled-components";
import TestimonialSection from "./TestimonialSection";
import PreFooter from "./PreFooter";
import Footer from "./Footer";
import bull from '../assets/images/bull.png';
import {SubHeaderCopy} from "./UXElements/UiModules";

const Div85WidthCentered = styled.div`
  width: 85%;
  margin: 0 auto;
  align-items: center;
`

const StyledConsultImage = styled(Image)`
  padding-right: 75px;
  @media (max-width: 768px) {
    padding-right: 15px;
  }

  
`

const StyledImg = styled(Image)`
  border-radius: 5px;
`

const StyledText = styled.p`
    //font-size: 20px;
  
    @media (min-width: 769px) {
      font-size: 20px;
    }

`

const DaysText = styled.p`
    padding-right: 65px;
    @media (min-width: 769px) {
      font-size: 20px;
    }

`

const RightCol = styled(Col)`
  padding: 0 90px;
  
  @media (max-width: 768px) {
    padding: 0 12px;
    
  }
`

function PatientInfo(props) {


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


                                <div>
                                    <Image
                                       src={contactBanner}
                                        alt=""
                                        className=""
                                        fluid
                                    />
                                </div>


                                <Breadcrumb className="mt-4">
                                    <LinkContainer to="/">
                                        <BreadcrumbItem>
                                          <a href="home">
                                            Home
                                          </a>
                                        </BreadcrumbItem>
                                    </LinkContainer>
                                    <BreadcrumbItem active>
                                        Contact Us
                                      {/*{content.pageName}*/}
                                    </BreadcrumbItem>
                                </Breadcrumb>


                                <div>
                                    <h1 className="text-center mt-4 mb-4 pb-md-3 pb-2">
                                        Contact Us
                                        {/*{content.headliner}*/}
                                    </h1>
                                </div>
                                <Div85WidthCentered>
                                    <SubHeaderCopy className="text-center">
                                        We would love to hear from you! Please choose the method of communication most convenient to you.
                                        {/*<PortableText blocks={content.subHeadline}/>*/}
                                    </SubHeaderCopy>
                                </Div85WidthCentered>

                        </span>
                    )


                })}


                    <Row>
                        <Col md={5}>
                            <StyledImg
                                src={bull}
                                alt="wall street bull"
                                fluid
                            />
                        </Col>
                        <RightCol md={7} className=" py-3 py-md-0">
                            <StyledText>
                                Visit us at our office located in the heart of Manhattan's Financial District.
                                </StyledText>
                            <StyledText className="pt-md-4">

                                <strong>Our Location</strong> <br/>
                                39 Broadway Suite 2115 <br/>
                                New York, NY 10006<br/>
                                Tel: <a href="tel:212-422-9229" className="text-decoration-none">(212) 422-9229</a> <br/>
                                Fax: (212) 742-0928<br/><br/>
                            </StyledText>
                            <StyledText>
                                <strong>Email Us</strong> <br/>
                                <a href="mailto:reception@theexchangedentalgroup.com" target="_blank"   className="text-decoration-none">reception@theexchangedentalgroup.com</a>
                            </StyledText><br/>
                            <StyledText>
                                <strong>Schedule an Appointment</strong><br/>
                                <Button><a href="https://nexhealth.com/appt/TheExchangeDentalGroup" target="_blank"  className="text-decoration-none" style={{paddingLieft: "5px", color: "#ffffff"}}>BOOK ONLINE</a></Button>
                            </StyledText>
                            
                        </RightCol>
                    </Row>

                    <Row className="mt-1 mt-md-1">
                        <Col md={5}>
                            <Stack gap={1} className="mb-5 mt-md-1">
                                <StyledText>
                                   {/* <strong>You may also reach us with these online contact options:</strong> */}
                                </StyledText>
                                <a href="https://app.smilevirtual.com/Dr-Todd-Goldstein/sign-up" target="_blank">
                                    <StyledConsultImage src={smileVirtual} fluid />
                                </a>
                            </Stack>


                        </Col>
                        <RightCol md={7} className=" py-3 py-md-0">
                            <StyledText>
                                <strong>Our Office Hours</strong>
                            </StyledText>
                            <div className="d-flex flex-nowrap">
                                <DaysText className="pt-md-4">
                                    Monday <br/>
                                    Tuesday <br/>
                                    Wednesday <br/>
                                    Thursday <br/>
                                    Friday <br/>
                                    Saturday <br/>
                                    Sunday
                                </DaysText>
                                <StyledText className="pt-md-4">
                                    7:45 AM - 7:00 PM <br/>
                                    7:45 AM - 7:00 PM <br/>
                                    7:45 AM - 7:00 PM <br/>
                                    7:45 AM - 7:00 PM <br/>
                                    7:45 AM - 4:00 PM <br/>
                                    Closed <br/>
                                    9:15 AM - 5:00 PM <br/>
                                </StyledText>
                            </div>

                        </RightCol>
                    </Row>

                {/*   <TestimonialSection/> */}
                    <PreFooter/>
                    <Footer/>
                </Stack>
            </Container>



        </>
    );
}

export default PatientInfo;