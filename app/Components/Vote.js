import React from 'react';
import Header from './Header';
import ConnectButton from './ConnectButton';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { sendVotes, verifySignature } from '../Firebase';
import { getFinalList } from '../utils';
import VoteCard from './VoteCard';
import EmptyVote from './EmptyVote';

const Vote = () => {
  const top10 = useSelector((state) => state.votes.top10);
  // const top10 = Array(10).fill({ name: 'Boys Club', votes: 0 });
  const votingPower = useSelector((state) => state.votes.votingPower);
  const total = useSelector((state) => state.votes.total);
  const account = useSelector((state) => state.account);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const finalList = getFinalList(top10, total, account.votingPower);
    try {
      const message = 'voting on seed club accelerator applications';
      const messageHash = `0x${Buffer.from(message, 'utf8').toString('hex')}`;

      // const signature = await ethereum.request({
      //   method: 'personal_sign',
      //   params: [messageHash, account.address],
      // });

      // const cohort = 5;
      // const verified = await verifySignature({
      //   address: account.address,
      //   messageHash,
      //   signature,
      // });
      // if (verified) {
      //   await sendVotes(account.address, cohort, finalList);
      //   navigate('/results');
      // } else {
      //   // display some error here
      navigate('/results');
      // }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="max-height max-width blue-gradient">
      <Header
        align={'sb'}
        title="Available Seed"
        val1={votingPower - total}
        val2={votingPower}
      />
      <form className="grid votes--top10-grid">
        {top10.map((el, i) => {
          return el ? <VoteCard el={el} i={i} key={i} /> : <EmptyVote i={i} />;
        })}
      </form>
      <div className="flex sb fixed bottom-align left-0 full-width light">
        <p>
          Think about it this way: the more tokens you give, the higher score
          you’re giving the project. You can put all your tokens in one project
          if that is what you’re most excited about. You can also leave comments
          or change your allocation anytime before the voting periods ends.
        </p>
        <button className="vote--submit-button ff-serif" onClick={handleSubmit}>
          SAVE
        </button>
      </div>
    </div>
  );
};

export default Vote;
