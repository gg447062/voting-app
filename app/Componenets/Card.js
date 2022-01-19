import React, { useState, useEffect } from 'react';
import { getRecords } from '../Airtable';

const Card = ({ current }) => {
  const [allApps, setAllApps] = useState(null);

  useEffect(() => {
    getRecords(setAllApps);
  }, []);

  return (
    <div>
      {allApps && (
        <div>
          <h1>{allApps[current]['Project Name']}</h1>
          <p>{allApps[current]['Contact Name']}</p>
          <iframe
            // src={allApps[current]['Video']}
            src="https://drive.google.com/file/d/1RRxzPtHiUzg8xQoqPgOPNLipvYcZ1gtz/preview"
            controls
            // crossOrigin="use-credentials"
          ></iframe>
          <div>{allApps[current]['Call to Adventure']}</div>
        </div>
      )}
    </div>
  );
};

export default Card;
