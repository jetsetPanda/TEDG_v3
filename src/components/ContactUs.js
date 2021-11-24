import React, {useEffect, useState} from 'react';
import sanityClient from "../client";
import {Breadcrumb, BreadcrumbItem, Button, Card, Col, Container, Image, Row, Stack} from "react-bootstrap";
import {LinkContainer} from "react-router-bootstrap";
import smileVirtual from '../assets/images/smileVirtualMobile.png';
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
                                        src={content.bannerImage.asset.url}
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
                                    <h1 className="text-center">
                                        Contact Us
                                        {/*{content.headliner}*/}
                                    </h1>
                                </div>
                                <Div85WidthCentered>
                                    <SubHeaderCopy className="text-center my-md-5">
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
                                <strong>Visit us at our convenient location in the heart of the Financial District.</strong>
                                </StyledText>
                            <StyledText className="pt-md-4">

                                <strong>Our Address</strong> <br/>
                                39 Broadway Suite 2115 <br/>
                                New York, NY 10006
                            </StyledText>
                            <StyledText>
                                <strong>Give Us a Call</strong> <br/>
                                Tel: 212-422-9229 <br/>
                                Fax: 212-742-0928
                            </StyledText>
                            <StyledText>
                                <strong>Send Us An Email</strong> <br/>
                                Email: reception@theexchangedentalgroup.com
                            </StyledText>
                        </RightCol>
                    </Row>

                    <Row className="mt-3 mt-md-5">
                        <Col md={5}>
                            <Stack gap={3}>
                                <StyledText>
                                    <strong>You may also reach us with these online contact options:</strong>
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
                                    7:45 am - 7:00 pm <br/>
                                    7:45 am - 7:00 pm <br/>
                                    7:45 am - 7:00 pm <br/>
                                    7:45 am - 7:00 pm <br/>
                                    7:45 am - 4:00 pm <br/>
                                    Closed <br/>
                                    7:45 am - 7:00 pm <br/>
                                </StyledText>
                            </div>

                        </RightCol>
                    </Row>

                    <TestimonialSection/>
                    <PreFooter/>
                    <Footer/>
                </Stack>
            </Container>



        </>
    );
}

export default PatientInfo;