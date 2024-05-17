import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import FeaturedDestinations from './components/FeaturedDestinations';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Weather from './components/Weather';
import TravelTips from './components/TravelTips';
import DevelopersInfo from './components/DevelopersInfo';
import DestinationPage from './components/DestinationPage';
import LocalDishes from './components/LocalDishes';
import LocalMusic from './components/LocalMusic';
import './assets/fonts/Montserrat.css';

const Home = () => (
  <div>
    <HeroSection />
    <Weather city="Medan" />
    <FeaturedDestinations />
    <LocalDishes />
    <LocalMusic />
    <TravelTips />
    <About />
    {/* <Contact /> */}
    <DevelopersInfo />
    <Footer />
  </div>
);

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/destination/:title/" element={<DestinationPage />} />
          <Route path="/dishes/:title" element={<DestinationPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
