import React from 'react';

const EmptyVote = (i) => {
  return (
    <div className="flex vote--card" key={i}>
      <label className="fs-500" htmlFor={'empty'}>
        {'empty'}{' '}
      </label>
      <div className="vote--icon has-border"></div>
      <div className="flex has-border input--container">
        <div className="input--left">{'     '}</div>
        <input
          className="vote--input fs-500"
          id={i}
          type="number"
          min="0"
          name={'empty'}
          placeholder={0}
        ></input>
        <div className="input--right fs-500">0%</div>
      </div>
    </div>
  );
};

export default EmptyVote;
