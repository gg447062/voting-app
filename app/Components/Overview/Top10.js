import React, { useState, useEffect } from 'react';
import SelectedButton from './SelectedButton';
// import EmptyButton from './EmptyButton';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Top10 = () => {
  const top10 = useSelector((state) => state.votes.top10);
  const [disabled, setDisabled] = useState(true);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/vi');
  };

  useEffect(() => {
    if (top10.length > 0 && disabled) {
      setDisabled(false);
    } else if (top10 == 0 && !disabled) {
      setDisabled(true);
    }
  });

  return (
    <div className="fixed bottom-align flex column full-width top10--overlay ">
      <div className="flex sb top10--container margin-top-bottom-1">
        {Array(10)
          .fill(0)
          .map((_, i) => {
            {
              return top10[i] ? (
                <SelectedButton id={i} key={i} src={top10[i].src} />
              ) : (
                <div className="circle empty-button" key={i}></div>
              );
            }
          })}
      </div>
      <div className="flex sb center">
        <div className="top10--title fs-500">FAVORITES</div>
        <button
          className="next-button ff-serif"
          disabled={disabled}
          onClick={handleClick}
        >
          NEXT
        </button>
      </div>
    </div>
  );
};

export default Top10;
