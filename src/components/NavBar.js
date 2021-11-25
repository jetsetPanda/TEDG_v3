import React from 'react';
import {Navbar, Nav, Container, Button, NavDropdown} from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import styled from 'styled-components';

import logo from "../assets/images/logosvg.svg";
import {Link} from "react-router-dom";

const MenuDiv = styled(Nav)`
  a {
    font-size: 16px;
    margin: 2px 5px 2px auto;
  }
`

const StyledMobileCollapse = styled(Navbar.Collapse)`
  @media (max-width: 768px) {
    background-color: #dcdedc;
    padding: 15px 0 25px 20px;
  }
`


const StyledNavBrand =styled(Navbar.Brand)`
  @media (max-width: 768px) {
    width: 250px
  }
`

const StyledNavLInk = styled(Nav.Link)`
  @media (max-width: 768px) {
    margin: 2px 0 !important;
  }
`

const NavButtonLink = styled.a`
  margin: 1px 2rem;
  text-align: left;
  
  @media (max-width: 768px) {
    margin: 2px auto 2px 1px !important;
  }

`

const NavBar = () => {
    return (

        <Navbar collapseOnSelect expand="lg" bg="light" variant="light" fixed="top" className="mb-md-5">
            <Container>
                <LinkContainer to="/">
                    <StyledNavBrand href="#home">
                        <img
                            src={logo}
                            width="100%"
                            className="d-inline-block align-top"
                            alt="TEDG logo"
                        />
                    </StyledNavBrand>
                </LinkContainer>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <StyledMobileCollapse id="responsive-navbar-nav">
                    <MenuDiv className="me-auto d-flex justify-content-around">

                        <NavDropdown title="ABOUT US" id="collasible-nav-dropdown">
                            <LinkContainer to="/about-us">
                                <NavDropdown.Item href="#">About TEDG</NavDropdown.Item>
                            </LinkContainer>
                            <NavDropdown.Divider />
                            <LinkContainer to="/about-us/meet-the-team">
                                <NavDropdown.Item href="#">Meet The Team</NavDropdown.Item>
                            </LinkContainer>
                            <LinkContainer to="/about-us/our-technology">
                                <NavDropdown.Item href="#">Our Technology</NavDropdown.Item>
                            </LinkContainer>


                        </NavDropdown>

                        <NavDropdown title="SERVICES" id="collasible-nav-dropdown">
                            <LinkContainer to="/services">
                                <NavDropdown.Item href="#">Our Services</NavDropdown.Item>
                            </LinkContainer>
                            <NavDropdown.Divider />
                            <LinkContainer to="/services/cosmetic-dentistry">
                                <NavDropdown.Item href="#">Cosmetic Dentistry</NavDropdown.Item>
                            </LinkContainer>
                            <LinkContainer to="/services/general-dentistry">
                                <NavDropdown.Item href="#">General Dentistry</NavDropdown.Item>
                            </LinkContainer>
                            <LinkContainer to="/services/pediatric-dentistry">
                                <NavDropdown.Item href="#">Pediatric Dentistry</NavDropdown.Item>
                            </LinkContainer>
                            <LinkContainer to="/services/orthodontics">
                                <NavDropdown.Item href="#">Orthodontics</NavDropdown.Item>
                            </LinkContainer>
                            <LinkContainer to="/services/endodontics">
                                <NavDropdown.Item href="#">Endodontics</NavDropdown.Item>
                            </LinkContainer>
                            <LinkContainer to="/services/periodontics">
                                <NavDropdown.Item href="#">Periodontics</NavDropdown.Item>
                            </LinkContainer>
                            <LinkContainer to="/services/oral-surgery">
                                <NavDropdown.Item href="#">Oral Surgery</NavDropdown.Item>
                            </LinkContainer>
                            <LinkContainer to="/services/restorative-dentistry">
                                <NavDropdown.Item href="#">Restorative Dentistry</NavDropdown.Item>
                            </LinkContainer>
                        </NavDropdown>


                            <StyledNavLInk href="/smile-gallery">SMILE GALLERY</StyledNavLInk>

                        <NavDropdown title="PATIENT INFORMATION" id="collapsible-nav-dropdown">

                            <LinkContainer to="/patient-info">
                                <NavDropdown.Item href="#">Patient Forms and Info</NavDropdown.Item>
                            </LinkContainer>
                            <NavDropdown.Divider />
                            <LinkContainer to="/patient-info/covid-safety">
                                <NavDropdown.Item href="#">Covid-19 Safety</NavDropdown.Item>
                            </LinkContainer>
                            <LinkContainer to="/patient-info/insurance">
                                <NavDropdown.Item href="#">Insurance and Payments</NavDropdown.Item>
                            </LinkContainer>
                        </NavDropdown>



                            <StyledNavLInk href="/contact-us" className="text-left">CONTACT US</StyledNavLInk>



                    </MenuDiv>
                    <MenuDiv>
                        <NavButtonLink href="tel:212-422-9229">
                            <Button>
                                CALL US
                            </Button>
                        </NavButtonLink>

                        <NavButtonLink href="https://nexhealth.com/appt/TheExchangeDentalGroup" target="_blank">
                            <Button>
                                BOOK ONLINE
                            </Button>
                        </NavButtonLink>

                    </MenuDiv>
                </StyledMobileCollapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;
