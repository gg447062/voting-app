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
    <div style={{ border: '1px solid black' }}>
      {allApplications.length > 0 && (
        <div>
          <div>
            <h1 className="is-size-1">
              {allApplications[currentIndex]['Project Name']}
            </h1>
            <p>{allApplications[currentIndex]['Contact Name']}</p>
          </div>
          <div className="columns">
            <div className="column is-two-thirds">
              <ReactPlayer
                url={allApplications[currentIndex]['Video']}
                controls={true}
              />
              <div>
                <h2 className="is-size-3">Call to Adventure</h2>
                <div>{allApplications[currentIndex]['Call to Adventure']}</div>
              </div>
            </div>
            <div className="column is-one-third">
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
