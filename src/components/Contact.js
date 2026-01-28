import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="contact-section py-5">
      <div className="container">
        <h2 className="text-center mb-5">Contact Us</h2>
        <div className="row">
          <div className="col-md-6 mb-4">
            <h3>Get in Touch</h3>
            <p>If you have any questions or need further information, feel free to contact us. We are here to help you plan your perfect trip.</p>
            <ul className="list-unstyled">
              <li><strong>Email:</strong> info@travelguide.com</li>
              <li><strong>Phone:</strong> +1 234 567 890</li>
              <li><strong>Address:</strong> 123 Travel St, Wanderlust City, Country</li>
            </ul>
          </div>
          <div className="col-md-6">
            <form>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Name</label>
                <input type="text" className="form-control" id="name" required />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input type="email" className="form-control" id="email" required />
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea className="form-control" id="message" rows="4" required></textarea>
              </div>
              <button type="submit" className="btn btn-primary">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
