import React, { useMemo } from 'react';
import Header from './Header';
import ConnectButton from './ConnectButton';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { debounce } from 'lodash';
import { updateVotes } from '../Redux/votes';
import { sendVotes, verifySignature } from '../Firebase';
import { getFinalList, getPercentage } from '../utils';
import Modal from './Modal';

const Vote = () => {
  // const top10 = new Array(10).fill({
  //   id: 0,
  //   src: 'F',
  //   name: 'Floppy',
  //   votes: 0,
  // });
  const top10 = useSelector((state) => state.votes.top10);
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

      const cohort = 5;
      // const verified = await verifySignature({
      //   address: account.address,
      //   messageHash,
      //   signature,
      // });
      navigate('/results');
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
    <React.Fragment>
      <div
        className="grid voting-grid"
        id="voting"
        style={{ filter: 'blur(5px)' }}
      >
        <Header align="sb">
          <div className="address">{account.address}</div>
          <ConnectButton />
        </Header>
        <form className="grid votes--top10-grid green">
          {top10.map((el, i) => {
            return (
              <div className="flex vote--card" key={el.id}>
                <label className="fs-600" htmlFor={el.name}>
                  {el.name}{' '}
                </label>
                <div className="vote--icon dark">{el.name[0]}</div>
                <div className="flex has-border input--container">
                  <div className="input--left">$CLUB</div>
                  <input
                    className="vote--input fs-500 fc-dark-low-op"
                    id={el.id}
                    type="number"
                    min="0"
                    name={el.name}
                    defaultValue={0}
                    onChange={debouncedHandleChange}
                  ></input>
                  <div className="input--right fs-500 fc-dark-low-op">
                    {getPercentage(top10[i].votes, total)}
                  </div>
                </div>
              </div>
            );
          })}
        </form>
        <div className="vote--footer flex sb green">
          <div className="ff-sans-c fs-500">1 $CLUB = 1 VOTE</div>
          <div className="ff-serif fs-600 voting-power">
            Voting Power: {`${account.votingPower}`} $CLUB
          </div>
          <button className="vote--button ff-serif" onClick={handleSubmit}>
            VOTE
          </button>
        </div>
      </div>
      <Modal el={'voting'}>
        <h1>Vote by Percentage</h1>
        <p>
          As you add votes to each project, they will be calculated as a
          percentage of total votes
        </p>
      </Modal>
    </React.Fragment>
  );
};

export default Vote;
