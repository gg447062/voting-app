import React, { useMemo, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setInitialVotes, updateVotes } from '../Redux/votes';
import { debounce } from 'lodash';

const Vote = () => {
  const approved = useSelector((state) => state.applications.approved);
  const available = useSelector((state) => state.votes.available);
  const used = useSelector((state) => state.votes.used);
  const list = useSelector((state) => state.votes.list);

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('voted');
  };

  const handleChange = (e) => {
    const votes = parseInt(e.target.value);
    dispatch(updateVotes(e.target.id, votes));
  };

  const debouncedHandleChange = useMemo(() => debounce(handleChange, 300), []);

  useEffect(() => {
    const list = approved.map((_, index) => {
      return { id: index, votes: 0 };
    });
    dispatch(setInitialVotes(20, list));
  }, []);

  return (
    <div className="vote-card-wrapper ">
      {/*  ^^^ tile is-parent  */}
      <div className="">
        <h2>Cast Your Vote </h2>
        {/* <h2>Remaining Votes: {available}</h2> */}
      </div>
      <form
        onSubmit={handleSubmit}
        className="vote-card has-border has-shadow tile is-vertical is-child"
      >
        {approved.map((el, i) => {
          return (
            <div className="tile is-parent is-6" key={i}>
              <div className="tile is-child">
                <label htmlFor={el['Project Name']}>
                  {el['Project Name']}{' '}
                </label>
                <input
                  id={i}
                  type="number"
                  min="0"
                  // max={available}
                  name={el['Project Name']}
                  onChange={debouncedHandleChange}
                  // disabled={available == 0}
                ></input>
                <div className="percentage">
                  {list.length > 0 && list[i].votes !== 0
                    ? ((100 * list[i].votes) / used).toFixed(2) + '%'
                    : 0 + '%'}
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
