import React, {Fragment} from 'react';
import {Accordion, Card, Col, Row, Stack} from "react-bootstrap";
import subwaylogos from "../assets/images/subwaylogos.png.png";
import mtabuslogo from "../assets/images/mtabuslogo.jpg";
import maplogo from "../assets/images/maplogo.png";

import styled from "styled-components";

const StyledLink = styled.a`
  text-decoration: none;
  color: #3274e5;
  font-weight: bold;
`

const PreFooter = (props) => {

    return (
    <Stack>
        <div>
            <h1 className="text-center my-4 my-md-4">Visit Us</h1>
        </div>
        <Row>
            {/*<Col className="ml-0 mr-auto" lg="5" md="7">*/}
            <Col>
                <div className="directions">
                    <h5>DIRECTIONS TO 39 BROADWAY</h5>
                </div>
                <Accordion defaultActiveKey="0" flush>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Subway</Accordion.Header>
                        <Accordion.Body>
                            <a href="http://tripplanner.mta.info/MyTrip/ui_web/customplanner/TripPlanner.aspx" target="_blank">
                                <img
                                    alt="logo"
                                    className="img mb-2"
                                    style={{height: "4vh"}}
                                    src={subwaylogos}
                                />
                            </a>
                            <br/>
                            As a major Manhattan transit hub, you can easily visit us by subway on the 6, N, Q, and R subway lines at the Wall Street station, as well as several other train stops.
                            <br/><br/>
                            <StyledLink href="http://tripplanner.mta.info/MyTrip/ui_web/customplanner/TripPlanner.aspx" target="_blank"><span className="directions-link">Click here</span></StyledLink> to access the MTA Trip Planner.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>Bus</Accordion.Header>
                        <Accordion.Body>
                            <a href="http://tripplanner.mta.info/MyTrip/ui_web/customplanner/TripPlanner.aspx" target="_blank">
                                <img
                                    alt="logo"
                                    className="img mb-2"
                                    style={{height: "4vh"}}
                                    src={mtabuslogo}
                                /></a>
                            <br/>
                            Multiple MTA bus lines such as the M15-SBS, M20, M55, and more converge by our convenient Lower Manhattan location.
                            <br/><br/>
                            <StyledLink href="http://tripplanner.mta.info/MyTrip/ui_web/customplanner/TripPlanner.aspx" target="_blank"><span className="directions-link">Click here</span></StyledLink> to access the MTA Trip Planner.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header>Driving Directions</Accordion.Header>
                        <Accordion.Body>
                            <a href="https://goo.gl/maps/NUPLm5NA8En8JRDn9" target="_blank">
                                <img
                                    alt="logo"
                                    className="img mb-2"
                                    style={{height: "4vh"}}
                                    src={maplogo}
                                />
                            </a>

                            <br/>
                            You can find ample parking facilities as well as easy bridge and tunnel access to our central office location.
                            <br/><br/>
                            <StyledLink href="https://goo.gl/maps/NUPLm5NA8En8JRDn9" target="_blank"><span className="directions-link">Click here</span></StyledLink> for Google Maps driving directions.
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>


            </Col>
            <Col lg="6" md="12" sm="12" xs="12" style={{marginTop: "2em"}}>
                <a
                    href='https://goo.gl/maps/NUPLm5NA8En8JRDn9'
                    target='_top'
                    title='Google Maps Directions'
                >

                    <Card className="bg-dark text-white" border="light" >
                        <Card.Img src="https://api.mapbox.com/styles/v1/mapbox/light-v9/static/pin-m-building+285A98(-74.013200,40.7064)/-74.013200,40.7064,15,0/725x503@2x?access_token=pk.eyJ1IjoiZGVudGFsZXhjaGFuZ2UiLCJhIjoiY2s3dXRrbmw1MTVxZTNmbzRzY2xzb2EwciJ9.P-ZvwoAVTNa6B-lwKJBTlg" alt="Card image" />
                        {/*<Card.ImgOverlay>*/}
                        {/*    <Card.Title>Card title</Card.Title>*/}
                        {/*    <Card.Text>*/}
                        {/*        This is a wider card with supporting text below as a natural lead-in to*/}
                        {/*        additional content. This content is a little bit longer.*/}
                        {/*    </Card.Text>*/}
                        {/*    <Card.Text>Last updated 3 mins ago</Card.Text>*/}
                        {/*</Card.ImgOverlay>*/}
                    </Card>

                    {/*<img*/}
                    {/*    src="https://api.mapbox.com/styles/v1/mapbox/light-v9/static/pin-m-building+285A98(-74.013200,40.7064)/-74.013200,40.7064,15,0/725x503@2x?access_token=pk.eyJ1IjoiZGVudGFsZXhjaGFuZ2UiLCJhIjoiY2s3dXRrbmw1MTVxZTNmbzRzY2xzb2EwciJ9.P-ZvwoAVTNa6B-lwKJBTlg"*/}
                    {/*    alt="map of office location"*/}
                    {/*    style={{borderRadius: "10px", boxShadow: '2px 2px 10px #bababa', maxWidth: "300px"}}*/}
                    {/*    className="maplink"*/}
                    {/*/>*/}
                </a>
                <p className="description text-black">Click on the map above for GPS directions via Google Maps.</p>

            </Col>

        </Row>
    </Stack>
    )
};

export default PreFooter;