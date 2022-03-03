import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setCurrent } from '../../Redux/applications';

const Carousel = () => {
  const all = useSelector((state) => state.applications.all);
  const current = useSelector((state) => state.applications.current);
  const dispatch = useDispatch();

  const handleClick = (e) => {
    console.log(e.target.id);
    dispatch(setCurrent(parseInt(e.target.id)));
  };

  return (
    <div className="carousel--container">
      {all.length > 0 && (
        <div className="carousel container flex has-border green">
          {all.map((el, i) => {
            return (
              <div
                className={`carousel--circle has-border ${
                  current == i ? 'selected' : ''
                }`}
                id={i}
                key={i}
                onClick={handleClick}
                style={{ backgroundImage: "url('assets/images/chip_1_1.png')" }}
              >
                {/* use project logo here */}
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
