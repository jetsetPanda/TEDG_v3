import React, { useState, useEffect } from 'react';
import sanityClient from '../client.js';
import PortableText from '@sanity/block-content-to-react';
import { LinkContainer } from "react-router-bootstrap";
import {Link} from "react-router-dom";


import { Container, Breadcrumb, BreadcrumbItem, Row, Col, Stack, Image, Button, Card } from 'react-bootstrap';
import styled from "styled-components";
import homeBanner from '../assets/images/home-banner2x.png';
import cardSample from '../assets/images/card-sample2x.png';

const TopRow = styled(Row)`
  background-color: darkblue;
  h1 {
    color: #ffffff;
  }
`


const StyledCard = styled(Card)`
  margin: 10px 10px;
  width: 18rem;
`


const Div85WidthCentered = styled.div`
  width: 85%;
  margin: 0 auto;
  align-items: center;
`

function OurTeam(props) {



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
        sanityClient.fetch(`*[_type == "staffDirectory"] {
            teamMemberName,
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
                                    <BreadcrumbItem>
                                      <a href="/">
                                        Home
                                      </a>
                                    </BreadcrumbItem>
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
                                    <h3>
                                        <PortableText blocks={content.subHeadline}/>
                                    </h3>
                                </Div85WidthCentered>



                        </Stack>
                    </span>

                    )
                })}

                <div className="d-flex flex-row flex-wrap justify-content-around">

                    {staffDirectoryData && staffDirectoryData.map((staff, index) => {
                        console.log("STAFF list: ", staff);
                        return (
                            <span key={index}>
                                                 <StyledCard>
                                                    <Card.Img variant="top" src={staff.teamMemberImage.asset.url} />
                                                    <Card.Body className="text-center">
                                                        <Card.Title className="text-center">{staff.teamMemberName}</Card.Title>
                                                        <Button >
                                                            {staff.teamMemberJobTitle}
                                                        </Button>
                                                    </Card.Body>

                                                </StyledCard>
                                            </span>
                        )
                    })}

                </div>


            </Container>
        </>
    );
}

export default OurTeam;
// {/*<img*/}
// {/*    src={post.mainImage.asset.url}*/}
// {/*    alt={post.mainImage.alt}*/}
// {/*    className=""*/}
// {/*/>*/}
