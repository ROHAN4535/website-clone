import React from 'react';
import './PersonalisedTrialRoom.css';
import trialRoom from '../images/trial-room.jpg';

const PersonalisedTrialRoom = () => {
  return (
    <div className="trial-room">
      <img src={trialRoom} alt="Trial Room" className="trial-room-image" />
    </div>
  );
};

export default PersonalisedTrialRoom;
