import React from 'react';
import HeroSection from './HeroSection';
import Weather from './Weather';
import FeaturedDestinations from './FeaturedDestinations';
import TravelTips from './TravelTips';
import About from './About';
import Contact from './Contact';

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <Weather city="Medan" />
      <FeaturedDestinations />
      <TravelTips />
      <About />
      <Contact />
    </div>
  );
};

export default HomePage;
