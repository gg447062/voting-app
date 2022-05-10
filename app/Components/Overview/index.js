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
  const all = useSelector((state) => state.applications.all);
  const [display, setDisplay] = useState('hidden');
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRecords());
  }, []);

  return (
    <React.Fragment>
      <div
        id="review"
        className="overview flex center column blue-gradient"
        // style={{ filter: 'blur(5px)' }}
      >
        <Header
          align="sb"
          title="Projects Reviewed"
          val1={0}
          val2={all.length}
        />
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
