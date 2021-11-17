import React from 'react';
import {Breadcrumb, BreadcrumbItem, Button, Col, Container, Image, Row, Stack} from "react-bootstrap";
import {LinkContainer} from "react-router-bootstrap";
import TestimonialSection from "./TestimonialSection";
import PreFooter from "./PreFooter";
import Footer from "./Footer";
import cardSample from "../assets/images/card-sample2x.png";

const ButtonThing = (props) => (
    <div className="text-left">
        <LinkContainer to={props.slug}>
            <Button variant="outline-primary" size="md">{props.copy}</Button>
        </LinkContainer>
    </div>

)


function ServicesCosmetic(props) {

    let isSubhead = true;
    let isPic = true;
    let isSlug = true;


    let slugName = '/about-us/meet-the-team'

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

                <h1 className="text-center mt-4 mb-4 pb-4">Cosmetic Dentistry</h1>

                {isSubhead &&
                    <h2 className="text-center mt-4 mb-4">Conveniently located in Manhattan’s Financial District, our office
                    offers a variety of teeth-straightening options with our in-house
                    orthodontist, Dr. Weeman.
                    </h2>
                }


                <Row className="mt-5">
                    {isPic
                        ? <>
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
                                    <h2>MEET THE TEAM</h2>
                                    <p>You’re in great hands. Our dedicated team of dentists, specialists, and hygienists have decades of experience and form the fabric of our practice. </p>
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
            <TestimonialSection/>
            <PreFooter/>
            <Footer/>

            </Stack>
        </Container>
    );
}

export default ServicesCosmetic;