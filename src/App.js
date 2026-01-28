import React, { useState } from 'react';
import { HashRouter as Router } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/Header';
import HeroSection from './components/HeroSection';
import FeaturedDestinations from './components/FeaturedDestinations';
import LocalDishes from './components/LocalDishes';
import LocalMusic from './components/LocalMusic';
import TravelTips from './components/TravelTips';
import About from './components/About';
import Footer from './components/Footer';
import Weather from './components/Weather';
import DetailModal from './components/DetailModal';

import './index.css';

function App() {
  // State for the Modal
  const [showModal, setShowModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  // Handler to open modal with data
  const handleShowDetails = (item) => {
    setSelectedItem(item);
    setShowModal(true);
  };

  // Handler to close modal
  const handleCloseModal = () => {
    setShowModal(false);
    setTimeout(() => setSelectedItem(null), 300); // Clear data after animation
  };

  return (
    <Router>
      <div className="app-container">
        <Header />
        
        <HeroSection />
        <Weather />
        
        <FeaturedDestinations onDestinationClick={handleShowDetails} />
        
        <LocalDishes onDishClick={handleShowDetails} />
        
        <LocalMusic />
        <TravelTips />
        <About />
        <Footer />

        <DetailModal 
            show={showModal} 
            onHide={handleCloseModal} 
            item={selectedItem} 
        />
      </div>
    </Router>
  );
}

export default App;