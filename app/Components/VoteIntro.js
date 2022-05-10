import React from 'react';
import { useNavigate } from 'react-router-dom';
const VoteIntro = () => {
  const navigate = useNavigate();
  const handleNext = () => {
    navigate('/vote');
  };
  const handleBack = () => {
    navigate('/');
    //  navigate('/overview');
  };

  return (
    <div className="flex center max-width max-height blue-gradient">
      <div className="flex sa column">
        <div className="fs-700" style={{ lineHeight: '0.9em' }}>
          YOU'RE READY TO VOTE
        </div>
        <div className="fs-300">
          Now that you’ve selected the ones you’re excited about, you’ll have a
          chance to prioritize them by allocating tokens.
        </div>
        <div className="flex sa">
          <button onClick={handleBack}>Edit Favorites</button>
          <button onClick={handleNext}>Let's Do This!</button>
        </div>
      </div>
    </div>
  );
};

export default VoteIntro;
