import React, { useState, useEffect } from 'react';
import sanityClient from '../client.js';
import PortableText from '@sanity/block-content-to-react';
import { LinkContainer } from "react-router-bootstrap";

import {Container, Row, Col, Stack, Image, Button, Card, Breadcrumb, BreadcrumbItem} from 'react-bootstrap';
import styled from "styled-components";
import TestimonialSection from "./TestimonialSection";
import PreFooter from "./PreFooter";
import Footer from "./Footer";
import SmileVirtualBanner from "./SmileVirtualBanner";

import {StyledLinkContainer, SubHeaderCopy, StyledCard, StyledCardTitle} from "./UXElements/UiModules";

const Div85WidthCentered = styled.div`
  width: 85%;
  margin: 0 auto;
  align-items: center;
`

function About(props) {

    const [servicesList, setServicesList] = useState(null);

    const [servicesContent, setServicesContent] = useState(null);

    useEffect(() => {
        // grok custom sanity query lang (similar to graphQL)
        sanityClient.fetch(`*[_type == "servicesContent"] {
            pageName,
            headliner,
            subHeadline,
            servicesImage{
                asset->{
                    _id,
                    url
                },
                alt
            }
        }`)
            .then((data) => setServicesContent(data))
            .catch(console.error);
    }, []);

    useEffect(() => {
        sanityClient.fetch(`*[_type == "servicesList"] | order(order asc) {
            serviceName,
            serviceLink,
            description,
            serviceImage{
                asset->{
                    _id,
                    url
                },
                alt
            },
        }`)
            .then((data) => setServicesList(data))
            .catch(console.error);
    }, []);



    return (
        <>
            <Container fluid>
                <Stack gap={5}>
                {servicesContent && servicesContent.map((content,index) => {
                    console.log("CONTENT IS: ", content);
                    return (
                        <span key={index}>


                                <div>
                                    <Image
                                        src={content.servicesImage.asset.url}
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


                                <div>
                                    <h1 className="text-center mt-4 mb-4 pb-md-3 pb-2">
                                        {content.headliner}
                                    </h1>
                                </div>
                                <Div85WidthCentered>
                                    <SubHeaderCopy>
                                        <PortableText blocks={content.subHeadline}/>
                                    </SubHeaderCopy>
                                </Div85WidthCentered>


                                <div className="d-flex flex-row flex-wrap justify-content-around mt-3 mt-md-5 pt-5 pb-5">

                                    {servicesList && servicesList.map((list, index) => {
                                        console.log("svcs list: ", list);
                                        return (
                                            <span key={index}>
                                                <StyledLinkContainer to={`/services/${list.serviceLink}`}>
                                                     <StyledCard  border="light">
                                                        <Card.Img variant="top" src={list.serviceImage.asset.url} />
                                                        <Card.Body className="text-center">
                                                            <StyledCardTitle className="text-center">{list.serviceName}</StyledCardTitle>

                                                        </Card.Body>

                                                    </StyledCard>
                                                </StyledLinkContainer>
                                            </span>
                                        )
                                    })}

                                </div>


                        </span>
                    )


                })}

                <SmileVirtualBanner/>
                {/*   <TestimonialSection/> */}
                <PreFooter/>
                <Footer/>

                </Stack>
            </Container>
        </>
    );
}

export default About;

