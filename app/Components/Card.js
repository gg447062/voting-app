import React, { useEffect } from 'react';
import ReactPlayer from 'react-player';
import { useSelector, useDispatch } from 'react-redux';
import { fetchRecords } from '../Redux/applications';

const Card = () => {
  const allApplications = useSelector((state) => state.applications.all);
  const currentIndex = useSelector((state) => state.applications.current);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRecords());
  }, []);

  return (
    <div className="card-wrapper tile is-parent is-11 has-border flex-row center">
      {allApplications.length > 0 && (
        <div className="card tile is-parent is-vertical is-11">
          <div className="tile flex-column card-header">
            <h1>{allApplications[currentIndex]['Project Name']}</h1>
            <p>{allApplications[currentIndex]['Contact Name']}</p>
          </div>
          <div className="tile card-main">
            <div className="tile is-vertical is-8">
              <ReactPlayer
                url={allApplications[currentIndex]['Video']}
                controls={true}
                height="80%"
                width="80%"
                className="tile is-child"
              />
              <div className="tile is-child has-border c2a">
                <h2>Call to Adventure</h2>
                <div>{allApplications[currentIndex]['Call to Adventure']}</div>
              </div>
            </div>
            <div className="tile is-vertical is-4 has-border card-right">
              <h3>Reviewer Scores</h3>
              <p>85 - Josh</p>
              <p>
                This is a great project that is awesome and should be a part of
                the accelerator because it’s GMI.
              </p>
              <p>75 - John</p>
              <p>
                This is a great project that is awesome and should be a part of
                the accelerator because it’s GMI.
              </p>
              <h3>Curated Lists</h3>
              <p>Appears on the curated lists of:</p>
              <p>Malcolm</p>
              <p>Jonathan</p>
              <p>Raf</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Card;
