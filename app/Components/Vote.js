import React, { useMemo } from 'react';
import Header from './Header';
import ConnectButton from './ConnectButton';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { debounce } from 'lodash';
import { updateVotes } from '../Redux/votes';
import { sendVotes, verifySignature } from '../Firebase';
import { getFinalList, getPercentage } from '../utils';

const Vote = () => {
  const top10 = new Array(10).fill({
    id: 0,
    src: 'F',
    name: 'Floppy',
    votes: 0,
  });
  // const top10 = useSelector((state) => state.votes.top10);
  const total = useSelector((state) => state.votes.total);
  const account = useSelector((state) => state.account);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const finalList = getFinalList(top10, total, account.votingPower, true);
    try {
      const message = 'voting on seed club accelerator applications';
      const messageHash = `0x${Buffer.from(message, 'utf8').toString('hex')}`;

      const signature = await ethereum.request({
        method: 'personal_sign',
        params: [messageHash, account.address],
      });

      const cohort = 0;
      const verified = await verifySignature({
        address: account.address,
        messageHash,
        signature,
      });

      if (verified) {
        await sendVotes(account.address, cohort, finalList);
        navigate('/results');
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (e) => {
    dispatch(updateVotes(parseInt(e.target.id), parseInt(e.target.value)));
  };

  const debouncedHandleChange = useMemo(() => debounce(handleChange, 300), []);

  return (
    <div className="grid container voting-grid">
      <Header align="sb">
        <div>{account.address}</div>
        <div>ACCELERATOR 5</div>
        <ConnectButton />
      </Header>
      <form className="grid votes--top10-grid green">
        {top10.map((el, i) => {
          return (
            <div className="flex has-border" key={el.id}>
              <div className="flex vote--icon">
                <label htmlFor={el.name}>{el.name} </label>
                <input
                  id={el.id}
                  type="number"
                  min="0"
                  name={el.name}
                  onChange={debouncedHandleChange}
                ></input>
                <div className="percentage">
                  {getPercentage(top10[i].votes, total)}
                </div>
              </div>
            </div>
          );
        })}
      </form>
      <div className="vote--footer flex sb green ff-serif">
        <div>1 $CLUB = 1 VOTE</div>
        <div>100/100 $CLUB Remaining</div>
        <button className="connect-button" onClick={handleSubmit}>
          VOTE
        </button>
      </div>
    </div>
  );
};

export default Vote;
