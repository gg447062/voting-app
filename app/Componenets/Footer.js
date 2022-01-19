import React from 'react';

const Footer = ({ current, setCurrent }) => {
  return (
    <div>
      <p>{current} of 32 projects reviewed</p>
      <button
        onClick={() => {
          setCurrent(current + 1);
        }}
      >
        Thumbs Up
      </button>
      <button
        onClick={() => {
          setCurrent(current + 1);
        }}
      >
        Thumbs Down
      </button>
      <div>
        <p>Voting power: XXX $CLUB</p>
        <p>You'll be able to allocate votes after your initial review</p>
      </div>
    </div>
  );
};

export default Footer;
