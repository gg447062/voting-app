import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setAccount } from '../Redux/account';
import { getVoter } from '../Firebase';
import { useNavigate } from 'react-router-dom';
import { ethers } from 'ethers';
import { abi, contractAddress } from '../utils/token';

const ConnectButton = () => {
  const [disabled, setDisabled] = useState(false);
  const [voted, setVoted] = useState(false);
  const address = useSelector((state) => state.account.address);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const provider = new ethers.providers.Web3Provider(window.ethereum);

  const getVotingPower = async (_address) => {
    const network = await provider.getNetwork();
    const chainId = network.chainId;
    if (chainId === 1) {
      const contract = new ethers.Contract(contractAddress, abi, provider);
      const balance = await contract.balanceOf(_address);
      return Math.floor(ethers.utils.formatEther(balance));
    } else {
      alert('please switch to mainnet');
    }
  };

  const getAccounts = async () => {
    const accounts = await provider.send('eth_requestAccounts', []);
    const _address = accounts[0];
    // get $CLUB token balance
    const votingPower = await getVotingPower(_address);
    const name = await provider.lookupAddress(_address);
    const voter = await getVoter(_address);
    if (!voter || !votingPower) {
      // production: if voter is not in database they can't vote
      //alert('must be whitelisted to vote)
      // navigate(/)
      dispatch(setAccount(null, name, _address, votingPower));
    } else {
      // dispatch(setAccount(voter.id, _address, votingPower));
      dispatch(setAccount(null, name, _address, votingPower));
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
        await getAccounts();
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
