import React from 'react';

const DestinationCard = ({ image, title, description, onClick }) => {
  return (
    <div className="dest-card" onClick={onClick}>
      <img src={image} alt={title} className="dest-image" />
      <div className="dest-overlay">
        <h3 className="dest-title">{title}</h3>
        <p className="dest-desc">{description}</p>
        <span className="dest-link">Explore Destination &rarr;</span>
      </div>
    </div>
  );
};

export default DestinationCard;