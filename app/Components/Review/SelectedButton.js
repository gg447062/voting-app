import React from 'react';
import { useDispatch } from 'react-redux';
import { remove } from '../../Redux/votes';

const SelectedButton = ({ src, id }) => {
  const dispatch = useDispatch();
  const removeFromTop10 = (e) => {
    dispatch(remove(e.target.id));
  };

  return (
    <React.Fragment>
      <div className="circle has-border in-top10">
        {src}
        <button
          id={id}
          className="remove-button has-border"
          onClick={removeFromTop10}
        >
          X
        </button>
      </div>
    </React.Fragment>
  );
};

export default SelectedButton;
