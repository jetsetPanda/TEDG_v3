import React, { useState, useEffect } from 'react';
import sanityClient from '../client.js';
import PortableText from '@sanity/block-content-to-react';
import { LinkContainer } from "react-router-bootstrap";

import {Container, Row, Col, Stack, Image, Button, Card} from 'react-bootstrap';
import styled from "styled-components";
import homeBanner from '../assets/images/home-banner2x.png';
import cardSample from '../assets/images/card-sample2x.png';
import smileVirtualBanner from '../assets/images/home-smilevirtual-banner.png'

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

                    <Stack direction="horizontal" gap={3}>
                        <div className="bg-light border">First item</div>
                        <div className="bg-light border">Second item</div>
                        <div className="bg-light border">Third item</div>
                    </Stack>

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


                </Stack>
            </Container>
        </>
    );
}


export default Home;
