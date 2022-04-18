import React, { useState } from 'react';

const Modal = ({ children, display, setDisplay }) => {
  const handleClick = () => {
    setDisplay('hidden');
  };

  return (
    <div className={`flex modal--wrapper ${display}`}>
      <div className="flex">
        {children}
        <button className="modal--button ff-serif fs-600" onClick={handleClick}>
          X
        </button>
      </div>
    </div>
  );
};

export default Modal;
