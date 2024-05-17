import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import './index.css';

const DishesCard = ({ image, title, description, onClick }) => {
  return (
    <div className="card dishes-card" onClick={onClick}>
      <img src={image} className="card-img-top" alt={title} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
      </div>
    </div>
  );
};

export default DishesCard;
