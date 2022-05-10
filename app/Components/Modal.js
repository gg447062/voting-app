import React, { useState } from 'react';

const Modal = ({ children, display, setDisplay }) => {
  const handleClick = () => {
    setDisplay('hidden');
  };

  return (
    <div className={`flex modal--wrapper ${display}`}>
      <div className="flex">
        {children}
        <div className="modal--button ff-serif fs-600" onClick={handleClick}>
          X
        </div>
      </div>
    </div>
  );
};

export default Modal;
