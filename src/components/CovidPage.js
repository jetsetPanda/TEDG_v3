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

const Div85WidthCentered = styled.div`
  width: 85%;
  margin: 0 auto;
  align-items: center;
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
                                        COVID-19 Safety Information
                                        {/*{content.pageName}*/}
                                    </BreadcrumbItem>
                                </Breadcrumb>


                                <div>
                                    <h1 className="text-center">
                                        COVID-19 Safety Information
                                        {/*{content.headliner}*/}
                                    </h1>
                                </div>
                                <Div85WidthCentered>
                                    <h3 className="text-center">
While many things have changed over the past few months, one thing has remained the same – <strong>our commitment to your safety</strong>.
Our practice follows recommendations made by the American Dental Association, the CDC and OSHA. We follow these standards so that the care you receive is both safe and comfortable.                                     {/*<PortableText blocks={content.subHeadline}/>*/}
                                    </h3>
                                </Div85WidthCentered>

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

export default CovidPage;