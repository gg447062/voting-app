import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const ThankYou = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/results');
  };

  return (
    <div className="max-width max-height flex column center blue-gradient">
      <div className="ff-sans-c fs-600">COMPLETE</div>
      <div className="fs-700">THANK YOU FOR VOTING </div>
      <div className="ff-sans-c fs-500">
        We appreciate your input and can’t wait to welcome S05 with you. Want to
        see how the ranking is going?
      </div>
      <button className="fs-600 ff-sans-c" onClick={handleClick}>
        LFTG
      </button>
    </div>
  );
};

export default ThankYou;
