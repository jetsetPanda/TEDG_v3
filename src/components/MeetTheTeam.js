import React, { useState, useEffect } from 'react';
import sanityClient from '../client.js';
import PortableText from '@sanity/block-content-to-react';
import { LinkContainer } from "react-router-bootstrap";
import {Link} from "react-router-dom";


import { Container, Breadcrumb, BreadcrumbItem, Row, Col, Stack, Image, Button, Card } from 'react-bootstrap';
import styled from "styled-components";
import PreFooter from "./PreFooter";
import Footer from "./Footer";
import {SubHeaderCopy} from "./UXElements/UiModules";


const TopRow = styled(Row)`
  background-color: darkblue;
  h1 {
    color: #ffffff;
  }
`

const StyledDoctorCard = styled(Card)`
  margin: 10px 10px;
  width: 19rem;
  border-color: #ffffff;
`

const StyledCard = styled(Card)`
  margin: 10px 10px;
  width: 18rem;
  border-color: #ffffff;
`

const StyledCardImg = styled(Card.Img)`
  border-radius: 50%;
  //&&:hover {
  //  transform: scale(1.1);
  //  transition: transform 2s
  //}
`

const Div85WidthCentered = styled.div`
  width: 85%;
  margin: 0 auto;
  align-items: center;
`

const StyledHR = styled.hr`
  border: 0.5px solid #b3cfff;
`

function MeetTheTeam(props) {



    const [staffDirectoryData, setStaffDirectory] = useState(null);
    const [ourTeamContentData, setOurTeamContent] = useState(null);

    useEffect(() => {
        // grok custom sanity query lang (similar to graphQL)
        sanityClient.fetch(`*[_type == "ourTeamContent"] {
            pageName,
            headliner,
            subHeadline,
            bannerImage{
                asset->{
                    _id,
                    url
                },
                alt
            }
        }`)
            .then((data) => setOurTeamContent(data))
            .catch(console.error);
    }, []);

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
            .then((data) => setStaffDirectory(data))
            .catch(console.error);
    }, []);



    return (
        <>
            <Container fluid>

                {ourTeamContentData && ourTeamContentData.map((content,index) => {
                    // console.log("ABOUT DATAAA:", ourTeamContentData[0]);
                    // console.log("reach in: ", ourTeamContentData[0].headliner[0][0])

                    return (
                        <span key={index}>
                            <Stack gap={5}>

                                <div>
                                    <Image
                                        src={content.bannerImage.asset.url}
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
                                    <LinkContainer to="/about-us">
                                        <BreadcrumbItem>
                                          <a href="about-us">
                                            About Us
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
                                    <SubHeaderCopy>
                                        <PortableText blocks={content.subHeadline}/>
                                    </SubHeaderCopy>
                                </Div85WidthCentered>



                        </Stack>
                    </span>

                    )
                })}


                    {staffDirectoryData &&
                        <div className="text-center mt-4 mb-4">
                            <h2 className="py-5">General Dentists</h2>
                            <div className="d-flex flex-row flex-wrap justify-content-around">
                                {staffDirectoryData.map((staff, index) => {
                                    console.log("STAFF list: ", staff);
                                    if (staff.jobType === 'general') {
                                        return (
                                            <span key={index}>
                                             <StyledDoctorCard>
                                                <Link to={"/about-us/meet-the-team/" + staff.slug.current} key={staff.slug.current}>
                                                    <StyledCardImg variant="top" src={staff.teamMemberImage.asset.url} />
                                                </Link>
                                                <Card.Body className="text-center">
                                                    <Card.Title className="text-center">{staff.teamMemberName}</Card.Title>
                                                    <Card.Subtitle>{staff.teamMemberJobTitle}</Card.Subtitle>
                                                    <Link to={"/about-us/meet-the-team/" + staff.slug.current} key={staff.slug.current}>
                                                        {/*<Button className="mt-2" size="md">
                                                            Learn More
                                                        </Button>*/}
                                                    </Link>
                                                </Card.Body>
                                            </StyledDoctorCard>
                                        </span>
                                        )
                                    }

                                })
                                }
                            </div>

                            <StyledHR/>

                            <h2 className="py-5">Specialists</h2>
                            <div className="d-flex flex-row flex-wrap justify-content-around">
                                {staffDirectoryData.map((staff, index) => {
                                    console.log("STAFF list: ", staff);
                                    if (staff.jobType === 'specialist') {
                                        return (
                                            <span key={index}>
                                             <StyledDoctorCard>
                                                <Link to={"/about-us/meet-the-team/" + staff.slug.current} key={staff.slug.current}>
                                                    <StyledCardImg variant="top" src={staff.teamMemberImage.asset.url} />
                                                </Link>
                                                <Card.Body className="text-center">
                                                    <Card.Title className="text-center">{staff.teamMemberName}</Card.Title>
                                                    <Card.Subtitle>{staff.teamMemberJobTitle}</Card.Subtitle>
                                                    <Link to={"/about-us/meet-the-team/" + staff.slug.current} key={staff.slug.current}>
                                                        {/*<Button className="mt-2" size="md">
                                                            Learn More
                                                        </Button>*/}
                                                    </Link>
                                                </Card.Body>
                                            </StyledDoctorCard>
                                        </span>
                                        )
                                    }

                                })
                                }
                            </div>

                            <StyledHR/>

                            <h2 className="py-5">Dental Hygienists</h2>
                            <div className="d-flex flex-row flex-wrap justify-content-around">
                                {staffDirectoryData.map((staff, index) => {
                                    console.log("STAFF list: ", staff);
                                    if (staff.jobType === 'hygienist') {
                                        return (
                                            <span key={index}>
                                             <StyledDoctorCard>
                                                <StyledCardImg variant="top" src={staff.teamMemberImage.asset.url} />
                                                <Card.Body className="text-center">
                                                    <Card.Title className="text-center">{staff.teamMemberName}</Card.Title>
                                                    {/*<Card.Subtitle>{staff.teamMemberJobTitle}</Card.Subtitle>*/}
                                                </Card.Body>
                                            </StyledDoctorCard>
                                        </span>
                                        )
                                    }

                                })
                                }
                            </div>

                            <StyledHR/>

                            <h2 className="py-5">Dental Assistants</h2>
                            <div className="d-flex flex-row flex-wrap justify-content-around">
                                {staffDirectoryData.map((staff, index) => {
                                    console.log("STAFF list: ", staff);
                                    if (staff.jobType === 'assistant') {
                                        return (
                                            <span key={index}>
                                             <StyledDoctorCard>
                                                <StyledCardImg variant="top" src={staff.teamMemberImage.asset.url} />
                                                <Card.Body className="text-center">
                                                    <Card.Title className="text-center">{staff.teamMemberName}</Card.Title>
                                                    {/*<Card.Subtitle>{staff.teamMemberJobTitle}</Card.Subtitle>*/}
                                                </Card.Body>
                                            </StyledDoctorCard>
                                        </span>
                                        )
                                    }

                                })
                                }
                            </div>

                            <StyledHR/>

                            <h2 className="py-5">Administrative Staff</h2>
                            <div className="d-flex flex-row flex-wrap justify-content-around">
                                {staffDirectoryData.map((staff, index) => {
                                    console.log("STAFF list: ", staff);
                                    if (staff.jobType === 'admin') {
                                        return (
                                            <span key={index}>
                                             <StyledDoctorCard>
                                                <StyledCardImg variant="top" src={staff.teamMemberImage.asset.url} />
                                                <Card.Body className="text-center">
                                                    <Card.Title className="text-center">{staff.teamMemberName}</Card.Title>
                                                    <Card.Subtitle>{staff.teamMemberJobTitle}</Card.Subtitle>
                                                </Card.Body>
                                            </StyledDoctorCard>
                                        </span>
                                        )
                                    }
                                    <br/>
                                    if (staff.jobType === 'adminSpecial') {
                                        return (
                                            <span key={index}>
                                             <StyledDoctorCard>
                                                <Link to={"/about-us/meet-the-team/" + staff.slug.current} key={staff.slug.current}>
                                                    <StyledCardImg variant="top" src={staff.teamMemberImage.asset.url} />
                                                </Link>
                                                <Card.Body className="text-center">
                                                    <Card.Title className="text-center">{staff.teamMemberName}</Card.Title>
                                                    <Card.Subtitle>{staff.teamMemberJobTitle}</Card.Subtitle>
                                                    <Link to={"/about-us/meet-the-team/" + staff.slug.current} key={staff.slug.current}>
                                                        {/*<Button className="mt-2" size="md">
                                                            Learn More
                                                        </Button>*/}
                                                    </Link>
                                                </Card.Body>
                                            </StyledDoctorCard>
                                        </span>
                                        )
                                    }
                                })
                                }
                            </div>

                        </div>
                    }

                <PreFooter/>
                <Footer/>
            </Container>
        </>
    );
}

export default MeetTheTeam;
// {/*<img*/}
// {/*    src={post.mainImage.asset.url}*/}
// {/*    alt={post.mainImage.alt}*/}
// {/*    className=""*/}
// {/*/>*/}
