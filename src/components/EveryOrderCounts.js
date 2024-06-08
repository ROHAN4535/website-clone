import React from 'react';
import './EveryOrderCounts.css';
import everyOrder from '../images/every-order-counts.jpg';

const EveryOrderCounts = () => {
  return (
    <div className="order-counts">
      <img src={everyOrder} alt="Every Order Counts" className="order-counts-image" />
    </div>
  );
};

export default EveryOrderCounts;
