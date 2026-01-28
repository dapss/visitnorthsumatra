import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { dishes } from '../data';
import 'bootstrap/dist/css/bootstrap.min.css';

const DishPage = () => {
  const { title } = useParams();
  const dish = dishes.find(d => d.title === title);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!dish) {
    return <div className="text-center py-5"><h2>Dish not found</h2></div>;
  }

  return (
    <div className="destination-page">
      {/* Reusing destination page styles for consistency */}
      <div className="header-image" style={{ backgroundImage: `url(${dish.image})` }}>
        <h1 className="destination-title display-3">{dish.title}</h1>
      </div>
      <div className="container py-5">
        <Link to="/" className="btn btn-outline-secondary mb-4">&larr; Back to Menu</Link>
        
        <div className="row">
            <div className="col-md-6">
                 <h2 className="mb-3">{dish.description}</h2>
                 {dish.details && dish.details.map((p, i) => (
                     <p key={i} className="lead" style={{fontSize: '1rem'}}>{p}</p>
                 ))}
            </div>
            <div className="col-md-6">
                <div className="card bg-white shadow p-4">
                    <h4>Taste Profile</h4>
                    <ul>
                        {dish.highlights && dish.highlights.map((h, i) => (
                            <li key={i} className="mb-2">{h}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default DishPage;