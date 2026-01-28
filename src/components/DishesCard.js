import React from 'react';

const DestinationCard = ({ image, title, description, onClick }) => {
  return (
    <div className="card destination-card h-100" onClick={onClick}>
      <div className="overflow-hidden">
        <img src={image} className="card-img-top" alt={title} />
      </div>
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{title}</h5>
        <p className="card-text mb-4">{description}</p>
        
        <div className="mt-auto">
            <span className="text-primary font-weight-bold" style={{fontSize: '0.9rem'}}>
                Explore <span style={{marginLeft:'5px'}}>→</span>
            </span>
        </div>
      </div>
    </div>
  );
};

export default DestinationCard;