import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { destinations } from '../data'; // Import from data.js
import 'bootstrap/dist/css/bootstrap.min.css';

const DestinationPage = () => {
  const { title } = useParams();
  const destination = destinations.find(dest => dest.title === title);

  // Scroll to top when component loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!destination) {
    return (
        <div className="container text-center py-5">
            <h2>Destination not found</h2>
            <Link to="/" className="btn btn-dark mt-3">Back Home</Link>
        </div>
    );
  }

  return (
    <div className="destination-page">
      <div className="header-image" style={{ backgroundImage: `url(${destination.image})` }}>
        <h1 className="destination-title display-3 font-weight-bold">{destination.title}</h1>
      </div>
      
      <div className="container py-5">
        <Link to="/" className="btn btn-outline-secondary mb-4">&larr; Back to Home</Link>
        
        <p className="lead font-weight-bold mb-5">{destination.description}</p>
        
        <div className="row">
            <div className="col-lg-8">
                <h3 className="mb-4" style={{borderBottom: '2px solid #ddd', paddingBottom: '10px'}}>About</h3>
                {destination.details && destination.details.map((paragraph, index) => (
                    <p key={index} className="text-justify mb-3" style={{fontSize: '1.1rem', lineHeight: '1.8'}}>
                        {paragraph}
                    </p>
                ))}
            </div>
            
            <div className="col-lg-4 mt-4 mt-lg-0">
                <div className="card shadow-sm border-0 bg-light">
                    <div className="card-body">
                        <h4 className="card-title text-dark mb-3">Highlights</h4>
                        <ul className="list-group list-group-flush bg-transparent">
                        {destination.highlights && destination.highlights.map((highlight, index) => (
                            <li key={index} className="list-group-item bg-transparent pl-0">
                                <span style={{color: 'green', marginRight: '10px'}}>&#10004;</span> 
                                {highlight}
                            </li>
                        ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default DestinationPage;