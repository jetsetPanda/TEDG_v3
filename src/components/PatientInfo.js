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
import covidImg from '../assets/images/covid-info.jpg'
import insuranceImg from '../assets/images/delta-ins.jpg'
import {SubHeaderCopy} from "./UXElements/UiModules";
import FaqAccordion from "./FAQAccordion";

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
                                      {content.pageName}
                                    </BreadcrumbItem>
                                </Breadcrumb>


                            <section>
                                <h1 className="text-center mt-4 mb-4 pb-md-3 pb-2">
                                    {content.headliner}
                                </h1>

                            </section>
                                <Div85WidthCentered>
                                    <SubHeaderCopy>
                                        <PortableText blocks={content.subHeadline}/>
                                    </SubHeaderCopy>
                                </Div85WidthCentered>


                        </span>
                    )


                })}


                                <div>
                                    <h2><strong>New Patient Forms</strong></h2><br/>
                                    <h5>Prior to your first visit, we kindly ask that you please complete the new patient forms provided below.</h5><br/>
                                   <a href="https://www.dentalhub.cloud/SivaForms/SecuredForms/ClientHTMLForms/633/e_adult_new_patient_form" target="_blank">
                                        <Button variant="outline-primary" size="lg">Adult New Patient Forms</Button>
                                    </a><br/><br/>
                                    <a href="https://www.dentalhub.cloud/SivaForms/SecuredForms/ClientHTMLForms/633/e_pediatric_new_patient_form" target="_blank" className="mt-3">
                                        <Button variant="outline-primary" size="lg">Pediatric New Patient Forms</Button>
                                    </a>
                                </div>



                                <h5>Please also provide the following additional information if you haven't already done so. This ensures any concerns may be resolved before your appointment:<br/><br/>
                                <ul>
                                    <li>Your referral and any x-rays (if applicable)</li>
                                    <li>A list of medications you are currently taking</li>
                                    <li>Dental insurance information and medical insurance information (if applicable)</li>
                                </ul>
                                <br/>
                                <strong>IMPORTANT:</strong> Appointments are limited to the patient only unless a companion is essential. All patients under the age of 18 must be accompanied by one parent or guardian.</h5>

                                <div>
                                <h2 className="mt-md-4 mt-4 mb-4">
                                    <strong>What to Expect at Your First Visit</strong>
                                </h2>
                           

                                        <h5>As a new patient to our office, we would like to provide you with a summary of what to expect during your first visit with us. You will be in our care for about one hour. When you arrive for your appointment, you will be welcomed by our friendly receptionist who will collect any required information and process your patient information. You will be shown to one of our dental examination rooms where you may speak with the dentist and assistant about any concerns, questions, expectations, or dental health needs you may have. <br/><br/>
                                        Upon completion of your examination and x-rays, we will provide you with a full dental health report and recommended treatment plan based on our findings. Our trained hygienist will then perform a full general cleaning or begin any recommended therapy for treating any gum/periodontal condition or disease. By the end of your appointment, you will meet your treatment coordinator who will review the treatment plan created by your dentist to help you achieve optimal dental health.
                                        </h5>
                                        </div>                     


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
                                       <p>While many things have changed over the past few months, one thing has remained the same–our commitment to your safety.</p>
                                       <div>
                                           <LinkContainer to="/patient-info/covid-safety">
                                                <Button variant="outline-primary" size="md">View COVID-19 Safety Information</Button>
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
                                       <p>Learn more about payment options and the insurance companies we accept including Aetna, Cigna, Guardian, Metlife, and many more.</p>
                                       <div>
                                           <LinkContainer to="/patient-info/insurance">
                                                <Button variant="outline-primary" size="md">View Insurance &amp; Payment Options</Button>
                                           </LinkContainer>
                                       </div>

                                   </Stack>
                                </Col>
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