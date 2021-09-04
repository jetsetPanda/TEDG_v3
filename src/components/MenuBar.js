import React from 'react';
import { Navbar, Nav, NavDropdown, Container} from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const MenuBar = () => {
    return (
        <Container>
            <header className='d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom'>
                <LinkContainer to='/smile-gallery'>
                    <Nav.Link className='d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none'>
                        Smile Gallery
                    </Nav.Link>
                </LinkContainer>
                <Nav>
                    <ul className='nav col-12 col-md-auto mb-2 justify-content-center mb-md-0'>
                        <li>
                            <LinkContainer to='/about'>
                                <Nav.Link className='nav-link px-2 link-secondary'>About</Nav.Link>
                            </LinkContainer>
                        </li>
                    </ul>

                    <div className='col-md-3 text-end'>
                        <LinkContainer to='/'>
                            <button type='button' className='btn btn-outline-primary me-2'>
                                Home
                            </button>
                        </LinkContainer>
                    </div>
                </Nav>
            </header>
        </Container>
    );
}

export default MenuBar;
//
// <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
//     <Container>
//         <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
//         <Navbar.Toggle aria-controls="responsive-navbar-nav" />
//         <Navbar.Collapse id="responsive-navbar-nav">
//             <Nav className="me-auto">
//                 <LinkContainer to="/about">
//                     <Nav.Link>About</Nav.Link>
//                 </LinkContainer>
//                 <LinkContainer to="/smile-gallery">
//                     <Nav.Link>Features</Nav.Link>
//                 </LinkContainer>
//                 <LinkContainer to="/smile-gallery">
//                     <Nav.Link>Features</Nav.Link>
//                 </LinkContainer>
//                 <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
//                     <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
//                     <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
//                     <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
//                     <NavDropdown.Divider />
//                     <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
//                 </NavDropdown>
//             </Nav>
//             <Nav>
//                 <Nav.Link href="#deets">More deets</Nav.Link>
//                 <Nav.Link eventKey={2} href="#memes">
//                     Dank memes
//                 </Nav.Link>
//             </Nav>
//         </Navbar.Collapse>
//     </Container>
// </Navbar>
