import React, { useState, useEffect } from 'react';
import sanityClient from '../client.js';
import PortableText from '@sanity/block-content-to-react';
import { LinkContainer } from "react-router-bootstrap";


import { Container, Breadcrumb, BreadcrumbItem, Row, Col, Stack, Image, Button, Card } from 'react-bootstrap';
import styled from "styled-components";
import cardSample from '../assets/images/card-sample2x.png';
import TestimonialSection from "./TestimonialSection";
import PreFooter from "./PreFooter";
import Footer from "./Footer";
import {SubHeaderCopy} from "./UXElements/UiModules";


const Div85WidthCentered = styled.div`
  width: 85%;
  margin: 0 auto;
  align-items: center;
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


function OurTechnology(props) {

    // let isPic = true;
    let isSlug = false;


    let slugName = '/about-us/meet-the-team'

    const [contentData, setContentData] = useState(null);

    const [serviceOfferings, setServiceOfferings] = useState(null);


    useEffect(() => {
        sanityClient.fetch(`*[_type == "ourTechnologyContent"] {
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
            subHeadlinePortableText
        }`)
            .then((data) => setContentData(data))
            .catch(console.error);
    }, []);


    useEffect(() => {
        // grok custom sanity query lang (similar to graphQL)
        sanityClient.fetch(`*[_type == "technologyList"] {
            techName,
            description,
            techImage{
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
        <>
            <Container fluid>
                <Stack gap={5}>

                {contentData && contentData.map((content,index) => {
                    console.log("ABOUT DATAAA:", contentData[0]);
                    console.log("reach in: ", contentData[0].headliner[0][0])

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
                                <BreadcrumbItem>
                                  <a href="/">
                                    Home
                                  </a>
                                </BreadcrumbItem>
                                <LinkContainer  to="/about-us">
                                    <BreadcrumbItem>
                                      <a href="#">
                                        About Us
                                      </a>
                                    </BreadcrumbItem>
                                </LinkContainer>
                                <BreadcrumbItem active>
                                    Our Technology
                                </BreadcrumbItem>
                              </Breadcrumb>


                            <section>
                                <h1 className="text-center mt-4 mb-4 pb-md-3 pb-2">
                                    {content.headliner}
                                </h1>

                            </section>
                            <Div85WidthCentered>
                                <SubHeaderCopy className="text-center">
                                    <PortableText blocks={content.subHeadline}/>
                                </SubHeaderCopy>
                            </Div85WidthCentered>




                            {/*<Row className="mt-5">*/}
                            {/*    <Col sm={12} md={6}>*/}
                            {/*       <Image*/}
                            {/*           src={cardSample}*/}
                            {/*           alt=""*/}
                            {/*           className=""*/}
                            {/*           fluid*/}
                            {/*       />*/}

                            {/*    </Col>*/}
                            {/*    <Col sm={12} md={6}>*/}
                            {/*       <Stack gap={2}>*/}
                            {/*           <h2>MEET THE TEAM</h2>*/}
                            {/*           <p>You’re in great hands. Our dedicated team of dentists, specialists, and hygienists have decades of experience and form the fabric of our practice. </p>*/}
                            {/*           <div>*/}
                            {/*               <LinkContainer to="/meet-the-team">*/}
                            {/*                    <Button variant="outline-primary" size="md">Come Meet Our Team</Button>*/}
                            {/*               </LinkContainer>*/}
                            {/*           </div>*/}

                            {/*       </Stack>*/}
                            {/*    </Col>*/}
                            {/*</Row>*/}

                            {/*<Row className="mt-5">*/}
                            {/*    <Col sm={12} md={6}>*/}
                            {/*       <Image*/}
                            {/*           src={cardSample}*/}
                            {/*           alt=""*/}
                            {/*           className=""*/}
                            {/*           fluid*/}
                            {/*       />*/}

                            {/*    </Col>*/}
                            {/*    <Col sm={12} md={6}>*/}
                            {/*       <Stack gap={2}>*/}
                            {/*           <h2>OUR TECHNOLOGY</h2>*/}
                            {/*           <p>As part of our effort to provide the best dental care possible, we use state-of-the-art equipment, modern technology and the most advanced dental techniques.. </p>*/}
                            {/*           <div>*/}
                            {/*              <Button variant="outline-primary" size="md">View Our Services</Button>*/}
                            {/*           </div>*/}

                            {/*       </Stack>*/}
                            {/*    </Col>*/}
                            {/*</Row>*/}

                            {serviceOfferings && serviceOfferings.map((content, index) => {
                                console.log("service content: ", content);

                                return (
                                    <span key={index}>
                            <Row className="mt-5 pt-2 pt-md-4 justify-content-between">
                    {content.techImage
                        ? <>
                            <Col sm={12} md={5} className="px-3">
                                <StyledImage
                                    src={content.techImage.asset.url}
                                    alt=""
                                    className=""
                                    fluid
                                />

                            </Col>
                            <Col sm={12} md={7} className="px-4 pt-md-0 pt-3">
                                <Stack gap={2}>
                                    <h2>{content.techName}</h2>
                                    <p>
                                        <PortableText blocks={content.description}/>
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
                                    <h2>{content.techName}</h2>
                                    <p>
                                        <PortableText blocks={content.description}/>
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




                    </span>

                    )}
                )}
                    <TestimonialSection/>
                    <PreFooter/>
                    <Footer/>

            </Stack>
            </Container>
        </>
    );
}

export default OurTechnology;
// {/*<img*/}
// {/*    src={post.mainImage.asset.url}*/}
// {/*    alt={post.mainImage.alt}*/}
// {/*    className=""*/}
// {/*/>*/}
