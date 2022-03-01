import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToTop10 } from '../../Redux/votes';

const EmptyButton = ({ id }) => {
  const current = useSelector((state) => state.applications.current);
  const all = useSelector((state) => state.applications.all);
  const dispatch = useDispatch();

  const handleClick = (e) => {
    dispatch(
      addToTop10(e.target.id, {
        id: current,
        src: all[current]['Project Name'][0],
        name: all[current]['Project Name'],
        votes: 0,
      })
    );
  };
  return (
    <div className="circle green-circular" id={id} onClick={handleClick}>
      +
    </div>
  );
};

export default EmptyButton;
