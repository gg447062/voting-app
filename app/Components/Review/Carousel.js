import React from 'react';
import { useSelector } from 'react-redux';

const Carousel = () => {
  const all = useSelector((state) => state.applications.all);
  const current = useSelector((state) => state.applications.current);

  return (
    <div className="carousel--container ">
      {all.length > 0 && (
        <div className="carousel container flex has-border">
          {all.map((el, i) => {
            return (
              <div
                className={`carousel--circle has-border ${
                  current == i ? 'selected' : ''
                }`}
                key={i}
              >
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
