import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-scroll';

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="/visitnorthsumatra/">Visit North Sumatra</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link as={Link} to="destinations" smooth={true} duration={500} className="cursor-pointer">Destinations</Nav.Link>
            <Nav.Link as={Link} to="dishes" smooth={true} duration={500} className="cursor-pointer">Dishes</Nav.Link>
            <Nav.Link as={Link} to="music" smooth={true} duration={500} className="cursor-pointer">Music</Nav.Link>
            <Nav.Link as={Link} to="travel-tips" smooth={true} duration={500} className="cursor-pointer">Travel Tips</Nav.Link>
            <Nav.Link as={Link} to="about" smooth={true} duration={500} className="cursor-pointer">About</Nav.Link>
            <Nav.Link as={Link} to="developers" smooth={true} duration={500} className="cursor-pointer">Developers</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;