import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setAccount } from '../Redux/account';
import { getVoter } from '../Airtable';
import { Link } from 'react-router-dom';

const Connect = () => {
  const [disabled, setDisabled] = useState(false);
  const [voted, setVoted] = useState(false);
  const account = useSelector((state) => state.account.address);
  const dispatch = useDispatch();
  const { ethereum } = window;

  const getAccounts = async () => {
    const accounts = await ethereum.request({ method: 'eth_accounts' });
    const address = accounts[0];
    // get erc20 token balance - $CLUB
    const votingPower = 20;
    const voter = await getVoter(address);

    if (voter.fields['Voted'] === 'no') {
      dispatch(setAccount(voter.id, address, votingPower));
    } else {
      setVoted(true);
    }
  };

  const connect = async () => {
    if (ethereum) {
      try {
        setDisabled(!disabled);
        await ethereum.request({ method: 'eth_requestAccounts' });
        getAccounts();
      } catch (error) {
        console.log(error);
        alert(error.message);
        setDisabled(!disabled);
      }
    } else {
      alert('please install metamask');
    }
  };

  return (
    <div className="connect-wrapper is-flex-column">
      <div className="connect-container is-flex-column has-border has-shadow">
        <button onClick={connect} disabled={disabled}>
          {!account ? 'connect wallet' : 'connected'}
        </button>
        {account && !voted && (
          <Link to="/review">
            <button>View Applications</button>
          </Link>
        )}
        {voted && <div>You have already voted</div>}
      </div>
    </div>
  );
};

export default Connect;
