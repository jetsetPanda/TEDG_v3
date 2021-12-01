import React, {useEffect, useState} from 'react';

import TestimonialSection from "./TestimonialSection";
import PreFooter from "./PreFooter";
import Footer from "./Footer";
import {Breadcrumb, BreadcrumbItem, Button, Col, Container, Image, Row, Stack} from "react-bootstrap";
import {LinkContainer} from "react-router-bootstrap";

import sanityClient from "../client";
import PortableText from "@sanity/block-content-to-react";
import styled from "styled-components";
import {SubHeaderCopy} from "./UXElements/UiModules";
import FaqAccordion from "./FAQAccordion";


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

  //@media screen and (max-width: 480px) {
  //
  //}
`


function ServicesPeriodontics(props) {

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
        sanityClient.fetch(`*[_type == "servicesPeriodontics"] {
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
                {serviceInfo && serviceInfo.map((info, key) => {
                    // console.log("info log: ", info);
                    if (info.serviceName === 'Periodontics') {
                        return (
                            <>
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
                                        {info.serviceName}
                                    </BreadcrumbItem>
                                </Breadcrumb>

                                <h1 className="text-center mt-4 mb-4 pb-md-3 pb-2">{info.serviceName}</h1>
                                <SubHeaderCopy className="text-center" style = {{ width: "85%", margin: "0 auto"}}>
                                    <PortableText blocks={info.description}/>
                                </SubHeaderCopy>
                            </>

                        )
                    }
                })}


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

            <FaqAccordion/>

            <TestimonialSection/>
            <PreFooter/>
            <Footer/>

            </Stack>
        </Container>
    );
}

export default ServicesPeriodontics;