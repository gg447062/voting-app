import React from 'react';
import Card from './Card';
import Carousel from './Carousel';
import Top10 from './Top10';
import Header from '../Header';
import ConnectButton from '../ConnectButton';
import { useSelector } from 'react-redux';

const Review = () => {
  const address = useSelector((state) => state.account.address);

  return (
    <div className="grid container main-grid">
      <Header align="sb">
        <div>{address}</div>
        <div>ACCELERATOR 5</div>
        <ConnectButton />
      </Header>
      <Top10 />
      <Card />
      <Carousel />
    </div>
  );
};

export default Review;
