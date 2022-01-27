import React, { useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addVotes } from '../Redux/votes';
import { debounce } from 'lodash';

const Voting = () => {
  const approved = useSelector((state) => state.applications.approved);
  const available = useSelector((state) => state.votes.available);
  const used = useSelector((state) => state.votes.used);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(addVotes(parseInt(e.target.value)));
  };

  const debouncedHandleChange = useMemo(() => debounce(handleChange, 300), []);

  return (
    <div className="tile is-vertical">
      <h2 className="">Cast Your Vote</h2>
      <div className="vote-card tile has-border is-vertical">
        {approved.map((el, i) => {
          return (
            <div className="tile is-parent" key={i}>
              <div className="tile is-child">
                <p>{el['Project Name']}</p>
                <label htmlFor={el['Project Name']}>add vote</label>
                <input
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
