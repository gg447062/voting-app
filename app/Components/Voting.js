import React from 'react';
import { useSelector } from 'react-redux';

const Voting = () => {
  const approved = useSelector((state) => state.applications.approved);

  return (
    <div>
      {approved.map((el, i) => {
        return <div key={i}>{el['Project Name']}</div>;
      })}
    </div>
  );
};

export default Voting;
