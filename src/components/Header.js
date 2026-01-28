import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { useNavigate, useLocation } from 'react-router-dom';
import { Link as ScrollLink, scroller } from 'react-scroll';

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isHome = location.pathname === '/';

  const handleNav = (target) => {
    if (isHome) {
      scroller.scrollTo(target, { smooth: true, duration: 500, offset: -80 });
    } else {
      navigate('/');
      setTimeout(() => scroller.scrollTo(target, { smooth: true, duration: 500, offset: -80 }), 100);
    }
  };

  return (
    <Navbar expand="lg" fixed="top" className="navbar-custom">
      <Container>
        <Navbar.Brand href="#" onClick={() => navigate('/')}>
            Visit <span style={{color: '#C26D53'}}>North Sumatra</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            {['Destinations', 'Dishes', 'Music', 'Travel Tips', 'About'].map((item) => (
                <Nav.Link 
                    key={item} 
                    onClick={() => handleNav(item.toLowerCase().replace(' ', '-'))}
                    style={{cursor: 'pointer'}}
                >
                    {item}
                </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;