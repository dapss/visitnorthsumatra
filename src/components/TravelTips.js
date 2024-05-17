import React from 'react';

const tips = [
  {
    title: 'Pack Light',
    description: 'Bring only what you need and leave some space for souvenirs. Carrying a lighter bag makes traveling easier.'
  },
  {
    title: 'Stay Hydrated',
    description: 'Always carry a water bottle with you and drink plenty of fluids, especially when traveling in hot climates.'
  },
  {
    title: 'Learn Basic Phrases',
    description: 'Learning a few basic phrases in the local language can go a long way in making your trip smoother and more enjoyable.'
  },
  {
    title: 'Keep Copies of Important Documents',
    description: 'Make copies of your passport, ID, and other important documents. Keep them in a separate place from the originals.'
  },
];

const TravelTips = () => {
  return (
    <section id="travel-tips" className="travel-tips-section py-5">
      <div className="container">
        <h2 className="text-center mb-5">Travel Tips</h2>
        <div className="row">
          {tips.map((tip, index) => (
            <div className="col-md-6 mb-4" key={index}>
              <div className="tip-card card shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">{tip.title}</h5>
                  <p className="card-text">{tip.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TravelTips;
