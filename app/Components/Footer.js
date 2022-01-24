import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setComplete, setCurrent } from '../Redux/applications';
import { approve } from '../Redux/applications';

const Footer = () => {
  const current = useSelector((state) => state.applications.current);
  const total = useSelector((state) => state.applications.all.length);
  const dispatch = useDispatch();

  const increment = () => {
    if (current === total - 1) {
      dispatch(setComplete(true));
    } else {
      dispatch(setCurrent(current + 1));
    }
  };

  const onThumbsUp = () => {
    dispatch(approve(current));
    increment();
  };

  const onThumbsDown = () => {
    increment();
  };

  return (
    <div className="footer flex-row space-b">
      <div className="flex-column">
        <p>
          {current} of {total} projects reviewed
        </p>
        <progress className="progress" value={current} max={total}></progress>
      </div>
      <div>
        <button className="" onClick={onThumbsUp}>
          Thumbs Up
        </button>
        <button className="" onClick={onThumbsDown}>
          Thumbs Down
        </button>
      </div>
      <div className="flex-column center">
        <p>Voting power: XXX $CLUB</p>
        <p>You'll be able to allocate votes after your initial review</p>
      </div>
    </div>
  );
};

export default Footer;
