import React from 'react';
import DestinationCard from './DestinationCard';
import { destinations } from '../data';

const FeaturedDestinations = ({ onDestinationClick }) => {
    return (
      <section id="destinations" style={{padding: '100px 0'}}>
        <div className="container">
          <span className="section-subtitle">Discover</span>
          <h2 className="section-title">Featured Destinations</h2>
          <p className="text-center text-muted mb-5" style={{maxWidth: '600px', margin: '0 auto'}}>
            From the depths of volcanic lakes to the peaks of misty mountains, explore the wonders of North Sumatra.
          </p>
          
          <div className="row">
            {destinations.map((dest, index) => (
              <div className="col-lg-4 col-md-6 mb-4" key={index}>
                <div onClick={() => onDestinationClick(dest)}>
                    <DestinationCard {...dest} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
};
export default FeaturedDestinations;