import React from 'react';

const Modal = ({ children }) => {
  return (
    <div className="modal">
      <div className="modal-background"></div>
      {children}
    </div>
  );
};
