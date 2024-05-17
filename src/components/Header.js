import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="/">Visit North Sumatra</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="/#destinations">Destinations</Nav.Link>
            <Nav.Link href="/#dishes">Dishes</Nav.Link>
            <Nav.Link href="/#music">Music</Nav.Link>
            <Nav.Link href="/#travel-tips">Travel Tips</Nav.Link>
            <Nav.Link href="/#about">About</Nav.Link>
            <Nav.Link href="/#developers">Developers</Nav.Link>
            {/* <Nav.Link href="#tips">Travel Tips</Nav.Link> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
