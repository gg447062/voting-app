import React, { useEffect, useState } from 'react';
import Card from './Card';
import ProjectGrid from './ProjectGrid';
import Top10 from './Top10';
import Header from '../Header';
import ConnectButton from '../ConnectButton';
import { useSelector, useDispatch } from 'react-redux';
import { fetchRecords, setCurrent } from '../../Redux/applications';
import Modal from '../Modal';

const Review = () => {
  const address = useSelector((state) => state.account.address);
  const name = useSelector((state) => state.account.name);
  const [display, setDisplay] = useState('block');
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRecords());
  });

  return (
    <React.Fragment>
      <div
        id="review"
        className="overview flex center column"
        // style={{ filter: 'blur(5px)' }}
      >
        <Header align="center">
          <div className="address ff-serif">{name ? name : address}</div>
          <ConnectButton />
        </Header>
        <ProjectGrid setDisplay={setDisplay} />
        <Top10></Top10>
        <Modal display={display} setDisplay={setDisplay}>
          <Card></Card>
        </Modal>
      </div>
    </React.Fragment>
  );
};

export default Review;
