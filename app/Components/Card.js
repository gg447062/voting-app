import React, { useState, useEffect } from 'react';
import ReactPlayer from 'react-player';
import { useSelector, useDispatch } from 'react-redux';
// import { getRecords } from '../Airtable';
import { fetchRecords, setRecords } from '../Redux/applications';

const Card = () => {
  const allApplications = useSelector((state) => state.applications.all);
  const currentIndex = useSelector((state) => state.applications.current);
  const dispatch = useDispatch();
  // const [allApplications, setAllApps] = useState(null);

  useEffect(() => {
    // getRecords(setRecords());
    dispatch(fetchRecords());
  }, []);

  return (
    <div>
      {allApplications.length > 0 && (
        <div>
          <h1>{allApplications[currentIndex]['Project Name']}</h1>
          <p>{allApplications[currentIndex]['Contact Name']}</p>
          <ReactPlayer
            url={allApplications[currentIndex]['Video']}
            controls={true}
          />
          <div>
            <h2>Call to Adventure</h2>
            {allApplications[currentIndex]['Call to Adventure']}
          </div>
          <div>
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
      )}
    </div>
  );
};

export default Card;
