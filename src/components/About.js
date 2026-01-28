import React from 'react';

const About = () => {
  return (
    <section id="about" className="about-section py-5">
      <div className="container">
        <h2 className="text-center mb-5">About Us</h2>
        <div className="row">
          <div className="col-md-6 mb-4">
            <h3>Our Mission</h3>
            <p>We aim to provide the best travel experiences to our customers by offering comprehensive guides to the most beautiful destinations around the world.</p>
          </div>
          <div className="col-md-6 mb-4">
            <h3>Why Choose Us?</h3>
            <p>With years of experience in the travel industry, we know how to make your trips unforgettable. We offer exclusive deals, detailed guides, and personalized recommendations.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
