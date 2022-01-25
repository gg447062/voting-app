import React, { useEffect } from 'react';
import ReactPlayer from 'react-player';
import { useSelector, useDispatch } from 'react-redux';
import { fetchRecords } from '../Redux/applications';

const Card2 = () => {
  const allApplications = useSelector((state) => state.applications.all);
  const currentIndex = useSelector((state) => state.applications.current);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRecords());
  }, []);

  return (
    <div className="tile is-vertical is-parent">
      {/* header */}
      <div className="header tile is-child">
        <div className="is-size-3">NAME</div>
        <div className="is-size-5">contact</div>
      </div>
      {/* main body*/}
      <div className="tile is-parent has-border has-shadow">
        {/* left */}
        <div className="tile has-border is-vertical is-7">
          <div className="tile is-child">video</div>
          <div className="tile is-child has-border">
            <h2>Call to Adventure</h2>
            <p>c2a here</p>
          </div>
        </div>
        {/* right */}
        <div className="tile is-child is-1"></div>
        <div className="tile is-child has-border is-4">
          <h3>Reviewer Scores</h3>
          <p>85 - Josh</p>
          <p>
            This is a great project that is awesome and should be a part of the
            accelerator because it’s GMI.
          </p>
          <p>75 - John</p>
          <p>
            This is a great project that is awesome and should be a part of the
            accelerator because it’s GMI.
          </p>
          <h3>Curated Lists</h3>
          <p>Appears on the curated lists of:</p>
          <p>Malcolm</p>
          <p>Jonathan</p>
          <p>Raf</p>
        </div>
      </div>
    </div>
  );
};

export default Card2;
