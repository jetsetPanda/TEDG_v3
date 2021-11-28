import React, {useEffect, useState} from 'react';
import sanityClient from "../client";
import {Breadcrumb, BreadcrumbItem, Button, Card, Col, Container, Image, Row, Stack} from "react-bootstrap";
import {LinkContainer} from "react-router-bootstrap";
import PortableText from "@sanity/block-content-to-react";
import styled from "styled-components";
import TestimonialSection from "./TestimonialSection";
import PreFooter from "./PreFooter";
import Footer from "./Footer";
import covidicon1 from "../assets/images/covidicon1.svg";
import covidicon2 from "../assets/images/covidicon2.svg";
import covidicon3 from "../assets/images/covidicon3.svg";
import covidicon4 from "../assets/images/covidicon4.svg";
import covidicon5 from "../assets/images/covidicon5.svg";
import covidicon6 from "../assets/images/covidicon6.svg";
import {SubHeaderCopy} from "./UXElements/UiModules";


const Div85WidthCentered = styled.div`
  width: 85%;
  margin: 0 auto;
  align-items: center;
`

const IconImage = styled(Image)`
  width: 100px;
  margin-bottom: 2rem;
`

const IconDiv = styled.div`
  padding: 0px 25px
`

const H2px50 = styled.h2`
  font-size: 3rem;
`

function CovidPage(props) {


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


                                {/*<div>
                                    <Image
                                        src={content.bannerImage.asset.url}
                                        alt=""
                                        className=""
                                        fluid
                                    />
                                </div>*/}


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
                                        COVID-19 Safety Information
                                        {/*{content.pageName}*/}
                                    </BreadcrumbItem>
                                </Breadcrumb>


                                <section>
                                    <h1 className="text-center mt-4 mb-4 pb-4">
                                        COVID-19 Safety Information
                                        {/*{content.headliner}*/}
                                    </h1>
                                </section>
                                <Div85WidthCentered>
                                    <SubHeaderCopy className="text-center my-md-5">
While many things have changed over the past few months, one thing has remained the same – <strong>our commitment to your safety</strong>.
Our practice follows recommendations made by the American Dental Association, the CDC and OSHA. We follow these standards so that the care you receive is both safe and comfortable.                                     {/*<PortableText blocks={content.subHeadline}/>*/}
                                    </SubHeaderCopy>
                                </Div85WidthCentered>

                        </span>
                    )


                })}

                <div className="text-center my-5">
                    <h4>Here are some of the added safety measures we are taking to protect our patients and staff:</h4>
                </div>

                <Row>
                    <Col md="4">
                        <IconDiv className="info info-hover text-center">
                            <div className="icon icon-dark">
                                <IconImage
                                    src={covidicon1}
                                    alt="covidicon1"
                                />
                            </div>
                            <h5 className="text-center">Masks are required by all patients and staff</h5>
                        </IconDiv>
                    </Col>
                    <Col md="4">
                        <IconDiv className="info info-hover text-center">
                            <div className="icon icon-dark">
                                <IconImage
                                    src={covidicon2}
                                    alt="covid icon2"

                                />
                            </div>
                            <h5 className="text-center">Pre-screening of all patients prior to appointment</h5>
                        </IconDiv>
                    </Col>
                    <Col md="4">
                        <IconDiv className="info info-hover text-center">
                            <div className="icon icon-dark">
                                <IconImage
                                    src={covidicon3}
                                    alt="covid icon3"

                                />
                            </div>
                            <h5 className="text-center">Staggered appointments to reduce wait times for social distancing</h5>
                        </IconDiv>
                    </Col>
                </Row>
                <Row className="my-md-5 pb-md-5">
                    <Col md="4">
                        <IconDiv className="info info-hover text-center">
                            <div className="icon icon-dark text-center">
                                <IconImage
                                    src={covidicon4}
                                    alt="covid icon4"
                                />
                            </div>
                            <h5 className="text-center">Plexiglass safety shield barriers placed in the waiting and check-out areas</h5>
                        </IconDiv>
                    </Col>
                    <Col md="4">
                        <IconDiv className="info info-hover text-center">
                            <div className="icon icon-dark">
                                <IconImage
                                    src={covidicon5}
                                    alt="covid icon5"

                                />
                            </div>
                            <h5 className="text-center">Medical-grade air filtration equipment has been installed in all rooms</h5>
                        </IconDiv>
                    </Col>
                    <Col md="4">
                        <IconDiv className="info info-hover text-center">
                            <div className="icon icon-dark">
                                <IconImage
                                    src={covidicon6}
                                    alt="covid icon6"

                                />
                            </div>
                            <h5 className="text-center">Single-use or medically sterilized equipment</h5>
                        </IconDiv>
                    </Col>
                </Row>

                <div>
                    <h4>
                        To learn more about the additional safety measures we are taking, please click the COVID-19 Form link below.
                    </h4>
                    <H2px50 className="my-3 mt-md-5 mb-md-3 pt-md-3">Covid-19 Form</H2px50>
                    <a href="https://www.dentalhub.cloud/SivaForms/SecuredForms/ClientHTMLForms/633/covid-19-update" target="_blank">
                        <Button className="my-3"  variant="outline-primary" size="lg">Covid-19 Health Screening Questionnaire</Button>
                    </a>
                </div>

                <TestimonialSection/>
                <PreFooter/>
                <Footer/>

</Stack>
            </Container>
        </>
    );
}

export default CovidPage;