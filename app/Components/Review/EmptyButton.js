import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToTop10 } from '../../Redux/votes';

const EmptyButton = ({ id }) => {
  const current = useSelector((state) => state.applications.current);
  const all = useSelector((state) => state.applications.all);
  const top10 = useSelector((state) => state.votes.top10);
  const dispatch = useDispatch();

  const checkInTop10 = () => {
    for (let i = 0; i < top10.length; i++) {
      if (top10[i] && top10[i].id === current) {
        return true;
      }
    }
    return false;
  };

  const handleClick = (e) => {
    const inTop10 = checkInTop10();

    if (!inTop10) {
      dispatch(
        addToTop10(e.target.id, {
          id: current,
          src: all[current]['Project Name'][0],
          name: all[current]['Project Name'],
          votes: 0,
        })
      );
    }
  };
  return (
    <div className="circle green-circular" id={id} onClick={handleClick}>
      +
    </div>
  );
};

export default EmptyButton;
