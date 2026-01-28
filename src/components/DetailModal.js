import React from 'react';
import { Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const DetailModal = ({ show, onHide, item }) => {
  if (!item) return null;

  return (
    <Modal 
      show={show} 
      onHide={onHide} 
      size="lg" 
      centered
      contentClassName="border-0 shadow-lg"
      style={{zIndex: 1050}}
    >
      {/* Close Button */}
      <button 
        onClick={onHide}
        style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            zIndex: 10,
            background: 'rgba(255,255,255,0.8)',
            border: 'none',
            borderRadius: '50%',
            width: '40px',
            height: '40px',
            fontSize: '20px',
            cursor: 'pointer',
            boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
        }}
      >
        &times;
      </button>

      <div className="p-0 overflow-hidden" style={{borderRadius: '0.3rem'}}>
        {/* Hero Image */}
        <div style={{
            height: '350px', 
            backgroundImage: `url(${item.image})`, 
            backgroundSize: 'cover', 
            backgroundPosition: 'center',
            position: 'relative'
        }}>
            <div style={{
                position: 'absolute',
                bottom: 0, left: 0, right: 0,
                background: 'linear-gradient(to top, rgba(0,0,0,0.9), transparent)',
                padding: '30px',
            }}>
                <h2 className="mb-0" style={{
                    fontFamily: 'Playfair Display, serif', 
                    fontSize: '2.5rem', 
                    color: '#ffffff',
                    textShadow: '0 2px 4px rgba(0,0,0,0.3)'
                }}>
                    {item.title}
                </h2>
                
                <p className="mb-0 text-white-50" style={{fontSize: '1.1rem'}}>
                    {item.description}
                </p>
            </div>
        </div>

        {/* Content Body */}
        <div className="modal-body p-5">
            <div className="row">
                <div className="col-md-7">
                    <h5 className="mb-3 text-uppercase" style={{color: '#C26D53', letterSpacing: '1px', fontSize: '0.85rem'}}>About</h5>
                    {item.details && item.details.map((paragraph, idx) => (
                        <p key={idx} className="text-muted" style={{lineHeight: '1.8'}}>{paragraph}</p>
                    ))}
                </div>

                <div className="col-md-5 pl-md-5 border-left">
                    <h5 className="mb-3 text-uppercase" style={{color: '#C26D53', letterSpacing: '1px', fontSize: '0.85rem'}}>Highlights</h5>
                    <ul className="list-unstyled">
                        {item.highlights && item.highlights.map((highlight, idx) => (
                            <li key={idx} className="mb-3 d-flex align-items-center">
                                <span style={{color: '#213528', fontSize: '1.2rem', marginRight: '10px'}}>•</span>
                                <span style={{color: '#2D2D2D', fontWeight: '500'}}>{highlight}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
      </div>
    </Modal>
  );
};

export default DetailModal;