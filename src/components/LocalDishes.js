import React from 'react';
import { Link } from 'react-router-dom';
import DishesCard from './DishesCard';
import 'bootstrap/dist/css/bootstrap.min.css';

const dishes = [
  {
    image: 'https://2.bp.blogspot.com/-6p3dWZPXKS0/UmpoWG8WR6I/AAAAAAAAA3w/77JGdtViN8Y/s1600/IMG_8945.JPG',
    title: 'Bika Ambon',
    description: 'Unique Blend of Flavors and Textures.'
  },
  {
    image: 'https://cdn.tasteatlas.com/images/dishes/189be1ee7c77443b821ac9add6261251.jpg',
    title: 'Arsik',
    description: 'Spicy Fish Dish.'
  },
  {
    image: 'https://cdn.tasteatlas.com/images/dishrestaurants/e0a777209e804e99a6878425bd9606d4.jpg?mw=1300',
    title: 'Saksang',
    description: 'Bold and Intense Flavors.'
  },
  {
    image: 'https://img-global.cpcdn.com/recipes/c3d4dfeea0578a69/1200x630cq70/photo.jpg',
    title: 'Anyang Pakis',
    description: 'Flavorful and Nutritious.'
  },
  {
    image: 'https://images.lifestyleasia.com/wp-content/uploads/sites/6/2022/11/27180125/best-lemang-in-KL-kuala-lumpur-selangor-klang-valley-malaysia-coconut-rice-1359x900.jpg',
    title: 'Lemang',
    description: 'The Sticky Rice.'
  },
  {
    image: 'https://www.whiteboardjournal.com/wp-content/uploads/2020/08/PTG-BihunBebek-8.jpg',
    title: 'Bihun Bebek',
    description: 'Rich and Aromatic.'
  },
];

const LocalDishes = () => {
    return (
      <section id="dishes" className="local-dishes py-5">
        <div className="container">
          <h2 className="text-center mb-5">Local Dishes</h2>
          <div className="row">
            {dishes.map((dish, index) => (
              <div className="col-md-4" key={index}>
                <Link to={`/dishes/${dish.title}`} style={{ textDecoration: 'none' }}>
                  <DishesCard {...dish} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default LocalDishes;
