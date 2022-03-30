import React, { useState, useEffect } from 'react';
import SelectedButton from './SelectedButton';
import EmptyButton from './EmptyButton';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Top10 = () => {
  const top10 = useSelector((state) => state.votes.top10);
  const [disabled, setDisabled] = useState(true);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/vote');
  };

  useEffect(() => {
    const _top10 = top10.filter((el) => el.name != 'empty');

    if (_top10.length > 0 && disabled) {
      setDisabled(false);
    } else if (_top10.length == 0 && !disabled) {
      setDisabled(true);
    }
  });

  return (
    <div className="container has-border top10--container green">
      <div className="top10--title fs-500">FAVORITES</div>
      <div className="grid top10--grid">
        {top10.map((el, i) => {
          {
            return el.name !== 'empty' ? (
              <SelectedButton id={i} key={i} src={el.src} />
            ) : (
              <EmptyButton id={i} key={i} />
            );
          }
        })}
      </div>
      <button
        className="has-border next-button ff-serif"
        disabled={disabled}
        onClick={handleClick}
      >
        Ready to Vote
      </button>
    </div>
  );
};

export default Top10;
