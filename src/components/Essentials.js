import React from 'react';
import './Essentials.css';
import explore from '../images/explore.jpg';

const Essentials = () => {
  return (
    <div className="essentials-image">
      <div>
        <h1> ESSENTIALS </h1>
      </div>
      <div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo optio tempore officiis nihil nam, 
        expedita ad totam sed aliquam odio dolorem blanditiis nulla labore veritatis accusantium, quod dolores quas eaque!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo optio tempore officiis nihil nam, 
        expedita ad totam sed aliquam odio dolorem blanditiis nulla labore veritatis accusantium, quod dolores quas eaque!
        </p>
      </div>
      <div className="essentials-item">
        <img src={explore} alt="Essential 1" className="essentials-image" />
      </div>
      <div>
        <button className="ess-button">EXPLORE MORE</button>
      </div>
    </div>
  );
};

export default Essentials;
