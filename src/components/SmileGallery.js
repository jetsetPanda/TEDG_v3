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
import smileImg from "../assets/images/home-smile-img.jpg";
import {SubHeaderCopy} from "./UXElements/UiModules";

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


                                <Breadcrumb>
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
                                        Smile Gallery
                                        {/*{content.headliner}*/}
                                    </h1>
                                </div>
                                <Div85WidthCentered>
                                    <SubHeaderCopy className="text-center">
Welcome to our Smile Gallery! Our dentists utilize the most
advanced dental techniques to create beautiful, healthy
smiles. Please browse through the amazing smile transformations
 we’ve helped our patients achieve.                                        {/*<PortableText blocks={content.subHeadline}/>*/}
                                    </SubHeaderCopy>
                                </Div85WidthCentered>

                    <Row className="mt-5 pt-md-5">
                        <Col md={6} sm={12}>
                            <Image src={smileImg} fluid rounded/>
                        </Col>
                        <Col md={6} sm={12}>
                            <h2 className="mb-md-5">
                                3-Unit Bridge
                            </h2>
                            <h4>
                                AGE: 20-30 <br/>
                                GENDER: MALE <br/><br/>

                                PATIENT EMBARRASSED BY APPEARANCE OF METAL BRIDGE WHEN SMILING <br/><br/>

                                PROCEDURE: PLACED NEW 3-UNIT ALL PORCELAIN BRIDGE
                            </h4>
                        </Col>
                    </Row>


                        </span>
                    )


                })}


                <TestimonialSection/>
                <PreFooter/>
                <Footer/>
                </Stack>

            </Container>
        </>
    );
}

export default PatientInfo;