import React, { useState } from 'react';
import SelectedButton from './SelectedButton';
import EmptyButton from './EmptyButton';
import { useSelector } from 'react-redux';

const Top10 = () => {
  const top10 = useSelector((state) => state.votes.top10);
  const [disabled, setDisabled] = useState(true);

  return (
    <div className="container has-border top10--container">
      <div className="top10--title fs-600">TOP 10</div>
      <div className="grid top10--grid">
        {top10.map((el, i) => {
          {
            return el ? (
              <SelectedButton id={i} key={i} src={el.src} />
            ) : (
              <EmptyButton id={i} key={i} />
            );
          }
        })}
      </div>
      <button className="has-border next-button" disabled={disabled}>
        FINISHED
      </button>
    </div>
  );
};

export default Top10;
