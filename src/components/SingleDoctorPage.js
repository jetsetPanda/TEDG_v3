import React, { useState, useEffect } from 'react';
import sanityClient from '../client.js';
import PortableText from '@sanity/block-content-to-react';
import {Breadcrumb, BreadcrumbItem, Container, Stack, Row, Col, Card, Image} from "react-bootstrap";
import {LinkContainer} from "react-router-bootstrap";
import styled from "styled-components";
import PreFooter from "./PreFooter";
import Footer from "./Footer";
import SmileVirtualBanner from "./SmileVirtualBanner";

const StyledImg = styled(Image)`
  border-radius: 50%;
  box-shadow: 0 5px 25px 0 rgb(22 121 171 / 20%);
  color: rgb(22, 121, 171);
`

function SingleDoctorPage(props) {
    console.log("DOCTOR PROPS", props);

    const [staffData, setStaffData] = useState(null);
    const currentSlug = props.match.params.slug;

    useEffect(() => {
        sanityClient.fetch(`*[_type == "staffDirectory"] | order(order asc) {
            teamMemberName,
            jobType,
            slug,
            teamMemberJobTitle,
            teamMemberBio,
            teamMemberImage{
                asset->{
                    _id,
                    url
                },
                alt
            },
        }`)
            .then((data) => setStaffData(data))
            .catch(console.error);
    }, []);

    let personData = {};
    return (
        <Container fluid>
            {staffData && staffData.map((person, index) => {
                console.log("PERSON IS: ", person);
                if (person.slug) {
                    console.log("SLUG IS HERE!", person.slug.current);
                }

                if (person.slug) {
                    let currentPersonSlug = person.slug.current;
                    console.log("CURRENT SLUG IS ", currentPersonSlug);

                    if (currentSlug === currentPersonSlug) {
                        return (
                            <Stack gap={5}>
                                <Breadcrumb className="mt-4">
                                    <LinkContainer to="/">
                                        <BreadcrumbItem>
                                            <a href="home">
                                                Home
                                            </a>
                                        </BreadcrumbItem>
                                    </LinkContainer>
                                    <LinkContainer to="/about-us">
                                        <BreadcrumbItem>
                                            <a href="about-us">
                                                About Us
                                            </a>
                                        </BreadcrumbItem>
                                    </LinkContainer>
                                    <LinkContainer to="/about-us/meet-the-team">
                                        <BreadcrumbItem>
                                            <a href="meet-the-team">
                                                Meet The Team
                                            </a>
                                        </BreadcrumbItem>
                                    </LinkContainer>
                                    <BreadcrumbItem active>
                                        {person.teamMemberName}
                                    </BreadcrumbItem>
                                </Breadcrumb>

                                <h1 className="text-center">
                                    {person.teamMemberName}
                                </h1>

                                <Row>
                                    <Col md={4} sm={12}>
                                        <StyledImg
                                            src={person.teamMemberImage.asset.url}
                                            alt=""
                                            className=""
                                            fluid
                                        />
                                    </Col>
                                    <Col md={8} sm={12}>
                                        <p>
                                            <PortableText blocks={person.teamMemberBio}/>
                                        </p>
                                    </Col>
                                </Row>

                                {currentSlug === 'dr-todd-goldstein' &&
                                    <div className="mt-md-5">
                                        <SmileVirtualBanner/>
                                    </div>

                                }

                                <PreFooter/>
                                <Footer/>

                            </Stack>
                        )
                    }

                }



            })}
        </Container>
    );
}

export default SingleDoctorPage;