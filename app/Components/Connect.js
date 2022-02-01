import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setAccount } from '../Redux/account';
import { Link } from 'react-router-dom';

const Connect = () => {
  const [disabled, setDisabled] = useState(false);
  const account = useSelector((state) => state.account.address);
  const dispatch = useDispatch();
  const { ethereum } = window;

  const getAccounts = async () => {
    const accounts = await ethereum.request({ method: 'eth_accounts' });
    const address = accounts[0];
    const votingPower = 20;
    dispatch(setAccount({ address, votingPower }));
  };

  const connect = async () => {
    if (ethereum) {
      try {
        setDisabled(true);
        await ethereum.request({ method: 'eth_requestAccounts' });
        getAccounts();
      } catch (error) {
        console.log(error);
        alert(error.message);
        setDisabled(false);
      }
    } else {
      alert('please install metamask');
    }
  };

  return (
    <div className="connect-wrapper is-flex-column">
      <div className="connect-container is-flex-column has-border has-shadow">
        {!account ? (
          <button onClick={connect} disabled={disabled}>
            connect wallet
          </button>
        ) : (
          <Link to="/review">
            <button>View Applications</button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Connect;
