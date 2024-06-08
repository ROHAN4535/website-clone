import React from 'react';
import './Explore.css';
import explore1 from '../images/explore1.jpg';

const explore = () => {
  return (
    <div>
        <div className="explore1">
            <img src={explore1} alt="explore1" className="explore1-image" />
        </div>
        <div>
            <button className="ex-button">EXPLORE MORE</button>
        </div>
    </div>
  );
};

export default explore;