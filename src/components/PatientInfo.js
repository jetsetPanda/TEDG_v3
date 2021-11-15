import React, {useEffect, useState} from 'react';
import sanityClient from "../client";
import {Breadcrumb, BreadcrumbItem, Button, Card, Col, Container, Image, Row, Stack} from "react-bootstrap";
import {LinkContainer} from "react-router-bootstrap";
import PortableText from "@sanity/block-content-to-react";
import styled from "styled-components";
import TestimonialSection from "./TestimonialSection";
import PreFooter from "./PreFooter";
import Footer from "./Footer";
import cardSample from "../assets/images/card-sample2x.png";
import covidImg from '../assets/images/pt-info-covid.png'
import insuranceImg from '../assets/images/pt-info-insurance.png'

const Div85WidthCentered = styled.div`
  width: 85%;
  margin: 0 auto;
  align-items: center;
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
                {patientInfoContent && patientInfoContent.map((content,index) => {
                    console.log("CONTENT IS: ", content);
                    return (
                        <span key={index}>
                            <Stack gap={5}>

                                <div>
                                    <Image
                                        src={content.bannerImage.asset.url}
                                        alt=""
                                        className=""
                                        fluid
                                    />
                                </div>


                                <Breadcrumb>
                                    <LinkContainer to="/">
                                        <BreadcrumbItem>
                                          <a href="home">
                                            Home
                                          </a>
                                        </BreadcrumbItem>
                                    </LinkContainer>
                                    <BreadcrumbItem active>
                                      {content.pageName}
                                    </BreadcrumbItem>
                                </Breadcrumb>


                                <div>
                                    <h1 className="text-center">
                                        {content.headliner}
                                    </h1>
                                </div>
                                <Div85WidthCentered>
                                    <h4>
                                        <PortableText blocks={content.subHeadline}/>
                                    </h4>
                                </Div85WidthCentered>

                                <div>
                                    <h2>New Patient Forms</h2><br/>
                                    <a href="https://www.dentalhub.cloud/SivaForms/SecuredForms/ClientHTMLForms/633/e_adult_new_patient_form" target="_blank">
                                        <Button variant="outline-primary" size="lg">Adult New Patient Forms</Button>
                                    </a><br/><br/>
                                    <a href="https://www.dentalhub.cloud/SivaForms/SecuredForms/ClientHTMLForms/633/e_pediatric_new_patient_form" target="_blank" className="mt-3">
                                        <Button variant="outline-primary" size="lg">Pediatric New Patient Forms</Button>
                                    </a>
                                </div>



                                <h5>Prior to your first visit, we kindly ask that you please fill out the new patient forms provided above.
                                    <br/><br/>Please assist us by providing the following information prior to your visit. This saves time and any concerns may be resolved prior to your appointment:
                                <ul>
                                    <li>Your referral and any x-rays if applicable.</li>
                                    <li>A list of medications you are currently taking.</li>
                                    <li>Dental insurance information and medical insurance information (if applicable).</li>
                                </ul>
                                <br/>IMPORTANT: Appointments are limited to the patient only unless a companion is essential. All patients under the age of 18 must be accompanied by one parent or guardian.
</h5>


                            <Row className="mt-5">
                                <Col sm={12} md={6}>
                                   <Image
                                       src={covidImg}
                                       alt=""
                                       className=""
                                       fluid
                                   />

                                </Col>
                                <Col sm={12} md={6}>
                                   <Stack gap={2}>
                                       <h2>COVID-19 SAFETY INFORMATION</h2>
                                       <p>While many things have changed over the past few months, one thing has remained the same – our commitment to your safety.</p>
                                       <div>
                                           <LinkContainer to="/patient-info/covid-safety">
                                                <Button variant="outline-primary" size="md">Our COVID-19 Protocol</Button>
                                           </LinkContainer>
                                       </div>

                                   </Stack>
                                </Col>
                            </Row>

                                                            <Row className="mt-5">
                                <Col sm={12} md={6}>
                                   <Image
                                       src={insuranceImg}
                                       alt=""
                                       className=""
                                       fluid
                                   />

                                </Col>
                                <Col sm={12} md={6}>
                                   <Stack gap={2}>
                                       <h2>INSURANCE</h2>
                                       <p>Learn more about finance and payment options, and the insurances we accept.</p>
                                       <div>
                                           <LinkContainer to="/patient-info/insurance">
                                                <Button variant="outline-primary" size="md">View Insurance Information</Button>
                                           </LinkContainer>
                                       </div>

                                   </Stack>
                                </Col>
                            </Row>

                            </Stack>
                        </span>
                    )


                })}


                <TestimonialSection/>
                <PreFooter/>
                <Footer/>


            </Container>
        </>
    );
}

export default PatientInfo;