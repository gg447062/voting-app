import React, { useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { debounce } from 'lodash';
import { updateVotes } from '../Redux/votes';
import { vote, newVote } from '../Airtable';
import { getFinalList, getPercentage } from '../utils';

const Vote = () => {
  const approved = useSelector((state) => state.votes.approved);
  const total = useSelector((state) => state.votes.total);
  const account = useSelector((state) => state.account);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const finalList = getFinalList(approved, total, false);
    try {
      const message = 'voting on seed club accelerator applications';
      const messageHash = `0x${Buffer.from(message, 'utf8').toString('hex')}`;

      const ethResult = await ethereum.request({
        method: 'personal_sign',
        params: [messageHash, account.address],
      });

      // will just be await vote - no updating votes
      if (account.id) {
        // ----- here send ethResult, account.address and finalList to back end
        await vote(account.id, finalList);
      } else {
        await newVote(account.address, account.votingPower, finalList);
      }
    } catch (err) {
      console.error(err);
    }

    navigate('/results');
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
