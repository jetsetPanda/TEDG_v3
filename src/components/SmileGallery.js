import React, {useEffect, useState} from 'react';
import sanityClient from "../client";
import {Breadcrumb, BreadcrumbItem, Button, Col, Container, Image, Row, Stack} from "react-bootstrap";
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
import {HoverOverlay, HoverOverlayContent, SubHeaderCopy} from "./UXElements/UiModules";
import smileBanner from '../assets/images/hero-5.jpg';

import {CardHeader, CardImg, CardImgOverlay, CardText, CardTitle} from "reactstrap";
import {Card as RCard} from "reactstrap";

const Div85WidthCentered = styled.div`
  width: 85%;
  margin: 0 auto;
  align-items: center;
`

const CardContainer = styled.div`
  width: 280px;
  margin: 10px;

  @media (max-width: 768px) {
    width: 315px;
  }
`

const StrapCard = styled(RCard)`
  //border-radius: 15px;
  box-shadow: #ccd4f1 2px 2px 8px;

`

const CardCopy = styled.p`
  padding: 0;
  maring: 0;
  font-weight: bold;
  color: #145073;

`


function PatientInfo(props) {


    const [patientInfoContent, setPatientContent] = useState(null);
    const [smileCardData, setSmileCardData] = useState(null);

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


    useEffect(() => {
        sanityClient.fetch(`*[_type == "smileGalleryItems"] | order(order asc) {
            procedure,
            doctorName,
            galleryDesc,
            galleryImage{
                asset->{
                    _id,
                    url
                },
                alt
            },
        }`)
            .then((data) => setSmileCardData(data))
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
                                        src={smileBanner}
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
                                        Smile Gallery
                                        {/*{content.pageName}*/}
                                    </BreadcrumbItem>
                                </Breadcrumb>


                                <div>
                                    <h1 className="text-center mt-4 mb-4 pb-4">
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

                        </span>
                    )
                })}

                    <div className="d-flex flex-wrap flex-row justify-content-around">
                        {smileCardData && smileCardData.map((content,index) => {
                            console.log("smile gallery items:", content)

                            return(
                                <span key={index} className="m-0">
                                    <CardContainer>
                                        <StrapCard className="content">
                                            <CardHeader className="text-center">
                                                <CardCopy>Case {index+1}</CardCopy>
                                                <CardImg top width="100%"
                                                         src={content.galleryImage.asset.url}/>
                                                <CardCopy>{content.procedure}</CardCopy>
                                            </CardHeader>
                                            <HoverOverlay className="d-flex flex-column content-overlay">
                                                <HoverOverlayContent className="content-details">
                                                    <CardTitle tag="h5" className="underlined-white allcaps text-white">
                                                        {content.doctorName}
                                                    </CardTitle>
                                                    <CardText tag="h6" className="text-white">
                                                        <PortableText blocks={content.galleryDesc}/>
                                                    </CardText>
                                                </HoverOverlayContent>
                                            </HoverOverlay>
                                        </StrapCard>
                                    </CardContainer>
                                </span>

                            )

                       })}
                        </div>

                <TestimonialSection/>
                <PreFooter/>
                <Footer/>
                </Stack>

            </Container>
        </>
    );
}

export default PatientInfo;