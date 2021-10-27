import React, { useState, useEffect } from 'react';
import sanityClient from '../client.js';

import { Container, Row, Col, Stack, Image, Button, Card } from 'react-bootstrap';
import styled from "styled-components";
import homeBanner from '../assets/images/home-banner2x.png';

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
            }
        }`)
            .then((data) => setAboutContent(data))
            .catch(console.error);
    }, []);

    return (
        <>
            <Container fluid>
                {aboutContentData && aboutContentData.map((aboutContent,index) => {
                    console.log("ABOUT DATAAA:", aboutContentData[0]);
                    console.log("reach in: ", aboutContentData[0].headliner[0][0])

                    return (
                        <span key={index}>
                        <Stack gap={5}>

                            <div>
                                <Image
                                    src={aboutContent.aboutImage.asset.url}
                                    alt=""
                                    className=""
                                    fluid
                                />
                            </div>
                            <div>
                                <h1 className="text-center">
                                    {aboutContent.headliner}
                                </h1>
                            </div>
                            <Div85WidthCentered>
                                <h5>
                                    {aboutContent.subHeadline}
                                </h5>
                            </Div85WidthCentered>

                            <Button className="align-content-center">DR. HOWARD WIMMER'S 2 YEAR TRIBUTE</Button>

                        </Stack>
                    </span>

                    )}
                )}

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
