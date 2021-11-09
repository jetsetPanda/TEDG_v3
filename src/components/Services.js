import React, { useState, useEffect } from 'react';
import sanityClient from '../client.js';
import PortableText from '@sanity/block-content-to-react';
import { LinkContainer } from "react-router-bootstrap";

import {Container, Row, Col, Stack, Image, Button, Card, Breadcrumb, BreadcrumbItem} from 'react-bootstrap';
import styled from "styled-components";

const Div85WidthCentered = styled.div`
  width: 85%;
  margin: 0 auto;
  align-items: center;
`

const StyledCard = styled(Card)`
  margin: 10px 10px;
  width: 18rem;
  @media (max-width: 768px) {
    width: 8rem;
  }
`

const StyledCardTitle =styled(Card.Title)`
  @media (max-width: 768px) {
    font-size: 15px;
  }
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
                {servicesContent && servicesContent.map((content,index) => {
                    console.log("CONTENT IS: ", content);
                    return (
                        <span key={index}>
                            <Stack gap={5}>

                                <div>
                                    <Image
                                        src={content.servicesImage.asset.url}
                                        alt=""
                                        className=""
                                        fluid
                                    />
                                </div>


                                <Breadcrumb>
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
                                    <h1 className="text-center">
                                        {content.headliner}
                                    </h1>
                                </div>
                                <Div85WidthCentered>
                                    <h4>
                                        <PortableText blocks={content.subHeadline}/>
                                    </h4>
                                </Div85WidthCentered>


                                <div className="d-flex flex-row flex-wrap justify-content-around">

                                    {servicesList && servicesList.map((list, index) => {
                                        console.log("svcs list: ", list);
                                        return (
                                            <span key={index}>
                                                 <StyledCard>
                                                    <Card.Img variant="top" src={list.serviceImage.asset.url} />
                                                    <Card.Body className="text-center">
                                                        <StyledCardTitle className="text-center">{list.serviceName}</StyledCardTitle>
                                                        <Button size="sm" >
                                                            Learn More

                                                        </Button>
                                                    </Card.Body>

                                                </StyledCard>
                                            </span>
                                        )
                                    })}

                                </div>

                            </Stack>
                        </span>
                    )


                })}




            </Container>
        </>
    );
}

export default About;

