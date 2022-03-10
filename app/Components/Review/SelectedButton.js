import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromTop10 } from '../../Redux/votes';
import { getImageURL } from '../../utils';

const SelectedButton = ({ src, id }) => {
  const dispatch = useDispatch();

  const handleClick = (e) => {
    dispatch(removeFromTop10(e.target.id));
  };

  return (
    <React.Fragment>
      <div
        className="circle has-border in-top10"
        style={{ backgroundImage: src }}
      >
        <button
          id={id}
          className="remove-button has-border"
          onClick={handleClick}
        >
          X
        </button>
      </div>
    </React.Fragment>
  );
};

export default SelectedButton;
