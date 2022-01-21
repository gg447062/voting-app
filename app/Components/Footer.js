import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setCurrent } from '../Redux/applications';

const Footer = () => {
  const current = useSelector((state) => state.applications.current);
  const total = useSelector((state) => state.applications.all.length);
  const dispatch = useDispatch();
  return (
    <div>
      <p>
        {current} of {total} projects reviewed
      </p>
      <button
        onClick={() => {
          dispatch(setCurrent(current + 1));
        }}
      >
        Thumbs Up
      </button>
      <button
        onClick={() => {
          dispatch(setCurrent(current + 1));
        }}
      >
        Thumbs Down
      </button>
      <div>
        <p>Voting power: XXX $CLUB</p>
        <p>You'll be able to allocate votes after your initial review</p>
      </div>
    </div>
  );
};

export default Footer;
