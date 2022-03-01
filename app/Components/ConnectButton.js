import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setAccount } from '../Redux/account';
import { getVoter } from '../Firebase';
import { useNavigate } from 'react-router-dom';
import Web3 from 'web3';
import { abi, contractAddress } from '../utils/token';

const ConnectButton = () => {
  const [disabled, setDisabled] = useState(false);
  const [voted, setVoted] = useState(false);
  const address = useSelector((state) => state.account.address);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { ethereum } = window;

  const getBalance = async (_address) => {
    const web3 = new Web3(Web3.givenProvider);
    const chainId = await web3.eth.getChainId();
    if (chainId === 1) {
      const contract = new web3.eth.Contract(abi, contractAddress);
      const balance = await contract.methods.balanceOf(_address).call();
      return web3.utils.fromWei(balance, 'ether');
    } else {
      alert('please switch to mainnet');
    }
  };

  const getAccounts = async () => {
    const accounts = await ethereum.request({ method: 'eth_accounts' });
    const address = accounts[0];
    // get $CLUB token balance
    // const votingPower = await getBalance(address);
    const votingPower = 20;

    const voter = await getVoter(address);
    if (!voter) {
      // production: if voter is not in database they can't vote
      dispatch(setAccount(null, address, votingPower));
    } else {
      // dispatch(setAccount(voter.id, address, votingPower));
      console.log(voter);
      dispatch(setAccount(null, address, votingPower));
    }
    // production: must be true ---> voter.fields['Voted'] === 'no'
    // else {
    //   setVoted(true);
    // }
  };

  const connect = async () => {
    if (ethereum) {
      try {
        setDisabled(!disabled);
        await ethereum.request({ method: 'eth_requestAccounts' });
        getAccounts();
        navigate('/review');
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
    <button
      className="connect-button ff-serif green-font"
      onClick={connect}
      disabled={disabled}
    >
      {!address ? 'Connect to enter the Accelerator Portal' : 'disconnect'}
    </button>
  );
};

export default ConnectButton;
