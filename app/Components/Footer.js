import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setCurrent } from '../Redux/applications';
import { useNavigate } from 'react-router-dom';
import { approve } from '../Redux/votes';

const Footer = () => {
  const all = useSelector((state) => state.applications.all);
  const current = useSelector((state) => state.applications.current);
  const votingPower = useSelector((state) => state.account.votingPower);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const increment = () => {
    // should be all.length - 1
    if (current === 9) {
      navigate('/vote');
    } else {
      dispatch(setCurrent(current + 1));
    }
  };

  const onThumbsUp = () => {
    dispatch(
      approve({ id: current, name: all[current]['Project Name'], votes: 0 })
    );
    increment();
  };

  const onThumbsDown = () => {
    increment();
  };

  return (
    <div className="is-flex-row ">
      <div className="tile is-child is-3">
        <p>
          {current} of {all.length} projects reviewed
        </p>
        <progress
          className="progress is-small"
          value={current}
          max={all.length}
        ></progress>
      </div>
      <div className="tile is-6 ">
        <div className="tile is-child is-4"></div>
        <div className="buttons">
          <button className="is-family-monospace" onClick={onThumbsUp}>
            Thumbs Up
          </button>
          <button className="is-family-monospace" onClick={onThumbsDown}>
            Thumbs Down
          </button>
        </div>
        <div className="tile is-child is-4"></div>
      </div>
      <div className="tile is-child is-3 footer-message">
        <h4>Voting power: {votingPower} $CLUB</h4>
        <p>You'll be able to allocate votes after your initial review</p>
      </div>
    </div>
  );
};

export default Footer;
