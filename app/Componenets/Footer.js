import React from 'react';

const Footer = ({ current, setCurrent }) => {
  return (
    <div>
      <button
        onClick={() => {
          setCurrent(current + 1);
        }}
      >
        NEXT
      </button>
    </div>
  );
};

export default Footer;
