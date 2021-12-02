import React, {useEffect, useState} from 'react';
import {Breadcrumb, BreadcrumbItem, Button, Col, Container, Image, Row, Stack} from "react-bootstrap";
import {LinkContainer} from "react-router-bootstrap";
import TestimonialSection from "./TestimonialSection";
import PreFooter from "./PreFooter";
import Footer from "./Footer";
import cardSample from "../assets/images/card-sample2x.png";
import sanityClient from "../client";
import PortableText from "@sanity/block-content-to-react";
import styled from "styled-components";
import {SubHeaderCopy} from "./UXElements/UiModules";
import smileVirtual from '../assets/images/smileVirtualMobile.png';

const StyledConsultImage = styled(Image)`
  padding-right: 75px;
  @media (max-width: 768px) {
    padding-right: 15px;
  }

  
`

const StyledImg = styled(Image)`
  border-radius: 5px;
`

const RightCol = styled(Col)`

  
  @media (max-width: 768px) {
    padding: 0 12px;
    
  }
`

const ButtonThing = (props) => (
    <div className="text-left">
        <LinkContainer to={props.slug}>
            <Button variant="outline-primary" size="md">{props.copy}</Button>
        </LinkContainer>
    </div>
)

const StyledImage = styled(Image)`
  //max-width: 600px;
  //max-height: 468px;

  @media screen and (max-width: 480px) {

  }
`


function ServicesCosmetic(props) {

    let isPic = true;
    let isSlug = false;


    let slugName = '/about-us/meet-the-team'

    const [serviceInfo, setServiceInfo] = useState(null);

    const [serviceOfferings, setServiceOfferings] = useState(null);

    useEffect(() => {
        // grok custom sanity query lang (similar to graphQL)
        sanityClient.fetch(`*[_type == "servicesList"] {
            serviceName,
            serviceLink,
            description
        }`)
            .then((data) => setServiceInfo(data))
            .catch(console.error);
    }, []);

    useEffect(() => {
        // grok custom sanity query lang (similar to graphQL)
        sanityClient.fetch(`*[_type == "servicesCosmetic"] {
            serviceName,
            serviceDescription,
            serviceImage{
                asset->{
                    _id,
                    url
                },
                alt
            }
        }`)
            .then((data) => setServiceOfferings(data))
            .catch(console.error);
    }, []);


    return (
        <Container>
            <Stack className="mt-4">
                <Breadcrumb>
                    <LinkContainer to="/">
                        <BreadcrumbItem>
                            <a href="home">
                                Home
                            </a>
                        </BreadcrumbItem>
                    </LinkContainer>
                    <LinkContainer to="/services">
                        <BreadcrumbItem>
                            <a href="our-services">
                                Our Services
                            </a>
                        </BreadcrumbItem>
                    </LinkContainer>
                    <BreadcrumbItem active>
                        Cosmetic Dentistry
                    </BreadcrumbItem>
                </Breadcrumb>

                {serviceInfo && serviceInfo.map((info, key) => {
                    console.log("infoes are: ", info);
                    if (info.serviceName === 'Cosmetic Dentistry') {
                        return (
                            <>
                                <h1 className="text-center mt-4 mb-4 pb-md-3 pb-2">{info.serviceName}</h1>
                                <SubHeaderCopy className="text-center" style = {{ width: "85%", margin: "0 auto"}}>
                                    <PortableText blocks={info.description}/>
                                </SubHeaderCopy>
                            </>

                        )
                    }
                })}

<Row className="mt-5">
                        <Col md={5}>
                            <Stack gap={1} className="mb-5 mb-md-3">

                                <a href="https://app.smilevirtual.com/Dr-Todd-Goldstein/sign-up" target="_blank">
                                    <StyledConsultImage src={smileVirtual} fluid />
                                </a>
                            </Stack>


                        </Col>
                        <RightCol md={7} className="pr-3 py-3 py-md-0">
                            <h2>SMILE VIRTUAL CONSULT</h2><br/>
                           <p>At The Exchange Dental Group, we help patients achieve a bright, beautiful, life-changing smile with our Smile Makeover. We offer a simple and easy 3-step process to get all of your questions answered virtually by Dr. Goldstein. Request your free virtual consultation and get in touch with our team of dental experts. Get the smile you’ve been waiting for and build your confidence today!</p>
                        </RightCol>
                    </Row>
                {serviceOfferings && serviceOfferings.map((content, index) => {
                    console.log("service content: ", content);

                    return (
                        <span key={index}>
                            <Row className="mt-5 justify-content-between">
                    {content.serviceImage
                        ? <>
                            <Col sm={12} md={5} className="px-3">
                                <StyledImage
                                    src={content.serviceImage.asset.url}
                                    alt=""
                                    className=""
                                    fluid
                                />

                            </Col>
                            <Col sm={12} md={7} className="px-4 pt-md-0 pt-3">
                                <Stack gap={2}>
                                    <h2>{content.serviceName}</h2>
                                    <p>
                                        <PortableText blocks={content.serviceDescription}/>
                                    </p>
                                    {
                                        isSlug &&
                                        <>
                                            <ButtonThing slug={slugName} copy={'Learn More'}/>
                                        </>
                                    }


                                </Stack>
                            </Col>
                        </>
                        : <>
                            <Col sm={12} md={12}>
                                <Stack gap={2}>
                                    <h2>{content.serviceName}</h2>
                                    <p>
                                        <PortableText blocks={content.serviceDescription}/>
                                    </p>
                                    {
                                        isSlug &&
                                        <>
                                            <ButtonThing slug={slugName} copy={'Click Here'}/>
                                        </>
                                    }
                                </Stack>
                            </Col>
                        </>
                    }

                </Row>
                        </span>
                    )

                    })

                }
                                   

            <TestimonialSection/>
            <PreFooter/>
            <Footer/>

            </Stack>
        </Container>
    );
}

export default ServicesCosmetic;