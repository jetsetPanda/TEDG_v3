import React from 'react';
import {Navbar, Nav, Container, Button, NavDropdown} from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import styled from 'styled-components';

import logo from "../assets/images/logosvg.svg";

const MenuDiv = styled(Nav)`
  a {
    font-size: 16px;
    margin: 2px 5px 2px auto;
  }
`

const StyledNavBrand =styled(Navbar.Brand)`
  @media (max-width: 768px) {
    width: 250px
  }
`

const NavBar = () => {
    return (

        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
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
                <Navbar.Collapse id="responsive-navbar-nav">
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


                        <LinkContainer to="/smile-gallery">
                            <Nav.Link>SMILE GALLERY</Nav.Link>
                        </LinkContainer>

                        <LinkContainer to="/patient-info">
                            <Nav.Link>PATIENT FORMS</Nav.Link>
                        </LinkContainer>

                        <LinkContainer to="/contact-us">
                            <Nav.Link>CONTACT US</Nav.Link>
                        </LinkContainer>



                    </MenuDiv>
                    <MenuDiv>
                        <LinkContainer to="#">
                            <Button>
                                CALL US
                            </Button>
                        </LinkContainer>

                        <LinkContainer to="#" style={{margin:"auto 1rem"}}>
                            <Button>
                                BOOK ONLINE
                            </Button>
                        </LinkContainer>

                        {/*<Nav.Link href="#deets">More deets</Nav.Link>*/}
                        {/*<Nav.Link eventKey={2} href="#memes">*/}
                        {/*    Dank memes*/}
                        {/*</Nav.Link>*/}
                    </MenuDiv>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;


//
// <Container>
//     <header className='d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom'>
//         <LinkContainer to='/smile-gallery'>
//             <Nav.Link className='d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none'>
//                 Smile Gallery
//             </Nav.Link>
//         </LinkContainer>
//         <Nav>
//             <ul className='nav col-12 col-md-auto mb-2 justify-content-center mb-md-0'>
//                 <li>
//                     <LinkContainer to='/about'>
//                         <Nav.Link className='nav-link px-2 link-secondary'>About</Nav.Link>
//                     </LinkContainer>
//                 </li>
//             </ul>
//
//             <div className='col-md-3 text-end'>
//                 <LinkContainer to='/'>
//                     <button type='button' className='btn btn-outline-primary me-2'>
//                         Home
//                     </button>
//                 </LinkContainer>
//             </div>
//         </Nav>
//     </header>
// </Container>
