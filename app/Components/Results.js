import React from 'react';
import { useSelector } from 'react-redux';

const Results = () => {
  const all = useSelector((state) => state.applications.all);

  return (
    <div className="container flex center green">
      <p>
        Thank you for participating, please fill out{' '}
        <span>
          <a href="" target={'_blank'}>
            this survey
          </a>
        </span>{' '}
        about the experience.
      </p>
    </div>
  );
};

export default Results;
