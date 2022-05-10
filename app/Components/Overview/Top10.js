import React, { useState, useEffect } from 'react';
import SelectedButton from './SelectedButton';
// import EmptyButton from './EmptyButton';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Top10 = () => {
  const top10 = useSelector((state) => state.votes.top10);
  const [disabled, setDisabled] = useState(true);
  const [display, setDisplay] = useState(false);
  console.log(display);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/vi');
  };

  const toggleView = () => {
    setDisplay(!display);
  };

  useEffect(() => {
    if (top10.length > 0 && disabled) {
      setDisabled(false);
    } else if (top10 == 0 && !disabled) {
      setDisabled(true);
    }
  });

  return (
    <div className="fixed bottom-align flex column full-width top10--overlay">
      <div className="full-width flex end padding-inline">
        {display ? (
          <img
            className="display-toggle a-down"
            src="assets/images/arrow.png"
            alt="down arrow"
            onClick={toggleView}
          />
        ) : (
          <div />
        )}
      </div>
      {display ? (
        <div className="flex sa top10--container margin-top-bottom-1 padding-inline">
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
      ) : (
        <div />
      )}
      <div className="flex sb padding-inline">
        <div className="fs-500">YOUR FAVORITES</div>
        {display ? (
          <button
            className="next-button ff-sans-c fs-500"
            disabled={disabled}
            onClick={handleClick}
          >
            Next
          </button>
        ) : (
          <div className="flex sb">
            <p className="ff-sans-c fs-500" style={{ paddingRight: '1em' }}>
              CLICK TO EXPAND
            </p>
            <img
              className="display-toggle a-up"
              src="assets/images/arrow.png"
              alt="up arrow"
              onClick={toggleView}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Top10;
