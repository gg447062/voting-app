import React from 'react';
import { getPercentage } from '../utils';
import { useSelector } from 'react-redux';

const SelectedVote = ({ el, func, i }) => {
  const top10 = useSelector((state) => state.votes.top10);
  const total = useSelector((state) => state.votes.total);
  return (
    <div className="flex vote--card" key={el.id}>
      <label className="fs-500" htmlFor={el.name}>
        {el.name}{' '}
      </label>
      <div
        className="vote--icon has-border"
        style={{
          backgroundImage: el.src,
        }}
      ></div>
      <div className="flex has-border input--container">
        <div className="input--left">$CLUB</div>
        <input
          className="vote--input fs-500"
          id={el.id}
          type="number"
          min="0"
          name={el.name}
          placeholder={0}
          onChange={func}
        ></input>
        <div className="input--right fs-500">
          {getPercentage(top10[i].votes, total)}
        </div>
      </div>
    </div>
  );
};

export default SelectedVote;
