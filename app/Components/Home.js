import React from 'react';
import ConnectButton from './ConnectButton';
// import Header from './Header';

const Home = () => {
  return (
    <div className="flex center column">
      <div className="fs-900 ff-serif" style={{ lineHeight: '0.9em' }}>
        Seed Club
      </div>
      <div className="fs-900" style={{ lineHeight: '0.9em' }}>
        ACCELERATOR
      </div>
      <div
        className="fs-1000 ff-serif-2"
        style={{ lineHeight: '0.8em', paddingRight: '0.2em' }}
      >
        5
      </div>
      <ConnectButton />
    </div>
  );
};

export default Home;
