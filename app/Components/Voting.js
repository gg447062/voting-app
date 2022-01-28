import React, { useMemo, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setInitialVotes, updateVotes } from '../Redux/votes';
import { debounce } from 'lodash';

const Voting = () => {
  const approved = useSelector((state) => state.applications.approved);
  const available = useSelector((state) => state.votes.available);
  const used = useSelector((state) => state.votes.used);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(updateVotes(e.target.id, parseInt(e.target.value)));
  };

  const debouncedHandleChange = useMemo(() => debounce(handleChange, 300), []);

  useEffect(() => {
    const list = approved.map((_, index) => {
      return { id: index, votes: 0 };
    });
    dispatch(setInitialVotes(20, list));
  }, []);

  return (
    <div className="tile is-vertical is-parent">
      <div className="">
        <h2>Cast Your Vote</h2>
        <h2>Remaining Votes: {available}</h2>
      </div>
      <div className="vote-card tile has-border is-vertical is-child">
        {approved.map((el, i) => {
          return (
            <div className="tile is-parent" key={i}>
              <div className="tile is-child">
                {/* <p>{el['Project Name']}</p> */}
                <label htmlFor={el['Project Name']}>
                  {el['Project Name']}{' '}
                </label>
                <input
                  id={i}
                  type="number"
                  name={el['Project Name']}
                  min="0"
                  max={available - used}
                  onChange={debouncedHandleChange}
                ></input>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Voting;
