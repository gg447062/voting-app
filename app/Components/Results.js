import React from 'react';
import { useSelector } from 'react-redux';

const Results = () => {
  const all = useSelector((state) => state.applications.all);

  return (
    <div className="results-wrapper is-flex-column has-border has-shadow">
      <div>results:</div>
      <div className="results">
        {all.map((el, i) => {
          return (
            <div
              className="is-flex-row"
              style={{ textAlign: 'center', margin: '10px' }}
              key={i}
            >
              <p>{el['Project Name']}</p>
              <p> Votes: {(100 / all.length).toFixed(2) + '%'}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Results;
