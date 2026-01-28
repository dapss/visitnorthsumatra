import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#213528', color: '#FDFBF7', paddingTop: '80px', paddingBottom: '30px' }}>
      <Container>
        <Row className="mb-5">
          {/* Brand Column */}
          <Col md={4} className="mb-4 mb-md-0">
            <h3 style={{ fontFamily: 'Playfair Display, serif', marginBottom: '20px' }}>Visit North Sumatra</h3>
            <p style={{ opacity: 0.7, lineHeight: '1.8' }}>
              Discover the untamed beauty of Indonesia's crown jewel. From the depths of Lake Toba to the wilds of Leuser, your adventure begins here.
            </p>
          </Col>

          {/* Navigation Column */}
          <Col md={2} xs={6}>
            <h5 className="text-uppercase mb-4" style={{ fontSize: '0.85rem', letterSpacing: '2px', color: '#C26D53' }}>Explore</h5>
            <ul className="list-unstyled">
              <li className="mb-2"><a href="#destinations" className="text-white-50" style={{textDecoration:'none'}}>Destinations</a></li>
              <li className="mb-2"><a href="#dishes" className="text-white-50" style={{textDecoration:'none'}}>Culinary</a></li>
              <li className="mb-2"><a href="#music" className="text-white-50" style={{textDecoration:'none'}}>Music</a></li>
              <li className="mb-2"><a href="#tips" className="text-white-50" style={{textDecoration:'none'}}>Travel Tips</a></li>
            </ul>
          </Col>

          {/* Contact Column */}
          <Col md={3} xs={6}>
            <h5 className="text-uppercase mb-4" style={{ fontSize: '0.85rem', letterSpacing: '2px', color: '#C26D53' }}>Contact</h5>
            <ul className="list-unstyled text-white-50">
              <li className="mb-2">info@visitsumatra.com</li>
              <li className="mb-2">+62 61 1234 5678</li>
              <li className="mb-2">Jalan Merdeka No. 1<br/>Medan, Indonesia</li>
            </ul>
          </Col>

           {/* Newsletter / Social */}
           <Col md={3}>
            <h5 className="text-uppercase mb-4" style={{ fontSize: '0.85rem', letterSpacing: '2px', color: '#C26D53' }}>Stay Updated</h5>
            <p className="text-white-50 small">Subscribe for the latest travel guides.</p>
            <div className="d-flex">
                <input type="email" placeholder="Email" className="form-control border-0 mr-2" style={{background: 'rgba(255,255,255,0.1)', color: 'white'}} />
                <button className="btn btn-primary" style={{backgroundColor: '#C26D53', border: 'none'}}>Go</button>
            </div>
          </Col>
        </Row>

        <hr style={{ borderColor: 'rgba(255,255,255,0.1)' }} />

        <Row className="pt-3">
          <Col className="text-center text-white-50 small">
            &copy; {new Date().getFullYear()} Visit North Sumatra. All rights reserved.
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;