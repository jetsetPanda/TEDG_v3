import React, { useState, useEffect } from 'react';
import sanityClient from '../client.js';
// import PortableText from '@sanity/block-content-to-react';
// import { LinkContainer } from "react-router-bootstrap";

import {Container, Row, Col, Stack, Image, Button, Card} from 'react-bootstrap';
import styled from "styled-components";
import homeBanner from '../assets/images/home-banner2x.png';
import cardSample from '../assets/images/card-sample2x.png';
import smileVirtualBanner from '../assets/images/home-smilevirtual-banner.png'

import footerImage from '../assets/images/footerImage.png';
import PreFooter from "./PreFooter";



// const BannerImg = styled.img`
//   min-width: 370px;
//   max-width: 1400px;
// `

const Div85WidthCentered = styled.div`
  width: 85%;
  margin: 0 auto;
  align-items: center;
`

const StyledCard = styled(Card)`
  margin: 10px 10px;
  width: 18rem;
`
function Home(props) {

    const [servicesList, setServicesList] = useState(null);

    useEffect(() => {
        sanityClient.fetch(`*[_type == "servicesList"] {
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
                    <div>
                        <Image
                            src={homeBanner}
                            alt='home banner'
                            className=""
                            fluid
                        />
                    </div>
                    <div>
                        <h1 className="text-center">
                            Welcome to The Exchange Dental Group
                        </h1>
                    </div>
                    <Div85WidthCentered>
                        <h5>
                            Established in the heart of New York City’s Financial District in 1982 by our founder and director, Dr. Howard Wimmer, The Exchange Dental Group is a trusted establishment dedicated to serving the community with continued excellence.
                            <br/><br/>
                            Our mission has always been to help patients maintain healthy, attractive smiles in a professional, courteous office environment. Our team is composed of only the most experienced and qualified doctors and dental hygienists to ensure your treatment is done right.
                            <br/><br/>
                            We are proud to provide a wide array of services to meet a diverse set of patient needs. Whether you're looking for a simple cleaning or a more in-depth procedure like dental implants, we will work with you to design a treatment plan that perfectly suits your needs and fits your schedule.
                        </h5>
                    </Div85WidthCentered>

                    <div className="text-center" >
                        <Button variant="outline-primary" size="lg">DR. HOWARD WIMMER'S 20 YEAR TRIBUTE</Button>
                    </div>

                    <div>
                        <h1 className="text-center mt-4">Our Services</h1>
                    </div>

                    <div className="d-flex flex-row flex-wrap justify-content-around">

                        {servicesList && servicesList.map((list, index) => {
                            console.log("svcs list: ", list);
                            return (
                                <span key={index}>
                                     <StyledCard>
                                        <Card.Img variant="top" src={list.serviceImage.asset.url} />
                                        <Card.Body>
                                            <Card.Title className="text-center">{list.serviceName}</Card.Title>
                                        </Card.Body>
                                    </StyledCard>
                                </span>
                                )
                        })}

                    </div>

                    <div className="text-center" >

                        <Button  variant="outline-primary" size="lg">VIEW OUR SERVICES</Button>

                    </div>

                    <div>
                        <Image
                            src={smileVirtualBanner}
                            alt='smile virtual'
                            className=""
                            fluid
                        />
                    </div>

                    <div>
                        <h1 className="text-center mt-4">Smile Gallery</h1>
                    </div>

                    <Row>
                        <Card>
                            <Card.Img variant="bottom" src={cardSample} />
                            <Card.Body>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk
                                    of the card's content.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Row>

                    <div>
                        <h1 className="text-center mt-4">Follow Us</h1>
                    </div>

                    <div>
                        <h1 className="text-center mt-4">Testimonials</h1>
                    </div>

                    <div>
                        <h1 className="text-center mt-4">Visit Us</h1>
                    </div>

                    <PreFooter/>

                    <Row>
                        <Col>
                            <Card className="bg-light text-dark" border="light" >
                                <Card.Img src={footerImage} alt="Card image" />
                            </Card>
                        </Col>

                        <Col>
                            <Card className="bg-dark text-white" border="light" >
                                <Card.Img variant="bottom" src={cardSample} />
                                <Card.ImgOverlay>

                                    <Stack className="text-center">
                                        <br/>
                                        <h1>Location</h1>
                                        <h5 style={{marginTop: "15px"}}>
                                            39 Broadway Suite 2115 <br/>
                                            Financial District <br/>
                                            New York, NY 10006 <br/><br/>
                                            T: (212) 422-9229
                                        </h5>
                                        <h1 style={{marginTop: "45px"}}>Hours</h1>
                                        <Row className="ml-0 mr-auto text-start" style={{marginTop: "20px"}}>
                                            <Col>
                                                <h5 style={{paddingLeft: "60%"}}>
                                                    Monday <br/>
                                                    Tuesday <br/>
                                                    Wednesday <br/>
                                                    Thursday <br/>
                                                    Friday <br/>
                                                    Saturday <br/>
                                                    Sunday <br/>
                                                </h5>

                                            </Col>
                                            <Col>
                                                <h5 style={{paddingLeft: "10%"}}>
                                                    8 AM - 6PM <br/>
                                                    8 AM - 6PM <br/>
                                                    8 AM - 6PM <br/>
                                                    8 AM - 6PM <br/>
                                                    8 AM - 4PM <br/>
                                                    Closed <br/>
                                                    9 AM - 5PM
                                                </h5>

                                            </Col>
                                        </Row>
                                    </Stack>

                                </Card.ImgOverlay>
                            </Card>

                        </Col>
                    </Row>

                </Stack>
            </Container>
        </>
    );
}


export default Home;
