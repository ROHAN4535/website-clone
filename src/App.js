import React from 'react';
import './App.css';
import MainHeader from './components/MainHeader';
import Header from './components/Header';
import Essentials from './components/Essentials';
import NewArrivals from './components/NewArrivals';
import Explore from './components/Explore';
import PersonalisedTrialRoom from './components/PersonalisedTrialRoom';
import EveryOrderCounts from './components/EveryOrderCounts';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <MainHeader />
      <Header/>
      <Essentials/>
      <NewArrivals/>
      <Explore/>
      <PersonalisedTrialRoom/>
      <EveryOrderCounts/>
      <Footer/>
    </div>
  );
}

export default App;
