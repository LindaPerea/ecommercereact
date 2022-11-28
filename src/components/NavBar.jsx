import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <Navbar bg="primary" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/">Ecommerce</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
                 <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="me-auto">
                    <Nav.Link as={Link} to="/login">login</Nav.Link>
                    <Nav.Link as={Link} to="/purchases">Purchases</Nav.Link>              
                    <Nav.Link> Cart (Sidebar)</Nav.Link> {/*cart*/}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

    );
};

export default NavBar;