import React from 'react';
import { dishes } from '../data';

const LocalDishes = ({ onDishClick }) => {
    return (
      <section id="dishes" style={{backgroundColor: '#F2EFE9', padding: '100px 0'}}>
        <div className="container">
          <span className="section-subtitle">Taste of Sumatra</span>
          <h2 className="section-title">Culinary Delights</h2>
          
          <div className="row mt-5">
            {dishes.map((dish, index) => (
              <div className="col-lg-4 col-md-6 mb-4" key={index}>
                <div onClick={() => onDishClick(dish)} style={{cursor: 'pointer'}}>
                  <div className="dish-card h-100">
                    <div className="dish-img-wrapper">
                        <img src={dish.image} alt={dish.title} />
                    </div>
                    <div className="dish-body">
                        <h4 className="dish-title">{dish.title}</h4>
                        <p className="text-muted small">{dish.description}</p>
                        <span className="text-primary font-weight-bold small">View Details &rarr;</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
};
export default LocalDishes;