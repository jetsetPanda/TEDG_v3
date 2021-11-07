import React from 'react';
import {Navbar, Nav, Container, Button, NavDropdown} from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import styled from 'styled-components';

import logo from "../assets/images/logosvg.svg";

const MenuDiv = styled(Nav)`
    a {
      font-size: 14px;
      margin: auto ${props => props.sideMargins || '10px'};
    }
`

const NavBar = () => {
    return (

        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
            <Container>
                <LinkContainer to="/">
                    <Navbar.Brand href="#home">
                        <img
                            src={logo}
                            width="100%"
                            className="d-inline-block align-top"
                            alt="React Bootstrap logo"
                        />
                    </Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <MenuDiv className="me-auto d-flex justify-content-around">
                        <LinkContainer to="/about">
                            <Nav.Link>ABOUT US</Nav.Link>
                        </LinkContainer>

                        <LinkContainer to="/meet-the-team">
                            <Nav.Link>OUR TEAM</Nav.Link>
                        </LinkContainer>

                        <LinkContainer to="/services">
                            <Nav.Link>SERVICES</Nav.Link>
                        </LinkContainer>

                        <LinkContainer to="/smile-gallery">
                            <Nav.Link>SMILE GALLERY</Nav.Link>
                        </LinkContainer>

                        <LinkContainer to="/patient-info">
                            <Nav.Link>PATIENT INFORMATION</Nav.Link>
                        </LinkContainer>

                        <LinkContainer to="/faq">
                            <Nav.Link>FAQ</Nav.Link>
                        </LinkContainer>


                        <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                    </MenuDiv>
                    <MenuDiv sideMargins="10px">
                        <LinkContainer to="#">
                            <Button>
                                CALL US
                            </Button>
                        </LinkContainer>

                        <LinkContainer to="#">
                            <Button style={{marginLeft:"2rem"}}>
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
