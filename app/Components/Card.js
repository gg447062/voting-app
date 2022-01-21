import React, { useState, useEffect } from 'react';
import ReactPlayer from 'react-player';
import { useSelector, useDispatch } from 'react-redux';
// import { getRecords } from '../Airtable';
import { fetchRecords, setRecords } from '../Redux/applications';

const Card = ({ current }) => {
  const allApps = useSelector((state) => state.applications.all);
  const dispatch = useDispatch();
  // const [allApps, setAllApps] = useState(null);

  useEffect(() => {
    // getRecords(setAllApps);
    dispatch(fetchRecords());
  }, []);

  console.log(allApps);
  return (
    <div>
      {allApps.length > 0 && (
        <div>
          <h1>{allApps[0]['Project Name']}</h1>
          <p>{allApps[0]['Contact Name']}</p>
          <ReactPlayer url={allApps[0]['Video']} controls={true} />
          <div>
            <h2>Call to Adventure</h2>
            {allApps[0]['Call to Adventure']}
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
