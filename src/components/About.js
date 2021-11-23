import React, { useState, useEffect } from 'react';
import sanityClient from '../client.js';
import PortableText from '@sanity/block-content-to-react';
import { LinkContainer } from "react-router-bootstrap";


import { Container, Breadcrumb, BreadcrumbItem, Row, Col, Stack, Image, Button, Card } from 'react-bootstrap';
import styled from "styled-components";
import homeBanner from '../assets/images/home-banner2x.png';
import cardSample from '../assets/images/card-sample2x.png';
import TestimonialSection from "./TestimonialSection";
import PreFooter from "./PreFooter";
import Footer from "./Footer";
import {SubHeaderCopy} from "./UXElements/UiModules";

const TopRow = styled(Row)`
  background-color: darkblue;
  h1 {
    color: #ffffff;
  }
`



const Div85WidthCentered = styled.div`
  width: 85%;
  margin: 0 auto;
  align-items: center;
`

function About(props) {

    const [aboutContentData, setAboutContent] = useState(null);

    useEffect(() => {
        // grok custom sanity query lang (similar to graphQL)
        sanityClient.fetch(`*[_type == "aboutContent"] {
            pageName,
            headliner,
            subHeadline,
            aboutImage{
                asset->{
                    _id,
                    url
                },
                alt
            },
            subHeadlinePortableText
        }`)
            .then((data) => setAboutContent(data))
            .catch(console.error);
    }, []);

    return (
        <>
            <Container fluid>
                <Stack gap={5}>
                {aboutContentData && aboutContentData.map((aboutContent,index) => {
                    console.log("ABOUT DATAAA:", aboutContentData[0]);
                    console.log("reach in: ", aboutContentData[0].headliner[0][0])

                    return (
                        <span key={index}>


                            <div>
                                <Image
                                    src={aboutContent.aboutImage.asset.url}
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
                                  {aboutContent.pageName}
                                </BreadcrumbItem>
                              </Breadcrumb>


                            <section>
                                <h1 className="text-center">
                                    {aboutContent.headliner}
                                </h1>

                            </section>
                            <Div85WidthCentered>
                                <SubHeaderCopy>
                                    <PortableText blocks={aboutContent.subHeadlinePortableText}/>
                                </SubHeaderCopy>
                            </Div85WidthCentered>

                            <div className="text-center" >
                                <a href="http://www.howardwimmerddstribute.com/pages/2/index.htm" target="_blank">
                                    <Button variant="outline-primary" size="lg">DR. HOWARD WIMMER'S 20 YEAR TRIBUTE</Button>
                                </a>
                            </div>

                            <Row className="mt-5">
                                <Col sm={12} md={6}>
                                   <Image
                                       src={cardSample}
                                       alt=""
                                       className=""
                                       fluid
                                   />

                                </Col>
                                <Col sm={12} md={6}>
                                   <Stack gap={2}>
                                       <h2>MEET THE TEAM</h2>
                                       <p>You’re in great hands. Our dedicated team of dentists, specialists, and hygienists have decades of experience and form the fabric of our practice. </p>
                                       <div>
                                           <LinkContainer to="/about-us/meet-the-team">
                                                <Button variant="outline-primary" size="md">Come Meet Our Team</Button>
                                           </LinkContainer>
                                       </div>

                                   </Stack>
                                </Col>
                            </Row>

                            <Row className="mt-5">
                                <Col sm={12} md={6}>
                                   <Image
                                       src={cardSample}
                                       alt=""
                                       className=""
                                       fluid
                                   />

                                </Col>
                                <Col sm={12} md={6}>
                                   <Stack gap={2}>
                                       <h2>OUR TECHNOLOGY</h2>
                                       <p>As part of our effort to provide the best dental care possible, we use state-of-the-art equipment, modern technology and the most advanced dental techniques.. </p>
                                       <div>
                                           <LinkContainer to="/about-us/our-technology">
                                                <Button variant="outline-primary" size="md">View Our Technology</Button>
                                           </LinkContainer>
                                       </div>

                                   </Stack>
                                </Col>
                            </Row>


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

export default About;
// {/*<img*/}
// {/*    src={post.mainImage.asset.url}*/}
// {/*    alt={post.mainImage.alt}*/}
// {/*    className=""*/}
// {/*/>*/}
