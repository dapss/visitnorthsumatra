import React from 'react';
import { Link } from 'react-router-dom';
import DestinationCard from './DestinationCard';
import 'bootstrap/dist/css/bootstrap.min.css';

const destinations = [
  {
    image: 'https://travelcontinuously.com/wp-content/uploads/2019/02/DJI_0686-Pano.jpg',
    title: 'Lake Toba',
    description: 'Large Natural Lake.',
    // details: 'Lake Toba is an extraordinary natural wonder of the world. This enormous crater lake consists of an island almost the size of Singapore in its center. At over 1,145 square km, and a depth of 450 meters, Lake Toba is actually more like an ocean. This is the largest lake in Southeast Asia and one of the deepest lakes in the world.'
  },
  {
    image: 'https://nusadinusa.com/wp-content/uploads/2017/08/hengyao-tang-fmtI2yxWCEI-unsplash-scaled.jpg',
    title: 'Samosir Island',
    description: 'Beautiful Volcanic Island.'
  },
  {
    image: 'https://asiansurf.co/new/wp-content/uploads/2022/06/niaspro-day1-scaled.jpg',
    title: 'Lagundri Bay',
    description: 'Tropical Paradise.'
  },
  {
    image: 'https://cdn.photographylife.com/wp-content/uploads/2015/06/DSC_8549.jpg',
    title: 'Mount Sibayak',
    description: 'Majestic Volcano.'
  },
  {
    image: 'https://endangeredwonders.org/wp-content/uploads/2019/07/Gunung-Leuser-National-Park-Properties-Header-1920x1150B.jpg',
    title: 'Gunung Leuser',
    description: 'The Tropical Rainforest.'
  },
  {
    image: 'https://lp-cms-production.imgix.net/2019-06/eee4e954ec8a1eb11905395adc123a98-istana-maimoon.jpg?auto=format&w=1920&h=640&fit=crop&crop=faces,edges&q=75',
    title: 'Maimoon Palace',
    description: 'The Royal Palace.'
  },
];

const FeaturedDestinations = () => {
    return (
      <section id="destinations" className="featured-destinations py-5">
        <div className="container">
          <h2 className="text-center mb-5">Featured Destinations</h2>
          <div className="row">
            {destinations.map((dest, index) => (
              <div className="col-md-4" key={index}>
                <Link to={`/destination/${dest.title}`} style={{ textDecoration: 'none' }}>
                  <DestinationCard {...dest} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default FeaturedDestinations;
