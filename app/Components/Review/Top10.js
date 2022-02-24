import React, { useState } from 'react';
import SelectedButton from './SelectedButton';
import { useSelector, useDispatch } from 'react-redux';
import { add, remove } from '../../Redux/votes';

const Top10 = () => {
  const top10 = useSelector((state) => state.votes.top10);
  const current = useSelector((state) => state.applications.current);
  const all = useSelector((state) => state.applications.all);
  const [disabled, setDisabled] = useState(true);
  const dispatch = useDispatch();

  const add2Top10 = (e) => {
    dispatch(
      add(e.target.id, {
        id: current,
        src: all[current]['Project Name'][0],
        name: all[current]['Project Name'],
        votes: 0,
      })
    );
  };

  return (
    <div className="container has-border top10--container">
      <div className="top10--title fs-600">TOP 10</div>
      <div className="grid top10--grid">
        {top10.map((el, i) => {
          {
            return el ? (
              <SelectedButton id={i} key={i} src={el.src} />
            ) : (
              <div
                className="circle has-border"
                id={i}
                onClick={add2Top10}
                key={i}
              >
                +
              </div>
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
