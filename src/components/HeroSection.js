import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const HeroSection = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <div className="hero-image" style={{ backgroundImage: 'url(https://northabroad.com/wp-content/uploads/north-sumatra-DJI_0554.jpg)' }}>
          <div className="carousel-caption">
            <h2>Explore the World</h2>
            <p>Your journey begins here.</p>
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="hero-image" style={{ backgroundImage: 'url(https://v1.indonesia.travel/content/dam/indtravelrevamp/en/destinations/sumatra/north-sumatra/lake-toba/toba-header.jpg)' }}>
          <div className="carousel-caption">
            <h2>Discover New Places</h2>
            <p>Find your next adventure.</p>
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="hero-image" style={{ backgroundImage: 'url(https://endangeredwonders.org/wp-content/uploads/2019/07/Gunung-Leuser-National-Park-Properties-Header-1920x1150B.jpg)' }}>
          <div className="carousel-caption">
            <h2>Unforgettable Experiences</h2>
            <p>Make memories that last a lifetime.</p>
          </div>
        </div>
      </Carousel.Item>
    </Carousel>
  );
};

export default HeroSection;
