import React, { useMemo, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateVotes } from '../Redux/votes';
import { debounce } from 'lodash';

const Vote = () => {
  const approved = useSelector((state) => state.votes.approved);
  const total = useSelector((state) => state.votes.total);

  const dispatch = useDispatch();

  const getPercentage = (a, b, stripped = false) => {
    if (a == 0 || b == 0) {
      return '0%';
    }

    const percent = ((100 * a) / b).toFixed(2);
    const digits = percent.toString().split('.');

    if (stripped) {
      return parseInt(digits[0]);
    } else {
      return digits[1] == '00' ? `${digits[0]}%` : `${percent}%`;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const finalList = approved
      .filter((el) => el.votes !== 0)
      .map((el) => {
        const _el = { id: el.id, votes: getPercentage(el.votes, total, true) };
        return _el;
      });
    console.log(finalList);
  };

  const handleChange = (e) => {
    dispatch(updateVotes(parseInt(e.target.id), parseInt(e.target.value)));
  };

  const debouncedHandleChange = useMemo(() => debounce(handleChange, 300), []);

  return (
    <div className="vote-card-wrapper ">
      {/*  ^^^ tile is-parent  */}
      <h2>Cast Your Vote </h2>
      <form
        onSubmit={handleSubmit}
        className="vote-card has-border has-shadow is-flex-column"
      >
        {approved.map((el, i) => {
          return (
            <div className="tile is-parent is-6" key={el.id}>
              <div className="tile is-child">
                <label htmlFor={el.name}>{el.name} </label>
                <input
                  id={el.id}
                  type="number"
                  min="0"
                  name={el.name}
                  onChange={debouncedHandleChange}
                ></input>
                <div className="percentage">
                  {getPercentage(approved[i].votes, total)}
                </div>
              </div>
            </div>
          );
        })}

        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default Vote;
