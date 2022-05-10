import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToTop10 } from '../../Redux/votes';

import { getImageURL } from '../../utils';

const EmptyButton = ({ id }) => {
  return (
    <div className="circle empty-button" id={id} onClick={handleClick}></div>
  );
};

export default EmptyButton;
