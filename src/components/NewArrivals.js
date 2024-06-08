import React from 'react';
import './NewArrivals.css';
import newArrivals from '../images/new-arrivals.jpg';

const NewArrivals = () => {
  return (
    <div>
      <div className="new-arrivals">
        <img src={newArrivals} alt="New Arrivals" className="new-arrivals-image" />
      </div>
      <div>
        <h1> BEST SELLERS </h1>
      </div>
      <div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo optio tempore officiis nihil nam, 
              expedita ad totam sed aliquam odio dolorem blanditiis nulla labore veritatis accusantium, quod dolores quas eaque!
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo optio tempore officiis nihil nam, 
              expedita ad totam sed aliquam odio dolorem blanditiis nulla labore veritatis accusantium, quod dolores quas eaque!
          </p>
      </div>
    </div>
  );
};

export default NewArrivals;
