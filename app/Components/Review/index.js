import React from 'react';
import Card from './Card';
import Carousel from './Carousel';
import Top10 from './Top10';
import Header from '../Header';
import ConnectButton from '../ConnectButton';
import { useSelector } from 'react-redux';
import Modal from '../Modal';

const Review = () => {
  const address = useSelector((state) => state.account.address);
  return (
    <React.Fragment>
      <div
        id="review"
        className="grid container main-grid"
        style={{ filter: 'blur(5px)' }}
      >
        <Header align="sb">
          <div className="address">{address}</div>
          <ConnectButton />
        </Header>
        <Top10 />
        <Card />
        <Carousel />
      </div>
      <Modal el={'review'}>
        <h1 className="ff-serif fs-700">Welcome to the Accelerator Portal</h1>
        <h2 className="fs-600">3 Simple Steps</h2>
        <ol className="ff-sans-c fs-500" style={{ lineHeight: '1.8em' }}>
          <li>
            <span className="ff-sans">Watch at least 30 seconds</span> of each
            video
          </li>
          <li>
            <span className="ff-sans">Pin your top 10</span> favorite projects
          </li>
          <li>
            Move forward to <span className="ff-sans">vote</span>
          </li>
        </ol>
      </Modal>
    </React.Fragment>
  );
};

export default Review;
