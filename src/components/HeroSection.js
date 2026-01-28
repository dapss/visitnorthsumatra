import React from 'react';
import { Carousel } from 'react-bootstrap';
import { Link } from 'react-scroll';
import 'bootstrap/dist/css/bootstrap.min.css';

const HeroSection = () => {
  const slides = [
    {
      image: 'https://northabroad.com/wp-content/uploads/north-sumatra-DJI_0554.jpg',
      title: 'North Sumatra Awaits',
      subtitle: 'Experience the untamed beauty of Indonesia\'s crown jewel.'
    },
    {
      image: 'https://images.unsplash.com/photo-1657728401984-6d65350a4944?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'The Soul of Toba',
      subtitle: 'Immerse yourself in the world\'s largest volcanic lake.'
    },
    {
      image: 'https://images.unsplash.com/photo-1615009820619-d69e2f948e8d?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Into the Wild',
      subtitle: 'Trek the rainforests of Gunung Leuser National Park.'
    }
  ];

  return (
    <div className="hero-wrapper">
      <Carousel fade interval={5000} controls={false} indicators={false}>
        {slides.map((slide, index) => (
          <Carousel.Item key={index}>
            <div className="hero-slide" style={{ backgroundImage: `url(${slide.image})` }}>
              <div className="hero-overlay">
                <div className="hero-content text-center">
                  <h1>{slide.title}</h1>
                  <p>{slide.subtitle}</p>
                  <Link 
                    to="destinations" 
                    smooth={true} 
                    duration={800} 
                    className="btn btn-accent"
                    style={{cursor: 'pointer'}}
                  >
                    Start Your Journey
                  </Link>
                </div>
              </div>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default HeroSection;