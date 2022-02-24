import React from 'react';

const top10 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const Top10 = () => {
  return (
    <div className="container has-border top10--container">
      {/* <div className="fs-700">TOP 10</div> */}
      <div className="top10--title fs-600">TOP 10</div>
      <div className="grid top10--grid">
        {top10.map((el, i) => {
          return (
            <div className="circle has-border" key={i}>
              +
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Top10;
