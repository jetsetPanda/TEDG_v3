import React, { useState, useEffect, Fragment } from 'react';
import sanityClient from '../client.js';
// import PortableText from '@sanity/block-content-to-react';
import { LinkContainer } from "react-router-bootstrap";

import {Container, Row, Col, Stack, Image, Button, Card, Fade} from 'react-bootstrap';
import styled from "styled-components";
import homeBanner from '../assets/images/hero-39-years.jpg';
import cardSample from '../assets/images/card-sample2x.png';
import igLogo from '../assets/images/instagramLogo.png';
import fbLogo from '../assets/images/facebookLogo.png';
import ig1 from '../assets/images/ig1.jpg';
import ig2 from '../assets/images/ig2.jpg';
import ig3 from '../assets/images/ig3.jpg';
import ig4 from '../assets/images/ig4.jpg';
import smile1 from '../assets/images/smile1.jpg';
import smile2 from '../assets/images/smile2.jpg';
import smile3 from '../assets/images/smile3.jpg';
import smile4 from '../assets/images/smile4.jpg';
import smileImg from '../assets/images/home-smile-img.jpg';

import PreFooter from "./PreFooter";
import Footer from "./Footer";
import SmileVirtualBanner from "./SmileVirtualBanner";
import {Link} from "react-router-dom";
import BirdeyeTestimonialCard from "./BirdeyeTestimonialCard";
import TestimonialSection from "./TestimonialSection";
import {StyledLinkContainer, SubHeaderCopy, StyledCard, StyledCardTitle} from "./UXElements/UiModules";


// const BannerImg = styled.img`
//   min-width: 370px;
//   max-width: 1400px;
// `

const Div85WidthCentered = styled.div`
  width: 85%;
  margin: 0 auto;
  align-items: center;
`

const InstagramDiv = styled.div`
  display: inline-flex;
 &&::before {
   background-image: url(${igLogo});
   background-size: 35px 35px;
   display: inline-block;
   width: 35px;
   height: 35px;
   content:"";
   margin-right: 10px;
 }
`
const FacebookDiv = styled.div`
  display: inline-flex;
  &&::before {
    background-image: url(${fbLogo});
    background-size: 37px 37px;
    display: inline-block;
    width: 37px;
    height: 37px;
    content:"";
    margin-right: 10px;
  }
`

const StyledLink = styled.a`
  text-decoration: none;
  color: #1C2430;

  &&:hover {
    color: #5e78a8;
    transition: color 1s;
  }
`
const DivFlex = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }

`
const StyledImage = styled(Image)`
  width: 300px;
  height: 300px;
  margin: 10px auto;
  @media (max-width: 768px) {
    width: 250px;
    height: 250px;
  }
  
`

const StyledSmile = styled(Image)`
  width: 300px;
  height: 300px;
  margin: 10px auto;
  border-radius: 5px;
  box-shadow: #333333 2px 2px 8px;
  @media (max-width: 768px) {
    width: 250px;
    height: 250px;
  }
  
`



function Home(props) {

    const [servicesList, setServicesList] = useState(null);

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
                        <SubHeaderCopy>
                            Established in the heart of New York City’s Financial District in 1982 by our founder and director, Dr. Howard Wimmer, The Exchange Dental Group is a trusted establishment dedicated to serving the community with continued excellence.
                            <br/><br/>
                            Our mission has always been to help patients maintain healthy, attractive smiles in a professional, courteous office environment. Our team is composed of only the most experienced and qualified doctors and dental hygienists to ensure your treatment is done right.
                            <br/><br/>
                            We are proud to provide a wide array of services to meet a diverse set of patient needs. Whether you're looking for a simple cleaning or a more in-depth procedure like dental implants, we will work with you to design a treatment plan that perfectly suits your needs and fits your schedule.
                        </SubHeaderCopy>
                    </Div85WidthCentered>

                    <div className="text-center" >
                        <a href="http://www.howardwimmerddstribute.com/pages/2/index.htm" target="_blank">
                            <Button variant="outline-primary" size="lg">DR. HOWARD WIMMER'S 20 YEAR TRIBUTE</Button>
                        </a>

                    </div>

                    <div>
                        <h1 className="text-center mt-4">Our Services</h1>
                    </div>

                    <div className="d-flex flex-row flex-wrap justify-content-around">

                        {servicesList && servicesList.map((list, index) => {
                            console.log("svcs list: ", list);
                            return (
                                <span key={index}>
                                    <StyledLinkContainer to={`/services/${list.serviceLink}`}>
                                         <StyledCard  border="light">
                                            <Card.Img variant="top" src={list.serviceImage.asset.url} />
                                            <Card.Body>
                                                <StyledCardTitle className="text-center">{list.serviceName}</StyledCardTitle>
                                            </Card.Body>
                                        </StyledCard>
                                    </StyledLinkContainer>
                                </span>
                                )
                        })}

                    </div>

                    <div className="text-center" >
                        <LinkContainer to="/services">
                            <Button  variant="outline-primary" size="lg">VIEW OUR SERVICES</Button>
                        </LinkContainer>
                    </div>
                    <SmileVirtualBanner/>

                    <div>
                        <h1 className="text-center mt-4">Smile Gallery</h1>
                    </div>



                 {/*   <Row>
                        <Col md={6} sm={12}>
                            <Image src={smileImg} fluid rounded/>
                        </Col>
                        <Col md={6} sm={12}>
                            <h2 className="mb-md-5">
                                3-Unit Bridge
                            </h2>
                            <h4>
                                AGE: 20-30 <br/>
                                GENDER: MALE <br/><br/>

                                PATIENT EMBARRASSED BY APPEARANCE OF METAL BRIDGE WHEN SMILING <br/><br/>

                                PROCEDURE: PLACED NEW 3-UNIT ALL PORCELAIN BRIDGE
                            </h4>
                        </Col>
                 </Row> */}

<div className="d-flex flex-row flex-wrap justify-content-around">
                        
                        <StyledSmile src={smile1} fluid/>
                        <StyledSmile src={smile2} fluid/>
                        <StyledSmile src={smile3} fluid/>
                        <StyledSmile src={smile4} fluid/>

                    </div>






                    <div className="text-center" >
                        <LinkContainer to="/smile-gallery">
                            <Button  variant="outline-primary" size="lg">VIEW FULL SMILE GALLERY</Button>
                        </LinkContainer>
                    </div>

                    <div>
                        <h1 className="text-center my-4">Follow Us</h1>
                        <DivFlex className="d-flex justify-content-center ">
                            <StyledLink href='https://www.instagram.com/theexchangedentalgroup/' target="_blank">
                                <InstagramDiv className="mx-md-5 mx-sm-4">
                                    <h3 style={{fontSize: "2rem"}}>Instagram</h3>
                                </InstagramDiv>
                            </StyledLink>

                            <StyledLink href='https://www.facebook.com/theexchangedentalgroup/' target="_blank">
                                <FacebookDiv className="mx-md-5 mx-sm-4">
                                    <h3 style={{fontSize: "2rem"}}>Facebook</h3>
                                </FacebookDiv>
                            </StyledLink>

                        </DivFlex>
                    </div>

                    {/*<div className="d-flex flex-row flex-wrap justify-content-between">
                        <StyledLink href='https://www.instagram.com/theexchangedentalgroup' target="_blank">
                            <StyledImage src={ig1} fluid thumbnail/>
                        </StyledLink>
                        <StyledLink href='https://www.instagram.com/theexchangedentalgroup' target="_blank">
                            <StyledImage src={ig2} fluid thumbnail/>
                        </StyledLink>
                        <StyledLink href='https://www.instagram.com/theexchangedentalgroup' target="_blank">
                            <StyledImage src={ig4} fluid thumbnail/>
                        </StyledLink>
                            <StyledLink href='https://www.instagram.com/theexchangedentalgroup' target="_blank">
                        <StyledImage src={ig3} fluid thumbnail/>
                        </StyledLink>
                </div>*/}

                    <div className="d-flex flex-row flex-wrap justify-content-around">
                        <StyledLink href='https://www.instagram.com/theexchangedentalgroup' target="_blank">
                            <StyledImage src={ig1} fluid thumbnail/>
                        </StyledLink>
                        <StyledLink href='https://www.instagram.com/theexchangedentalgroup' target="_blank">
                            <StyledImage src={ig2} fluid thumbnail/>
                        </StyledLink>
                        <StyledLink href='https://www.instagram.com/theexchangedentalgroup' target="_blank">
                            <StyledImage src={ig4} fluid thumbnail/>
                        </StyledLink>
                        
                    
                    </div>


                    <TestimonialSection/>


                    <PreFooter/>

                    <Footer/>

                </Stack>
            </Container>
        </>
    );
}


export default Home;
