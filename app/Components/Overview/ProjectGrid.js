import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setCurrent } from '../../Redux/applications';
import { getImageURL } from '../../utils';

const ProjectGrid = ({ setDisplay }) => {
  const all = useSelector((state) => state.applications.all);
  const current = useSelector((state) => state.applications.current);
  const top10 = useSelector((state) => state.votes.top10);

  const dispatch = useDispatch();

  const handleClick = (e) => {
    dispatch(setCurrent(parseInt(e.target.id)));
    setDisplay('block');
  };

  return (
    <React.Fragment>
      {all.length > 0 && (
        <div className="overview--grid flex center wrap overflow-scroll">
          {all.map((el, i) => {
            return (
              <div className="flex column center grid--card" key={i}>
                <div
                  className={`grid--circle has-border`}
                  id={i}
                  onClick={handleClick}
                  style={{
                    backgroundImage: `url(${getImageURL(el['Project Name'])})`,
                  }}
                ></div>
                <p className="grid--name">{el['Project Name']}</p>
              </div>
            );
          })}
        </div>
      )}
    </React.Fragment>
  );
};

export default ProjectGrid;
