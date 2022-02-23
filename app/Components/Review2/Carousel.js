import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setCurrent } from '../../Redux/applications';
import { useNavigate } from 'react-router-dom';
import { approve } from '../../Redux/votes';

const Carousel = () => {
  const all = useSelector((state) => state.applications.all);
  const current = useSelector((state) => state.applications.current);

  // const increment = () => {
  //   // should be all.length - 1
  //   if (current === 9) {
  //     navigate('/vote');
  //   } else {
  //     dispatch(setCurrent(current + 1));
  //   }
  // };

  // const onThumbsUp = () => {
  //   dispatch(
  //     approve({ id: current, name: all[current]['Project Name'], votes: 0 })
  //   );
  //   increment();
  // };

  // const onThumbsDown = () => {
  //   increment();
  // };

  return (
    <div className="carousel--container ">
      {all.length > 0 && (
        <div className="carousel container flex has-border">
          {all.map((el, i) => {
            return (
              <div className="carousel--circle has-border" key={i}>
                {el['Project Name'][0]}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Carousel;
