import React, { useState, useEffect } from 'react';
import sanityClient from '../client.js';

import { Container, Row, Col } from 'react-bootstrap';
import styled from "styled-components";
import aboutImg2x from '../assets/images/aboutImg2x.png';

const TopRow = styled(Row)`
    background-color: darkblue;
    h1 {
      color: #ffffff;
    }
`

function About(props) {

    const [aboutContentData, setAboutContent] = useState(null);

    useEffect(() => {
        // grok custom sanity query lang (similar to graphQL)
        sanityClient.fetch(`*[_type == "aboutContent"] {
            pageName,
            headliner,
            subHeadline,
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
                        <TopRow className="d-flex justify-content-center align-items-center">
                            <h1 className="text-center m-5 p-4">{aboutContent.pageName}</h1>
                        </TopRow>
                        <Row>
                            <Col>
                                <img
                                    src={aboutImg2x}
                                    alt="man smiling"
                                />

                            </Col>
                            <Col className="d-flex justify-content-center align-items-center">
                                <h1 className="text-left m-5 p-4">{aboutContent.headline}</h1>
                            </Col>
                        </Row>

                        <TopRow className="d-flex justify-content-center align-items-center">
                            {/*<p>{aboutContent.subHeadline}</p>*/}
                        </TopRow>

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
