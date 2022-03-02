import React, { useState } from 'react';

const Modal = ({ children, el }) => {
  const [display, setDisplay] = useState('');

  const handleClick = () => {
    setDisplay('hidden');
    document.getElementById(`${el}`).style.filter = 'blur(0px)';
  };

  return (
    <div className={`flex modal--wrapper ${display}`}>
      <div className="flex modal">
        {children}
        <button className="modal--button ff-serif fs-600" onClick={handleClick}>
          Continue
        </button>
      </div>
    </div>
  );
};

export default Modal;
