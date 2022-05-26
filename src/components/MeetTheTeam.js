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
import TestimonialSection from './TestimonialSection.js';


const TopRow = styled(Row)`
  background-color: darkblue;
  h1 {
    color: #ffffff;
  }
`

const StyledDoctorCard = styled(Card)`
  margin: 10px 10px;
  padding-bottom: 10px;
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
  box-shadow: #dce7f8 1px 2px 5px;

  &:hover {
    box-shadow: #bad1f5 1px 3px 7px;
  }

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

const DoctorLink = styled(Link)`
  color: #1C2430;
  text-decoration: none;

  &:hover {
    color: #1091de;
  }
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
                <Stack gap={5}>
                {ourTeamContentData && ourTeamContentData.map((content,index) => {
                    // console.log("ABOUT DATAAA:", ourTeamContentData[0]);
                    // console.log("reach in: ", ourTeamContentData[0].headliner[0][0])

                    return (
                        <span key={index}>


                               {/* <div>
                                    <Image
                                        src={content.bannerImage.asset.url}
                                        alt=""
                                        className=""
                                        fluid
                                    />
                                </div> */}

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
                                    <BreadcrumbItem active>
                                      {content.pageName}
                                    </BreadcrumbItem>
                                </Breadcrumb>


                                <div>
                                    <h1 className="text-center mt-4 mb-4 pb-md-3 pb-2">
                                        {content.headliner}
                                    </h1>
                                </div>

                                <Div85WidthCentered>
                                    <SubHeaderCopy>
                                        <PortableText blocks={content.subHeadline}/>
                                    </SubHeaderCopy>
                                </Div85WidthCentered>

                    </span>

                    )
                })}


                    {staffDirectoryData &&
                        <div className="text-center mb-4">
                            <h2 className="pb-4 pb-2"><strong>General Dentists</strong></h2>
                            <div className="d-flex flex-row flex-wrap justify-content-around">
                                {staffDirectoryData.map((staff, index) => {
                                    console.log("STAFF list: ", staff);
                                    if (staff.jobType === 'general') {
                                        return (
                                            <span key={index}>

                                                <DoctorLink to={"/about-us/meet-the-team/" + staff.slug.current} key={staff.slug.current}>
                                                     <StyledDoctorCard>
                                                        <StyledCardImg variant="top" src={staff.teamMemberImage.asset.url} />
                                                        <Card.Body className="text-center">
                                                            <Card.Title className="text-center">{staff.teamMemberName}</Card.Title>
                                                            <Card.Subtitle>{staff.teamMemberJobTitle}</Card.Subtitle>
                                                        </Card.Body>
                                                    </StyledDoctorCard>
                                                </DoctorLink>

                                        </span>
                                        )
                                    }

                                })
                                }
                            </div>

                            <StyledHR/>

                            <h2 className="pb-4 pt-4 mt-5"><strong>Specialists</strong></h2>
                            <div className="d-flex flex-row flex-wrap justify-content-around">
                                {staffDirectoryData.map((staff, index) => {
                                    console.log("STAFF list: ", staff);
                                    if (staff.jobType === 'specialist') {
                                        return (
                                            <span key={index}>

                                                <DoctorLink to={"/about-us/meet-the-team/" + staff.slug.current} key={staff.slug.current}>
                                                     <StyledDoctorCard>
                                                        <StyledCardImg variant="top" src={staff.teamMemberImage.asset.url} />
                                                        <Card.Body className="text-center">
                                                            <Card.Title className="text-center">{staff.teamMemberName}</Card.Title>
                                                            <Card.Subtitle>{staff.teamMemberJobTitle}</Card.Subtitle>
                                                        </Card.Body>
                                                    </StyledDoctorCard>
                                                </DoctorLink>

                                        </span>
                                        )
                                    }

                                })
                                }
                            </div>

                            <StyledHR/>

                            <h2 className="pb-4 pt-4 mt-5"><strong>Dental Hygienists</strong></h2>
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

                            <h2 className="pb-4 pt-4 mt-5"><strong>Dental Assistants</strong></h2>
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

                            <h2 className="pb-4 pt-4 mt-5"><strong>Administrative Staff</strong></h2>
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

                                                <DoctorLink to={"/about-us/meet-the-team/" + staff.slug.current} key={staff.slug.current}>
                                                     <StyledDoctorCard>
                                                        <StyledCardImg variant="top" src={staff.teamMemberImage.asset.url} />
                                                        <Card.Body className="text-center">
                                                            <Card.Title className="text-center">{staff.teamMemberName}</Card.Title>
                                                            <Card.Subtitle>{staff.teamMemberJobTitle}</Card.Subtitle>
                                                        </Card.Body>
                                                    </StyledDoctorCard>
                                                </DoctorLink>

                                        </span>
                                        )
                                    }
                                })
                                }
                            </div>

                        </div>
                    }
                {/*   <TestimonialSection/> */}
                <PreFooter/>
                <Footer/>
                </Stack>
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
