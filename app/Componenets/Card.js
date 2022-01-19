import React, { useState, useEffect } from 'react';
import ReactPlayer from 'react-player';
import { getRecords } from '../Airtable';

const Card = ({ current }) => {
  const [allApps, setAllApps] = useState(null);
  const currentProject = allApps ? allApps[current] : null;

  useEffect(() => {
    getRecords(setAllApps);
  }, []);

  return (
    <div>
      {allApps && (
        <div>
          <h1>{currentProject['Project Name']}</h1>
          <p>{currentProject['Contact Name']}</p>
          <ReactPlayer url={currentProject['Video']} controls={true} />
          <div>
            <h2>Call to Adventure</h2>
            {currentProject['Call to Adventure']}
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
